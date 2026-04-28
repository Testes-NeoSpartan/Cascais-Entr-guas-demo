import { motion } from "motion/react";
import { MENU_DATA } from "../constants";
import { useState } from "react";

const CATEGORIES = [
  { id: 'entradas', label: 'Entradas' },
  { id: 'mariscos', label: 'Mariscos' },
  { id: 'peixe', label: 'Peixe' },
  { id: 'carne', label: 'Carne' },
  { id: 'sobremesas', label: 'Sobremesas' }
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('mariscos');

  return (
    <section id="menu" className="py-24 px-6 bg-brand-ocean text-brand-sand">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl italic mb-6"
          >
            A Nossa Carta
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-brand-sand/60 tracking-widest uppercase text-xs"
          >
            Sazonalidade · Frescura · Tradição
          </motion.p>
        </div>

        {/* Category selector */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-12 mb-20">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`text-sm uppercase tracking-[0.2em] font-medium transition-all relative pb-2 ${
                activeCategory === cat.id ? 'text-brand-gold' : 'text-brand-sand/40 hover:text-brand-sand'
              }`}
            >
              {cat.label}
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="activeUnderline"
                  className="absolute bottom-0 left-0 w-full h-px bg-brand-gold"
                />
              )}
            </button>
          ))}
        </div>

        {/* Menu items grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-x-24 gap-y-12"
        >
          {MENU_DATA[activeCategory as keyof typeof MENU_DATA].map((item, idx) => (
            <div key={idx} className="group cursor-default">
              <div className="flex justify-between items-baseline gap-4 mb-2">
                <h3 className="text-xl font-serif tracking-tight group-hover:text-brand-gold transition-colors">
                  {item.name}
                </h3>
                <div className="flex-1 border-b border-brand-sand/10 h-px mb-1.5" />
                {/* Prices are omitted in the source, but we can add a price range placeholder if needed */}
              </div>
              <p className="text-sm text-brand-sand/60 font-light italic leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </motion.div>

        <div className="mt-24 text-center">
          <p className="text-brand-sand/50 text-sm max-w-2xl mx-auto italic">
            Oferecemos uma interessante carta de vinhos, com destaque para as regiões do Alentejo e Douro, além de vinhos de todo o país.
          </p>
        </div>
      </div>
    </section>
  );
}
