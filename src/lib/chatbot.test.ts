import { describe, it, expect } from "vitest";
import { generateChatResponse, type ChatMessage } from "./chatbot";

describe("University Chatbot Knowledge Engine", () => {
  it("responds to greetings with welcome options", async () => {
    const messages: ChatMessage[] = [{ role: "user", content: "Hello! How can you help me?" }];
    const res = await generateChatResponse(messages);

    expect(res.reply).toContain("University of Swat Virtual Assistant");
    expect(res.suggestions).toBeDefined();
    expect(res.suggestions?.length).toBeGreaterThan(0);
    expect(res.source).toBe("knowledge-base");
  });

  it("provides detailed information for admissions queries", async () => {
    const messages: ChatMessage[] = [{ role: "user", content: "When do admissions open and how can I apply?" }];
    const res = await generateChatResponse(messages);

    expect(res.reply).toContain("University of Swat Admissions Guide");
    expect(res.reply).toContain("Undergraduate");
    expect(res.reply).toContain("/admissions");
  });

  it("answers queries regarding computer science programs", async () => {
    const messages: ChatMessage[] = [{ role: "user", content: "Tell me about Computer Science and Software Engineering" }];
    const res = await generateChatResponse(messages);

    expect(res.reply).toContain("Department of Computer and Software Technology");
    expect(res.reply).toContain("BS Computer Science");
    expect(res.reply).toContain("BS Software Engineering");
  });

  it("answers queries regarding tuition fees and scholarships", async () => {
    const messages: ChatMessage[] = [{ role: "user", content: "What are the semester fees and available scholarships?" }];
    const res = await generateChatResponse(messages);

    expect(res.reply).toContain("Tuition Fees & Scholarships");
    expect(res.reply).toContain("HEC Need-Based Scholarships");
  });

  it("answers queries regarding campus locations", async () => {
    const messages: ChatMessage[] = [{ role: "user", content: "Where is the main campus located?" }];
    const res = await generateChatResponse(messages);

    expect(res.reply).toContain("Campuses & Facilities");
    expect(res.reply).toContain("Charbagh");
  });

  it("handles fallback politely for general or unrecognized queries", async () => {
    const messages: ChatMessage[] = [{ role: "user", content: "xyz unknown question 12345" }];
    const res = await generateChatResponse(messages);

    expect(res.reply).toContain("University of Swat");
    expect(res.suggestions).toBeDefined();
  });
});
