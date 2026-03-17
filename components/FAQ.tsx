"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Wie lange dauert die Umsetzung?",
    answer: "In der Regel 2 bis 4 Wochen, abhängig vom Projektumfang. Bei kleineren Projekten können wir auch schneller liefern, größere Enterprise-Lösungen benötigen entsprechend mehr Zeit.",
  },
  {
    question: "Ist die Seite für Google optimiert?",
    answer: "Ja, durch High-Performance Code und SEO-Best-Practices. Wir setzen auf Next.js für optimale Ladezeiten, strukturierte Daten, Meta-Tags und eine saubere technische Umsetzung für beste Rankings.",
  },
  {
    question: "Bieten Sie auch Wartung an?",
    answer: "Ja, wir lassen Sie nach dem Launch nicht allein. Unsere Wartungspakete umfassen regelmäßige Updates, Security-Patches, Performance-Optimierungen und technischen Support.",
  },
  {
    question: "Was kostet ein Projekt?",
    answer: "Maßgeschneiderte Performance-Upgrades starten bereits bei 950€, während ein vollständiges Business-System bei ca. 1.950€ liegt – abgesichert durch unsere Speed-Garantie: Erreichen wir keinen Google-Lighthouse-Score von 90+, erhalten Sie sofort 20% Rabatt auf die gesamte Projektsumme.",
  },
  {
    question: "Kann ich die Inhalte später selbst ändern?",
    answer: "Absolut! Wir setzen auf moderne Content-Management-Systeme oder bieten intuitive Admin-Bereiche, damit Sie jederzeit selbstständig Änderungen vornehmen können – ganz ohne Programmierkenntnisse.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="rounded-2xl bg-white border border-gray-200 overflow-hidden hover:border-[#00CED1]/50 transition-colors duration-300"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-8 py-6 flex items-center justify-between text-left group"
          >
            <span className="text-lg md:text-xl font-semibold text-[#1a1a1a] pr-8 group-hover:text-[#00CED1] transition-colors duration-300">
              {faq.question}
            </span>
            <div className="flex-shrink-0">
              {openIndex === index ? (
                <Minus className="w-6 h-6 text-[#00CED1]" />
              ) : (
                <Plus className="w-6 h-6 text-[#6a6a6a] group-hover:text-[#00CED1] transition-colors duration-300" />
              )}
            </div>
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6 text-[#4a4a4a] leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

