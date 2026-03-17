"use client";

import { motion } from "framer-motion";
import { Mail, Phone, User, MapPin } from "lucide-react";
import GlassCard from "./GlassCard";

export default function ContactCard() {
  const contactDetails = [
    {
      icon: User,
      label: "Name",
      value: "Batuhan Yomralioglu",
      href: null,
    },
    {
      icon: Mail,
      label: "E-Mail",
      value: "batuhanbthn@hotmail.com",
      href: "mailto:batuhanbthn@hotmail.com",
    },
    {
      icon: Phone,
      label: "Telefon",
      value: "+49 151 280 13 700",
      href: "tel:+4915128013700",
    },
    {
      icon: MapPin,
      label: "Standort",
      value: "Berlin, Deutschland",
      href: null,
    },
  ];

  return (
    <GlassCard className="p-8 h-full bg-white border border-gray-200" hover={false}>
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">
            Direkter Kontakt
          </h3>
          <p className="text-[#4a4a4a]">
            Lassen Sie uns über Ihr Projekt sprechen
          </p>
        </div>

        <div className="space-y-6">
          {contactDetails.map((detail, index) => {
            const Icon = detail.icon;
            const content = (
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="p-3 rounded-xl bg-[#00CED1]/10 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-[#00CED1]" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-[#6a6a6a] mb-1">
                    {detail.label}
                  </div>
                  <div className="text-[#1a1a1a] font-medium group-hover:text-[#00CED1] transition-colors">
                    {detail.value}
                  </div>
                </div>
              </div>
            );

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {detail.href ? (
                  <a href={detail.href}>{content}</a>
                ) : (
                  <div>{content}</div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="pt-6 border-t border-gray-200">
          <p className="text-sm text-[#6a6a6a] leading-relaxed">
            ⚡ Antwortzeit: Innerhalb von 24 Stunden
            <br />
            🎯 Kostenlose Erstberatung verfügbar
          </p>
        </div>
      </div>
    </GlassCard>
  );
}

