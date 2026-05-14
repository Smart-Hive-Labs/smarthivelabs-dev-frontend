"use client";

import { motion } from "framer-motion";

function hexPoints(cx: number, cy: number, r: number): string {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 180) * (60 * i - 30);
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
  }).join(" ");
}

const outerHexes = [
  [300, 152], [448, 237], [448, 363], [300, 448], [152, 363], [152, 237],
] as [number, number][];

const midHexes = [
  [300, 205], [387, 252], [387, 348], [300, 395], [213, 348], [213, 252],
] as [number, number][];

export function HiveHero() {
  return (
    <motion.svg
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <defs>
        <radialGradient id="amberGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f5a623" stopOpacity="0.4" />
          <stop offset="55%" stopColor="#f5a623" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#f5a623" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f7b84b" stopOpacity="1" />
          <stop offset="100%" stopColor="#c8811a" stopOpacity="0.3" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="softBlur">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      {/* outer bloom */}
      <motion.circle
        cx="300" cy="300" r="290"
        fill="url(#amberGlow)"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* outer ring hexagons — slow rotation */}
      <motion.g
        style={{ originX: "300px", originY: "300px" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {outerHexes.map(([cx, cy], i) => (
          <polygon
            key={`out-${i}`}
            points={hexPoints(cx, cy, 65)}
            fill="none"
            stroke="#f5a623"
            strokeWidth="0.8"
            strokeOpacity="0.16"
          />
        ))}
      </motion.g>

      {/* mid ring — counter-rotate */}
      <motion.g
        style={{ originX: "300px", originY: "300px" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        {midHexes.map(([cx, cy], i) => (
          <g key={`mid-${i}`}>
            <polygon
              points={hexPoints(cx, cy, 48)}
              fill="rgba(245,166,35,0.04)"
              stroke="#f5a623"
              strokeWidth="1"
              strokeOpacity="0.28"
            />
            {/* node dots with pulse */}
            <motion.circle
              cx={cx} cy={cy} r="4"
              fill="#f5a623"
              fillOpacity="0.6"
              animate={{ r: [4, 6, 4], fillOpacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
            />
          </g>
        ))}
      </motion.g>

      {/* connector lines from center to mid nodes */}
      {midHexes.map(([cx, cy], i) => (
        <motion.line
          key={`line-${i}`}
          x1="300" y1="300" x2={cx} y2={cy}
          stroke="#f5a623"
          strokeWidth="0.7"
          strokeOpacity="0"
          animate={{ strokeOpacity: [0, 0.35, 0] }}
          transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* center hex — pulsing glow */}
      <motion.polygon
        points={hexPoints(300, 300, 70)}
        fill="rgba(245,166,35,0.10)"
        stroke="#f7b84b"
        strokeWidth="1.5"
        strokeOpacity="0.7"
        animate={{ scale: [1, 1.04, 1] }}
        style={{ originX: "300px", originY: "300px" }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* soft glow behind center */}
      <motion.polygon
        points={hexPoints(300, 300, 70)}
        fill="rgba(245,166,35,0.25)"
        filter="url(#softBlur)"
        animate={{ opacity: [0.25, 0.55, 0.25] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* inner core */}
      <polygon
        points={hexPoints(300, 300, 34)}
        fill="url(#coreGrad)"
        stroke="#f7b84b"
        strokeWidth="1"
        filter="url(#glow)"
      />

      {/* outer ring node dots */}
      {outerHexes.map(([cx, cy], i) => (
        <motion.circle
          key={`odot-${i}`}
          cx={cx} cy={cy} r="3"
          fill="#f5a623"
          fillOpacity="0.22"
          animate={{ fillOpacity: [0.22, 0.55, 0.22] }}
          transition={{ duration: 3, delay: i * 0.5, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </motion.svg>
  );
}
