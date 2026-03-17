# Setup Anleitung

## ⚠️ Wichtiger Hinweis zu Node.js

Ihr System verwendet aktuell **Node.js v16.15.1**, aber Next.js 16 benötigt mindestens **Node.js v20.9.0**.

### Node.js aktualisieren

#### Option 1: NVM (Node Version Manager) - Empfohlen
```bash
# NVM für Windows installieren von: https://github.com/coreybutler/nvm-windows
nvm install 20
nvm use 20
```

#### Option 2: Direkt von nodejs.org
Laden Sie die neueste LTS-Version (v20.x oder höher) von [nodejs.org](https://nodejs.org/) herunter und installieren Sie diese.

### Nach der Node.js-Aktualisierung

```bash
# Überprüfen Sie die Node.js-Version
node --version  # sollte >= 20.9.0 sein

# Im Projektverzeichnis
cd "C:\Users\BatuhanYomralioglu\OneDrive - GLOMAS Deutschland GmbH\Desktop\WebDesign"

# Abhängigkeiten neu installieren (optional, aber empfohlen)
npm install

# Entwicklungsserver starten
npm run dev
```

## ✅ Was wurde eingerichtet

### 1. Projekt-Initialisierung
- ✅ Next.js 16 mit App Router
- ✅ TypeScript Konfiguration
- ✅ Tailwind CSS v4
- ✅ ESLint Setup

### 2. Zusätzliche Pakete
- ✅ framer-motion (Animationen)
- ✅ lucide-react (Icons)
- ✅ clsx (Klassen-Utilities)
- ✅ tailwind-merge (Tailwind-Merger)

### 3. Komponenten erstellt
- ✅ `components/Navbar.tsx` - Sticky Navigation mit Glassmorphism
- ✅ `components/Footer.tsx` - 4-Spalten Footer
- ✅ `components/Section.tsx` - Section Wrapper
- ✅ `lib/utils.ts` - Utility-Funktionen

### 4. Konfiguration
- ✅ `app/globals.css` - Tailwind mit Custom Colors (Indigo, Slate-950)
- ✅ `app/layout.tsx` - Geist Sans Font
- ✅ `app/page.tsx` - Homepage mit Platzhaltern

## 🎨 Design-Features

### Navigation (Navbar)
- Glassmorphism-Effekt mit Backdrop Blur
- Sticky Position mit Scroll-Effekt
- Mobile-responsives Menü
- Indigo-600 als Akzentfarbe

### Footer
- 4-Spalten Layout:
  1. Über uns
  2. Leistungen
  3. Rechtliches
  4. Kontakt
- Social Media Icons
- Slate-950 Hintergrund

### Section Komponente
- Einheitliche Paddings/Margins
- 3 Varianten: `default`, `dark`, `gradient`
- Responsive Container (max-w-7xl)

## 🚀 Erste Schritte nach Node.js-Update

1. **Entwicklungsserver starten:**
   ```bash
   npm run dev
   ```
   Öffnen Sie [http://localhost:3000](http://localhost:3000)

2. **Projekt-Build testen:**
   ```bash
   npm run build
   ```

3. **Produktionsserver starten:**
   ```bash
   npm start
   ```

## 📝 Nächste Entwicklungsschritte

1. **Content hinzufügen**
   - Hero Section ausarbeiten
   - Über-uns Sektion füllen
   - Leistungen detaillieren
   - Projekte/Portfolio hinzufügen

2. **Animationen implementieren**
   - Framer Motion für Scroll-Animationen
   - Fade-in Effekte für Sektionen
   - Hover-Animationen für Cards

3. **Weitere Komponenten**
   - Button-Komponente
   - Card-Komponente
   - Form-Komponenten
   - Modal/Dialog

4. **Funktionalität**
   - Kontaktformular
   - Routing für Unterseiten
   - API-Integration
   - CMS-Anbindung

## 🐛 Troubleshooting

### "Unsupported engine" Fehler
**Ursache:** Node.js Version zu alt  
**Lösung:** Aktualisieren Sie Node.js auf Version 20 oder höher (siehe oben)

### Module nicht gefunden
**Lösung:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Tailwind Styles werden nicht angewendet
**Überprüfen Sie:**
1. Ist `@import "tailwindcss";` in `app/globals.css`?
2. Ist `globals.css` in `app/layout.tsx` importiert?
3. Ist `@tailwindcss/postcss` in `postcss.config.mjs`?

## 📚 Dokumentation

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

## 💡 Tipps

1. **Clean Code beachten:**
   - Komponenten klein halten
   - Single Responsibility Prinzip
   - Keine Code-Duplikation
   - Helper-Funktionen nutzen

2. **Performance:**
   - Next.js Image Component verwenden
   - Lazy Loading für schwere Komponenten
   - CSS-in-JS vermeiden (Tailwind nutzen)

3. **Accessibility:**
   - Semantic HTML nutzen
   - ARIA Labels für Icons
   - Keyboard Navigation testen

Viel Erfolg mit Ihrem Projekt! 🚀

