"use client";

import { motion } from "framer-motion";
import { TrendingUp, Zap, Users } from "lucide-react";

interface KPICardProps {
    label: string;
    value: string;
    icon?: React.ReactNode;
    delay?: number;
}

export default function KPICards({ kpis }: { kpis: Array<{ label: string; value: string }> }) {
    const icons = [<TrendingUp className="w-5 h-5" />, <Zap className="w-5 h-5" />, <Users className="w-5 h-5" />];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {kpis.map((kpi, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group"
                >
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-[#1B73FF]/20 flex items-center justify-center text-[#1B73FF] group-hover:scale-110 transition-transform">
                            {icons[i] || <TrendingUp className="w-5 h-5" />}
                        </div>
                        <div className="text-sm text-white/60 font-medium">{kpi.label}</div>
                    </div>
                    <div className="text-3xl font-bold text-[#1B73FF]">
                        {kpi.value}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

