/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-brand-sand selection:bg-brand-gold selection:text-white">
      <Navbar />
      
      <AnimatePresence>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
          <About />
          <Menu />
          <Contacts />
        </motion.main>
      </AnimatePresence>

      <Footer />
      
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-gold z-[60] origin-left"
        style={{ scaleX }}
      />
    </div>
  );
}
