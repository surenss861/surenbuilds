"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Calendar, Heart, Award, ArrowRight, Check, Clock, Users, X, Star, Shield, Leaf } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticButton from "@/components/MagneticButton";

const services = [
  { 
    id: 1, 
    name: "Signature Facial Rejuvenation", 
    duration: "90 min", 
    price: 450, 
    description: "Advanced anti-aging treatment with diamond microdermabrasion", 
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&q=80",
    featured: true
  },
  { 
    id: 2, 
    name: "Body Contouring & Sculpting", 
    duration: "120 min", 
    price: 750, 
    description: "Non-invasive body transformation with advanced technology", 
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80",
    featured: true
  },
  { 
    id: 3, 
    name: "Laser Hair Removal", 
    duration: "60 min", 
    price: 350, 
    description: "Permanent hair reduction with latest laser technology", 
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=80",
    featured: false
  },
  { 
    id: 4, 
    name: "Botox & Dermal Fillers", 
    duration: "45 min", 
    price: 600, 
    description: "Expert anti-aging treatments by certified specialists", 
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1200&q=80",
    featured: false
  },
  { 
    id: 5, 
    name: "Therapeutic Massage", 
    duration: "90 min", 
    price: 280, 
    description: "Deep tissue relaxation and stress relief", 
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80",
    featured: false
  },
  { 
    id: 6, 
    name: "Comprehensive Skin Analysis", 
    duration: "60 min", 
    price: 200, 
    description: "Advanced skin health assessment with personalized plan", 
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&q=80",
    featured: false
  },
];

const testimonials = [
  { 
    name: "Victoria Sterling", 
    role: "Executive Director",
    text: "An absolute sanctuary. The treatments are transformative and the atmosphere is pure luxury. I've never felt more pampered.", 
    rating: 5, 
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80" 
  },
  { 
    name: "Isabella Chen", 
    role: "Fashion Designer",
    text: "The results speak for themselves. My skin has never looked better. This is true luxury wellness.", 
    rating: 5, 
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80" 
  },
  { 
    name: "Amelia Rose", 
    role: "Entrepreneur",
    text: "Every visit feels like a retreat. The attention to detail and personalized care is unmatched.", 
    rating: 5, 
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80" 
  },
];

const trustIndicators = [
  { icon: Award, label: "Award Winning", value: "15+ Awards" },
  { icon: Users, label: "Satisfied Clients", value: "10K+" },
  { icon: Shield, label: "Certified Experts", value: "100%" },
  { icon: Leaf, label: "Natural Products", value: "Organic" },
];

