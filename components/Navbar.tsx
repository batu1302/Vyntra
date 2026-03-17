"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Expertise", href: "/#expertise" },
    { label: "Kontakt", href: "/#kontakt" },
    { label: "FAQ", href: "/#faq" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white/80 backdrop-blur-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo animated={false} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#1a1a1a] hover:text-[#00CED1] transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
            <a 
              href="/#kontakt"
              className="px-6 py-2 bg-[#00CED1] text-white rounded-full hover:bg-[#00A8AB] transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              Termin buchen
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors text-[#1a1a1a]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 text-[#1a1a1a] hover:bg-gray-50 hover:text-[#00CED1] rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a 
              href="/#kontakt"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full px-6 py-2 bg-[#00CED1] text-white rounded-full hover:bg-[#00A8AB] transition-colors duration-200 shadow-sm text-center"
            >
              Termin buchen
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

