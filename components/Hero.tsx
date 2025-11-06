"use client";

import { motion, useReducedMotion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import MagneticButton from "./MagneticButton";
import BuildEstimator from "./BuildEstimator";
import IntroSequence from "./IntroSequence";
import ScrollHint from "./ScrollHint";

export default function Hero() {
    const prefersReduced = useReducedMotion();
    const containerRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [currentTagline, setCurrentTagline] = useState(0);
    const taglines = ["inevitable", "engineered", "refined", "precision-built"];
    
    // Rotate tagline every 6-8 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTagline((prev) => (prev + 1) % taglines.length);
        }, 7000);
        return () => clearInterval(interval);
    }, [taglines.length]);
    
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Parallax for S logo
    const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

    // Mouse parallax for logo
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 15 });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 15 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!logoRef.current) return;
            const rect = logoRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const x = (e.clientX - centerX) / rect.width;
            const y = (e.clientY - centerY) / rect.height;
            mouseX.set(x);
            mouseY.set(y);
            setMousePosition({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Text animation variants
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            },
        }),
    };

    const words = ["World-class", "websites", "&", "apps", "that", "feel"];
    const lastWord = "inevitable";

    return (
        <section ref={containerRef} id="hero" className="relative overflow-hidden min-h-screen flex items-center noise-overlay vignette">
            {/* Intro Sequence Animation */}
            <IntroSequence />
            
            {/* Scroll Hint */}
            <ScrollHint />

            {/* Clean background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0D0F18] to-[#0A0A0A]" />
            
            {/* Subtle radial glow behind logo */}
            <div className="absolute right-1/4 top-1/2 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-[rgba(27,115,255,.08)] rounded-full blur-3xl pointer-events-none" />

            <div id="heroContent" className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 pb-20 pt-10 md:grid-cols-2 md:pt-16 w-full relative" style={{ zIndex: 10 }}>
                {/* Text Content */}
                <div>
                    <motion.h1
                        id="heroText"
                        initial="hidden"
                        animate="visible"
                        className="text-4xl font-semibold md:text-6xl lg:text-7xl leading-tight tracking-[-0.03em]"
                    >
                        {words.map((word, i) => (
                            <motion.span
                                key={i}
                                variants={textVariants}
                                custom={i}
                                className="inline-block mr-2"
                            >
                                {word}
                            </motion.span>
                        ))}
                        <AnimatePresence mode="wait">
                        <motion.span
                            key={currentTagline}
                            variants={textVariants}
                            custom={words.length + 1}
                            className="relative inline-block text-[#1B73FF]"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                backgroundPosition: ["0%", "100%", "0%"],
                            }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{
                                opacity: { duration: 0.5 },
                                y: { duration: 0.5 },
                                backgroundPosition: {
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear",
                                },
                            }}
                            style={{
                                background: "linear-gradient(90deg, #1B73FF 0%, #3AA0FF 50%, #8B5CF6 100%, #1B73FF 0%)",
                                backgroundSize: "200% 100%",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            {taglines[currentTagline]}
                        </motion.span>
                        </AnimatePresence>
                        <motion.span
                            variants={textVariants}
                            custom={words.length + 2}
                            className="inline-block"
                        >
                            .
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-4 max-w-xl text-white/70 text-lg md:text-xl font-light tracking-tight"
                    >
                        Precision. Design. Engineering.
                    </motion.p>

                    <motion.div
                        variants={textVariants}
                        custom={words.length + 3}
                        initial="hidden"
                        animate="visible"
                        className="mt-8 flex flex-col sm:flex-row gap-4"
                    >
                        <BuildEstimator />
                        <motion.a
                            href="#work"
                            className="group relative rounded-full border border-white/20 px-6 py-3 text-center font-medium hover:bg-white/10 transition-all overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {/* Light sweep effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                animate={{
                                    x: ["-100%", "200%"],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />
                            <span className="relative z-10">See work</span>
                        </motion.a>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-6 text-sm text-white/50"
                    >
                        From $1,250 CAD • Under 10 hours
                    </motion.p>
                </div>

                {/* Animated S Logo with Mouse Parallax */}
                <motion.div
                    id="heroLogo"
                    ref={logoRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="relative flex items-center justify-center"
                    style={{ 
                        y, 
                        scale,
                        perspective: "1000px",
                        zIndex: 10,
                    }}
                >
                    <motion.div
                        animate={
                            prefersReduced
                                ? {}
                                : {
                                    rotateZ: [-6, 6, -6],
                                    y: [0, -10, 0],
                                }
                        }
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        style={{
                            rotateX,
                            rotateY,
                            transformStyle: "preserve-3d",
                            filter: "drop-shadow(0 25px 80px rgba(27,115,255,.35))",
                            animation: "logoGlow 5s ease-in-out infinite",
                        }}
                        className="mx-auto w-[280px] md:w-[360px]"
                    >
                        {/* Glassmorphic glow layer */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-[#1B73FF]/20 via-transparent to-[#8B5CF6]/20 rounded-full blur-2xl"
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.5, 0.7, 0.5],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                        <Image
                            src="/brand/s-logo.svg"
                            alt="S"
                            width={360}
                            height={360}
                            priority
                            className="w-full h-auto relative z-10"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
