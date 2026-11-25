"use client";

import * as React from "react";
import { AlertCircle, CheckCircle2, Mail, Send } from "lucide-react";
import { COMPLAINT_CATEGORIES, COMPLAINT_RECIPIENTS } from "@/data/complaints";

interface FormState {
  recipientId: string;
  categoryId: string;
  name: string;
  email: string;
  phone: string;
  studentId: string;
  department: string;
  subject: string;
  message: string;
  consent: boolean;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  recipientId: COMPLAINT_RECIPIENTS[0].id,
  categoryId: COMPLAINT_CATEGORIES[0].id,
  name: "",
  email: "",
  phone: "",
  studentId: "",
  department: "",
  subject: "",
  message: "",
  consent: false,
};

const inputClass =
  "w-full rounded-none border border-[#e7e5df] bg-white px-3.5 py-2.5 text-sm text-charcoal outline-none transition-colors placeholder:text-gray-400 focus:border-brand";
const labelClass = "block text-sm font-medium text-charcoal";

const FieldError = ({ message }: { message?: string }) =>
  message ? (
    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-brand" role="alert">
      <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      {message}
    </p>
  ) : null;

export const ComplaintForm = () => {
  const [form, setForm] = React.useState<FormState>(initialState);
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [draftLink, setDraftLink] = React.useState("");

  const recipient =
    COMPLAINT_RECIPIENTS.find((item) => item.id === form.recipientId) ?? COMPLAINT_RECIPIENTS[0];
  const category =
    COMPLAINT_CATEGORIES.find((item) => item.id === form.categoryId) ?? COMPLAINT_CATEGORIES[0];

  const update = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    setDraftLink("");
  };

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (form.name.trim().length < 2) next.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "Enter a valid email address so the office can reply.";
    if (form.subject.trim().length < 5) next.subject = "Give a short subject (at least 5 characters).";
    if (form.message.trim().length < 20)
      next.message = "Please describe the complaint in at least 20 characters.";
    if (!form.consent) next.consent = "Please confirm before submitting.";
    return next;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setDraftLink("");
      return;
    }

    const subject = `[Complaint] ${category.label} - ${form.subject.trim()}`;
    const body = [
      "Assalam-o-Alaikum,",
      "",
      "I am submitting the following complaint through the University of Swat website.",
      "",
      `Complaint against: ${recipient.label}`,
      `Category: ${category.label}`,
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      form.phone.trim() ? `Phone: ${form.phone.trim()}` : "",
      form.studentId.trim() ? `Student / Roll No: ${form.studentId.trim()}` : "",
      form.department.trim() ? `Department: ${form.department.trim()}` : "",
      `Subject: ${form.subject.trim()}`,
      "",
      "Details:",
      form.message.trim(),
      "",
      "Regards,",
      form.name.trim(),
    ]
      .filter((line) => line !== "")
      .join("\n");

    const href = `mailto:${recipient.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setDraftLink(href);
    window.location.href = href;
  };

  if (draftLink) {
    return (
      <div className="border border-[#e7e5df] border-t-2 border-t-[#74201e] bg-white p-6 sm:p-8">
        <span className="inline-flex h-11 w-11 items-center justify-center border border-brand/20 bg-brand/5 text-brand">
          <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
        </span>
        <h2 className="mt-4 text-2xl font-light text-charcoal">Your complaint draft is ready</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-gray-600">
          We have prepared an email addressed to <strong className="font-medium text-charcoal">{recipient.label}</strong> at{" "}
          <strong className="font-medium text-charcoal">{recipient.email}</strong>. Your email app should open now — please
          send the draft from there. If it did not open, use the button below.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={draftLink}
            className="inline-flex items-center gap-2 bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5e1917]"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Open email draft
          </a>
          <button
            type="button"
            onClick={() => {
              setForm(initialState);
              setErrors({});
              setDraftLink("");
            }}
            className="inline-flex items-center gap-2 border border-[#e7e5df] px-5 py-3 text-sm font-medium text-charcoal transition-colors hover:border-brand hover:text-brand"
          >
            Write another complaint
          </button>
        </div>
        <p className="mt-6 text-xs leading-relaxed text-gray-500">
          Keep a copy of the email for your records. For urgent matters, contact the office directly using the details on
          the Contact page.
        </p>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="border border-[#e7e5df] border-t-2 border-t-[#74201e] bg-white"
    >
      <div className="border-b border-[#e7e5df] px-6 py-5 sm:px-8">
        <h2 className="text-xl font-semibold text-charcoal">Complaint details</h2>
        <p className="mt-1 text-sm text-gray-500">
          Fields marked <span className="text-brand">*</span> are required.
        </p>
      </div>

      <div className="space-y-7 px-6 py-7 sm:px-8">
        <div className="grid gap-3">
          <label htmlFor="recipient" className={labelClass}>
            Complain to <span className="text-brand">*</span>
          </label>
          <select
            id="recipient"
            value={form.recipientId}
            onChange={(event) => update("recipientId", event.target.value)}
            className={inputClass}
          >
            {COMPLAINT_RECIPIENTS.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label} - {item.email}
              </option>
            ))}
          </select>
          <p className="flex items-start gap-2 text-xs leading-relaxed text-gray-500">
            <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
            {recipient.description}
          </p>
        </div>

        <div className="grid gap-3">
          <label htmlFor="category" className={labelClass}>
            Category of complaint <span className="text-brand">*</span>
          </label>
          <select
            id="category"
            value={form.categoryId}
            onChange={(event) => update("categoryId", event.target.value)}
            className={inputClass}
          >
            {COMPLAINT_CATEGORIES.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClass}>
              Full name <span className="text-brand">*</span>
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={(event) => update("name", event.target.value)}
              placeholder="Your full name"
              aria-invalid={Boolean(errors.name)}
              className={`mt-2 ${inputClass}`}
            />
            <FieldError message={errors.name} />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>
              Email address <span className="text-brand">*</span>
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(event) => update("email", event.target.value)}
              placeholder="you@example.com"
              aria-invalid={Boolean(errors.email)}
              className={`mt-2 ${inputClass}`}
            />
            <FieldError message={errors.email} />
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone number <span className="font-normal text-gray-500">(optional)</span>
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={(event) => update("phone", event.target.value)}
              placeholder="03XX-XXXXXXX"
              className={`mt-2 ${inputClass}`}
            />
          </div>
          <div>
            <label htmlFor="studentId" className={labelClass}>
              Student / Roll No. <span className="font-normal text-gray-500">(optional)</span>
            </label>
            <input
              id="studentId"
              type="text"
              value={form.studentId}
              onChange={(event) => update("studentId", event.target.value)}
              placeholder="e.g. 22-CS-145"
              className={`mt-2 ${inputClass}`}
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="department" className={labelClass}>
              Department / Hostel <span className="font-normal text-gray-500">(optional)</span>
            </label>
            <input
              id="department"
              type="text"
              value={form.department}
              onChange={(event) => update("department", event.target.value)}
              placeholder="e.g. Computer & Software Technology / Boys Hostel"
              className={`mt-2 ${inputClass}`}
            />
          </div>
        </div>

        <div className="grid gap-3">
          <label htmlFor="subject" className={labelClass}>
            Subject <span className="text-brand">*</span>
          </label>
          <input
            id="subject"
            type="text"
            value={form.subject}
            onChange={(event) => update("subject", event.target.value)}
            placeholder="Briefly state the issue"
            aria-invalid={Boolean(errors.subject)}
            className={inputClass}
          />
          <FieldError message={errors.subject} />
        </div>

        <div className="grid gap-3">
          <label htmlFor="message" className={labelClass}>
            Your complaint <span className="text-brand">*</span>
          </label>
          <textarea
            id="message"
            rows={7}
            value={form.message}
            onChange={(event) => update("message", event.target.value)}
            placeholder="Explain what happened, when it happened, and any reference number or supporting detail."
            aria-invalid={Boolean(errors.message)}
            className={`${inputClass} resize-y`}
          />
          <div className="flex flex-wrap items-start justify-between gap-2">
            <FieldError message={errors.message} />
            <span className="text-xs text-gray-400">{form.message.trim().length} characters</span>
          </div>
        </div>

        <div>
          <label className="flex items-start gap-3 text-sm leading-relaxed text-gray-600">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(event) => update("consent", event.target.checked)}
              aria-invalid={Boolean(errors.consent)}
              className="mt-1 h-4 w-4 shrink-0 accent-[#74201e]"
            />
            <span>
              I confirm that the details above are accurate and agree that they may be shared with the selected office
              for review. <span className="text-brand">*</span>
            </span>
          </label>
          <FieldError message={errors.consent} />
        </div>

        <p className="border-l-2 border-brand bg-[#fafaf8] px-4 py-3 text-xs leading-relaxed text-gray-500">
          Do not include passwords, CNIC numbers or bank details. This form creates an email in your own mail app; it does
          not upload your complaint to this website.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#e7e5df] bg-[#fafaf8] px-6 py-5 sm:px-8">
        <p className="text-xs text-gray-500">Sending to: {recipient.label}</p>
        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5e1917]"
        >
          <Send className="h-4 w-4" aria-hidden="true" />
          Prepare complaint email
        </button>
      </div>
    </form>
  );
};
