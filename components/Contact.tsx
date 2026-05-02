"use client";

import React from "react";

import { Globe, Send, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <h2 className="font-serif text-4xl md:text-5xl leading-tight bg-brand inline-block px-8 py-4 font-bold">
          I am Frontend Developer, based at Noida, working currently at{" "}
          <br className="hidden md:block" /> Addicor Technologies Pvt Ltd
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-0 overflow-hidden rounded-sm border border-brand shadow-2xl">
        <div className="p-12 md:p-20 bg-white">
          <h3 className="font-bold uppercase tracking-[0.3em] text-xs mb-10">
            Drop a line
          </h3>
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            {["Your Name", "Email", "Subject", "Message"].map((label) => (
              <div key={label}>
                <label className="text-xs uppercase font-bold text-gray-400 mb-2 block">
                  {label}
                </label>
                {label === "Message" ? (
                  <textarea className="w-full border-b border-gray-200 outline-none focus:border-brand py-2 transition-colors min-h-[100px]" />
                ) : (
                  <input className="w-full border-b border-gray-200 outline-none focus:border-brand py-2 transition-colors" />
                )}
              </div>
            ))}
            <button className="px-10 py-4 bg-black text-white font-bold text-sm tracking-widest uppercase hover:bg-brand hover:text-navy transition-all">
              Send Message
            </button>
          </form>
        </div>

        <div className="p-12 md:p-20 bg-brand text-navy">
          <h3 className="font-bold uppercase tracking-[0.3em] text-xs mb-10">
            Contact Me
          </h3>
          <div className="space-y-4 mb-16">
            <p className="flex items-center gap-4 text-sm font-bold">
              <MapPin size={18} /> Q-1104, Amrapali Silicon City, Sector-76,
              Noida - 201301.
            </p>
            <p className="flex items-center gap-4 text-sm font-bold">
              <Phone size={18} /> +91 89482 31210
            </p>
            <p className="flex items-center gap-4 text-sm font-bold">
              <Mail size={18} /> docoderahul@gmail.com
            </p>
          </div>

          <div className="mb-12">
            <button className="w-full px-8 py-5 border-2 border-navy/20 font-bold uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-all cursor-pointer">
              Download Resume
            </button>
          </div>

          <div className="flex gap-4">
            {[
              { icon: <Send size={22} />, url: "https://linkedin.com" },
              { icon: <Globe size={22} />, url: "https://github.com" },
            ].map((s, i) => (
              <Link
                key={i}
                target="blank"
                href={s.url}
                className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
              >
                {s.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
