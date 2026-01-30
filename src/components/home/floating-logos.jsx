"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const alumniThriveLogos = [
  { src: "/home/alumni-logo/godaddy.svg", alt: "GoDaddy" },
  { src: "/home/alumni-logo/acro.png", alt: "Acro" },
  { src: "/home/alumni-logo/citibank.svg", alt: "CitiBank" },
  { src: "/home/alumni-logo/coforge.svg", alt: "Coforge" },
  { src: "/home/alumni-logo/epikdoc.png", alt: "Epikdoc" },
  { src: "/home/alumni-logo/nagarro.svg", alt: "Nagarro" },
  { src: "/home/alumni-logo/tata-power.svg", alt: "Tata Power" },
];

const hexagonClipPath =
  "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)";

const FloatingLogos = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="relative"
    >
      <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10 blur-3xl rounded-full" />

      <div className="relative mx-auto w-full max-w-xl">
        <div className="grid grid-cols-6 gap-4 sm:gap-5">
          {alumniThriveLogos.map((logo, idx) => {
            const placement = [
              "col-start-2 col-span-2",
              "col-start-4 col-span-2",
              "col-start-1 col-span-2",
              "col-start-3 col-span-2",
              "col-start-5 col-span-2",
              "col-start-2 col-span-2",
              "col-start-4 col-span-2",
            ][idx];

            return (
              <motion.div
                key={logo.alt}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`${placement} flex items-center justify-center`}
              >
                <motion.div
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="group relative w-full aspect-[1/0.92]"
                >
                  {/* Soft shadow */}
                  <div
                    className="absolute inset-0 translate-y-2"
                    style={{
                      clipPath: hexagonClipPath,
                    }}
                  >
                    <div className="w-full h-full bg-slate-400/10 dark:bg-slate-900/40 blur-lg" />
                  </div>

                  {/* Main hexagon background */}
                  <div
                    className="absolute inset-0 transition-all duration-300"
                    style={{
                      clipPath: hexagonClipPath,
                    }}
                  >
                    {/* Light mode: soft white gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:hidden" />
                    {/* Dark mode: soft dark gradient - easy on eyes */}
                    <div className="absolute inset-0 hidden dark:block bg-gradient-to-br from-slate-800/90 via-slate-800/95 to-slate-900/90" />
                  </div>

                  {/* Subtle border glow */}
                  <div
                    className="absolute inset-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
                    style={{
                      clipPath: hexagonClipPath,
                      background:
                        "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.1) 50%, rgba(99,102,241,0.15) 100%)",
                      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      maskComposite: "xor",
                      WebkitMaskComposite: "xor",
                      padding: "1.5px",
                    }}
                  />

                  {/* Inner subtle highlight - only light mode */}
                  <div
                    className="absolute inset-[2px] dark:hidden"
                    style={{
                      clipPath: hexagonClipPath,
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.2) 25%, transparent 50%)",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Dark mode inner subtle glow */}
                  <div
                    className="absolute inset-[2px] hidden dark:block"
                    style={{
                      clipPath: hexagonClipPath,
                      background:
                        "linear-gradient(180deg, rgba(148,163,184,0.08) 0%, transparent 40%)",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Logo container */}
                  <div
                    className="absolute inset-[12%] flex items-center justify-center"
                    style={{
                      clipPath: hexagonClipPath,
                    }}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={160}
                      height={80}
                      className="object-contain w-[85%] h-[85%] opacity-80 group-hover:opacity-100 transition-all duration-300 dark:brightness-110 dark:contrast-110"
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default FloatingLogos;
