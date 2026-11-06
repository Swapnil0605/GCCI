"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  Building,
  ShieldCheck,
  AlertCircle
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    email: "",
    phone: "",
    country: "India",
    service: "Advocacy & Assessment (TPM/TQM/Lean)",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="relative w-full bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Details & B2B Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded bg-blue-100/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-900 mb-3">
                <Building className="h-3.5 w-3.5 text-blue-700" />
                <span>Start a Conversation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Get in Touch with the GCCI Team
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Whether you need a comprehensive plant maturity diagnostic, custom SPM engineering,
                or a cloud-based TPM platform deployment, our consultants are ready to assist.
              </p>
            </div>

            {/* Structured Contact Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50/70 p-5 shadow-xs">
                <div className="rounded-lg bg-blue-100 p-2.5 text-blue-800 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Corporate Address</div>
                  <div className="text-sm font-semibold text-slate-900 mt-1">
                    Shop No. LG-K-02, S. No. 588/2B, Raviraj Cru Premises, Bibwewadi, Market Yard, Pune, Maharashtra, India.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50/70 p-5 shadow-xs">
                <div className="rounded-lg bg-blue-100 p-2.5 text-blue-800 shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Direct Phone</div>
                  <a
                    href="tel:+917620121069"
                    className="text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors block mt-1"
                  >
                    +91 7620121069
                  </a>
                  <div className="text-xs text-slate-500 mt-0.5">Mon – Sat, 9:00 AM – 6:00 PM IST</div>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50/70 p-5 shadow-xs">
                <div className="rounded-lg bg-blue-100 p-2.5 text-blue-800 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Email Inquiry</div>
                  <a
                    href="mailto:gcci-enquiry@gcci-india.com"
                    className="text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors block mt-1"
                  >
                    gcci-enquiry@gcci-india.com
                  </a>
                  <div className="text-xs text-slate-500 mt-0.5">Prompt technical response within 24 hours</div>
                </div>
              </div>
            </div>

            {/* Assurance Box */}
            <div className="rounded-xl border border-blue-200 bg-blue-50/60 p-5 text-xs text-slate-700 space-y-2">
              <div className="flex items-center gap-2 font-bold text-blue-900">
                <ShieldCheck className="h-4 w-4 text-blue-700" />
                <span>NDA & Confidentiality Assured</span>
              </div>
              <p>
                All plant assessment data, production parameters, and proprietary machine specifications shared with GCCI International LLP are strictly governed under non-disclosure agreements.
              </p>
            </div>
          </div>

          {/* Right Column: B2B Quote / Assessment Request Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-10 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 pb-2">
                Request an Assessment or Free Quote
              </h3>
              <p className="text-xs text-slate-500 pb-6 border-b border-slate-100">
                Please complete the form below. An authorized GCCI transformation advisor will contact you.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Thank You for Reaching Out</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Your inquiry has been received by GCCI International LLP. Our senior engineering consultant will review your specifications and contact you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        companyName: "",
                        name: "",
                        email: "",
                        phone: "",
                        country: "India",
                        service: "Advocacy & Assessment (TPM/TQM/Lean)",
                        message: ""
                      });
                    }}
                    className="inline-flex items-center justify-center rounded bg-slate-900 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-slate-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Acme Precision Metals Ltd."
                        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rajesh Sharma"
                        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rajesh@company.com"
                        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Country
                      </label>
                      <input
                        type="text"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        placeholder="India"
                        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Service of Interest *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      >
                        <option>Advocacy & Assessment (TPM/TQM/Lean)</option>
                        <option>Global Expertise & Industrial Automation</option>
                        <option>Maintenance Software, IT & IoT/AI</option>
                        <option>TPM Software (Cloud Subscription Platform)</option>
                        <option>Vision-Based Automated Inspection Systems</option>
                        <option>ERW Steel Tube Mills Engineering</option>
                        <option>Training Program (TPM BTLC Madurai)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Project Details or Questions
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe your facility type, operational goals, current challenges, or required timeline..."
                      className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0A387C] py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow hover:bg-[#082d64] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-colors disabled:opacity-75"
                  >
                    <Send className="h-4 w-4" />
                    <span>{submitting ? "Transmitting..." : "Submit Inquiry"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
