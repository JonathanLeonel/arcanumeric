"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Arcanum } from "@/domain/entities/arcanum";

const HEX_PATTERN = `
<svg xmlns="http://www.w3.org/2000/svg" width="56" height="100" viewBox="0 0 56 100">
  <polygon points="28,2 54,17 54,47 28,62 2,47 2,17" fill="none" stroke="#3b2f5e" stroke-width="1.5"/>
  <polygon points="28,52 54,67 54,97 28,112 2,97 2,67" fill="none" stroke="#3b2f5e" stroke-width="1.5"/>
  <polygon points="56,27 82,42 82,72 56,87 30,72 30,42" fill="none" stroke="#3b2f5e" stroke-width="1.5"/>
  <polygon points="0,27 26,42 26,72 0,87 -26,72 -26,42" fill="none" stroke="#3b2f5e" stroke-width="1.5"/>
</svg>
`.trim();

const svgDataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(HEX_PATTERN)}`;

export default function CardBoard({ arcanum }: { arcanum: Arcanum }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0d0d1a]">
      <div style={{ perspective: "1000px" }} className="w-64 h-96">
        <motion.div
          style={{
            transformStyle: "preserve-3d",
            position: "relative",
            width: "100%",
            height: "100%",
          }}
          animate={{ rotateX: revealed ? -180 : 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {/* Back */}
          <div
            style={{
              backfaceVisibility: "hidden",
              position: "absolute",
              inset: 0,
              borderRadius: "12px",
              backgroundImage: `url("${svgDataUrl}")`,
              backgroundSize: "56px 100px",
              backgroundColor: "#110d24",
              border: "1px solid #3b2f5e",
            }}
          />

          {/* Front */}
          <div
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateX(180deg)",
              position: "absolute",
              inset: 0,
              borderRadius: "12px",
              backgroundColor: "#1a1232",
              border: "1px solid #5c4a8a",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px",
              gap: "16px",
            }}
          >
            <p
              style={{
                color: "#c9b8f0",
                fontSize: "12px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              {arcanum.number === 0 ? "0" : arcanum.number}
            </p>
            <h2
              style={{
                color: "#ede0ff",
                fontSize: "22px",
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              {arcanum.name}
            </h2>
            <p
              style={{
                color: "#9d86c8",
                fontSize: "13px",
                fontStyle: "italic",
                textAlign: "center",
              }}
            >
              {arcanum.nameEs} · {arcanum.nameFr}
            </p>
            <p
              style={{
                color: "#7a6aa8",
                fontSize: "12px",
                textAlign: "center",
                lineHeight: 1.6,
              }}
            >
              {arcanum.keywords.join(" · ")}
            </p>
            <p
              style={{
                color: "#c9b8f0",
                fontSize: "13px",
                textAlign: "center",
                lineHeight: 1.7,
                marginTop: "8px",
              }}
            >
              {arcanum.uprightMeaning}
            </p>
          </div>
        </motion.div>
      </div>

      {!revealed && (
        <button
          onClick={() => setRevealed(true)}
          className="mt-10 px-8 py-3 rounded-full text-sm tracking-widest uppercase"
          style={{
            backgroundColor: "#2a1f4a",
            color: "#c9b8f0",
            border: "1px solid #5c4a8a",
            cursor: "pointer",
          }}
        >
          Reveal
        </button>
      )}
    </div>
  );
}
