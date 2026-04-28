import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with placeholder overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/cascais-ocean/1920/1080"
          alt="Vista de Cascais"
          className="w-full h-full object-cover brightness-75 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-ocean/40 via-transparent to-brand-sand/80" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-brand-sand uppercase tracking-[0.4em] text-xs font-semibold mb-6 block"
        >
          Desde 2003 em Cascais
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl lg:text-9xl font-serif text-brand-sand leading-none italic"
        >
          Onde o rio encontra o Mar.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 flex flex-col items-center gap-8"
        >
          <p className="text-brand-sand/90 text-lg md:text-xl font-light max-w-2xl text-balance">
            Uma referência bem conhecida na costa de Cascais pela sua excelente cozinha equilibrada e serviço acolhedor.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-brand-sand text-brand-ocean font-medium uppercase tracking-widest hover:bg-brand-gold hover:text-white transition-all shadow-lg">
              Ver Menu
            </button>
            <button className="px-8 py-4 border border-brand-sand text-brand-sand font-medium uppercase tracking-widest hover:bg-brand-sand hover:text-brand-ocean transition-all">
              A Nossa História
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-sand opacity-60"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
