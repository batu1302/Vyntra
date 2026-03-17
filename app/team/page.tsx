"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollToTop from "@/components/ScrollToTop";
import { motion } from "framer-motion";
import { Code, Sparkles, Rocket, Users } from "lucide-react";

export default function TeamPage() {
  const teamValues = [
    {
      icon: Code,
      title: "Technische Exzellenz",
      description: "Wir bleiben immer auf dem neuesten Stand der Technologie und setzen auf bewährte Best Practices.",
    },
    {
      icon: Sparkles,
      title: "Kreative Innovation",
      description: "Jedes Projekt ist einzigartig. Wir finden kreative Lösungen, die Ihre Vision zum Leben erwecken.",
    },
    {
      icon: Rocket,
      title: "Leidenschaft für Qualität",
      description: "Perfektionismus ist kein Ziel, sondern ein Standard. Jedes Detail zählt.",
    },
    {
      icon: Users,
      title: "Kollaboration",
      description: "Wir arbeiten eng mit Ihnen zusammen, um Ergebnisse zu schaffen, die Ihre Erwartungen übertreffen.",
    },
  ];

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="pt-16">
        <PageHero
          title="Unser Team"
          subtitle="Visionäre für digitale Exzellenz"
        />

        {/* Team Member Section */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-4">
                    <span className="text-[#00CED1]">Batuhan</span> Yomralioglu
                  </h2>
                  <p className="text-xl text-[#00CED1] font-medium mb-4">
                    Lead Developer & Gründer
                  </p>
                  <p className="text-lg text-[#4a4a4a] leading-relaxed mb-6">
                    Mit 23 Jahren ist Batuhan der Visionär hinter Vyntra. Seine Leidenschaft für
                    digitale Exzellenz und sein unermüdlicher Einsatz für Perfektion treiben jedes
                    Projekt voran.
                  </p>
                  <p className="text-lg text-[#4a4a4a] leading-relaxed">
                    Als Full-Stack Developer mit Expertise in Next.js, React und modernen
                    Web-Technologien schafft er Lösungen, die nicht nur funktionieren, sondern
                    begeistern.
                  </p>
                </div>
                <div className="bg-[#f5f5f5] rounded-2xl p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-[#00CED1]/10 flex items-center justify-center">
                    <span className="text-4xl font-bold text-[#00CED1]">BY</span>
                  </div>
                  <p className="text-sm text-[#6a6a6a]">23 Jahre</p>
                </div>
              </div>
            </div>

            {/* Network Section */}
            <div className="bg-[#f5f5f5] rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-light text-[#1a1a1a] mb-6 text-center">
                Unser <span className="text-[#00CED1]">Netzwerk</span>
              </h2>
              <p className="text-lg text-[#4a4a4a] leading-relaxed text-center max-w-3xl mx-auto mb-12">
                Wir arbeiten mit einem handverlesenen Netzwerk aus Spezialisten zusammen:
                UI/UX Designer, SEO-Experten, Content-Strategen und Performance-Optimierer.
                Jedes Projekt profitiert von der Expertise des gesamten Teams.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-[#f5f5f5]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-16 text-center">
              Unsere <span className="text-[#00CED1]">Werte</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-8 rounded-2xl bg-white border border-gray-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-[#00CED1]/10">
                        <Icon className="w-6 h-6 text-[#00CED1]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">
                          {value.title}
                        </h3>
                        <p className="text-[#4a4a4a] leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

