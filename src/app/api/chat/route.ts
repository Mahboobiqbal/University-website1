import { NextRequest, NextResponse } from "next/server";
import { generateChatResponse, type ChatMessage } from "@/lib/chatbot";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages = (body.messages as ChatMessage[]) || [];

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid request: messages array is required." },
        { status: 400 }
      );
    }

    const response = await generateChatResponse(messages);
    return NextResponse.json(response);
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      {
        reply:
          "I apologize, but I encountered an unexpected error while processing your request. Please try again or visit our [Contact Directory](/contact) for direct assistance.",
        suggestions: [
          "How do I apply for admissions?",
          "What programs are offered?",
          "Where are the campuses located?",
        ],
        source: "knowledge-base",
      },
      { status: 500 }
    );
  }
}
