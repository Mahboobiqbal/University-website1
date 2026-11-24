"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  Send,
  RotateCcw,
  GraduationCap,
  BookOpen,
  MapPin,
  CreditCard,
  PhoneCall,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { type ChatMessage } from "@/lib/chatbot";

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    role: "assistant",
    content: `**Welcome to the University of Swat AI Campus Concierge.**

I can assist you with official university information:
- **[Undergraduate & Graduate Admissions](/admissions)**
- **[49+ Academic Degree Programs](/programs)**
- **[22 Teaching Departments & Faculties](/departments)**
- **[Campuses & Facilities](/campuses)**
- **[Fee Structure & Scholarships](/admissions/guide/fee-undergraduate)**

Select a query topic below or enter your question directly.`,
  },
];

const QUICK_PROMPTS = [
  { label: "Fall Admissions", icon: GraduationCap, query: "How do I apply for admissions?" },
  { label: "Degree Programs", icon: BookOpen, query: "What academic programs and degrees are offered?" },
  { label: "Campus Locations", icon: MapPin, query: "Where are the University campuses located?" },
  { label: "Fees & Scholarships", icon: CreditCard, query: "What is the fee structure and scholarship options?" },
  { label: "Contact University", icon: PhoneCall, query: "How can I contact the Admissions Office?" },
];

/**
 * Animated University Student Character
 * A friendly student guide mascot with rotating 1-2 word speech floating
 * as part of the character animation itself (no boxes, no cards).
 */
const FLOATING_CALLOUTS = ["Ask me!", "Hi there!", "Need help?", "Admissions?", "Questions?"];

