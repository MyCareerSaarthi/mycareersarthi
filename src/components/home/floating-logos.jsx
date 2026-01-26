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

const FloatingLogos = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="relative"
    >
      <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />

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
                className={`${placement} flex items-center justify-center `}
              >
                <motion.div
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="group relative w-full aspect-[1/0.92] "
                >
                  {/* Shadow layer */}
                  <div
                    className="absolute inset-0 translate-y-2"
                    style={{
                      clipPath:
                        "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
                      background: "rgba(99, 102, 241, 0.15)",
                      filter: "blur(12px)",
                    }}
                  />

                  {/* Main hexagon background */}
                  <div
                    className="absolute inset-0 transition-all duration-300"
                    style={{
                      clipPath:
                        "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
                      background:
                        "linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(241,245,249,0.98) 100%)",
                      boxShadow:
                        "0 8px 32px rgba(99, 102, 241, 0.12), 0 2px 8px rgba(0,0,0,0.06)",
                    }}
                  />

                  {/* Border overlay */}
                  <div
                    className="absolute inset-0 transition-all duration-300 group-hover:opacity-100 opacity-80 "
                    style={{
                      clipPath:
                        "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
                      background:
                        "linear-gradient(135deg, rgba(99,102,241,0.25) 0%, rgba(139,92,246,0.15) 50%, rgba(99,102,241,0.25) 100%)",
                      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      maskComposite: "xor",
                      WebkitMaskComposite: "xor",
                      padding: "2px",
                    }}
                  />

                  {/* Inner highlight */}
                  <div
                    className="absolute inset-[2px] "
                    style={{
                      clipPath:
                        "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.3) 30%, transparent 60%)",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Logo container */}
                  <div
                    className="absolute inset-[10%] flex items-center justify-center"
                    style={{
                      clipPath:
                        "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
                    }}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={160}
                      height={80}
                      className="object-contain w-[90%] h-full opacity-85 group-hover:opacity-100 transition-opacity duration-300"
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
