"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Building,
  ShieldCheck
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    email: "",
    phone: "",
    country: "India",
    address: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />

      <PageHero
        title="Contact Us"
        subtitle="Get in Touch with the GCCI Team for Expert Guidance and Support"
        bgImage="/public/contact_hero.webp"
      />

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
            {/* Left Column: Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0a3d91] bg-blue-50 px-3 py-1 rounded">
                  START A CONVERSATION
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                  Let&apos;s Create Your Masterpiece
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Whether you have a distinct vision or need guidance discovering your style, our team is ready to assist.
                </p>
              </div>

              <div className="space-y-4">
                {/* Address Card */}
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0a3d91]">
                    <MapPin className="h-4 w-4" />
                    <span>ADDRESS</span>
                  </div>
                  <div className="mt-2 text-sm text-slate-800 leading-relaxed">
                    Shop No. LG-K-02, S. No. 588/2B, Raviraj Cru Premises, Bibwewadi, Market Yard, Pune, Maharashtra, India.
                  </div>
                </div>

                {/* Phone Card */}
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0a3d91]">
                    <Phone className="h-4 w-4" />
                    <span>PHONE</span>
                  </div>
                  <a
                    href="tel:+917620121069"
                    className="mt-2 block text-sm font-bold text-slate-900 hover:text-[#0a3d91] transition-colors"
                  >
                    +91 7620121069
                  </a>
                </div>

                {/* Email Card */}
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0a3d91]">
                    <Mail className="h-4 w-4" />
                    <span>EMAIL</span>
                  </div>
                  <a
                    href="mailto:gcci-enquiry@gcci-india.com"
                    className="mt-2 block text-sm font-bold text-slate-900 hover:text-[#0a3d91] transition-colors"
                  >
                    gcci-enquiry@gcci-india.com
                  </a>
                </div>
              </div>

              <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-5 text-xs text-slate-700">
                <div className="flex items-center gap-2 font-bold text-[#0a3d91] mb-1">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Confidentiality & NDA Guaranteed</span>
                </div>
                All factory data and technical requirements shared with GCCI International LLP are treated with strict confidentiality.
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 pb-2">
                  Send Us a Message
                </h3>
                <p className="text-xs text-slate-500 pb-6 border-b border-slate-100">
                  Fill in your details below and an authorized consultant will get in touch with you shortly.
                </p>

                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">Message Received</h4>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you for contacting GCCI International LLP. Our senior engineering consultant will review your specifications and contact you shortly.
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
                          address: "",
                          message: ""
                        });
                      }}
                      className="rounded-full bg-[#0a3d91] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#082d64]"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        COMPANY NAME
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Company Name"
                        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#0a3d91] focus:outline-none focus:ring-1 focus:ring-[#0a3d91]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          NAME
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#0a3d91] focus:outline-none focus:ring-1 focus:ring-[#0a3d91]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          EMAIL ADDRESS
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Email Address"
                          className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#0a3d91] focus:outline-none focus:ring-1 focus:ring-[#0a3d91]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          PHONE NUMBER
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Phone Number"
                          className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#0a3d91] focus:outline-none focus:ring-1 focus:ring-[#0a3d91]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          COUNTRY
                        </label>
                        <input
                          type="text"
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          placeholder="Country"
                          className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#0a3d91] focus:outline-none focus:ring-1 focus:ring-[#0a3d91]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        ADDRESS
                      </label>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="Company / Facility Address"
                        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#0a3d91] focus:outline-none focus:ring-1 focus:ring-[#0a3d91]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        MESSAGE
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Your Message..."
                        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#0a3d91] focus:outline-none focus:ring-1 focus:ring-[#0a3d91]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-full bg-[#0a3d91] py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#082d64] transition-colors disabled:opacity-75"
                    >
                      {loading ? "SENDING..." : "SEND MESSAGE"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