function StudentCharacter({
  className = "",
  mini = false,
  calloutText,
}: {
  className?: string;
  mini?: boolean;
  calloutText?: string;
}) {
  return (
    <div className={`relative select-none pointer-events-none ${className}`}>
      <svg
        viewBox="-45 0 145 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
        style={{ filter: mini ? "none" : "drop-shadow(0 10px 20px rgba(23,35,29,0.3))" }}
      >
        {/* Idle bob group: Character and Text move as 1 united element */}
        <g className="animate-student-bob">

          {/* ==================== INTEGRATED FLOATING CALLOUT ==================== */}
          {/* 1-2 words directly part of the character on the left (toward page center), no boxes or cards */}
          {!mini && calloutText && (
            <g className="animate-pulse" style={{ animationDuration: "2.5s" }}>
              {/* Little speech bubbles leading from mouth toward text on left */}
              <circle cx="28" cy="38" r="1.5" fill="#facc15" opacity="0.8" />
              <circle cx="20" cy="33" r="2.2" fill="#facc15" opacity="0.9" />
              <circle cx="12" cy="27" r="3" fill="#facc15" />

              {/* Clean bright callout text positioned naturally left of the head, moving together */}
              <text
                x="6"
                y="29"
                textAnchor="end"
                fill="#ffffff"
                fontSize="14"
                fontWeight="700"
                fontFamily="var(--font-heading), sans-serif"
                letterSpacing="0.02em"
                style={{
                  filter: "drop-shadow(0 2px 5px rgba(0,0,0,0.95)) drop-shadow(0 0 10px rgba(250,204,21,0.6))",
                }}
              >
                {calloutText}
              </text>
            </g>
          )}

          {/* ==================== MORTARBOARD ==================== */}
          {/* Board (diamond from above) */}
          <polygon points="50,6 78,15 50,24 22,15" fill="#74201e" stroke="#5e1917" strokeWidth="1.2" />
          {/* Skullcap underside */}
          <path d="M32,18 Q50,24 68,18 L69,26 Q50,32 31,26 Z" fill="#5e1917" />
          {/* Centre button */}
          <circle cx="50" cy="15" r="2.2" fill="#eab308" />
          {/* Tassel */}
          <g className="animate-tassel-sway origin-[50px_15px]">
            <path d="M50,15 C58,18 66,23 69,32" stroke="#eab308" strokeWidth="1.4" fill="none" strokeLinecap="round" />
            <polygon points="67,32 72,32 70,38 68,38" fill="#eab308" />
          </g>

          {/* ==================== HAIR ==================== */}
          <ellipse cx="50" cy="31" rx="17" ry="6" fill="#2c1810" />
          {/* Side hair tufts */}
          <path d="M33,31 C31,27 33,23 37,24" fill="#2c1810" />
          <path d="M67,31 C69,27 67,23 63,24" fill="#2c1810" />

          {/* ==================== HEAD / FACE ==================== */}
          <ellipse cx="50" cy="38" rx="15" ry="14" fill="#d4a574" />
          {/* Slight jaw / chin */}
          <ellipse cx="50" cy="45" rx="12" ry="9" fill="#d4a574" />

          {/* Ears */}
          <ellipse cx="35" cy="38" rx="3" ry="4" fill="#c99660" />
          <ellipse cx="65" cy="38" rx="3" ry="4" fill="#c99660" />

          {/* Eyes – blinking */}
          <g className="animate-student-blink origin-[50px_37px]">
            {/* Left eye white */}
            <ellipse cx="43" cy="36" rx="4" ry="3.5" fill="#ffffff" />
            {/* Left iris */}
            <circle cx="43.5" cy="36.5" r="2.2" fill="#2c1810" />
            {/* Left pupil */}
            <circle cx="44" cy="36" r="1" fill="#000000" />
            {/* Left eye shine */}
            <circle cx="44.5" cy="35" r="0.7" fill="#ffffff" />

            {/* Right eye white */}
            <ellipse cx="57" cy="36" rx="4" ry="3.5" fill="#ffffff" />
            {/* Right iris */}
            <circle cx="57.5" cy="36.5" r="2.2" fill="#2c1810" />
            {/* Right pupil */}
            <circle cx="58" cy="36" r="1" fill="#000000" />
            {/* Right eye shine */}
            <circle cx="58.5" cy="35" r="0.7" fill="#ffffff" />
          </g>

          {/* Eyebrows */}
          <path d="M39,32 Q43,30 47,32" stroke="#2c1810" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <path d="M53,32 Q57,30 61,32" stroke="#2c1810" strokeWidth="1.2" fill="none" strokeLinecap="round" />

          {/* Nose */}
          <path d="M49,40 Q50,42 51,40" stroke="#b8885a" strokeWidth="1" fill="none" strokeLinecap="round" />

          {/* Warm smile */}
          <path d="M44,45 Q50,49 56,45" stroke="#a0522d" strokeWidth="1.4" fill="none" strokeLinecap="round" />
          {/* Cheek blush */}
          <circle cx="40" cy="43" r="2.5" fill="#e8a090" opacity="0.4" />
          <circle cx="60" cy="43" r="2.5" fill="#e8a090" opacity="0.4" />

          {/* ==================== NECK ==================== */}
          <rect x="45" y="50" width="10" height="6" rx="2" fill="#d4a574" />

          {/* ==================== BODY / GOWN ==================== */}
          {/* Main robe */}
          <path d="M30,56 L70,56 L74,96 L26,96 Z" fill="#17231d" stroke="#2d4233" strokeWidth="1.5" />
          {/* Maroon V-lapel */}
          <polygon points="38,56 62,56 50,74" fill="#74201e" />
          {/* White collar / shirt */}
          <polygon points="42,56 58,56 50,64" fill="#f7f7f5" />
          {/* University crest */}
          <circle cx="50" cy="72" r="2.5" fill="#eab308" />
          <circle cx="50" cy="72" r="1.2" fill="#74201e" />

          {/* Robe hem bottom stripe */}
          <rect x="26" y="92" width="48" height="4" fill="#74201e" />

          {/* ==================== LEFT ARM: HOLDING BOOK ==================== */}
          {/* Upper arm */}
          <path d="M30,58 L22,72 L26,74 L33,61 Z" fill="#17231d" />
          {/* Hand */}
          <ellipse cx="23" cy="74" rx="4" ry="3.5" fill="#d4a574" />
          {/* Open book */}
          <g transform="translate(14, 68) rotate(-10)">
            {/* Left page */}
            <path d="M0,0 Q5,-3 10,0 L10,12 Q5,10 0,12 Z" fill="#ffffff" stroke="#e7e5df" strokeWidth="0.8" />
            {/* Right page */}
            <path d="M10,0 Q15,-3 20,0 L20,12 Q15,10 10,12 Z" fill="#fafaf8" stroke="#e7e5df" strokeWidth="0.8" />
            {/* Spine */}
            <line x1="10" y1="0" x2="10" y2="12" stroke="#74201e" strokeWidth="1.5" />
            {/* Text lines on pages */}
            <line x1="2" y1="3" x2="8" y2="3" stroke="#d1d1d1" strokeWidth="0.5" />
            <line x1="2" y1="5" x2="7" y2="5" stroke="#d1d1d1" strokeWidth="0.5" />
            <line x1="2" y1="7" x2="8" y2="7" stroke="#d1d1d1" strokeWidth="0.5" />
            <line x1="12" y1="3" x2="18" y2="3" stroke="#d1d1d1" strokeWidth="0.5" />
            <line x1="12" y1="5" x2="17" y2="5" stroke="#d1d1d1" strokeWidth="0.5" />
            <line x1="12" y1="7" x2="18" y2="7" stroke="#d1d1d1" strokeWidth="0.5" />
          </g>

          {/* ==================== RIGHT ARM: WAVING ==================== */}
          {/* Upper arm */}
          <path d="M70,58 L76,66 L80,64 L73,56 Z" fill="#17231d" />
          {/* Forearm + waving hand */}
          <g className="animate-student-wave origin-[78px_65px]">
            <path d="M76,66 L82,54 L86,56 L80,67 Z" fill="#17231d" />
            {/* Hand (open palm) */}
            <ellipse cx="84" cy="52" rx="4.5" ry="4" fill="#d4a574" />
            {/* Fingers spread */}
            <line x1="82" y1="49" x2="80" y2="44" stroke="#d4a574" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="84" y1="48" x2="83" y2="43" stroke="#d4a574" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="86" y1="49" x2="86" y2="43" stroke="#d4a574" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="88" y1="50" x2="89" y2="45" stroke="#d4a574" strokeWidth="2" strokeLinecap="round" />
            {/* Thumb */}
            <line x1="80" y1="52" x2="77" y2="49" stroke="#d4a574" strokeWidth="2" strokeLinecap="round" />
          </g>
        </g>

        {/* Ground shadow */}
        <ellipse
          cx="50"
          cy="110"
          rx="22"
          ry="3"
          fill="#17231d"
          opacity="0.2"
          className="animate-student-shadow origin-center"
        />
      </svg>
    </div>
  );
}

