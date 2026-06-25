"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { title: "Portfolio", url: "#portfolio" },
  { title: "About", url: "#about" },
  { title: "Contact", url: "#contact" },
];

function smoothScroll(url: string) {
  if (url.startsWith("#")) {
    const el = document.querySelector(url);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[999] flex w-full items-center border-b border-brand-border bg-brand-cream/95 backdrop-blur-sm lg:min-h-18 lg:px-[5%]">
      <div className="size-full lg:flex lg:items-center lg:justify-between">
        {/* Top bar */}
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); setIsMobileMenuOpen(false); }}
            aria-label="Artisan Brands - back to top"
          >
            <img
              src="/content/artisan_brands_logo.png"
              alt="Artisan Brands"
              className="h-28 w-auto"
            />
          </a>

          {/* Hamburger */}
          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <motion.span className="my-[3px] h-0.5 w-6 bg-brand-charcoal" animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"} variants={topLineVariants} />
            <motion.span className="my-[3px] h-0.5 w-6 bg-brand-charcoal" animate={isMobileMenuOpen ? "open" : "closed"} variants={middleLineVariants} />
            <motion.span className="my-[3px] h-0.5 w-6 bg-brand-charcoal" animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"} variants={bottomLineVariants} />
          </button>
        </div>

        {/* Nav links */}
        <motion.div
          variants={{ open: { height: "var(--height-open, 100dvh)" }, close: { height: "var(--height-closed, 0)" } }}
          initial="close"
          exit="close"
          animate={isMobileMenuOpen ? "open" : "close"}
          transition={{ duration: 0.4 }}
          className="overflow-hidden px-[5%] lg:flex lg:items-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
        >
          {navLinks.map(({ title, url }) => (
            <a
              key={url}
              href={url}
              onClick={(e) => { e.preventDefault(); smoothScroll(url); setIsMobileMenuOpen(false); }}
              className="block py-3 text-sm font-medium text-brand-muted hover:text-brand-charcoal transition-colors first:pt-7 lg:px-4 lg:py-2 first:lg:pt-2"
            >
              {title}
            </a>
          ))}
          <div className="mt-6 flex flex-col items-center gap-4 pb-8 lg:ml-4 lg:mt-0 lg:flex-row lg:pb-0">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); smoothScroll("#contact"); setIsMobileMenuOpen(false); }}
              className="btn-primary w-full lg:w-auto text-center"
            >
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
}

const topLineVariants = {
  open: { translateY: 8, transition: { delay: 0.1 } },
  rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
  closed: { translateY: 0, rotate: 0, transition: { duration: 0.2 } },
};
const middleLineVariants = {
  open: { width: 0, transition: { duration: 0.1 } },
  closed: { width: "1.5rem", transition: { delay: 0.3, duration: 0.2 } },
};
const bottomLineVariants = {
  open: { translateY: -8, transition: { delay: 0.1 } },
  rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
  closed: { translateY: 0, rotate: 0, transition: { duration: 0.2 } },
};
