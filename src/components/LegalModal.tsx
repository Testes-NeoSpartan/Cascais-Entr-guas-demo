import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

export default function LegalModal({ isOpen, onClose, title, content }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-ocean/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-brand-sand w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col shadow-2xl"
          >
            <div className="p-6 border-b border-brand-ocean/10 flex justify-between items-center">
              <h2 className="text-2xl font-serif italic text-brand-ocean">{title}</h2>
              <button onClick={onClose} className="text-brand-ocean hover:text-brand-gold transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-8 overflow-y-auto text-brand-ink/80 leading-relaxed text-sm">
              {content}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
