import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Header } from "./header";
import { LanguageProvider } from "@/components/providers/language-provider";

const { push, getPathname } = vi.hoisted(() => ({
  push: vi.fn(),
  getPathname: vi.fn(() => "/"),
}));

vi.mock("next/navigation", () => ({
  usePathname: () => getPathname(),
  useRouter: () => ({ push }),
}));

function renderHeader() {
  return render(
    <LanguageProvider>
      <Header />
    </LanguageProvider>
  );
}

describe("Header", () => {
  it("maps the Administration nav item to its own data", async () => {
    const user = userEvent.setup();
    renderHeader();

    const administration = screen.getByRole("button", { name: "Administration" });
    expect(administration).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /Innovation/ })).not.toBeInTheDocument();

    await user.click(administration);
    expect(screen.getByText("Offices")).toBeInTheDocument();
  });

  it("submits the header search to the search page with an encoded query", async () => {
    const user = userEvent.setup();
    renderHeader();

    await user.click(screen.getAllByRole("button", { name: "Open search" })[0]);
    await user.type(screen.getByRole("searchbox", { name: "Search keywords" }), "physics{Enter}");

    expect(push).toHaveBeenCalledWith("/search?q=physics");
  });

  it("shows complaint suggestions while typing", async () => {
    const user = userEvent.setup();
    renderHeader();

    await user.click(screen.getAllByRole("button", { name: "Open search" })[0]);
    await user.type(screen.getByRole("searchbox", { name: "Search keywords" }), "complaint");

    expect(screen.getByRole("option", { name: /Submit a Complaint/ })).toHaveAttribute(
      "href",
      "/complaints"
    );
  });

  it("renders safely without throwing when pathname is null", () => {
    getPathname.mockReturnValueOnce(null as unknown as string);
    expect(() => renderHeader()).not.toThrow();
  });
});