export default function MedSpaPage() {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5F7] via-white to-[#FFF5F7] text-gray-900">
      {/* Premium Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-pink-100/50"
      >
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-light tracking-[0.3em] text-gray-800">SERENITY</div>
            <div className="hidden lg:flex items-center gap-10">
              <Link href="#" className="text-sm font-light tracking-wider uppercase text-gray-600 hover:text-pink-600 transition-colors">Services</Link>
              <Link href="#" className="text-sm font-light tracking-wider uppercase text-gray-600 hover:text-pink-600 transition-colors">About</Link>
              <Link href="#" className="text-sm font-light tracking-wider uppercase text-gray-600 hover:text-pink-600 transition-colors">Wellness</Link>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-light tracking-wider uppercase text-sm hover:from-pink-600 hover:to-rose-600 transition-all shadow-lg shadow-pink-500/25"
            >
              Book Appointment
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Cinematic Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Parallax */}
        <motion.div style={{ y, opacity }} className="absolute inset-0">
          <div className="absolute inset-0 relative">
            <Image
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&q=80"
              alt="Luxury Spa"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-pink-900/40 via-pink-800/30 to-pink-900/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10" />
          </div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => {
            const width = typeof window !== 'undefined' ? window.innerWidth : 1920;
            const height = typeof window !== 'undefined' ? window.innerHeight : 1080;
            return (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-pink-200/30 rounded-full"
                initial={{
                  x: Math.random() * width,
                  y: Math.random() * height,
                }}
                animate={{
                  y: [null, Math.random() * height],
                  opacity: [0.2, 0.5, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: Math.random() * 4 + 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-light mb-8 tracking-wider uppercase"
            >
              <Sparkles className="w-4 h-4" />
              Medical Spa Excellence
            </motion.div>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-light mb-8 leading-[0.95] text-white tracking-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="block"
              >
                Serene
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="block font-normal"
                style={{
                  background: "linear-gradient(135deg, #fce7f3 0%, #fbcfe8 50%, #f9a8d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Luxury
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Where wellness meets luxury. Experience transformative treatments in an atmosphere of pure tranquility.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-wrap items-center justify-center gap-6"
            >
              <MagneticButton href="/contact" variant="primary" className="bg-white text-pink-600 hover:bg-pink-50">
                Book Consultation
              </MagneticButton>
              <Link
                href="/concepts"
                className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-light hover:bg-white/10 transition-all backdrop-blur-sm tracking-wider uppercase text-sm"
              >
                Back to Concepts
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-xs tracking-wider uppercase">Discover</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight className="w-5 h-5 rotate-90" />
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustIndicators.map((indicator, index) => {
              const Icon = indicator.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pink-100 to-rose-100 mb-4">
                      <Icon className="w-8 h-8 text-pink-600" />
                    </div>
                    <div className="text-2xl md:text-3xl font-light mb-2 text-gray-800">{indicator.value}</div>
                    <div className="text-sm text-gray-600 uppercase tracking-wider">{indicator.label}</div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Premium Services Section */}
      <section className="py-32 bg-gradient-to-b from-white via-pink-50/30 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <div className="text-center mb-20">
              <div className="inline-block px-4 py-1.5 rounded-full bg-pink-100 text-pink-600 text-xs font-light mb-6 tracking-wider uppercase">
                Our Services
              </div>
              <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight text-gray-800">
                Transformative Treatments
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                Experience the pinnacle of wellness and beauty in our serene sanctuary.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className={`bg-white rounded-2xl border overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                    service.featured ? "border-pink-200 shadow-lg" : "border-pink-100"
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  {service.featured && (
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-light tracking-wider uppercase rounded-full">
                      Featured
                    </div>
                  )}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full h-full relative"
                    >
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        {service.duration}
                      </div>
                      <span className="text-3xl font-light text-pink-600">${service.price}</span>
                    </div>
                    <h3 className="text-2xl font-light mb-3 text-gray-800 tracking-wide">{service.name}</h3>
                    <p className="text-gray-600 mb-6 font-light leading-relaxed">{service.description}</p>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 text-white font-light hover:from-pink-600 hover:to-rose-600 transition-all tracking-wider uppercase text-sm"
                    >
                      Book Now
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Booking Modal */}
      {selectedService && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl p-10 max-w-lg w-full relative shadow-2xl"
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
            <div className="mb-6">
              <h3 className="text-3xl font-light mb-2 pr-8">
                {services.find(s => s.id === selectedService)?.name}
              </h3>
              <p className="text-gray-600 font-light">
                {services.find(s => s.id === selectedService)?.description}
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-light mb-3 text-gray-700 uppercase tracking-wider">Select Date</label>
                <input
                  type="date"
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 font-light"
                />
              </div>
              <div>
                <label className="block text-sm font-light mb-3 text-gray-700 uppercase tracking-wider">Select Time</label>
                <select
                  value={bookingTime}
                  onChange={(e) => setBookingTime(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 font-light"
                >
                  <option value="">Choose a time</option>
                  <option value="9:00 AM">9:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="3:00 PM">3:00 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
                  <option value="5:00 PM">5:00 PM</option>
                </select>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 text-white font-light tracking-wider uppercase hover:from-pink-600 hover:to-rose-600 transition-all shadow-lg"
              >
                Confirm Booking
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Premium Testimonials */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight text-gray-800">
                Client Stories
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={0.2 + index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-pink-50/50 to-white p-10 rounded-2xl border border-pink-100 shadow-sm"
                >
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Heart key={i} className="w-5 h-5 fill-pink-400 text-pink-400" />
                    ))}
                  </div>
                  <p className="text-lg text-gray-700 mb-8 font-light leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-pink-200">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <div className="font-light text-lg">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 relative">
          <Image
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&q=80"
            alt="Background"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection delay={0.1}>
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
              Begin Your Journey
            </h2>
            <p className="text-xl text-pink-50 mb-12 font-light max-w-2xl mx-auto">
              Experience the luxury of transformative wellness in a sanctuary designed for your complete relaxation.
            </p>
            <MagneticButton href="/contact" variant="primary" className="bg-white text-pink-600 hover:bg-pink-50">
              Schedule Consultation
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
