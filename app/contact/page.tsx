"use client";

import { motion } from "framer-motion";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to an API endpoint
    // For now, we'll just show a success message
    setSubmitted(true);
    // You can integrate with a service like Formspree, SendGrid, or your own API
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
                <select
                  id="projectType"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition-colors"
                >
                  <option value="website">New Website</option>
                  <option value="redesign">Website Redesign</option>
                  <option value="audit">Site Audit</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
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
              href="https://cal.com/suren" // Replace with your actual calendar link
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

