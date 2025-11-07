"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, Suspense, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronDown } from "lucide-react";

const projectTypes = [
  { value: "website", label: "New Website" },
  { value: "redesign", label: "Website Redesign" },
  { value: "audit", label: "Site Audit" },
  { value: "consultation", label: "Consultation" },
  { value: "other", label: "Other" },
];

function ContactForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    projectType: "website",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const email = searchParams?.get("email");
    const project = searchParams?.get("project");
    const service = searchParams?.get("service");
    
    if (email || project || service) {
      setFormData((prev) => ({
        ...prev,
        email: email || prev.email,
        message: project || prev.message,
        projectType: service || prev.projectType,
      }));
    }
  }, [searchParams]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const selectedProjectType = projectTypes.find(pt => pt.value === formData.projectType) || projectTypes[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          {searchParams?.get("service") && (
            <div className="mb-4 p-4 rounded-lg bg-[#1B73FF]/10 border border-[#1B73FF]/30">
              <p className="text-sm text-[#1B73FF] font-medium">
                📋 Interested in: {searchParams.get("service")?.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
              </p>
            </div>
          )}
          <p className="text-xl text-white/70 mb-12">
            Let's discuss your project and how I can help you achieve your goals.
          </p>

          {submitted ? (
            <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-8 text-center">
              <h2 className="text-2xl font-semibold mb-2 text-green-400">Thank you!</h2>
              <p className="text-white/70">
                I'll get back to you within 24 hours. In the meantime, feel free to book a call below.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" suppressHydrationWarning>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                  Project Type
                </label>
                <div className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition-colors flex items-center justify-between text-left"
                  >
                    <span>{selectedProjectType.label}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-white/60 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-50 w-full mt-2 rounded-lg bg-[#0A0A0A] border border-white/10 shadow-2xl overflow-hidden"
                      >
                        {projectTypes.map((type) => (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, projectType: type.value });
                              setIsDropdownOpen(false);
                            }}
                            className={`w-full px-4 py-3 text-left hover:bg-white/10 transition-colors ${
                              formData.projectType === type.value
                                ? "bg-white/10 text-white"
                                : "text-white/70"
                            }`}
                          >
                            {type.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          )}

          <div className="mt-12 p-8 rounded-2xl border border-white/10 bg-white/5 text-center">
            <h2 className="text-2xl font-semibold mb-4">Prefer a Call?</h2>
            <p className="text-white/70 mb-6">
              Book a 15-minute discovery call to discuss your project in detail.
            </p>
            <a
              href="https://calendly.com/surensureshkumar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Book a Call
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ContactForm />
    </Suspense>
  );
}

