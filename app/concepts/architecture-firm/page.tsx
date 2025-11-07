"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Building2, Image as ImageIcon, Layout, ArrowRight, Check, MapPin, Calendar, X, Award, Users, Globe, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticButton from "@/components/MagneticButton";

const projects = [
  { 
    id: 1, 
    name: "Modern Residence", 
    location: "Toronto, ON", 
    year: 2024, 
    type: "Residential", 
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80",
    description: "A minimalist home that blurs the line between indoor and outdoor living",
    featured: true,
    size: "4,500 sq ft"
  },
  { 
    id: 2, 
    name: "Corporate Headquarters", 
    location: "Vancouver, BC", 
    year: 2023, 
    type: "Commercial", 
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80",
    description: "Sustainable office design prioritizing natural light and employee wellness",
    featured: true,
    size: "120,000 sq ft"
  },
  { 
    id: 3, 
    name: "Cultural Center", 
    location: "Montreal, QC", 
    year: 2024, 
    type: "Cultural", 
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1400&q=80",
    description: "A landmark building celebrating local arts and community",
    featured: false,
    size: "85,000 sq ft"
  },
  { 
    id: 4, 
    name: "Luxury Condominium", 
    location: "Toronto, ON", 
    year: 2023, 
    type: "Residential", 
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80",
    description: "High-rise living redefined with panoramic city views",
    featured: false,
    size: "250 units"
  },
  { 
    id: 5, 
    name: "Innovation Hub", 
    location: "Calgary, AB", 
    year: 2024, 
    type: "Commercial", 
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80",
    description: "A collaborative workspace designed for the future of work",
    featured: false,
    size: "65,000 sq ft"
  },
  { 
    id: 6, 
    name: "Sustainable Office", 
    location: "Ottawa, ON", 
    year: 2023, 
    type: "Commercial", 
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1400&q=80",
    description: "LEED-certified building with integrated green technologies",
    featured: false,
    size: "95,000 sq ft"
  },
];

const projectTypes = Array.from(new Set(projects.map(p => p.type)));

const achievements = [
  { icon: Award, label: "Awards Won", value: "50+" },
  { icon: Users, label: "Happy Clients", value: "200+" },
  { icon: Globe, label: "Projects Worldwide", value: "150+" },
  { icon: Building2, label: "Years Experience", value: "25+" },
];

const testimonials = [
  {
    name: "Robert Chen",
    role: "CEO, Development Corp",
    text: "Their vision transformed our headquarters into a space that inspires innovation every single day.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
  },
  {
    name: "Sarah Mitchell",
    role: "Property Developer",
    text: "Working with them was a masterclass in architectural excellence. The attention to detail is extraordinary.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
  },
];

