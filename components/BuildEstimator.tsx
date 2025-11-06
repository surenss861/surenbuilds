"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, ArrowRight } from "lucide-react";

export default function BuildEstimator() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: "",
    description: "",
    timeline: "",
    budget: "",
    email: "",
  });
  const [estimate, setEstimate] = useState<{
    timeline: string;
    budget: string;
    nextSteps: string[];
  } | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
      return;
    }

    setIsProcessing(true);
    // Simulate AI processing
    // Estimate based on project type and complexity
    let timeline = "5-7 days";
    let budget = "$1,250 CAD";
    
    if (formData.projectType === "Web App" || formData.description.toLowerCase().includes("e-commerce") || formData.description.toLowerCase().includes("saas")) {
      timeline = "10-14 days";
      budget = "$2,500 - $5,000 CAD";
    } else if (formData.timeline === "ASAP" && formData.description.length > 100) {
      timeline = "3-5 days";
      budget = "$1,250 - $2,500 CAD";
    }

    setTimeout(() => {
      setEstimate({
        timeline: timeline,
        budget: budget,
        nextSteps: [
          "Book a 15-min discovery call",
          "Confirm scope & timeline",
          "Start development (under 10 hours)",
        ],
      });
      setIsProcessing(false);
      setStep(5);
    }, 2000);
  };

  const reset = () => {
    setIsOpen(false);
    setStep(1);
    setFormData({
      projectType: "",
      description: "",
      timeline: "",
      budget: "",
      email: "",
    });
    setEstimate(null);
  };

  return (
    <>
      {/* Primary CTA Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1B73FF] text-white font-medium shadow-[0_0_40px_rgba(27,115,255,.25)] hover:bg-[#0E4BDB] transition-colors"
      >
        <Sparkles className="w-4 h-4" />
        Estimate my build
        <ArrowRight className="w-4 h-4" />
      </button>

      {/* Estimator Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={reset}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-[80]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[90vh] overflow-y-auto z-[90] bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 md:p-12 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Build Estimator</h2>
                    <p className="text-sm text-white/60">Step {step} of 4</p>
                  </div>
                </div>
                <button
                  onClick={reset}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-white/80" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <label className="block text-white font-medium mb-2">
                        What type of project?
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {["Website", "Web App", "E-commerce", "SaaS Platform"].map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData({ ...formData, projectType: type })}
                            className={`p-4 rounded-xl border transition-all ${
                              formData.projectType === type
                                ? "bg-blue-500/20 border-blue-400 text-white"
                                : "bg-white/5 border-white/10 text-white/70 hover:border-white/20"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <label className="block text-white font-medium mb-2">
                        Describe your project
                      </label>
                      <textarea
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="E.g., 'E-commerce site for handmade jewelry with payment integration, inventory management, and customer accounts...'"
                        className="w-full h-32 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-blue-400/50 transition-colors resize-none"
                        required
                      />
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <label className="block text-white font-medium mb-2">
                        Ideal timeline?
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {["ASAP", "1-2 months", "3+ months"].map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setFormData({ ...formData, timeline: time })}
                            className={`p-4 rounded-xl border transition-all ${
                              formData.timeline === time
                                ? "bg-blue-500/20 border-blue-400 text-white"
                                : "bg-white/5 border-white/10 text-white/70 hover:border-white/20"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <label className="block text-white font-medium mb-2">
                        Budget range?
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {["$1,250 CAD", "$2,500 - $5,000 CAD", "$5,000+ CAD", "Flexible"].map((budget) => (
                          <button
                            key={budget}
                            type="button"
                            onClick={() => setFormData({ ...formData, budget: budget })}
                            className={`p-4 rounded-xl border transition-all ${
                              formData.budget === budget
                                ? "bg-blue-500/20 border-blue-400 text-white"
                                : "bg-white/5 border-white/10 text-white/70 hover:border-white/20"
                            }`}
                          >
                            {budget}
                          </button>
                        ))}
                      </div>
                      <div className="mt-6">
                        <label className="block text-white font-medium mb-2">Email</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-blue-400/50 transition-colors"
                          required
                        />
                      </div>
                    </motion.div>
                  )}

                  {step === 5 && estimate && (
                    <motion.div
                      key="step5"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="space-y-6"
                    >
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                          <Sparkles className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Your Estimate</h3>
                        <p className="text-white/60">Based on your requirements</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                          <div className="text-sm text-white/60 mb-1">Timeline</div>
                          <div className="text-2xl font-bold text-white">{estimate.timeline}</div>
                        </div>
                        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                          <div className="text-sm text-white/60 mb-1">Budget Range</div>
                          <div className="text-2xl font-bold text-white">{estimate.budget}</div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="text-white font-semibold">Next Steps</h4>
                        {estimate.nextSteps.map((step, i) => (
                          <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                            <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">
                              {i + 1}
                            </div>
                            <span className="text-white/80">{step}</span>
                          </div>
                        ))}
                      </div>

                      <a
                        href={`/contact?email=${encodeURIComponent(formData.email)}&project=${encodeURIComponent(formData.description)}`}
                        className="block w-full px-6 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-center hover:from-blue-600 hover:to-cyan-600 transition-all"
                      >
                        Book Discovery Call
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>

                {step < 5 && (
                  <div className="flex gap-4 pt-4">
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={() => setStep(step - 1)}
                        className="flex-1 px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors"
                      >
                        Back
                      </button>
                    )}
                    <button
                      type="submit"
                      disabled={isProcessing || (step === 1 && !formData.projectType) || (step === 2 && !formData.description) || (step === 3 && !formData.timeline) || (step === 4 && (!formData.budget || !formData.email))}
                      className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:from-blue-600 hover:to-cyan-600 transition-all flex items-center justify-center gap-2"
                    >
                      {isProcessing ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Analyzing...
                        </>
                      ) : step === 4 ? (
                        "Get Estimate"
                      ) : (
                        "Continue"
                      )}
                    </button>
                  </div>
                )}
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

