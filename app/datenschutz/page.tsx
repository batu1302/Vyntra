import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von Vyntra gemäß DSGVO.",
};

export default function DatenschutzPage() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="pt-16">
        <PageHero title="Datenschutzerklärung" />

        {/* Content Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 text-[#4a4a4a] leading-relaxed">
                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">1. Datenschutz auf einen Blick</h2>
                  
                  <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3 mt-6">Allgemeine Hinweise</h3>
                  <p>
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                    personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                    Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                  </p>

                  <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3 mt-6">Datenerfassung auf dieser Website</h3>
                  <p>
                    <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
                    <br />
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
                    Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser
                    Datenschutzerklärung entnehmen.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">2. Hosting</h2>
                  <p>
                    Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die
                    personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den
                    Servern des Hosters gespeichert.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                  
                  <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3 mt-6">Datenschutz</h3>
                  <p>
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
                    Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den
                    gesetzlichen Datenschutzbestimmungen sowie dieser Datenschutzerklärung.
                  </p>

                  <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3 mt-6">Hinweis zur verantwortlichen Stelle</h3>
                  <p>
                    Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                    <br />
                    <br />
                    Batuhan Yomralioglu
                    <br />
                    Balingen
                    <br />
                    Deutschland
                    <br />
                    <br />
                    E-Mail:{" "}
                    <a
                      href="mailto:batuhanbthn@hotmail.com"
                      className="text-[#00CED1] hover:text-[#00A8AB] transition-colors"
                    >
                      batuhanbthn@hotmail.com
                    </a>
                    <br />
                    Telefon:{" "}
                    <a
                      href="tel:+4915128013700"
                      className="text-[#00CED1] hover:text-[#00A8AB] transition-colors"
                    >
                      +49 151 280 13 700
                    </a>
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">4. Kontaktformular</h2>
                  <p>
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus
                    dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks
                    Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                    Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">5. Ihre Rechte</h2>
                  <p>
                    Sie haben jederzeit das Recht, Auskunft über Ihre bei uns gespeicherten
                    personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
                    Datenverarbeitung zu erhalten. Außerdem haben Sie ein Recht, die Berichtigung,
                    Löschung oder Sperrung dieser Daten zu verlangen.
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

