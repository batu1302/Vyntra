"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Rocket } from "lucide-react";
import GlassCard from "./GlassCard";

export default function HeroVisual() {
  return (
    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center">
      {/* Hauptkarte */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <GlassCard className="p-8 md:p-12 space-y-6 bg-white border border-gray-200">
          {/* Icon Grid */}
          <div className="grid grid-cols-3 gap-4">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center justify-center p-4 rounded-xl bg-[#00CED1]/10"
            >
              <Zap className="w-8 h-8 text-[#00CED1]" />
            </motion.div>
            
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="flex items-center justify-center p-4 rounded-xl bg-[#00CED1]/10"
            >
              <Sparkles className="w-8 h-8 text-[#00CED1]" />
            </motion.div>
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="flex items-center justify-center p-4 rounded-xl bg-[#00CED1]/10"
            >
              <Rocket className="w-8 h-8 text-[#00CED1]" />
            </motion.div>
          </div>

          {/* Statistiken */}
          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200">
            <div>
              <div className="text-3xl font-bold text-[#1a1a1a] mb-1">150+</div>
              <div className="text-sm text-[#6a6a6a]">Projekte</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1a1a1a] mb-1">99%</div>
              <div className="text-sm text-[#6a6a6a]">Zufriedenheit</div>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}


