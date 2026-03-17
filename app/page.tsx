import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import HeroVisual from "@/components/HeroVisual";
import SocialProof from "@/components/SocialProof";
import BentoGrid from "@/components/BentoGrid";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import ContactCard from "@/components/ContactCard";
import FAQ from "@/components/FAQ";
import GlassCard from "@/components/GlassCard";
import MouseGlow from "@/components/MouseGlow";
import SmoothScroll from "@/components/SmoothScroll";
import AnimatedBackground from "@/components/AnimatedBackground";
import ParticleSystem from "@/components/ParticleSystem";
import MagneticButton from "@/components/MagneticButton";
import ParallaxSection from "@/components/ParallaxSection";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Luxury Effects */}
      <ParticleSystem />
      <MouseGlow />
      <SmoothScroll />
      <AnimatedBackground />
      
      <Navbar />
      
      <main id="main-content" className="pt-16 relative z-10">
        {/* Hero Section - 2 Spalten */}
        <Section variant="default" className="min-h-screen py-48 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Links: Text & Buttons */}
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 rounded-full bg-[#00CED1]/10 border border-[#00CED1]/30 text-[#00CED1] text-sm font-medium mb-4">
                ✨ Premium Web-Lösungen
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-[1.1]">
                <span className="text-[#00CED1]">
                  Digitale Exzellenz
                </span>
                <br />
                <span className="text-[#1a1a1a] font-extralight">
                  neu definiert
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-[#4a4a4a] leading-relaxed max-w-xl">
                Wir entwickeln High-Performance Websites, die nicht nur beeindrucken, 
                sondern messbare Ergebnisse liefern.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <MagneticButton
                  href="#kontakt"
                  className="text-center"
                  magneticStrength={0.4}
                >
                  <span className="px-8 py-4 bg-[#00CED1] text-white text-lg font-semibold rounded-full hover:bg-[#00A8AB] transition-all duration-300 shadow-sm hover:shadow-md block">
                    Projekt starten
                  </span>
                </MagneticButton>
                <MagneticButton
                  href="#expertise"
                  className="text-center"
                  magneticStrength={0.4}
                >
                  <span className="px-8 py-4 border-2 border-[#00CED1] text-[#00CED1] bg-white text-lg font-semibold rounded-full hover:bg-[#00CED1]/5 transition-all duration-300 block">
                    Expertise ansehen
                  </span>
                </MagneticButton>
              </div>

              {/* Mini Stats */}
              <div className="flex gap-8 pt-8">
                <div>
                  <div className="text-4xl font-bold text-[#1a1a1a]">150+</div>
                  <div className="text-sm text-[#6a6a6a]">Projekte</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#1a1a1a]">5 Jahre</div>
                  <div className="text-sm text-[#6a6a6a]">Erfahrung</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#1a1a1a]">99%</div>
                  <div className="text-sm text-[#6a6a6a]">Zufrieden</div>
                </div>
              </div>
            </div>

            {/* Rechts: 3D Visual Element */}
            <div className="hidden lg:block">
              <HeroVisual />
            </div>
          </div>
        </Section>

        {/* Social Proof - Logo Leiste */}
        <Section variant="default" className="py-0">
          <SocialProof />
        </Section>

        {/* Expertise - Bento Grid */}
        <Section id="expertise" variant="default" className="py-48 bg-[#f5f5f5]">
          <ParallaxSection speed={0.3}>
            <div className="text-center mb-24 space-y-6">
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-[#1a1a1a]">
                <span className="text-[#00CED1]">Lösungen</span>, die bewegen
              </h2>
              <p className="text-xl md:text-2xl font-light text-[#4a4a4a] max-w-3xl mx-auto">
                Mit modernsten Technologien und bewährten Strategien bringen wir 
                Ihr Business auf das nächste Level.
              </p>
            </div>
          </ParallaxSection>
          
          <BentoGrid />
        </Section>

        {/* Spacer für Premium-Gefühl */}
        <div className="h-64" />

        {/* Kontaktformular */}
        <Section id="kontakt" variant="default" className="py-48 bg-white">
          <ParallaxSection speed={0.2}>
            <div className="text-center mb-24 space-y-6">
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-[#1a1a1a]">
                Lassen Sie uns <span className="text-[#00CED1]">sprechen</span>
              </h2>
              <p className="text-xl md:text-2xl font-light text-[#4a4a4a] max-w-2xl mx-auto">
                Erzählen Sie mir von Ihrem Projekt. Ich melde mich innerhalb von 24 Stunden.
              </p>
            </div>
          </ParallaxSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Links: Kontaktformular */}
            <GlassCard className="p-8 md:p-12">
              <ContactForm />
            </GlassCard>

            {/* Rechts: Kontaktkarte */}
            <ContactCard />
          </div>
        </Section>

        {/* Spacer */}
        <div className="h-64" />

        {/* Call-to-Action */}
        <Section id="cta" variant="default" className="py-48 bg-[#f5f5f5]">
          <CTASection />
        </Section>

        {/* Spacer */}
        <div className="h-64" />

        {/* FAQ */}
        <Section id="faq" variant="default" className="py-48 bg-white">
          <div className="max-w-4xl mx-auto">
            <ParallaxSection speed={0.2}>
              <div className="text-center mb-24 space-y-6">
                <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-[#1a1a1a]">
                  <span className="text-[#00CED1]">Häufige</span> Fragen
                </h2>
                <p className="text-xl md:text-2xl font-light text-[#4a4a4a]">
                  Alles, was Sie über unsere Arbeitsweise wissen müssen.
                </p>
              </div>
            </ParallaxSection>
            
            <FAQ />
          </div>
        </Section>

        {/* Spacer vor Footer */}
        <div className="h-64" />
      </main>
      
      <Footer />
    </div>
  );
}
