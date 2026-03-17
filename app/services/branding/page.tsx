"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollToTop from "@/components/ScrollToTop";
import MagneticButton from "@/components/MagneticButton";
import { Sparkles, Layers, Eye, Heart } from "lucide-react";

export default function BrandingPage() {
  const features = [
    {
      icon: Sparkles,
      title: "Markenidentität",
      description: "Wir entwickeln eine einzigartige Markenidentität, die Ihre Werte perfekt kommuniziert und im Gedächtnis bleibt.",
    },
    {
      icon: Layers,
      title: "Logo & Design-System",
      description: "Professionelle Logos und konsistente Design-Systeme, die Ihre Marke auf allen Touchpoints repräsentieren.",
    },
    {
      icon: Eye,
      title: "Visuelle Sprache",
      description: "Eine klare visuelle Sprache, die Ihre Zielgruppe anspricht und Vertrauen schafft.",
    },
    {
      icon: Heart,
      title: "Emotionale Verbindung",
      description: "Branding, das nicht nur schön aussieht, sondern echte emotionale Verbindungen zu Ihrer Zielgruppe schafft.",
    },
  ];

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="pt-16">
        <PageHero
          title="Branding"
          subtitle="Starke Markenidentität, die im Gedächtnis bleibt"
        />

        {/* Content Section */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-[#00CED1]/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-[#00CED1]/10">
                        <Icon className="w-6 h-6 text-[#00CED1]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-[#4a4a4a] leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-[#f5f5f5] rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-light text-[#1a1a1a] mb-6">
                Ihre <span className="text-[#00CED1]">Marke</span> ist mehr als ein Logo
              </h2>
              <p className="text-lg text-[#4a4a4a] leading-relaxed mb-6">
                Eine starke Marke ist das Fundament für langfristigen Erfolg. Sie kommuniziert Ihre Werte,
                baut Vertrauen auf und schafft emotionale Verbindungen zu Ihrer Zielgruppe.
              </p>
              <p className="text-lg text-[#4a4a4a] leading-relaxed">
                Wir entwickeln nicht nur schöne Designs, sondern komplette Markenstrategien, die Ihre
                Positionierung stärken und Ihre Zielgruppe begeistern.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[#f5f5f5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-6">
              Entwickeln Sie Ihre <span className="text-[#00CED1]">Marke</span>
            </h2>
            <p className="text-xl text-[#4a4a4a] mb-10 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam eine Markenidentität schaffen, die Ihre Vision perfekt widerspiegelt.
            </p>
            <MagneticButton href="/#kontakt" className="text-center">
              <span className="px-8 py-4 bg-[#00CED1] text-white text-lg font-semibold rounded-full hover:bg-[#00A8AB] transition-all duration-300 shadow-sm hover:shadow-md block">
                Projekt starten
              </span>
            </MagneticButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