export default function ArchitectureFirmPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);

  const filteredProjects = selectedType
    ? projects.filter(p => p.type === selectedType)
    : projects;

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Premium Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-gray-950/95 backdrop-blur-xl border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="text-sm tracking-[0.3em] uppercase text-white/90 font-light">ARCHITECTS</div>
            <div className="hidden lg:flex items-center gap-10">
              <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors tracking-wider uppercase font-light">Projects</Link>
              <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors tracking-wider uppercase font-light">Studio</Link>
              <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors tracking-wider uppercase font-light">Awards</Link>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg bg-white text-gray-900 font-light tracking-wider uppercase text-sm hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Cinematic Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-gray-950 text-white overflow-hidden">
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Background Image with Parallax */}
        <motion.div style={{ y, scale, opacity }} className="absolute inset-0">
          <div className="absolute inset-0 relative">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
              alt="Architecture"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950/90 via-gray-950/70 to-gray-950/95" />
          </div>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-light mb-8 tracking-wider uppercase"
              >
                <Building2 className="w-4 h-4" />
                Architectural Excellence
              </motion.div>
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-light mb-8 leading-[0.95] tracking-tight">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="block"
                >
                  Modern
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="block font-normal"
                  style={{
                    background: "linear-gradient(135deg, #ffffff 0%, #a3a3a3 50%, #ffffff 100%)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Sophisticated
                </motion.span>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-xl md:text-2xl text-white/80 mb-12 font-light leading-relaxed"
              >
                Where vision meets precision. Creating spaces that inspire and transform communities.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-wrap gap-6"
              >
                <MagneticButton href="/contact" variant="primary" className="bg-white text-gray-900 hover:bg-gray-100">
                  View Portfolio
                </MagneticButton>
                <Link
                  href="/concepts"
                  className="px-8 py-4 rounded-lg border-2 border-white/20 text-white font-light hover:bg-white/10 transition-all backdrop-blur-sm tracking-wider uppercase text-sm"
                >
                  Back to Concepts
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02, rotate: -1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative aspect-[4/5] rounded-lg overflow-hidden border border-white/10 shadow-2xl"
              >
                <div className="relative w-full h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
                    alt="Architecture"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-xs tracking-wider uppercase">Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight className="w-5 h-5 rotate-90" />
          </motion.div>
        </motion.div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4">
                      <Icon className="w-8 h-8" />
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="text-4xl md:text-5xl font-light mb-2"
                    >
                      {achievement.value}
                    </motion.div>
                    <div className="text-sm text-white/60 uppercase tracking-wider">{achievement.label}</div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Premium Portfolio Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <div className="text-center mb-20">
              <div className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-xs font-light mb-6 tracking-wider uppercase">
                Our Work
              </div>
              <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                Each project represents our commitment to architectural excellence and innovative design.
              </p>
            </div>
          </AnimatedSection>

          {/* Filter Buttons */}
          <div className="flex items-center justify-center gap-4 mb-16 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedType(null)}
              className={`px-6 py-3 rounded-lg text-sm font-light transition-all tracking-wider uppercase ${
                selectedType === null
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Projects
            </motion.button>
            {projectTypes.map((type) => (
              <motion.button
                key={type}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedType(type)}
                className={`px-6 py-3 rounded-lg text-sm font-light transition-all tracking-wider uppercase ${
                  selectedType === type
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {type}
              </motion.button>
            ))}
          </div>

          {/* Premium Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className={`bg-gray-50 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-500 relative ${
                    project.featured ? "ring-2 ring-gray-900" : ""
                  }`}
                >
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-gray-900 text-white text-xs font-light tracking-wider uppercase rounded-full">
                      Featured
                    </div>
                  )}
                  {/* Large Image Area */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-gray-200">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full h-full relative"
                    >
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white font-light tracking-wider uppercase text-sm">View Project</span>
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-8">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3 font-light uppercase tracking-wider">
                      <MapPin className="w-3 h-3" />
                      {project.location}
                      <span className="mx-2">•</span>
                      <Calendar className="w-3 h-3" />
                      {project.year}
                    </div>
                    <h3 className="text-2xl font-light mb-2 tracking-wide">{project.name}</h3>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">{project.type}</p>
                    <p className="text-gray-600 font-light text-sm">{project.size}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Project Detail Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-6xl w-full my-8 relative shadow-2xl"
          >
            {(() => {
              const project = projects.find(p => p.id === selectedProject);
              if (!project) return null;
              return (
                <>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 z-10 p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg"
                  >
                    <X className="w-5 h-5 text-gray-700" />
                  </button>
                  <div className="relative aspect-[16/9] bg-gray-200 overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, 80vw"
                      />
                    </div>
                  </div>
                  <div className="p-12">
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-6 font-light uppercase tracking-wider">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                      <span className="mx-2">•</span>
                      <Calendar className="w-4 h-4" />
                      {project.year}
                      <span className="mx-2">•</span>
                      {project.type}
                      <span className="mx-2">•</span>
                      {project.size}
                    </div>
                    <h2 className="text-4xl font-light mb-6 tracking-wide">{project.name}</h2>
                    <p className="text-xl text-gray-600 mb-6 font-light leading-relaxed">
                      {project.description}
                    </p>
                    <p className="text-gray-600 mb-8 font-light leading-relaxed">
                      This project showcases our commitment to modern architecture, combining 
                      functionality with aesthetic excellence. The design emphasizes clean lines, 
                      natural light, and sustainable materials, creating spaces that inspire and 
                      transform the way people live and work.
                    </p>
                    <div className="flex gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 rounded-lg bg-gray-900 text-white font-light tracking-wider uppercase text-sm hover:bg-gray-800 transition-colors"
                      >
                        View Full Project
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedProject(null)}
                        className="px-8 py-4 rounded-lg border border-gray-300 text-gray-700 font-light tracking-wider uppercase text-sm hover:bg-gray-50 transition-colors"
                      >
                        Close
                      </motion.button>
                    </div>
                  </div>
                </>
              );
            })()}
          </motion.div>
        </motion.div>
      )}

      {/* Premium Testimonials */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
                Client Testimonials
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={0.2 + index * 0.1}>
                <div className="bg-white p-12 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Sparkles key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xl text-gray-700 mb-8 font-light leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-gray-200">
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
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 relative">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
            alt="Background"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection delay={0.1}>
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
              Let's Build Together
            </h2>
            <p className="text-xl text-white/80 mb-12 font-light max-w-2xl mx-auto">
              Transform your vision into architectural reality. Let's create spaces that inspire and endure.
            </p>
            <MagneticButton href="/contact" variant="primary" className="bg-white text-gray-900 hover:bg-gray-100">
              Start Your Project
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
