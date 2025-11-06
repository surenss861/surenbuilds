"use client";

import { motion } from "framer-motion";
import MetricChip from "./MetricChip";

export default function QuickStatsBar({
  metrics,
}: {
  metrics: Array<{ label: string; value: string }>;
}) {
  return (
    <section className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-3 justify-center bg-white/5 backdrop-blur-lg border border-white/10 px-6 py-4 rounded-xl"
        >
          {metrics.map((metric, i) => (
            <MetricChip key={i} label={metric.label} value={metric.value} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}


