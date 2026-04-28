import { Anchor } from "lucide-react";
import { useState } from "react";
import LegalModal from "./LegalModal";
import { CONTACTS } from "../constants";

export default function Footer() {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const privacyContent = (
    <div className="space-y-4">
      <p>A sua privacidade é importante para nós. É política do Restaurante Entráguas respeitar a sua privacidade em relação a qualquer informação que possamos recolher.</p>
      <p>Apenas solicitamos informações pessoais quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento.</p>
      <p>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</p>
    </div>
  );

  const termsContent = (
    <div className="space-y-4">
      <p>Ao aceder ao site Restaurante Entráguas, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis.</p>
      <p>O uso deste site é para fins de informação sobre os nossos serviços e reservas.</p>
      <p>Os conteúdos presentes no site (imagens, textos, design) são propriedade exclusiva do Restaurante Entráguas.</p>
    </div>
  );

  return (
    <footer className="bg-brand-ink text-brand-sand/40 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex items-center gap-3 text-brand-sand mb-8 opacity-80">
          <Anchor className="w-6 h-6" />
          <span className="text-xl font-serif italic tracking-tight uppercase">Entráguas</span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-center md:text-left w-full border-t border-white/5 pt-12 text-[10px] uppercase tracking-widest font-semibold mb-12">
          <div>
            <h5 className="text-brand-sand mb-4">Localização</h5>
            <a 
              href="https://www.google.com/maps/place/Cascais+Entr%C3%A1guas/@38.6956437,-9.4385191,18.67z/data=!4m6!3m5!1s0xd1ec4192ff6215b:0xc0656623a902d6da!8m2!3d38.6955541!4d-9.4372179!16s%2Fg%2F1thxxh5c?entry=ttu&g_ep=EgoyMDI2MDQyNi4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-brand-gold transition-colors"
            >
              <p>Cascais, Portugal</p>
              <p>Av. Diana Spencer</p>
            </a>
          </div>
          <div>
            <h5 className="text-brand-sand mb-4">Contacto</h5>
            <p>{CONTACTS.phone}</p>
            <p>{CONTACTS.mobile}</p>
          </div>
          <div className="md:text-right">
            <h5 className="text-brand-sand mb-4">Legal</h5>
            <p onClick={() => setModalType('privacy')} className="cursor-pointer hover:text-brand-gold transition-colors">Política de Privacidade</p>
            <p onClick={() => setModalType('terms')} className="cursor-pointer hover:text-brand-gold transition-colors">Termos e Condições</p>
          </div>
        </div>

        <div className="text-[10px] uppercase tracking-[0.4em] opacity-40">
          © {new Date().getFullYear()} Restaurante Entráguas. Todos os direitos reservados.
        </div>
      </div>

      <LegalModal 
        isOpen={modalType === 'privacy'} 
        onClose={() => setModalType(null)} 
        title="Política de Privacidade" 
        content={privacyContent} 
      />
      <LegalModal 
        isOpen={modalType === 'terms'} 
        onClose={() => setModalType(null)} 
        title="Termos e Condições" 
        content={termsContent} 
      />
    </footer>
  );
}
