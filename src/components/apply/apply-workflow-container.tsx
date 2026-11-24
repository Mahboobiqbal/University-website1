"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  User,
  GraduationCap,
  BookOpen,
  CreditCard,
  FileCheck2,
  Send,
  Upload,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Printer,
  Copy,
  Info,
} from "lucide-react";
import {
  DEGREE_PROGRAMS,
  INITIAL_APPLICATION_STATE,
  type ApplicationFormData,
  type DegreeProgramOption,
} from "@/data/apply-workflow";

const STEPS = [
  { id: 1, title: "Personal", icon: User },
  { id: 2, title: "Academic", icon: GraduationCap },
  { id: 3, title: "Program", icon: BookOpen },
  { id: 4, title: "Fee & Proof", icon: CreditCard },
  { id: 5, title: "Review", icon: FileCheck2 },
  { id: 6, title: "Submit", icon: Send },
];

export function ApplyWorkflowContainer() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [formData, setFormData] = React.useState<ApplicationFormData>(INITIAL_APPLICATION_STATE);
  const [copiedField, setCopiedField] = React.useState<string | null>(null);
  const [photoPreview, setPhotoPreview] = React.useState<string | null>(null);
  const [receiptPreview, setReceiptPreview] = React.useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formErrors, setFormErrors] = React.useState<Record<string, string>>({});

  // Calculate percentages directly from form values (avoiding setState in effect)
  const computedHsscPercentage = React.useMemo(() => {
    if (typeof formData.hsscObtainedMarks === "number" && typeof formData.hsscTotalMarks === "number" && formData.hsscTotalMarks > 0) {
      return parseFloat(((formData.hsscObtainedMarks / formData.hsscTotalMarks) * 100).toFixed(2));
    }
    return 0;
  }, [formData.hsscObtainedMarks, formData.hsscTotalMarks]);

  const computedSscPercentage = React.useMemo(() => {
    if (typeof formData.sscObtainedMarks === "number" && typeof formData.sscTotalMarks === "number" && formData.sscTotalMarks > 0) {
      return parseFloat(((formData.sscObtainedMarks / formData.sscTotalMarks) * 100).toFixed(2));
    }
    return 0;
  }, [formData.sscObtainedMarks, formData.sscTotalMarks]);

  const updateField = <K extends keyof ApplicationFormData>(key: K, value: ApplicationFormData[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (formErrors[key]) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  };

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("Applicant photo file size must be less than 2MB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPhotoPreview(result);
        updateField("applicantPhotoBase64", result);
        updateField("applicantPhotoName", file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReceiptUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("Fee receipt screenshot file size must be under 5MB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setReceiptPreview(result);
        updateField("feeReceiptFileBase64", result);
        updateField("feeReceiptFileName", file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateStep = (step: number): boolean => {
    const errors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.applicantName.trim()) errors.applicantName = "Applicant full name is required";
      if (!formData.fatherName.trim()) errors.fatherName = "Father / Guardian name is required";
      if (!formData.applicantCnic.trim()) errors.applicantCnic = "Applicant CNIC / B-Form is required";
      if (!formData.fatherCnic.trim()) errors.fatherCnic = "Father/Guardian CNIC is required";
      if (!formData.applicantDob) errors.applicantDob = "Date of birth is required";
      if (!formData.gender) errors.gender = "Gender is required";
      if (!formData.applicantPhone.trim()) errors.applicantPhone = "Applicant contact mobile is required";
      if (!formData.permanentAddress.trim()) errors.permanentAddress = "Permanent home address is required";
    }

    if (step === 2) {
      if (!formData.hsscRollNo.trim()) errors.hsscRollNo = "HSSC / FSc Board Roll Number is required";
      if (!formData.hsscObtainedMarks) errors.hsscObtainedMarks = "Obtained marks in FSc are required";
      if (!formData.sscRollNo.trim()) errors.sscRollNo = "SSC (Matric) Board Roll Number is required";
      if (!formData.sscObtainedMarks) errors.sscObtainedMarks = "Obtained marks in SSC are required";
    }

    if (step === 3) {
      if (!formData.firstChoiceProgramId) errors.firstChoiceProgramId = "First choice program is required";
    }

    if (step === 4) {
      if (!formData.paymentMethod) errors.paymentMethod = "Please select the payment channel used";
      if (!formData.transactionReferenceId.trim()) errors.transactionReferenceId = "Transaction Reference / TID / Scroll No. is required";
      if (!formData.feeReceiptFileBase64) errors.feeReceiptFileBase64 = "Proof of payment screenshot is required";
    }

    if (step === 5) {
      if (!formData.declarationAgreed) errors.declarationAgreed = "You must solemnly attest the accuracy of the submitted credentials";
      if (!formData.termsAgreed) errors.termsAgreed = "Acceptance of University of Swat Admission Regulations is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 6));
      window.scrollTo({ top: 180, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 180, behavior: "smooth" });
  };

  const handleFinalSubmit = () => {
    if (!validateStep(5)) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedAppId = `UOS-ADM-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
      updateField("applicationId", generatedAppId);
      updateField("submittedAt", new Date().toLocaleString());
      setIsSubmitting(false);
      setCurrentStep(6);
      window.scrollTo({ top: 120, behavior: "smooth" });
    }, 1200);
  };

  const selectedFirstProg: DegreeProgramOption | undefined = DEGREE_PROGRAMS.find(
    (p) => p.id === formData.firstChoiceProgramId
  );
  const selectedSecondProg: DegreeProgramOption | undefined = DEGREE_PROGRAMS.find(
    (p) => p.id === formData.secondChoiceProgramId
  );

  return (
    <div className="w-full">
      {/* Editorial Header Banner - Clean, properly spaced below fixed header */}
      <section className="relative overflow-hidden bg-[#17231d] pt-36 sm:pt-40 lg:pt-44 xl:pt-[180px] pb-8 text-white border-b border-[#2d4233]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#b9d2bd] mb-1.5 font-medium">
                <span className="h-1.5 w-1.5 bg-emerald-400" />
                Directorate of Admissions
              </div>
              <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-white">
                Online Admission Application
              </h1>
            </div>

            <div className="self-start sm:self-center border border-white/15 bg-white/5 px-3 py-1.5 text-xs shrink-0">
              <span className="text-[#b9d2bd] font-medium mr-1.5">Fall 2026 Intake:</span>
              <span className="text-white font-semibold">Active</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Multi-Step Form Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 max-w-5xl">
        {/* Creative Text-Only Stepper with Continuous Progress Bar (No Button Boxes) */}
        <div className="mb-8">
          {/* Top text labels - Horizontal scrollable on small mobile without breaking page width */}
          <div className="flex items-center justify-between gap-2 overflow-x-auto pb-1 text-xs sm:text-sm px-1 mb-2.5 chatbot-no-scrollbar">
            {STEPS.map((s) => {
              const isActive = currentStep === s.id;
              const isPast = currentStep > s.id;

              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => {
                    if (isPast) setCurrentStep(s.id);
                  }}
                  disabled={!isPast && !isActive}
                  className={`group flex items-center gap-1 sm:gap-1.5 transition-all select-none shrink-0 ${
                    isActive
                      ? "text-[#74201e] font-semibold scale-105"
                      : isPast
                      ? "text-[#233623] hover:text-[#74201e] cursor-pointer"
                      : "text-gray-400 cursor-not-allowed opacity-60"
                  }`}
                >
                  <span
                    className={`text-[10px] sm:text-[11px] font-mono transition-colors ${
                      isActive ? "text-[#74201e] font-bold" : isPast ? "text-[#233623]" : "text-gray-400"
                    }`}
                  >
                    0{s.id}.
                  </span>
                  <span className="tracking-tight text-[11px] sm:text-xs md:text-sm">{s.title}</span>
                  {isPast && <CheckCircle2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-emerald-600 hidden sm:inline" />}
                </button>
              );
            })}
          </div>

          {/* Continuous flowing gradient progress track */}
          <div className="relative h-1.5 w-full bg-gray-200/80 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#233623] via-[#74201e] to-[#74201e] transition-all duration-500 ease-out"
              style={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
            />
          </div>

          {/* Subtle percentage & current step indicator */}
          <div className="flex justify-between items-center text-[11px] text-gray-500 pt-1.5 px-0.5 font-light">
            <span>Step {currentStep} of {STEPS.length}</span>
            <span className="font-mono text-[#74201e] font-medium">
              {Math.round(((currentStep - 1) / (STEPS.length - 1)) * 100)}% Completed
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* STEP 1: PERSONAL & GUARDIAN DETAILS */}
        {/* ========================================================================= */}
        {currentStep === 1 && (
          <div className="space-y-8 bg-white border border-[#e7e5df] border-t-2 border-t-[#74201e] p-6 sm:p-8 shadow-xs">
            <div className="border-b border-[#e7e5df] pb-4">
              <h2 className="font-heading text-xl sm:text-2xl font-medium text-charcoal">
                Step 1: Personal & Guardian Information
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 font-light mt-1">
                Please provide official details matching your Matriculation Certificate and National CNIC / Form-B.
              </p>
            </div>

            {/* Applicant Photograph Upload */}
            <div className="p-4 bg-[#fafaf8] border border-gray-200 flex flex-col sm:flex-row items-center gap-6">
              <div className="h-28 w-24 shrink-0 border-2 border-dashed border-gray-300 bg-white flex items-center justify-center overflow-hidden relative">
                {photoPreview ? (
                  <Image
                    src={photoPreview}
                    alt="Applicant Preview"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="text-center p-2">
                    <User className="h-8 w-8 text-gray-400 mx-auto" />
                    <span className="text-[10px] text-gray-500 block mt-1">Photo (Passport Size)</span>
                  </div>
                )}
              </div>
              <div className="flex-1 space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal">
                  Applicant Photograph <span className="text-[#74201e]">*</span>
                </label>
                <p className="text-xs text-gray-500 font-light">
                  Recent passport size photograph with blue/white background (Max 2MB, JPG or PNG format).
                </p>
                <div className="flex items-center gap-3">
                  <label className="cursor-pointer inline-flex items-center gap-2 border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-charcoal hover:border-[#74201e] hover:text-[#74201e] transition-colors shadow-2xs">
                    <Upload className="h-3.5 w-3.5" />
                    Upload Image
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                  </label>
                  {formData.applicantPhotoName && (
                    <span className="text-xs text-emerald-700 font-medium truncate max-w-xs">
                      ✓ {formData.applicantPhotoName}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Applicant Personal Credentials */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#74201e] border-b border-gray-200 pb-2 mb-4">
                1.1 Applicant Identity
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 text-sm">
                <div>
                  <label className="block text-xs font-medium text-charcoal mb-1">
                    Full Name (As per SSC Certificate) <span className="text-[#74201e]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.applicantName}
                    onChange={(e) => updateField("applicantName", e.target.value)}
                    placeholder="e.g. Muhammad Asif Khan"
                    className={`w-full border px-3 py-2 text-sm outline-none transition-colors ${
                      formErrors.applicantName ? "border-red-500 bg-red-50/20" : "border-gray-300 focus:border-[#74201e]"
                    }`}
                  />
                  {formErrors.applicantName && (
                    <p className="text-[11px] text-red-600 mt-1">{formErrors.applicantName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-charcoal mb-1">
                    National CNIC / Form-B Number <span className="text-[#74201e]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.applicantCnic}
                    onChange={(e) => updateField("applicantCnic", e.target.value)}
                    placeholder="15602-XXXXXXX-X"
                    className={`w-full border px-3 py-2 text-sm outline-none transition-colors ${
                      formErrors.applicantCnic ? "border-red-500 bg-red-50/20" : "border-gray-300 focus:border-[#74201e]"
                    }`}
                  />
                  {formErrors.applicantCnic && (
                    <p className="text-[11px] text-red-600 mt-1">{formErrors.applicantCnic}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-charcoal mb-1">
                    Date of Birth <span className="text-[#74201e]">*</span>
                  </label>
                  <input
                    type="date"
                    value={formData.applicantDob}
                    onChange={(e) => updateField("applicantDob", e.target.value)}
                    className={`w-full border px-3 py-2 text-sm outline-none transition-colors ${
                      formErrors.applicantDob ? "border-red-500 bg-red-50/20" : "border-gray-300 focus:border-[#74201e]"
                    }`}
                  />
                  {formErrors.applicantDob && (
                    <p className="text-[11px] text-red-600 mt-1">{formErrors.applicantDob}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-charcoal mb-1">
                    Gender <span className="text-[#74201e]">*</span>
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => updateField("gender", e.target.value as ApplicationFormData["gender"])}
                    className={`w-full border px-3 py-2 text-sm outline-none transition-colors ${
                      formErrors.gender ? "border-red-500 bg-red-50/20" : "border-gray-300 focus:border-[#74201e]"
                    }`}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  {formErrors.gender && (
                    <p className="text-[11px] text-red-600 mt-1">{formErrors.gender}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-charcoal mb-1">
                    District of Domicile <span className="text-[#74201e]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.domicileDistrict}
                    onChange={(e) => updateField("domicileDistrict", e.target.value)}
                    placeholder="e.g. Swat / Malakand / Dir"
                    className="w-full border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#74201e]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-charcoal mb-1">
                    Blood Group
                  </label>
                  <select
                    value={formData.bloodGroup}
                    onChange={(e) => updateField("bloodGroup", e.target.value)}
                    className="w-full border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#74201e]"
                  >
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Father / Guardian Information */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#74201e] border-b border-gray-200 pb-2 mb-4">
                1.2 Father / Guardian Credentials
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 text-sm">
                <div>
                  <label className="block text-xs font-medium text-charcoal mb-1">
                    Father&apos;s Name <span className="text-[#74201e]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fatherName}
                    onChange={(e) => updateField("fatherName", e.target.value)}
                    placeholder="e.g. Zahir Shah"
                    className={`w-full border px-3 py-2 text-sm outline-none transition-colors ${
                      formErrors.fatherName ? "border-red-500 bg-red-50/20" : "border-gray-300 focus:border-[#74201e]"
                    }`}
                  />
                  {formErrors.fatherName && (
                    <p className="text-[11px] text-red-600 mt-1">{formErrors.fatherName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-charcoal mb-1">
                    Father&apos;s CNIC Number <span className="text-[#74201e]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fatherCnic}
                    onChange={(e) => updateField("fatherCnic", e.target.value)}
                    placeholder="15602-XXXXXXX-X"
                    className={`w-full border px-3 py-2 text-sm outline-none transition-colors ${
                      formErrors.fatherCnic ? "border-red-500 bg-red-50/20" : "border-gray-300 focus:border-[#74201e]"
                    }`}
                  />
                  {formErrors.fatherCnic && (
                    <p className="text-[11px] text-red-600 mt-1">{formErrors.fatherCnic}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-charcoal mb-1">
                    Father&apos;s Mobile Number <span className="text-[#74201e]">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.fatherPhone}
                    onChange={(e) => updateField("fatherPhone", e.target.value)}
                    placeholder="03XX-XXXXXXX"
                    className="w-full border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#74201e]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-charcoal mb-1">
                    Guardian Name (If different from Father)
                  </label>
                  <input
                    type="text"
                    value={formData.guardianName}
                    onChange={(e) => updateField("guardianName", e.target.value)}
                    placeholder="e.g. Uncle / Brother Name"
                    className="w-full border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#74201e]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-charcoal mb-1">
                    Relationship with Guardian
                  </label>
                  <input
                    type="text"
                    value={formData.guardianRelation}
                    onChange={(e) => updateField("guardianRelation", e.target.value)}
                    placeholder="e.g. Brother, Uncle"
                    className="w-full border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#74201e]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-charcoal mb-1">
                    Emergency Contact Number
                  </label>
                  <input
                    type="tel"
                    value={formData.emergencyContact}
                    onChange={(e) => updateField("emergencyContact", e.target.value)}
                    placeholder="03XX-XXXXXXX"
                    className="w-full border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#74201e]"
                  />
                </div>
              </div>
            </div>

            {/* Contact & Residential Details */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#74201e] border-b border-gray-200 pb-2 mb-4">
                1.3 Communication & Address
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
                <div>
                  <label className="block text-xs font-medium text-charcoal mb-1">
                    Applicant Personal Mobile Phone <span className="text-[#74201e]">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.applicantPhone}
                    onChange={(e) => updateField("applicantPhone", e.target.value)}
                    placeholder="0300-1234567"
                    className={`w-full border px-3 py-2 text-sm outline-none transition-colors ${
                      formErrors.applicantPhone ? "border-red-500 bg-red-50/20" : "border-gray-300 focus:border-[#74201e]"
                    }`}
                  />
                  {formErrors.applicantPhone && (
                    <p className="text-[11px] text-red-600 mt-1">{formErrors.applicantPhone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-charcoal mb-1">
                    Applicant Email Address <span className="text-[#74201e]">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.applicantEmail}
                    onChange={(e) => updateField("applicantEmail", e.target.value)}
                    placeholder="applicant@gmail.com"
                    className="w-full border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#74201e]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-charcoal mb-1">
                    Permanent Address (As on CNIC / Domicile) <span className="text-[#74201e]">*</span>
                  </label>
                  <textarea
                    rows={2}
                    value={formData.permanentAddress}
                    onChange={(e) => updateField("permanentAddress", e.target.value)}
                    placeholder="Village / Mohallah, Post Office, Tehsil and District..."
                    className={`w-full border px-3 py-2 text-sm outline-none transition-colors ${
                      formErrors.permanentAddress ? "border-red-500 bg-red-50/20" : "border-gray-300 focus:border-[#74201e]"
                    }`}
                  />
                  {formErrors.permanentAddress && (
                    <p className="text-[11px] text-red-600 mt-1">{formErrors.permanentAddress}</p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-charcoal mb-1">
                    Postal / Current Mailing Address
                  </label>
                  <textarea
                    rows={2}
                    value={formData.postalAddress}
                    onChange={(e) => updateField("postalAddress", e.target.value)}
                    placeholder="Leave blank if identical to Permanent Address"
                    className="w-full border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#74201e]"
                  />
                </div>
              </div>
            </div>

            {/* Navigation Actions */}
            <div className="border-t border-[#e7e5df] pt-6 flex justify-end">
              <button
                type="button"
                onClick={nextStep}
                className="inline-flex items-center gap-2 bg-[#74201e] px-6 py-2.5 text-xs font-medium uppercase tracking-wider text-white hover:bg-[#5e1917] transition-colors"
              >
                Proceed to Academic Marks
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* STEP 2: FSC / SSC ACADEMIC MARKS */}
        {/* ========================================================================= */}
        {currentStep === 2 && (
          <div className="space-y-8 bg-white border border-[#e7e5df] border-t-2 border-t-[#74201e] p-6 sm:p-8 shadow-xs">
            <div className="border-b border-[#e7e5df] pb-4">
              <h2 className="font-heading text-xl sm:text-2xl font-medium text-charcoal">
                Step 2: Academic Qualifications & Board Marks
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 font-light mt-1">
                Enter your Secondary School Certificate (Matric) and Higher Secondary School Certificate (FSc/FA) marks.
                Merit calculation is strictly governed by HEC and University regulations.
              </p>
            </div>

            {/* FSc / HSSC Information */}
            <div className="border border-gray-200 p-5 bg-[#fafaf8]">
              <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#74201e] flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-[#74201e]" />
                  2.1 Intermediate (FSc / HSSC / FA / DAE / A-Level)
                </h3>
                <span className="text-[11px] bg-[#74201e]/10 text-[#74201e] px-2 py-0.5 font-medium">
                  Primary Basis for BS Merit
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 text-sm">
                <div>
                  <label className="block text-xs font-medium text-charcoal mb-1">
                    Intermediate Discipline / Group <span className="text-[#74201e]">*</span>
                  </label>
                  <select
                    value={formData.hsscGroup}
                    onChange={(e) => updateField("hsscGroup", e.target.value)}
                    className="w-full border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#74201e]"
                  >
                    <option value="Pre-Medical">FSc Pre-Medical</option>
                    <option value="Pre-Engineering">FSc Pre-Engineering</option>
                    <option value="Computer Science (ICS)">ICS (Computer Science / Physics / Stats)</option>
                    <option value="General Science">General Science</option>
                    <option value="Humanities / Arts">FA (Humanities / Arts)</option>
                    <option value="Commerce (I.Com)">I.Com (Commerce)</option>
                    <option value="DAE / Equivalent">DAE (Associate Engineer)</option>
                    <option value="A-Levels (Equivalence)">A-Levels (IBCC Equivalence)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-charcoal mb-1">
                    Educational Board / University <span className="text-[#74201e]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.hsscBoard}
                    onChange={(e) => updateField("hsscBoard", e.target.value)}
                    placeholder="e.g. BISE Saidu Sharif Swat"
                    className="w-full border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#74201e]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-charcoal mb-1">
                    Passing Year <span className="text-[#74201e]">*</span>
                  </label>
                  <select
                    value={formData.hsscPassingYear}
                    onChange={(e) => updateField("hsscPassingYear", e.target.value)}
                    className="w-full border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#74201e]"
                  >
                    <option value="2026">2026 (Annual)</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-charcoal mb-1">
                    Board Roll Number <span className="text-[#74201e]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.hsscRollNo}
                    onChange={(e) => updateField("hsscRollNo", e.target.value)}
                    placeholder="e.g. 543210"
                    className={`w-full border px-3 py-2 text-sm outline-none transition-colors ${
                      formErrors.hsscRollNo ? "border-red-500 bg-red-50/20" : "border-gray-300 focus:border-[#74201e]"
                    }`}
                  />
                  {formErrors.hsscRollNo && (
                    <p className="text-[11px] text-red-600 mt-1">{formErrors.hsscRollNo}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-charcoal mb-1">
                    Total Marks <span className="text-[#74201e]">*</span>
                  </label>
                  <input
                    type="number"
                    value={formData.hsscTotalMarks}
                    onChange={(e) => updateField("hsscTotalMarks", Number(e.target.value) || "")}
                    className="w-full border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#74201e]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-charcoal mb-1">
                    Obtained Marks <span className="text-[#74201e]">*</span>
                  </label>
                  <input
                    type="number"
                    value={formData.hsscObtainedMarks}
                    onChange={(e) => updateField("hsscObtainedMarks", Number(e.target.value) || "")}
                    placeholder="e.g. 950"
                    className={`w-full border px-3 py-2 text-sm outline-none transition-colors ${
                      formErrors.hsscObtainedMarks ? "border-red-500 bg-red-50/20" : "border-gray-300 focus:border-[#74201e]"
                    }`}
                  />
                  {formErrors.hsscObtainedMarks && (
                    <p className="text-[11px] text-red-600 mt-1">{formErrors.hsscObtainedMarks}</p>
                  )}
                </div>

                <div className="sm:col-span-3 bg-white p-3 border border-gray-200 flex items-center justify-between">
                  <span className="text-xs font-medium text-charcoal">
                    Calculated FSc Percentage:
                  </span>
                  <span className="font-heading text-base font-semibold text-[#74201e]">
                    {computedHsscPercentage ? `${computedHsscPercentage}%` : "—"}
                  </span>
                </div>
              </div>
            </div>

            {/* SSC (Matriculation) Information */}
            <div className="border border-gray-200 p-5 bg-[#fafaf8]">
              <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#74201e] flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-[#74201e]" />
                  2.2 Secondary School Certificate (SSC / Matric / O-Level)
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 text-sm">
                <div>
                  <label className="block text-xs font-medium text-charcoal mb-1">
                    Matric Educational Board <span className="text-[#74201e]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.sscBoard}
                    onChange={(e) => updateField("sscBoard", e.target.value)}
                    placeholder="e.g. BISE Saidu Sharif Swat"
                    className="w-full border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#74201e]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-charcoal mb-1">
                    Passing Year <span className="text-[#74201e]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.sscPassingYear}
                    onChange={(e) => updateField("sscPassingYear", e.target.value)}
                    placeholder="2024"
                    className="w-full border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#74201e]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-charcoal mb-1">
                    Board Roll Number <span className="text-[#74201e]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.sscRollNo}
                    onChange={(e) => updateField("sscRollNo", e.target.value)}
                    placeholder="e.g. 123456"
                    className={`w-full border px-3 py-2 text-sm outline-none transition-colors ${
                      formErrors.sscRollNo ? "border-red-500 bg-red-50/20" : "border-gray-300 focus:border-[#74201e]"
                    }`}
                  />
                  {formErrors.sscRollNo && (
                    <p className="text-[11px] text-red-600 mt-1">{formErrors.sscRollNo}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-charcoal mb-1">
                    Total Marks <span className="text-[#74201e]">*</span>
                  </label>
                  <input
                    type="number"
                    value={formData.sscTotalMarks}
                    onChange={(e) => updateField("sscTotalMarks", Number(e.target.value) || "")}
                    className="w-full border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#74201e]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-charcoal mb-1">
                    Obtained Marks <span className="text-[#74201e]">*</span>
                  </label>
                  <input
                    type="number"
                    value={formData.sscObtainedMarks}
                    onChange={(e) => updateField("sscObtainedMarks", Number(e.target.value) || "")}
                    placeholder="e.g. 980"
                    className={`w-full border px-3 py-2 text-sm outline-none transition-colors ${
                      formErrors.sscObtainedMarks ? "border-red-500 bg-red-50/20" : "border-gray-300 focus:border-[#74201e]"
                    }`}
                  />
                  {formErrors.sscObtainedMarks && (
                    <p className="text-[11px] text-red-600 mt-1">{formErrors.sscObtainedMarks}</p>
                  )}
                </div>

                <div className="bg-white p-3 border border-gray-200 flex items-center justify-between">
                  <span className="text-xs font-medium text-charcoal">
                    SSC Percentage:
                  </span>
                  <span className="font-heading text-base font-semibold text-[#74201e]">
                    {computedSscPercentage ? `${computedSscPercentage}%` : "—"}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Actions */}
            <div className="border-t border-[#e7e5df] pt-6 flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="inline-flex items-center gap-2 border border-gray-300 bg-white px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-charcoal hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous Step
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="inline-flex items-center gap-2 bg-[#74201e] px-6 py-2.5 text-xs font-medium uppercase tracking-wider text-white hover:bg-[#5e1917] transition-colors"
              >
                Proceed to Program Selection
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* STEP 3: PROGRAM SELECTION */}
        {/* ========================================================================= */}
        {currentStep === 3 && (
          <div className="space-y-8 bg-white border border-[#e7e5df] border-t-2 border-t-[#74201e] p-6 sm:p-8 shadow-xs">
            <div className="border-b border-[#e7e5df] pb-4">
              <h2 className="font-heading text-xl sm:text-2xl font-medium text-charcoal">
                Step 3: Academic Program Selection & Quota
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 font-light mt-1">
                Choose your desired primary degree program. You may also specify an optional 2nd preference.
              </p>
            </div>

            {/* Quota Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#fafaf8] p-5 border border-gray-200">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1">
                  Admission Seat Quota <span className="text-[#74201e]">*</span>
                </label>
                <select
                  value={formData.quotaCategory}
                  onChange={(e) => updateField("quotaCategory", e.target.value as ApplicationFormData["quotaCategory"])}
                  className="w-full border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-[#74201e]"
                >
                  <option value="Open Merit">Open Merit (All Khyber Pakhtunkhwa)</option>
                  <option value="District Swat Quota">District Swat Local Quota</option>
                  <option value="FATA / Merged Districts">Merged Districts (Ex-FATA Quota)</option>
                  <option value="Sports Quota">Sports Distinction Quota</option>
                  <option value="Disable Quota">Persons with Disabilities (Special Seats)</option>
                  <option value="Hafiz-e-Quran">Hafiz-e-Quran (+20 Marks Addition)</option>
                </select>
                <p className="text-[11px] text-gray-500 font-light mt-1">
                  Relevant supporting certificates must be submitted during interview/scrutiny.
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 sm:pt-6">
                <input
                  type="checkbox"
                  id="hafizCheck"
                  checked={formData.hafizQuran}
                  onChange={(e) => updateField("hafizQuran", e.target.checked)}
                  className="h-4 w-4 rounded-none text-[#74201e] border-gray-300 focus:ring-[#74201e]"
                />
                <label htmlFor="hafizCheck" className="text-xs text-charcoal select-none">
                  <span className="font-medium">Hafiz-e-Quran Applicant</span>
                  <span className="block text-[11px] text-gray-500 font-light">
                    Will be invited for oral verification test conducted by the Department of Islamic Studies.
                  </span>
                </label>
              </div>
            </div>

            {/* Primary Program Selection */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#74201e] mb-2">
                1st Preference Program (Primary Choice) <span className="text-[#74201e]">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {DEGREE_PROGRAMS.map((prog) => {
                  const isSelected = formData.firstChoiceProgramId === prog.id;

                  return (
                    <div
                      key={prog.id}
                      onClick={() => updateField("firstChoiceProgramId", prog.id)}
                      className={`cursor-pointer border p-4 transition-all relative ${
                        isSelected
                          ? "border-[#74201e] bg-[#74201e]/5 ring-1 ring-[#74201e]"
                          : "border-gray-200 bg-white hover:border-gray-400"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <span className="font-mono text-xs font-semibold text-[#74201e] bg-gray-100 px-1.5 py-0.5">
                          {prog.code}
                        </span>
                        {isSelected && (
                          <span className="text-[10px] bg-[#74201e] text-white px-1.5 py-0.5 font-medium uppercase">
                            Selected
                          </span>
                        )}
                      </div>
                      <h4 className="font-heading font-medium text-sm text-charcoal mt-2 leading-snug">
                        {prog.name}
                      </h4>
                      <div className="text-[11px] text-gray-500 mt-1 line-clamp-1">
                        {prog.faculty}
                      </div>
                      <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-600">
                        <span>{prog.duration}</span>
                        <span className="font-medium text-[#17231d]">
                          Fee: Rs. {prog.annualFee.toLocaleString()}/yr
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2nd Preference Program (Optional) */}
            <div className="pt-4 border-t border-gray-200">
              <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
                2nd Preference Program (Optional)
              </label>
              <select
                value={formData.secondChoiceProgramId}
                onChange={(e) => updateField("secondChoiceProgramId", e.target.value)}
                className="w-full md:w-1/2 border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-[#74201e]"
              >
                <option value="">None (Apply for 1st choice only)</option>
                {DEGREE_PROGRAMS.filter((p) => p.id !== formData.firstChoiceProgramId).map((prog) => (
                  <option key={prog.id} value={prog.id}>
                    {prog.name} ({prog.level})
                  </option>
                ))}
              </select>
            </div>

            {/* Selected Program Eligibility Info Box */}
            {selectedFirstProg && (
              <div className="bg-[#fafaf8] border-l-4 border-l-[#74201e] p-4 border border-gray-200">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-[#74201e] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-semibold uppercase tracking-wider text-charcoal">
                      Eligibility Criteria: {selectedFirstProg.name}
                    </h5>
                    <p className="text-xs text-gray-600 font-light mt-1">
                      {selectedFirstProg.eligibility}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Actions */}
            <div className="border-t border-[#e7e5df] pt-6 flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="inline-flex items-center gap-2 border border-gray-300 bg-white px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-charcoal hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous Step
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="inline-flex items-center gap-2 bg-[#74201e] px-6 py-2.5 text-xs font-medium uppercase tracking-wider text-white hover:bg-[#5e1917] transition-colors"
              >
                Proceed to Fee Payment
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* STEP 4: FEES GENERATION & PAYMENT PROOF UPLOAD */}
        {/* ========================================================================= */}
        {currentStep === 4 && (
          <div className="space-y-8 bg-white border border-[#e7e5df] border-t-2 border-t-[#74201e] p-6 sm:p-8 shadow-xs">
            <div className="border-b border-[#e7e5df] pb-4">
              <h2 className="font-heading text-xl sm:text-2xl font-medium text-charcoal">
                Step 4: Admission Fee Voucher & Payment Screenshot Upload
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 font-light mt-1">
                The admission processing fee can be paid via Bank Branch Deposit, 1Bill, Easypaisa, or JazzCash.
                After paying separately in your bank or mobile app, upload your receipt screenshot below.
              </p>
            </div>

            {/* Generated Official Fee Voucher Card */}
            <div className="border border-gray-200 bg-[#fafaf8] p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-200 pb-4 mb-4 gap-4">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-gray-500">
                    Official Fee Challan Voucher
                  </div>
                  <div className="font-heading text-lg font-semibold text-charcoal mt-0.5">
                    Challan No: <span className="font-mono text-[#74201e]">{formData.challanNumber}</span>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 px-4 py-2 text-right">
                  <div className="text-[10px] uppercase tracking-wider text-gray-500">Total Payable Amount</div>
                  <div className="font-heading text-xl font-bold text-[#74201e]">
                    PKR {(formData.applicationProcessingFee + formData.prospectusFee).toLocaleString()}
                  </div>
                  <div className="text-[10px] text-gray-400">Non-Refundable Processing Fee</div>
                </div>
              </div>

              {/* Fee Breakdown Table */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2 text-xs">
                  <div className="font-semibold text-charcoal uppercase tracking-wider text-[11px] mb-1">
                    Voucher Item Breakdown
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-200">
                    <span className="text-gray-600">Admission Processing & Scrutiny Fee</span>
                    <span className="font-medium text-charcoal">PKR {formData.applicationProcessingFee.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-200">
                    <span className="text-gray-600">Prospectus & University Handbook</span>
                    <span className="font-medium text-charcoal">PKR {formData.prospectusFee.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between py-1 font-semibold text-charcoal text-sm pt-2">
                    <span>Total Amount</span>
                    <span className="text-[#74201e]">PKR {(formData.applicationProcessingFee + formData.prospectusFee).toLocaleString()}</span>
                  </div>
                </div>

                {/* Bank Account Details */}
                <div className="bg-white p-4 border border-gray-200 space-y-2.5 text-xs">
                  <div className="font-semibold text-charcoal uppercase tracking-wider text-[11px]">
                    University Official Account
                  </div>

                  <div>
                    <span className="text-gray-500 block text-[10px]">Account Title:</span>
                    <span className="font-medium text-charcoal">{formData.bankAccountTitle}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-gray-500 block text-[10px]">Bank / Branch:</span>
                      <span className="font-medium text-charcoal">{formData.bankBranch}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-gray-50 p-2 border border-gray-200">
                    <div>
                      <span className="text-gray-500 block text-[10px]">HBL Account Number:</span>
                      <span className="font-mono font-semibold text-charcoal">{formData.bankAccountNumber}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(formData.bankAccountNumber, "acc")}
                      className="text-[11px] text-[#74201e] hover:underline flex items-center gap-1"
                    >
                      <Copy className="h-3 w-3" />
                      {copiedField === "acc" ? "Copied" : "Copy"}
                    </button>
                  </div>

                  <div className="flex items-center justify-between bg-gray-50 p-2 border border-gray-200">
                    <div>
                      <span className="text-gray-500 block text-[10px]">IBAN Number:</span>
                      <span className="font-mono font-semibold text-charcoal text-[11px]">{formData.bankIban}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(formData.bankIban, "iban")}
                      className="text-[11px] text-[#74201e] hover:underline flex items-center gap-1"
                    >
                      <Copy className="h-3 w-3" />
                      {copiedField === "iban" ? "Copied" : "Copy"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Payment Instructions Accordion */}
              <div className="bg-white p-4 border border-gray-200 text-xs text-gray-700 space-y-2">
                <div className="font-semibold text-charcoal uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                  <Info className="h-4 w-4 text-[#74201e]" />
                  How to Pay Your Fee:
                </div>
                <ol className="list-decimal list-inside space-y-1 text-gray-600 font-light pl-1">
                  <li>
                    <strong>Via Mobile Banking App (HBL, Meezan, UBL, etc.):</strong> Open your banking app, go to Transfer &gt; To Bank Account &gt; Select Habib Bank Limited &gt; Enter IBAN / Account Number above, and transfer PKR 2,000.
                  </li>
                  <li>
                    <strong>Via Easypaisa / JazzCash:</strong> Go to Money Transfer &gt; Bank Transfer &gt; Search Habib Bank Limited &gt; Enter Account Number &gt; Purpose: Education &gt; Send PKR 2,000.
                  </li>
                  <li>
                    <strong>Direct Branch Deposit:</strong> Visit any Habib Bank Limited (HBL) branch countrywide and deposit into account <code>{formData.bankAccountNumber}</code>.
                  </li>
                  <li>
                    <strong>Take a screenshot / receipt photo</strong> of the successful transaction and upload it in the section below.
                  </li>
                </ol>
              </div>
            </div>

            {/* Proof of Payment Submission Form */}
            <div className="border border-gray-200 p-6 bg-white space-y-5">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#74201e] border-b border-gray-200 pb-2">
                Upload Transaction Details & Screenshot
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 text-sm">
                <div>
                  <label className="block text-xs font-medium text-charcoal mb-1">
                    Payment Channel Used <span className="text-[#74201e]">*</span>
                  </label>
                  <select
                    value={formData.paymentMethod}
                    onChange={(e) => updateField("paymentMethod", e.target.value as ApplicationFormData["paymentMethod"])}
                    className={`w-full border px-3 py-2 text-sm outline-none transition-colors ${
                      formErrors.paymentMethod ? "border-red-500 bg-red-50/20" : "border-gray-300 focus:border-[#74201e]"
                    }`}
                  >
                    <option value="">Select Channel</option>
                    <option value="Bank Deposit">Bank Branch Counter Deposit</option>
                    <option value="Easypaisa">Easypaisa App</option>
                    <option value="JazzCash">JazzCash App</option>
                    <option value="1Bill / Banking App">Online Banking / 1Bill</option>
                  </select>
                  {formErrors.paymentMethod && (
                    <p className="text-[11px] text-red-600 mt-1">{formErrors.paymentMethod}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-charcoal mb-1">
                    Transaction ID / Reference / Scroll No. <span className="text-[#74201e]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.transactionReferenceId}
                    onChange={(e) => updateField("transactionReferenceId", e.target.value)}
                    placeholder="e.g. TID-9876543210"
                    className={`w-full border px-3 py-2 text-sm outline-none transition-colors ${
                      formErrors.transactionReferenceId ? "border-red-500 bg-red-50/20" : "border-gray-300 focus:border-[#74201e]"
                    }`}
                  />
                  {formErrors.transactionReferenceId && (
                    <p className="text-[11px] text-red-600 mt-1">{formErrors.transactionReferenceId}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-charcoal mb-1">
                    Payment Date <span className="text-[#74201e]">*</span>
                  </label>
                  <input
                    type="date"
                    value={formData.paymentDate}
                    onChange={(e) => updateField("paymentDate", e.target.value)}
                    className="w-full border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#74201e]"
                  />
                </div>
              </div>

              {/* Upload Screenshot Area */}
              <div>
                <label className="block text-xs font-medium text-charcoal mb-2">
                  Transaction Screenshot / Bank Stamp Deposit Slip <span className="text-[#74201e]">*</span>
                </label>
                <div className="border-2 border-dashed border-gray-300 p-6 text-center hover:border-[#74201e] transition-colors bg-[#fafaf8]">
                  {receiptPreview ? (
                    <div className="space-y-3">
                      <div className="relative h-44 max-w-sm mx-auto border border-gray-300 overflow-hidden bg-white">
                        <Image
                          src={receiptPreview}
                          alt="Receipt Preview"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="text-xs text-emerald-700 font-medium">
                        ✓ {formData.feeReceiptFileName}
                      </div>
                      <label className="cursor-pointer inline-flex items-center gap-1.5 border border-gray-300 bg-white px-3 py-1 text-xs text-charcoal hover:border-[#74201e]">
                        Replace Screenshot
                        <input
                          type="file"
                          accept="image/*,.pdf"
                          onChange={handleReceiptUpload}
                          className="hidden"
                        />
                      </label>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <CreditCard className="h-10 w-10 text-gray-400 mx-auto" />
                      <div className="text-xs text-charcoal font-medium">
                        Drag and drop your transaction screenshot here, or browse files
                      </div>
                      <p className="text-[11px] text-gray-500 font-light">
                        Clear image of Easypaisa/JazzCash confirmation screen, online banking receipt, or stamped bank teller slip (Max 5MB).
                      </p>
                      <label className="cursor-pointer inline-flex items-center gap-2 bg-[#74201e] px-4 py-2 text-xs font-medium text-white hover:bg-[#5e1917] transition-colors shadow-xs">
                        <Upload className="h-3.5 w-3.5" />
                        Select Screenshot File
                        <input
                          type="file"
                          accept="image/*,.pdf"
                          onChange={handleReceiptUpload}
                          className="hidden"
                        />
                      </label>
                    </div>
                  )}
                </div>
                {formErrors.feeReceiptFileBase64 && (
                  <p className="text-[11px] text-red-600 mt-2">{formErrors.feeReceiptFileBase64}</p>
                )}
              </div>
            </div>

            {/* Navigation Actions */}
            <div className="border-t border-[#e7e5df] pt-6 flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="inline-flex items-center gap-2 border border-gray-300 bg-white px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-charcoal hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous Step
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="inline-flex items-center gap-2 bg-[#74201e] px-6 py-2.5 text-xs font-medium uppercase tracking-wider text-white hover:bg-[#5e1917] transition-colors"
              >
                Proceed to Final Review
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* STEP 5: REVIEW APPLICATION */}
        {/* ========================================================================= */}
        {currentStep === 5 && (
          <div className="space-y-8 bg-white border border-[#e7e5df] border-t-2 border-t-[#74201e] p-6 sm:p-8 shadow-xs">
            <div className="border-b border-[#e7e5df] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-heading text-xl sm:text-2xl font-medium text-charcoal">
                  Step 5: Comprehensive Application Review
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 font-light mt-1">
                  Please thoroughly examine all submitted credentials before final locking and submission.
                </p>
              </div>

              <span className="self-start sm:self-auto bg-amber-50 border border-amber-300 text-amber-900 px-3 py-1 text-xs font-medium">
                Draft State • Unsubmitted
              </span>
            </div>

            {/* Review Sections */}
            <div className="space-y-6 text-sm">
              {/* Personal Profile Summary */}
              <div className="border border-gray-200 p-5 bg-[#fafaf8]">
                <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-3">
                  <h3 className="font-semibold text-xs uppercase tracking-wider text-[#74201e]">
                    1. Applicant & Guardian Credentials
                  </h3>
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="text-xs text-[#74201e] hover:underline font-medium"
                  >
                    Edit Section
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                  <div>
                    <span className="text-gray-500 block text-[10px]">Applicant Name:</span>
                    <span className="font-medium text-charcoal">{formData.applicantName || "—"}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block text-[10px]">Father&apos;s Name:</span>
                    <span className="font-medium text-charcoal">{formData.fatherName || "—"}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block text-[10px]">Applicant CNIC:</span>
                    <span className="font-mono text-charcoal">{formData.applicantCnic || "—"}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block text-[10px]">Father CNIC:</span>
                    <span className="font-mono text-charcoal">{formData.fatherCnic || "—"}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block text-[10px]">Date of Birth:</span>
                    <span className="text-charcoal">{formData.applicantDob || "—"}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block text-[10px]">Gender:</span>
                    <span className="text-charcoal">{formData.gender || "—"}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block text-[10px]">Mobile Contact:</span>
                    <span className="font-mono text-charcoal">{formData.applicantPhone || "—"}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block text-[10px]">Permanent Domicile:</span>
                    <span className="text-charcoal">{formData.domicileDistrict || "—"}</span>
                  </div>
                  <div className="sm:col-span-2 md:col-span-4">
                    <span className="text-gray-500 block text-[10px]">Permanent Address:</span>
                    <span className="text-charcoal">{formData.permanentAddress || "—"}</span>
                  </div>
                </div>
              </div>

              {/* Academic Qualifications Summary */}
              <div className="border border-gray-200 p-5 bg-[#fafaf8]">
                <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-3">
                  <h3 className="font-semibold text-xs uppercase tracking-wider text-[#74201e]">
                    2. Academic Record & Marks
                  </h3>
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="text-xs text-[#74201e] hover:underline font-medium"
                  >
                    Edit Section
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                  <div className="bg-white p-3 border border-gray-200">
                    <div className="font-semibold text-charcoal mb-1">
                      Intermediate (FSc / HSSC)
                    </div>
                    <div className="space-y-1 text-gray-600">
                      <div>Discipline: <strong className="text-charcoal">{formData.hsscGroup}</strong></div>
                      <div>Board: {formData.hsscBoard} (Roll No: {formData.hsscRollNo})</div>
                      <div>Marks: <strong className="text-[#74201e]">{formData.hsscObtainedMarks} / {formData.hsscTotalMarks}</strong> ({computedHsscPercentage}%)</div>
                    </div>
                  </div>

                  <div className="bg-white p-3 border border-gray-200">
                    <div className="font-semibold text-charcoal mb-1">
                      Secondary (SSC / Matric)
                    </div>
                    <div className="space-y-1 text-gray-600">
                      <div>Board: {formData.sscBoard} (Roll No: {formData.sscRollNo})</div>
                      <div>Passing Year: {formData.sscPassingYear}</div>
                      <div>Marks: <strong className="text-[#74201e]">{formData.sscObtainedMarks} / {formData.sscTotalMarks}</strong> ({computedSscPercentage}%)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chosen Programs Summary */}
              <div className="border border-gray-200 p-5 bg-[#fafaf8]">
                <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-3">
                  <h3 className="font-semibold text-xs uppercase tracking-wider text-[#74201e]">
                    3. Applied Academic Programs & Quota
                  </h3>
                  <button
                    onClick={() => setCurrentStep(3)}
                    className="text-xs text-[#74201e] hover:underline font-medium"
                  >
                    Edit Section
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-gray-500 block text-[10px]">Primary Choice (1st Preference):</span>
                    <span className="font-semibold text-charcoal text-sm">
                      {selectedFirstProg?.name || "—"}
                    </span>
                    <span className="text-gray-500 block text-[11px]">
                      {selectedFirstProg?.faculty}
                    </span>
                  </div>

                  <div>
                    <span className="text-gray-500 block text-[10px]">Applied Quota Category:</span>
                    <span className="font-medium text-charcoal">
                      {formData.quotaCategory} {formData.hafizQuran ? "• Hafiz-e-Quran" : ""}
                    </span>
                  </div>

                  {selectedSecondProg && (
                    <div className="sm:col-span-2 pt-2 border-t border-gray-200">
                      <span className="text-gray-500 block text-[10px]">Secondary Choice (2nd Preference):</span>
                      <span className="font-medium text-charcoal">
                        {selectedSecondProg.name}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Fee Payment Evidence Summary */}
              <div className="border border-gray-200 p-5 bg-[#fafaf8]">
                <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-3">
                  <h3 className="font-semibold text-xs uppercase tracking-wider text-[#74201e]">
                    4. Fee Deposit Information
                  </h3>
                  <button
                    onClick={() => setCurrentStep(4)}
                    className="text-xs text-[#74201e] hover:underline font-medium"
                  >
                    Edit Section
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <span className="text-gray-500 block text-[10px]">Challan Number:</span>
                    <span className="font-mono font-medium text-charcoal">{formData.challanNumber}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block text-[10px]">Payment Channel:</span>
                    <span className="font-medium text-charcoal">{formData.paymentMethod || "—"}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block text-[10px]">Transaction ID (TID):</span>
                    <span className="font-mono font-medium text-charcoal">{formData.transactionReferenceId || "—"}</span>
                  </div>
                </div>

                {formData.feeReceiptFileName && (
                  <div className="mt-3 pt-3 border-t border-gray-200 flex items-center gap-2 text-xs text-emerald-700 font-medium">
                    <CheckCircle2 className="h-4 w-4" />
                    Proof Screenshot Uploaded: {formData.feeReceiptFileName}
                  </div>
                )}
              </div>

              {/* Legal Undertaking & Declaration */}
              <div className="p-4 bg-white border border-[#e7e5df] border-l-4 border-l-[#74201e] space-y-3">
                <div className="font-semibold text-xs uppercase tracking-wider text-charcoal">
                  Solemn Declaration & Undertaking
                </div>

                <div className="space-y-2 text-xs text-gray-700">
                  <div className="flex items-start gap-2.5">
                    <input
                      type="checkbox"
                      id="decCheck"
                      checked={formData.declarationAgreed}
                      onChange={(e) => updateField("declarationAgreed", e.target.checked)}
                      className="mt-0.5 h-4 w-4 rounded-none text-[#74201e] border-gray-300 focus:ring-[#74201e]"
                    />
                    <label htmlFor="decCheck" className="text-xs text-gray-600 leading-relaxed select-none">
                      I solemnly affirm that the statements made and documents uploaded in this application are correct and complete to the best of my knowledge. I understand that any false declaration or forged document will result in immediate cancellation of my admission and forfeiture of fees.
                    </label>
                  </div>
                  {formErrors.declarationAgreed && (
                    <p className="text-[11px] text-red-600 pl-6">{formErrors.declarationAgreed}</p>
                  )}

                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="termsCheck"
                      checked={formData.termsAgreed}
                      onChange={(e) => updateField("termsAgreed", e.target.checked)}
                      className="mt-0.5 h-4 w-4 rounded-none text-[#74201e] border-gray-300 focus:ring-[#74201e]"
                    />
                    <label htmlFor="termsCheck" className="text-xs text-gray-600 leading-relaxed select-none">
                      I agree to abide by the University of Swat Statutes, Code of Conduct, and Admission Regulations as promulgated from time to time.
                    </label>
                  </div>
                  {formErrors.termsAgreed && (
                    <p className="text-[11px] text-red-600 pl-6">{formErrors.termsAgreed}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Navigation Actions */}
            <div className="border-t border-[#e7e5df] pt-6 flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 border border-gray-300 bg-white px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-charcoal hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous Step
              </button>
              <button
                type="button"
                onClick={handleFinalSubmit}
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 bg-[#74201e] px-8 py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#5e1917] transition-all shadow-sm disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Submitting Application...
                  </>
                ) : (
                  <>
                    Lock & Submit Application
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* STEP 6: SUBMISSION DOCKET & CONFIRMATION */}
        {/* ========================================================================= */}
        {currentStep === 6 && (
          <div className="space-y-8 bg-white border border-[#e7e5df] border-t-4 border-t-emerald-700 p-6 sm:p-10 shadow-xs">
            {/* Success Header */}
            <div className="text-center space-y-3 pb-6 border-b border-gray-200">
              <div className="h-16 w-16 bg-emerald-50 text-emerald-700 mx-auto flex items-center justify-center border border-emerald-200">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-light text-charcoal">
                Application Submitted Successfully!
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 font-light max-w-xl mx-auto">
                Your admission docket has been registered with the University of Swat Directorate of Admissions.
                Retain your Application Docket ID for tracking merit lists and interview call letters.
              </p>
            </div>

            {/* Official Registration Receipt Card */}
            <div className="bg-[#fafaf8] border border-gray-200 p-6 max-w-2xl mx-auto space-y-5">
              <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10">
                    <Image
                      src="/uos_logo.png"
                      alt="UOS Emblem"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-heading text-sm font-semibold text-charcoal">
                      University of Swat
                    </div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-wider">
                      Official Admission Registration Docket
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-block bg-emerald-100 text-emerald-800 px-2 py-0.5 text-xs font-semibold">
                    Submitted
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-gray-500 block text-[10px]">Application ID:</span>
                  <span className="font-mono text-base font-bold text-[#74201e]">
                    {formData.applicationId}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 block text-[10px]">Submission Timestamp:</span>
                  <span className="font-medium text-charcoal">{formData.submittedAt}</span>
                </div>

                <div>
                  <span className="text-gray-500 block text-[10px]">Candidate Name:</span>
                  <span className="font-medium text-charcoal">{formData.applicantName}</span>
                </div>
                <div>
                  <span className="text-gray-500 block text-[10px]">CNIC / B-Form:</span>
                  <span className="font-mono text-charcoal">{formData.applicantCnic}</span>
                </div>

                <div className="col-span-2 pt-2 border-t border-gray-200">
                  <span className="text-gray-500 block text-[10px]">Degree Program Applied:</span>
                  <span className="font-semibold text-charcoal text-sm">
                    {selectedFirstProg?.name}
                  </span>
                  <span className="text-gray-500 block text-[11px]">
                    {selectedFirstProg?.faculty} • Seat Quota: {formData.quotaCategory}
                  </span>
                </div>

                <div>
                  <span className="text-gray-500 block text-[10px]">FSc Board Marks:</span>
                  <span className="font-medium text-charcoal">
                    {formData.hsscObtainedMarks} / {formData.hsscTotalMarks} ({computedHsscPercentage}%)
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 block text-[10px]">Fee Challan Reference:</span>
                  <span className="font-mono text-charcoal">{formData.transactionReferenceId}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#74201e] px-4 py-2.5 text-xs font-medium uppercase tracking-wider text-white hover:bg-[#5e1917] transition-colors"
                >
                  <Printer className="h-4 w-4" />
                  Print Application Docket
                </button>
                <Link
                  href="/admissions"
                  className="inline-flex items-center justify-center gap-2 border border-gray-300 bg-white px-4 py-2.5 text-xs font-medium uppercase tracking-wider text-charcoal hover:bg-gray-50 transition-colors"
                >
                  Return to Admissions
                </Link>
              </div>
            </div>

            {/* Next Steps for Candidate */}
            <div className="max-w-2xl mx-auto border-l-4 border-l-[#74201e] bg-[#fafaf8] p-5 border border-gray-200 space-y-3">
              <h4 className="font-semibold text-xs uppercase tracking-wider text-charcoal flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-[#74201e]" />
                Next Steps for Candidates
              </h4>
              <ul className="text-xs text-gray-600 font-light space-y-1.5 list-disc list-inside">
                <li>
                  <strong>Scrutiny & Merit List:</strong> The provisional merit list will be published on the University portal on September 05, 2026.
                </li>
                <li>
                  <strong>Document Verification:</strong> Shortlisted candidates must bring original CNIC, Domicile, SSC & HSSC DMCs, and 4 passport-size photographs to the relevant department committee during departmental interview.
                </li>
                <li>
                  <strong>Hafiz-e-Quran Test:</strong> Verification test will take place on September 07, 2026 at the Main Campus, Charbagh Swat.
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
