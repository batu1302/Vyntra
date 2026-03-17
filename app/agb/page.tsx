import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen",
  description: "Allgemeine Geschäftsbedingungen (AGB) von Vyntra.",
};

export default function AGBPage() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="pt-16">
        <PageHero title="Allgemeine Geschäftsbedingungen" />

        {/* Content Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 text-[#4a4a4a] leading-relaxed">
                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">1. Geltungsbereich</h2>
                  <p>
                    Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Leistungen der
                    Vyntra, erbracht durch Batuhan Yomralioglu. Abweichende, entgegenstehende oder
                    ergänzende AGB des Kunden werden nicht Vertragsbestandteil, es sei denn, ihrer
                    Geltung wird ausdrücklich schriftlich zugestimmt.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">2. Vertragsgegenstand</h2>
                  <p>
                    Vertragsgegenstand sind die im jeweiligen Angebot oder Auftrag beschriebenen
                    Leistungen im Bereich Webdesign, Webentwicklung, SEO-Optimierung und Branding.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">3. Leistungserbringung</h2>
                  <p>
                    Die Leistungen werden nach bestem Wissen und Gewissen sowie nach den aktuellen
                    technischen Standards erbracht. Der Auftragnehmer behält sich vor, die
                    Leistungen ganz oder teilweise durch Dritte erbringen zu lassen.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">4. Preise und Zahlung</h2>
                  <p>
                    Alle Preise verstehen sich in Euro zzgl. der gesetzlichen Mehrwertsteuer. Die
                    Zahlung erfolgt nach Rechnungsstellung innerhalb von 14 Tagen, sofern nicht
                    abweichend vereinbart.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">5. Urheberrecht</h2>
                  <p>
                    Mit vollständiger Zahlung der vereinbarten Vergütung erhält der Kunde das
                    Nutzungsrecht an den erstellten Werken für den vereinbarten Verwendungszweck.
                    Das Urheberrecht verbleibt beim Auftragnehmer, soweit nicht ausdrücklich
                    etwas anderes vereinbart wurde.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">6. Gewährleistung</h2>
                  <p>
                    Gewährleistungsansprüche des Kunden bestehen nur bei Verletzung wesentlicher
                    Vertragspflichten. Die Gewährleistungsfrist beträgt 12 Monate ab Ablieferung
                    der Leistung.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">7. Haftung</h2>
                  <p>
                    Der Auftragnehmer haftet nur bei Vorsatz und grober Fahrlässigkeit. Die Haftung
                    für leichte Fahrlässigkeit ist ausgeschlossen, es sei denn, es handelt sich um
                    die Verletzung einer wesentlichen Vertragspflicht.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">8. Schlussbestimmungen</h2>
                  <p>
                    Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Gerichtsstand ist,
                    soweit der Kunde Kaufmann ist, der Geschäftssitz des Auftragnehmers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

