import { PhoneCall } from "lucide-react";
import { Mail } from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-900/20 pt-16 pb-8 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
          {/* Left Column - Brand Info, Description, Socials & Contact */}
          <div className="md:col-span-6 flex flex-col items-start">
            {/* Logo Image */}
            <a href="#" className="mb-4 block">
              <img
                src="https://thetiny.site/storage/settings/only-logo-6ace061694a80.png"
                alt="The Tiny Site Logo"
                className="w-2/4 object-contain"
              />
            </a>

            {/* Description */}
            <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed max-w-sm mb-6">
              The fastest way to shorten, track, and manage your URLs. Trusted
              by thousands of marketers, developers, and businesses across
              Bangladesh and beyond.
            </p>

            {/* Social Icons (Using react-icons with actual links) */}
            <div className="flex items-center gap-3 mb-6">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#5B21F3]/10 text-slate-600 hover:text-[#5B21F3] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>

              {/* LinkedIn (Placeholder link since specific URL wasn't provided) */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#5B21F3]/10 text-slate-600 hover:text-[#5B21F3] flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-3.5 h-3.5" />
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#5B21F3]/10 text-slate-600 hover:text-[#5B21F3] flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="w-3.5 h-3.5" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/+8801880811048"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#5B21F3]/10 text-slate-600 hover:text-[#5B21F3] flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-600">
              <a
                href="mailto:banglapuzzle@gmail.com"
                className="flex items-center gap-2.5 hover:text-[#5B21F3] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#5B21F3]" />
                <span>banglapuzzle@gmail.com</span>
              </a>
              <a
                href="tel:+8801880811048"
                className="flex items-center gap-2.5 hover:text-[#5B21F3] transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#5B21F3]" />
                <span>+880 1880-811048</span>
              </a>
            </div>
          </div>

          {/* Right Columns - Product & Company Links */}
          <div className="md:col-span-6 grid grid-cols-2 gap-8 md:pl-12">
            {/* Product Column */}
            <div className="flex flex-col items-start gap-3">
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                PRODUCT
              </span>
              <a
                href="#"
                className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Features
              </a>
              <a
                href="#"
                className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                API Docs
              </a>
              <a
                href="#"
                className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Browser Extension
              </a>
              <a
                href="#"
                className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Report Malicious URL
              </a>
            </div>

            {/* Company Column */}
            <div className="flex flex-col items-start gap-3">
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                COMPANY
              </span>
              <a
                href="#"
                className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Terms & Conditions
              </a>
              <a
                href="#"
                className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Cookie Policy
              </a>
              <a
                href="#"
                className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Refund Policy
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar Divider & Copyright Links */}
        <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <p>
            © 2026{" "}
            <a href="#" className="text-[#5B21F3] hover:underline">
              Bangla Puzzle Limited
            </a>
            . All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a href="#" className="hover:text-slate-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-600 transition-colors">
              Refund Policy
            </a>
            <a href="#" className="hover:text-slate-600 transition-colors">
              Cookie Policy
            </a>
            <a href="#" className="hover:text-slate-600 transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
