import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="py-24 px-6 bg-brand-sand overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-columns-2 gap-16 items-center">
        <div className="relative group">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[3/4] overflow-hidden rounded-sm shadow-2xl"
          >
            <img
              src="https://picsum.photos/id/42/800/1000"
              alt="Ambiente Mediterrânico"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="absolute -bottom-10 -right-10 bg-brand-ocean p-12 text-brand-sand hidden lg:block max-w-sm"
          >
            <Quote className="w-10 h-10 mb-4 opacity-50" />
            <p className="font-serif italic text-xl mb-4 leading-relaxed">
              "Passo a maior parte do meu tempo aqui no restaurante... Então, tentei criar um ambiente onde me sinta em casa."
            </p>
            <p className="uppercase tracking-widest text-xs font-semibold opacity-70">
              Maria Ana Pinto — Proprietária
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="uppercase tracking-[0.3em] text-xs font-bold text-brand-gold mb-4 block"
            >
              Tradição e Modernidade
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl text-brand-ocean leading-tight mb-8"
            >
              Uma herança de sabores <br /> à beira-mar.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-brand-ink/80 text-lg leading-relaxed max-w-xl"
            >
              <p>
                O Restaurante Entráguas é uma referência bem conhecida em Cascais pela sua excelente cozinha equilibrada e serviço acolhedor. O nome foi inspirado na localização privilegiada, onde as águas do Tejo abraçam o Atlântico.
              </p>
              <p>
                A vista sobre o oceano é uma das nossas marcas, especialmente ao final do dia, quando o horizonte se pinta com cores suaves e o céu começa a desvanecer.
              </p>
              <p>
                Com uma decoração encantadora pela intervenção de Maria Ana Pinto, o espaço reflete uma marca pessoal e calorosa, proporcionando uma atmosfera suave e sofisticada.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-brand-ocean/10">
            <div>
              <p className="text-3xl font-serif text-brand-ocean mb-1">20+</p>
              <p className="uppercase tracking-widest text-[10px] font-bold text-brand-gold">Anos de História</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-brand-ocean mb-1">4.6/5</p>
              <p className="uppercase tracking-widest text-[10px] font-bold text-brand-gold">900+ Críticas Google</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-3xl font-serif text-brand-ocean mb-1">100%</p>
              <p className="uppercase tracking-widest text-[10px] font-bold text-brand-gold">Produtos Frescos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