/**
 * Lightweight, safe parser for assistant messages that handles:
 * - ### Headings
 * - **Bold**
 * - Bullet lists (- item)
 * - Numbered lists (1. item)
 * - Markdown links [text](url) -> Clickable internal or external links
 */
function FormattedMessage({ content }: { content: string }) {
  const lines = content.split("\n");

  const renderInline = (text: string) => {
    const linkRegex = /(\*\*\[(.*?)\]\((.*?)\)\*\*)|(\[(.*?)\]\((.*?)\))|(\*\*(.*?)\*\*)|(`(.*?)`)/g;
    const elements: React.ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        elements.push(text.slice(lastIndex, match.index));
      }

      if (match[1]) {
        // Bold link: **[label](url)**
        const label = match[2];
        const href = match[3];
        const isExternal = href.startsWith("http");
        elements.push(
          <strong key={match.index} className="font-semibold text-[#74201e]">
            {isExternal ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-0.5 underline decoration-[#74201e]/60 underline-offset-2 hover:decoration-[#74201e]"
              >
                {label}
                <ExternalLink className="inline h-3 w-3 ml-0.5 opacity-70" />
              </a>
            ) : (
              <Link
                href={href}
                className="underline decoration-[#74201e]/60 underline-offset-2 hover:decoration-[#74201e]"
              >
                {label}
              </Link>
            )}
          </strong>
        );
      } else if (match[4]) {
        // Plain link: [label](url)
        const label = match[5];
        const href = match[6];
        const isExternal = href.startsWith("http");
        elements.push(
          isExternal ? (
            <a
              key={match.index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 text-[#74201e] underline decoration-[#74201e]/60 underline-offset-2 hover:text-[#5e1917]"
            >
              {label}
              <ExternalLink className="inline h-3 w-3 ml-0.5 opacity-70" />
            </a>
          ) : (
            <Link
              key={match.index}
              href={href}
              className="text-[#74201e] underline decoration-[#74201e]/60 underline-offset-2 hover:text-[#5e1917]"
            >
              {label}
            </Link>
          )
        );
      } else if (match[7]) {
        // Bold: **text**
        elements.push(
          <strong key={match.index} className="font-semibold text-charcoal">
            {match[8]}
          </strong>
        );
      } else if (match[9]) {
        // Inline code: `text`
        elements.push(
          <code
            key={match.index}
            className="rounded-none bg-gray-100 px-1 py-0.5 text-xs font-mono text-[#74201e] border border-gray-200"
          >
            {match[10]}
          </code>
        );
      }

      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      elements.push(text.slice(lastIndex));
    }

    return elements;
  };

  return (
    <div className="space-y-2 text-xs sm:text-sm text-charcoal leading-relaxed font-light">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) {
          return <div key={idx} className="h-1" />;
        }

        // Heading 3 or 4
        if (trimmed.startsWith("### ")) {
          return (
            <h4
              key={idx}
              className="font-semibold text-charcoal text-xs sm:text-sm tracking-tight border-b border-[#e7e5df] pb-1 pt-1"
            >
              {renderInline(trimmed.slice(4))}
            </h4>
          );
        }

        // Bullet point
        if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
          return (
            <div key={idx} className="flex items-start gap-2 pl-1">
              <span className="mt-2 h-1 w-1 shrink-0 bg-[#74201e]" />
              <div className="flex-1">{renderInline(trimmed.slice(2))}</div>
            </div>
          );
        }

        // Numbered list (e.g., "1. ")
        const numMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);
        if (numMatch) {
          return (
            <div key={idx} className="flex items-start gap-2 pl-1">
              <span className="shrink-0 font-medium text-xs text-[#74201e] bg-[#74201e]/10 px-1.5 py-0.5 border border-[#74201e]/20">
                {numMatch[1]}
              </span>
              <div className="flex-1">{renderInline(numMatch[2])}</div>
            </div>
          );
        }

        // Standard paragraph line
        return <p key={idx}>{renderInline(trimmed)}</p>;
      })}
    </div>
  );
}

