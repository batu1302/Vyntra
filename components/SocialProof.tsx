"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Cpu, Globe, Activity, Sparkles } from "lucide-react";

const companies = [
  { icon: Zap, name: "FastTech" },
  { icon: Shield, name: "SecureNet" },
  { icon: Cpu, name: "TechCorp" },
  { icon: Globe, name: "GlobalNet" },
  { icon: Activity, name: "DataFlow" },
  { icon: Sparkles, name: "Innovation Co" },
];

export default function SocialProof() {
  return (
    <div className="py-16 border-y border-gray-200 bg-white">
      <div className="text-center mb-12">
        <p className="text-sm text-[#6a6a6a] font-medium">
          Vertraut von zukunftsorientierten Unternehmen
        </p>
      </div>
      
      <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
        {companies.map((company, index) => {
          const Icon = company.icon;
          return (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Icon className="w-10 h-10 text-gray-300 group-hover:text-[#00CED1] transition-all duration-300" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

