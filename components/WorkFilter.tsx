"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function WorkFilter() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
      <Link href="/work/personal">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-8 py-4 rounded-full font-medium transition-all ${
            pathname === "/work/personal"
              ? "bg-[#1B73FF] text-white shadow-[0_0_40px_rgba(27,115,255,.25)]"
              : "border border-white/20 text-white hover:bg-white/10 hover:border-white/40"
          }`}
        >
          Personal Work
        </motion.button>
      </Link>
      <Link href="/work/client">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-8 py-4 rounded-full font-medium transition-all ${
            pathname === "/work/client"
              ? "bg-[#1B73FF] text-white shadow-[0_0_40px_rgba(27,115,255,.25)]"
              : "border border-white/20 text-white hover:bg-white/10 hover:border-white/40"
          }`}
        >
          Client Work
        </motion.button>
      </Link>
    </div>
  );
}