export function Chatbot() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [input, setInput] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [suggestions, setSuggestions] = React.useState<string[]>([
    "How do I apply for BS Admissions?",
    "Where are the campuses located?",
    "What scholarships are available?",
  ]);

  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [calloutIndex, setCalloutIndex] = React.useState(0);

  React.useEffect(() => {
    if (!isOpen) {
      const interval = setInterval(() => {
        setCalloutIndex((prev) => (prev + 1) % FLOATING_CALLOUTS.length);
      }, 3500);
      return () => clearInterval(interval);
    }
  }, [isOpen]);

  React.useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, isLoading]);

  const handleSend = async (queryText?: string) => {
    const textToSend = (queryText ?? input).trim();
    if (!textToSend || isLoading) return;

    const userMessage: ChatMessage = { role: "user", content: textToSend };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    if (!queryText) setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages,
        }),
      });

      if (!res.ok) {
        throw new Error(`Chat API error: ${res.status}`);
      }

      const data = await res.json();
      const assistantMessage: ChatMessage = {
        role: "assistant",
        content: data.reply || "I am unable to answer this question right now. Please check uswat.edu.pk.",
      };

      setMessages((prev) => [...prev, assistantMessage]);

      if (Array.isArray(data.suggestions) && data.suggestions.length > 0) {
        setSuggestions(data.suggestions);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "We are experiencing a temporary connectivity issue. Please visit the **[University of Swat Admissions Portal](/admissions)** directly or verify on [uswat.edu.pk](https://uswat.edu.pk).",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages(INITIAL_MESSAGES);
    setSuggestions([
      "How do I apply for BS Admissions?",
      "Where are the campuses located?",
      "What scholarships are available?",
    ]);
  };

  return (
    <div className="chatbot-root pointer-events-none fixed inset-0 z-50 flex items-end justify-end p-3 sm:p-6">
      {/* Floating Animated Character Launcher (1 integrated element, text bobs with character) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open University AI Assistant"
          className="pointer-events-auto group relative flex items-end transition-transform duration-300 hover:scale-105 active:scale-95 focus:outline-none mb-1 sm:mb-0"
        >
          {/* Animated Student Character with dynamic floating text moving together */}
          <div className="relative w-[120px] h-[85px] sm:w-[170px] sm:h-[120px] cursor-pointer">
            <StudentCharacter
              className="w-full h-full"
              calloutText={FLOATING_CALLOUTS[calloutIndex]}
            />
          </div>
        </button>
      )}

      {/* Chat Window Dialog: Clean, Modern, Elevated Design */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="University of Swat AI Assistant"
          className="pointer-events-auto flex flex-col w-[360px] sm:w-[440px] max-w-[calc(100vw-24px)] sm:max-w-[calc(100vw-32px)] h-[540px] sm:h-[580px] max-h-[calc(100svh-24px)] sm:max-h-[calc(100vh-80px)] rounded-2xl bg-white/95 backdrop-blur-md border border-gray-100 shadow-[0_20px_50px_rgba(23,35,29,0.22)] overflow-hidden animate-in fade-in duration-200"
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-[#17231d] via-[#1f3025] to-[#17231d] px-4 py-3.5 text-white border-b border-white/10 shrink-0">
            <div className="flex items-center gap-3">
              {/* University Logo without box */}
              <div className="relative h-10 w-10 shrink-0 flex items-center justify-center">
                <Image
                  src="/uos_logo_white.png"
                  alt="University of Swat Logo"
                  width={38}
                  height={38}
                  className="object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold tracking-wide text-white flex items-center gap-2 leading-tight">
                  University of Swat
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-medium text-emerald-300 border border-emerald-400/30">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    AI Guide
                  </span>
                </h3>
                <div className="text-[11px] font-normal text-white/70 leading-none mt-0.5">
                  Campus Admissions & Information Desk
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                title="Reset conversation"
                className="rounded-full p-1.5 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Reset conversation"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close chat"
                className="rounded-full p-1.5 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Quick Prompts Bar (Top Horizontal) */}
          <div className="bg-[#fafaf8]/90 border-b border-[#e7e5df] px-3 py-2 overflow-x-auto chatbot-no-scrollbar flex items-center gap-2 shrink-0">
            {QUICK_PROMPTS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleSend(item.query)}
                disabled={isLoading}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-charcoal hover:border-[#74201e] hover:text-[#74201e] hover:bg-white transition-colors disabled:opacity-50 shadow-2xs"
              >
                <item.icon className="h-3 w-3 text-[#74201e]" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Message Stream: Scrollbar removed */}
          <div className="flex-1 overflow-y-auto chatbot-no-scrollbar p-4 space-y-4 bg-gradient-to-b from-white to-[#fafaf8]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {/* Assistant avatar: University logo directly without box */}
                {msg.role === "assistant" && (
                  <div className="h-7 w-7 shrink-0 flex items-center justify-center mt-1">
                    <Image
                      src="/uos_logo.png"
                      alt="UOS Logo"
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                )}

                <div
                  className={`max-w-[85%] px-4 py-3 text-xs sm:text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "rounded-2xl rounded-tr-xs bg-[#17231d] text-white shadow-sm"
                      : "rounded-2xl rounded-tl-xs bg-white text-charcoal border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                  }`}
                >
                  {msg.role === "user" ? (
                    <p className="whitespace-pre-wrap font-light text-white">
                      {msg.content}
                    </p>
                  ) : (
                    <FormattedMessage content={msg.content} />
                  )}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex gap-3 justify-start items-center">
                <div className="h-7 w-7 shrink-0 flex items-center justify-center">
                  <Image
                    src="/uos_logo.png"
                    alt="UOS Logo"
                    width={26}
                    height={26}
                    className="object-contain animate-spin [animation-duration:3s]"
                  />
                </div>
                <div className="rounded-2xl rounded-tl-xs bg-white px-4 py-2.5 border border-gray-100 shadow-sm flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#74201e] animate-pulse" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#74201e] animate-pulse [animation-delay:150ms]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#74201e] animate-pulse [animation-delay:300ms]" />
                  <span className="text-xs text-gray-500 font-light ml-2">Looking up university data...</span>
                </div>
              </div>
            )}

            {/* Suggestions Chips (Follow-up) */}
            {!isLoading && suggestions.length > 0 && messages.length > 1 && (
              <div className="pt-2 pl-10 space-y-1.5">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                  Related Topics:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {suggestions.slice(0, 3).map((sugg, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(sugg)}
                      className="text-left text-xs bg-white hover:bg-gray-50 text-charcoal hover:text-[#74201e] border border-gray-200 hover:border-[#74201e] rounded-full px-3 py-1.5 transition-colors flex items-center gap-1 shadow-2xs"
                    >
                      <ChevronRight className="h-3 w-3 text-[#74201e]" />
                      <span>{sugg}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Bottom Input Form */}
          <div className="border-t border-gray-100 bg-white p-3 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about admissions, programs, fees..."
                disabled={isLoading}
                className="flex-1 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-charcoal outline-none transition-colors focus:border-[#74201e] focus:bg-white placeholder:text-gray-400 disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                aria-label="Send message"
                className="flex h-9.5 px-4 shrink-0 items-center justify-center rounded-full bg-[#74201e] text-white transition-all hover:bg-[#5e1917] disabled:opacity-40 disabled:hover:bg-[#74201e] gap-1.5 text-xs font-medium uppercase tracking-wider shadow-sm"
              >
                <span>Send</span>
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>

            <div className="mt-2 text-center text-[10px] text-gray-400 font-light">
              Official Campus AI Guide • Verified against University of Swat Data
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
