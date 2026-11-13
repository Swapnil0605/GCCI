"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    setServicesDropdownOpen(false);
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname?.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/98 backdrop-blur-md shadow-xs">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3.5">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink-0" onClick={closeMenu}>
          <div className="relative h-10 w-36 xs:h-11 xs:w-44 sm:h-14 sm:w-64 transition-transform duration-200 hover:scale-[1.01]">
            <Image
              src="/images/new_logo_gcci.png"
              alt="Global Corporate Council India - GCCI / GCCI International LLP"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-7 text-[15px] font-medium text-slate-800">
          <Link
            href="/"
            className={`transition-colors hover:text-[#0a3d91] ${
              isActive("/") ? "font-bold text-[#0a3d91]" : ""
            }`}
          >
            Home
          </Link>

          {/* About Us Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <button
              type="button"
              className={`flex items-center gap-1 transition-colors hover:text-[#0a3d91] py-2 cursor-pointer ${
                pathname?.includes("/about") ||
                pathname?.includes("/directors") ||
                pathname?.includes("/journey") ||
                pathname?.includes("/awards")
                  ? "font-bold text-[#0a3d91]"
                  : ""
              }`}
              aria-expanded={aboutDropdownOpen}
            >
              <span>About Us</span>
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180 text-slate-500" />
            </button>

            <div
              className={`absolute left-0 top-full pt-2 w-64 transition-all duration-200 ${
                aboutDropdownOpen
                  ? "visible opacity-100 translate-y-0"
                  : "invisible opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="rounded-lg border border-slate-200 bg-white p-2 shadow-xl ring-1 ring-black/5">
                <Link
                  href="/about"
                  onClick={closeMenu}
                  className="block rounded-md px-3.5 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-[#0a3d91] transition-colors"
                >
                  Company History
                </Link>
                <Link
                  href="/directors"
                  onClick={closeMenu}
                  className="block rounded-md px-3.5 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-[#0a3d91] transition-colors"
                >
                  Our Director
                </Link>
                <Link
                  href="/journey"
                  onClick={closeMenu}
                  className="block rounded-md px-3.5 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-[#0a3d91] transition-colors"
                >
                  Our Journey
                </Link>
                <Link
                  href="/awards"
                  onClick={closeMenu}
                  className="block rounded-md px-3.5 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-[#0a3d91] transition-colors"
                >
                  Awards And Certifications
                </Link>
              </div>
            </div>
          </div>

          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              type="button"
              className={`flex items-center gap-1 transition-colors hover:text-[#0a3d91] py-2 cursor-pointer ${
                pathname?.includes("/service") ? "font-bold text-[#0a3d91]" : ""
              }`}
              aria-expanded={servicesDropdownOpen}
            >
              <span>Services</span>
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180 text-slate-500" />
            </button>

            <div
              className={`absolute left-0 top-full pt-2 w-[380px] transition-all duration-200 ${
                servicesDropdownOpen
                  ? "visible opacity-100 translate-y-0"
                  : "invisible opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="rounded-lg border border-slate-200 bg-white p-2 shadow-xl ring-1 ring-black/5">
                <Link
                  href="/service1"
                  onClick={closeMenu}
                  className="block rounded-md px-3.5 py-2.5 text-xs text-slate-700 hover:bg-blue-50 hover:text-[#0a3d91] transition-colors leading-snug"
                >
                  Advocacy / Assessment / Capability Development / Recognition of Competitiveness
                </Link>
                <Link
                  href="/service2"
                  onClick={closeMenu}
                  className="block rounded-md px-3.5 py-2.5 text-xs text-slate-700 hover:bg-blue-50 hover:text-[#0a3d91] transition-colors leading-snug"
                >
                  Liaison Global Expertise Technology Support / Industry Automation
                </Link>
                <Link
                  href="/service3"
                  onClick={closeMenu}
                  className="block rounded-md px-3.5 py-2.5 text-xs text-slate-700 hover:bg-blue-50 hover:text-[#0a3d91] transition-colors leading-snug"
                >
                  Maintenance Software / Support IT / IoT / AI
                </Link>
                <Link
                  href="/service4"
                  onClick={closeMenu}
                  className="block rounded-md px-3.5 py-2.5 text-xs text-slate-700 hover:bg-blue-50 hover:text-[#0a3d91] transition-colors leading-snug"
                >
                  TPM Software (Subscription Model)
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/activity"
            className={`transition-colors hover:text-[#0a3d91] ${
              isActive("/activity") ? "font-bold text-[#0a3d91]" : ""
            }`}
          >
            Activity
          </Link>

          <Link
            href="/news"
            className={`transition-colors hover:text-[#0a3d91] ${
              isActive("/news") ? "font-bold text-[#0a3d91]" : ""
            }`}
          >
            News
          </Link>

          <Link
            href="/gallery"
            className={`transition-colors hover:text-[#0a3d91] ${
              isActive("/gallery") ? "font-bold text-[#0a3d91]" : ""
            }`}
          >
            Gallery
          </Link>

          <Link
            href="/training_program"
            className={`transition-colors hover:text-[#0a3d91] ${
              isActive("/training_program") || isActive("/training-program") ? "font-bold text-[#0a3d91]" : ""
            }`}
          >
            Training Program
          </Link>
        </nav>

        {/* Desktop Contact Us Button */}
        <div className="hidden xl:flex items-center">
          <Link
            href="/contact"
            className="rounded-full bg-[#0a3d91] px-7 py-2.5 text-sm font-semibold text-white shadow-xs transition-all hover:bg-[#082d64] hover:shadow-md"
          >
            Contact us
          </Link>
        </div>

        {/* Mobile Hamburger & Quick Contact Button */}
        <div className="flex xl:hidden items-center gap-1.5 sm:gap-2.5 shrink-0">
          <Link
            href="/contact"
            onClick={closeMenu}
            className="rounded-full bg-[#0a3d91] px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-semibold text-white transition-colors hover:bg-[#082d64]"
          >
            Contact
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-1.5 sm:p-2 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop & Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-x-0 top-full h-[calc(100dvh-100%)] z-50 bg-black/40 backdrop-blur-xs xl:hidden animate-in fade-in duration-200"
          onClick={closeMenu}
        >
          <div
            className="w-full max-h-full overflow-y-auto bg-white border-t border-slate-200 px-5 py-6 space-y-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Link
              href="/"
              onClick={closeMenu}
              className={`block border-b border-slate-100 pb-2.5 text-base font-semibold transition-colors ${
                isActive("/") ? "text-[#0a3d91]" : "text-slate-900"
              }`}
            >
              Home
            </Link>

            {/* About Us Mobile Accordion */}
            <div className="border-b border-slate-100 pb-2.5">
              <button
                type="button"
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                className="flex w-full items-center justify-between text-base font-semibold text-slate-900 cursor-pointer"
              >
                <span>About Us</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    aboutDropdownOpen ? "rotate-180 text-[#0a3d91]" : "text-slate-400"
                  }`}
                />
              </button>
              {aboutDropdownOpen && (
                <div className="mt-2.5 space-y-2 pl-3 text-sm text-slate-600 border-l-2 border-[#0a3d91]/30 animate-in slide-in-from-top-1">
                  <Link href="/about" onClick={closeMenu} className="block py-1 hover:text-[#0a3d91]">
                    • Company History
                  </Link>
                  <Link href="/directors" onClick={closeMenu} className="block py-1 hover:text-[#0a3d91]">
                    • Our Director
                  </Link>
                  <Link href="/journey" onClick={closeMenu} className="block py-1 hover:text-[#0a3d91]">
                    • Our Journey
                  </Link>
                  <Link href="/awards" onClick={closeMenu} className="block py-1 hover:text-[#0a3d91]">
                    • Awards And Certifications
                  </Link>
                </div>
              )}
            </div>

            {/* Services Mobile Accordion */}
            <div className="border-b border-slate-100 pb-2.5">
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="flex w-full items-center justify-between text-base font-semibold text-slate-900 cursor-pointer"
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180 text-[#0a3d91]" : "text-slate-400"
                  }`}
                />
              </button>
              {servicesDropdownOpen && (
                <div className="mt-2.5 space-y-2.5 pl-3 text-xs text-slate-600 border-l-2 border-[#0a3d91]/30 animate-in slide-in-from-top-1">
                  <Link href="/service1" onClick={closeMenu} className="block py-1 leading-snug hover:text-[#0a3d91]">
                    • Advocacy / Assessment / Capability Development / Recognition of Competitiveness
                  </Link>
                  <Link href="/service2" onClick={closeMenu} className="block py-1 leading-snug hover:text-[#0a3d91]">
                    • Liaison Global Expertise Technology Support / Industry Automation
                  </Link>
                  <Link href="/service3" onClick={closeMenu} className="block py-1 leading-snug hover:text-[#0a3d91]">
                    • Maintenance Software / Support IT / IoT / AI
                  </Link>
                  <Link href="/service4" onClick={closeMenu} className="block py-1 leading-snug hover:text-[#0a3d91]">
                    • TPM Software (Subscription Model)
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/activity"
              onClick={closeMenu}
              className={`block border-b border-slate-100 pb-2.5 text-base font-semibold transition-colors ${
                isActive("/activity") ? "text-[#0a3d91]" : "text-slate-900"
              }`}
            >
              Activity
            </Link>

            <Link
              href="/news"
              onClick={closeMenu}
              className={`block border-b border-slate-100 pb-2.5 text-base font-semibold transition-colors ${
                isActive("/news") ? "text-[#0a3d91]" : "text-slate-900"
              }`}
            >
              News
            </Link>

            <Link
              href="/gallery"
              onClick={closeMenu}
              className={`block border-b border-slate-100 pb-2.5 text-base font-semibold transition-colors ${
                isActive("/gallery") ? "text-[#0a3d91]" : "text-slate-900"
              }`}
            >
              Gallery
            </Link>

            <Link
              href="/training_program"
              onClick={closeMenu}
              className={`block border-b border-slate-100 pb-2.5 text-base font-semibold transition-colors ${
                isActive("/training_program") || isActive("/training-program") ? "text-[#0a3d91]" : "text-slate-900"
              }`}
            >
              Training Program
            </Link>

            <div className="pt-3 pb-6">
              <Link
                href="/contact"
                onClick={closeMenu}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0a3d91] py-3 text-sm font-semibold text-white shadow-md hover:bg-[#082d64] transition-colors"
              >
                <span>Contact us</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
