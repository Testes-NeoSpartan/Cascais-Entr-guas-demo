import { motion } from "motion/react";
import { Anchor, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "O Restaurante", href: "#sobre" },
    { name: "Menu", href: "#menu" },
    { name: "Contactos", href: "#contactos" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-brand-ocean"
        >
          <Anchor className="w-8 h-8" />
          <span className="text-2xl font-serif tracking-tight font-bold">Entráguas</span>
        </motion.div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium uppercase tracking-widest text-brand-ocean hover:text-brand-gold transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden text-brand-ocean" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-brand-sand border-t border-brand-ocean/10 py-8 px-6 flex flex-col items-center gap-6 md:hidden shadow-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-serif italic text-brand-ocean"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
