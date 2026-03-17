import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollToTop from "@/components/ScrollToTop";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Karriere - Werden Sie Teil unseres Teams",
  description: "Wir suchen immer Talente. Initiativbewerbungen sind willkommen. Werden Sie Teil unseres Teams für digitale Exzellenz.",
};

export default function KarrierePage() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="pt-16">
        <PageHero
          title="Karriere"
          subtitle="Werden Sie Teil unseres Teams"
        />

        {/* Content Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-light text-[#1a1a1a] mb-6">
                Wir suchen immer <span className="text-[#00CED1]">Talente</span>
              </h2>
              <p className="text-lg text-[#4a4a4a] leading-relaxed mb-8 max-w-2xl mx-auto">
                Bei Vyntra sind wir immer auf der Suche nach talentierten Menschen, die unsere
                Leidenschaft für digitale Exzellenz teilen. Ob Sie ein erfahrener Developer,
                ein kreativer Designer oder ein strategischer Denker sind – wir freuen uns auf
                Ihre Initiativbewerbung.
              </p>
              <div className="bg-[#f5f5f5] rounded-2xl p-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Mail className="w-6 h-6 text-[#00CED1]" />
                  <a
                    href="mailto:batuhanbthn@hotmail.com"
                    className="text-xl font-semibold text-[#00CED1] hover:text-[#00A8AB] transition-colors"
                  >
                    batuhanbthn@hotmail.com
                  </a>
                </div>
                <p className="text-[#6a6a6a]">
                  Senden Sie uns Ihre Bewerbung mit Portfolio und Lebenslauf
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

