import { act } from "react";
import { hydrateRoot } from "react-dom/client";
import { renderToString } from "react-dom/server";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { LanguageProvider, useLanguage } from "./language-provider";

function Consumer() {
  const { language, setLanguage } = useLanguage();
  return (
    <div>
      <span data-testid="language">{language}</span>
      <button onClick={() => setLanguage("ur")}>Set Urdu</button>
      <button onClick={() => setLanguage("en")}>Set English</button>
    </div>
  );
}

describe("LanguageProvider", () => {
  it("renders English on the server and hydrates without a mismatch", async () => {
    const markup = renderToString(
      <LanguageProvider>
        <Consumer />
      </LanguageProvider>
    );
    expect(markup).toContain(">en<");

    localStorage.setItem("uos-language", "ur");
    const container = document.createElement("div");
    container.innerHTML = markup;
    document.body.appendChild(container);

    const errors: string[] = [];
    const spy = vi.spyOn(console, "error").mockImplementation((...args: unknown[]) => {
      errors.push(args.map(String).join(" "));
    });

    await act(async () => {
      hydrateRoot(container, (
        <LanguageProvider>
          <Consumer />
        </LanguageProvider>
      ));
    });

    expect(errors.filter((message) => /hydrat/i.test(message))).toEqual([]);
    expect(screen.getByTestId("language")).toHaveTextContent("ur");
    expect(document.documentElement.lang).toBe("ur");
    expect(document.documentElement.dir).toBe("rtl");

    spy.mockRestore();
    container.remove();
  });

  it("keeps English when no preference is stored", async () => {
    render(
      <LanguageProvider>
        <Consumer />
      </LanguageProvider>
    );
    expect(screen.getByTestId("language")).toHaveTextContent("en");
    expect(document.documentElement.dir).toBe("ltr");
  });

  it("persists a language change", async () => {
    const user = userEvent.setup();
    render(
      <LanguageProvider>
        <Consumer />
      </LanguageProvider>
    );
    await user.click(screen.getByRole("button", { name: "Set Urdu" }));
    expect(screen.getByTestId("language")).toHaveTextContent("ur");
    expect(localStorage.getItem("uos-language")).toBe("ur");
  });
});
