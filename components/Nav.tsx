"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Nav() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/50 backdrop-blur"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image
              src="/brand/s-logo.svg"
              alt="S"
              width={28}
              height={28}
              priority
            />
            <span className="font-semibold tracking-wide">surenbuilds</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm opacity-90">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={isActive ? "text-white" : "text-white/60 hover:text-white"}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="rounded-full bg-[#1B73FF] px-4 py-2 font-medium shadow-[0_0_40px_rgba(27,115,255,.25)] hover:bg-[#0E4BDB] transition-colors"
            >
              Estimate
            </Link>
          </nav>
      </div>
    </motion.nav>
  );
}

