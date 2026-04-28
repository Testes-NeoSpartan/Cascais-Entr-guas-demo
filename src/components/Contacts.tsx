import { motion } from "motion/react";
import { Phone, Mail, MapPin, Instagram, Facebook, Clock } from "lucide-react";
import { CONTACTS } from "../constants";

export default function Contacts() {
  return (
    <section id="contactos" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl text-brand-ocean mb-4"
            >
              Esperamos por si.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 mb-12"
            >
              <div className="flex text-brand-gold">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i} className="text-xl">★</span>
                ))}
              </div>
              <span className="text-sm font-bold text-brand-ocean">4.6/5</span>
              <span className="text-sm text-brand-ocean/60">(900+ críticas no Google)</span>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-12 text-left">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full border border-brand-ocean/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h4 className="uppercase tracking-widest text-[10px] font-bold text-brand-gold mb-2">Localização</h4>
                  <p className="text-lg text-brand-ink/80">{CONTACTS.address}</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full border border-brand-ocean/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h4 className="uppercase tracking-widest text-[10px] font-bold text-brand-gold mb-2">Reservas</h4>
                  <p className="text-lg text-brand-ink/80">{CONTACTS.phone}</p>
                  <p className="text-lg text-brand-ink/80">{CONTACTS.mobile}</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full border border-brand-ocean/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h4 className="uppercase tracking-widest text-[10px] font-bold text-brand-gold mb-2">Horário</h4>
                  <p className="text-sm text-brand-ink/70 leading-relaxed max-w-xs">{CONTACTS.hours}</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full border border-brand-ocean/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h4 className="uppercase tracking-widest text-[10px] font-bold text-brand-gold mb-2">Email</h4>
                  <p className="text-lg text-brand-ink/80 text-wrap break-all">{CONTACTS.email}</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full h-[450px] bg-brand-sand/50 rounded-sm overflow-hidden border border-brand-ocean/5 shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.6826133405!2d-9.4385191!3d38.6956437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ec4192ff6215b%3A0xc0656623a902d6da!2sCascais%20Entr%C3%A1guas!5e0!3m2!1spt-PT!2spt!4v1714300000000!5m2!1spt-PT!2spt"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
