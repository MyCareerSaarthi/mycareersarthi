"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const alumniThriveLogos = [
  { src: "/home/alumni-logo/godaddy.svg", alt: "GoDaddy" },
  { src: "/home/alumni-logo/acro.svg", alt: "Acro" },
  { src: "/home/alumni-logo/citibank.svg", alt: "CitiBank" },
  { src: "/home/alumni-logo/coforge.svg", alt: "Coforge" },
  { src: "/home/alumni-logo/epikdoc.svg", alt: "Epikdoc" },
  { src: "/home/alumni-logo/nagarro.svg", alt: "Nagarro" },
  { src: "/home/alumni-logo/tata-power.svg", alt: "Tata Power" },
];

const borderColors = [
  "from-primary to-purple-500",
  "from-blue-500 to-cyan-500",
  "from-emerald-500 to-teal-500",
  "from-amber-500 to-orange-500",
  "from-rose-500 to-pink-500",
  "from-violet-500 to-purple-500",
  "from-indigo-500 to-blue-500",
];

const lineColors = [
  { start: "rgb(139, 92, 246)", end: "rgb(168, 85, 247)" },
  { start: "rgb(59, 130, 246)", end: "rgb(6, 182, 212)" },
  { start: "rgb(16, 185, 129)", end: "rgb(20, 184, 166)" },
  { start: "rgb(245, 158, 11)", end: "rgb(249, 115, 22)" },
  { start: "rgb(244, 63, 94)", end: "rgb(236, 72, 153)" },
  { start: "rgb(139, 92, 246)", end: "rgb(168, 85, 247)" },
  { start: "rgb(99, 102, 241)", end: "rgb(59, 130, 246)" },
];

const getCardPosition = (idx, containerWidth, containerHeight) => {
  const angle = (idx * (360 / 7) - 90) * (Math.PI / 180);
  const radius = Math.min(containerWidth, containerHeight) * 0.38;
  const centerX = containerWidth / 2;
  const centerY = containerHeight / 2;
  const cardOffset = 55; // Half of card size

  return {
    x: centerX + radius * Math.cos(angle) - cardOffset,
    y: centerY + radius * Math.sin(angle) - cardOffset,
    baseX: centerX + radius * Math.cos(angle),
    baseY: centerY + radius * Math.sin(angle),
  };
};

const FloatingLogos = () => {
  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState({
    width: 500,
    height: 480,
  });
  const [cardOffsets, setCardOffsets] = useState(
    alumniThriveLogos.map(() => ({ x: 1, y: 1 })),
  );

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleDrag = (idx, info) => {
    setCardOffsets((prev) => {
      const newOffsets = [...prev];
      newOffsets[idx] = { x: info.offset.x, y: info.offset.y };
      return newOffsets;
    });
  };

  const handleDragEnd = (idx) => {
    setCardOffsets((prev) => {
      const newOffsets = [...prev];
      newOffsets[idx] = { x: 0, y: 0 };
      return newOffsets;
    });
  };

  const centerX = containerSize.width / 2;
  const centerY = containerSize.height / 2;

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full max-w-lg h-[400px] sm:h-[480px]"
    >
      {/* SVG connecting lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
        style={{ zIndex: 1 }}
      >
        <defs>
          {lineColors.map((color, idx) => (
            <linearGradient
              key={`grad-${idx}`}
              id={`string-grad-${idx}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor={color.start} stopOpacity="0.9" />
              <stop offset="100%" stopColor={color.end} stopOpacity="0.6" />
            </linearGradient>
          ))}
        </defs>

        {/* Connecting strings that stretch with cards */}
        {alumniThriveLogos.map((_, idx) => {
          const pos = getCardPosition(
            idx,
            containerSize.width,
            containerSize.height,
          );

          // Calculate direction from center to card
          const dirX = pos.baseX - centerX;
          const dirY = pos.baseY - centerY;
          const distance = Math.sqrt(dirX * dirX + dirY * dirY);

          // String connects to the inner edge of the card (30px from card center toward hub)
          const edgeOffset = 45;
          const cardEdge = {
            x: pos.baseX - (dirX / distance) * edgeOffset + cardOffsets[idx].x,
            y: pos.baseY - (dirY / distance) * edgeOffset + cardOffsets[idx].y,
          };

          // Calculate control point for curved string effect
          const midX = (centerX + cardEdge.x) / 2;
          const midY = (centerY + cardEdge.y) / 2;
          const tension = Math.sqrt(
            cardOffsets[idx].x ** 2 + cardOffsets[idx].y ** 2,
          );
          const sag = Math.max(0, 20 - tension * 0.15); // String sags when relaxed

          return (
            <motion.path
              key={`string-${idx}`}
              d={`M ${centerX} ${centerY} Q ${midX} ${midY + sag} ${cardEdge.x} ${cardEdge.y}`}
              stroke={`url(#string-grad-${idx})`}
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
            />
          );
        })}

        {/* Center hub - rendered last so it's on top of strings */}
        <motion.circle
          cx={centerX}
          cy={centerY}
          r="16"
          fill="url(#string-grad-0)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
        <motion.circle
          cx={centerX}
          cy={centerY}
          r="8"
          fill="white"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
      </svg>

      {/* Draggable logo cards */}
      {alumniThriveLogos.map((logo, idx) => {
        const pos = getCardPosition(
          idx,
          containerSize.width,
          containerSize.height,
        );
        const rotations = [-4, 5, -3, 6, -5, 4, -6][idx];

        return (
          <motion.div
            key={logo.alt}
            drag
            dragConstraints={{ top: -80, left: -80, right: 80, bottom: 80 }}
            dragSnapToOrigin
            dragElastic={0.15}
            onDrag={(_, info) => handleDrag(idx, info)}
            onDragEnd={() => handleDragEnd(idx)}
            whileDrag={{ scale: 1.1, zIndex: 50, cursor: "grabbing" }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            animate={{
              y: [0, -12, 0],
              rotate: [rotations, rotations + 2, rotations],
            }}
            style={{
              position: "absolute",
              left: pos.x,
              top: pos.y,
              cursor: "grab",
            }}
            className="w-[110px] sm:w-[130px] touch-none z-10"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 2 + idx * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.2,
              }}
              style={{ rotate: rotations }}
              className={`relative p-[2px] rounded-lg bg-gradient-to-br ${borderColors[idx]} shadow-xl hover:shadow-2xl transition-shadow`}
            >
              <div className="bg-white dark:bg-gray-900 rounded-lg p-4 sm:p-5 flex items-center justify-center aspect-square">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="object-contain dark:invert dark:brightness-200 dark:contrast-200 w-full h-auto max-h-12 sm:max-h-14 pointer-events-none"
                />
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingLogos;
