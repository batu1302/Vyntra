# WebDesign - Modernes Next.js Projekt

Ein professionelles Next.js Projekt mit TypeScript und Tailwind CSS, das eine moderne Web-Präsenz mit Glassmorphism-Effekten und eleganten Animationen bietet.

## 🚀 Features

- **Next.js 16** mit App Router
- **TypeScript** für typsichere Entwicklung
- **Tailwind CSS v4** für modernes Styling
- **Framer Motion** für flüssige Animationen
- **Lucide React** für moderne Icons
- **Glassmorphism** Navigation mit Blur-Effekten
- **Responsive Design** für alle Bildschirmgrößen
- **Dark Mode** Support

## 📦 Installierte Pakete

- `next` - React Framework
- `react` & `react-dom` - React Bibliotheken
- `typescript` - TypeScript Compiler
- `tailwindcss` - Utility-First CSS Framework
- `framer-motion` - Animations-Bibliothek
- `lucide-react` - Icon-Bibliothek
- `clsx` - Utility für bedingte Klassen
- `tailwind-merge` - Tailwind Klassen-Merger

## 🏗️ Projektstruktur

```
.
├── app/
│   ├── layout.tsx          # Root Layout mit Geist Sans Font
│   ├── page.tsx            # Homepage mit Hero Section
│   └── globals.css         # Globale Styles und Tailwind Config
├── components/
│   ├── Navbar.tsx          # Sticky Navigation mit Glassmorphism
│   ├── Footer.tsx          # 4-Spalten Footer Layout
│   └── Section.tsx         # Wrapper-Komponente für Sektionen
├── lib/
│   └── utils.ts            # Utility-Funktionen (cn für Klassen)
└── public/                 # Statische Assets
```

## 🎨 Design-System

### Farben
- **Primärfarbe**: Indigo 600 (`#4f46e5`)
- **Akzentfarbe**: Purple 600
- **Hintergrund (Dark)**: Slate 950 (`#020617`)
- **Text**: Gray 700 / Gray 300 (Dark Mode)

### Schriftart
- **Hauptschrift**: Geist Sans (Google Fonts)
- **Fallback**: System UI Fonts

### Komponenten

#### Navbar
- Sticky Position mit Scroll-Effekt
- Glassmorphism mit Backdrop Blur
- Mobile-optimiertes Menü
- Smooth Transitions

#### Footer
- 4-Spalten Layout (Über uns, Leistungen, Rechtliches, Kontakt)
- Social Media Links
- Responsive Grid-System

#### Section
- Einheitliche Abstände
- 3 Varianten: default, dark, gradient
- Maximale Breite von 7xl (1280px)

## 🚀 Getting Started

### Entwicklungsserver starten

```bash
npm run dev
```

Die Anwendung ist unter [http://localhost:3000](http://localhost:3000) verfügbar.

### Build für Produktion

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## 💡 Verwendung

### Neue Sektion hinzufügen

```tsx
import Section from "@/components/Section";

<Section variant="dark" id="meine-sektion">
  <h2>Meine Überschrift</h2>
  <p>Mein Inhalt</p>
</Section>
```

### Utility-Funktion cn() verwenden

```tsx
import { cn } from "@/lib/utils";

<div className={cn(
  "base-classes",
  condition && "conditional-classes"
)}>
```

## 🔧 Konfiguration

### Tailwind CSS
Die Tailwind-Konfiguration befindet sich in `app/globals.css` und nutzt die neue v4 Syntax mit `@theme inline`.

### TypeScript
TypeScript ist vollständig konfiguriert mit strikten Regeln für optimale Typsicherheit.

## 📝 Nächste Schritte

1. Inhalte für die verschiedenen Sektionen erstellen
2. Weitere Komponenten entwickeln (Cards, Buttons, etc.)
3. Framer Motion Animationen hinzufügen
4. Backend-Integration vorbereiten
5. SEO-Optimierung durchführen

## 🤝 Mitwirken

Dieses Projekt folgt Clean Code Prinzipien:
- Single Responsibility für Komponenten
- Keine Code-Duplikation
- Kleine, fokussierte Funktionen
- Zentrale Logik in Helper-Funktionen

## 📄 Lizenz

Dieses Projekt ist für den privaten und kommerziellen Gebrauch bestimmt.
