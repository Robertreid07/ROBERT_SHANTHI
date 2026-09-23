import { useState } from "react";
import { motion } from "framer-motion";

export default function EnvelopeIntro({
  onRevealStart,
  onComplete,
}) {
  const [phase, setPhase] = useState("closed");

  const handleOpen = () => {
  if (phase !== "closed") return;

  setPhase("splitting");

  // Start Hero reveal shortly AFTER the split begins
  setTimeout(() => {
    onRevealStart();
  }, 350);

  // Keep envelope animation running
  setTimeout(() => {
    setPhase("split");

    setTimeout(() => {
      sessionStorage.setItem("invited", "true");
      onComplete();
    }, 500);
  }, 1300);
};

  const isSplitting =
    phase === "splitting" ||
    phase === "split";

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: phase === "finished" ? 0 : 1,
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        overflow: "hidden",
        background: "transparent",
        cursor: phase === "closed" ? "pointer" : "default",
      }}
      onClick={handleOpen}
    >
      {/* =========================
          LEFT HALF
      ========================== */}

      <motion.div
        animate={{
          x:
            phase === "closed"
              ? "0%"
              : "-100%",
        }}
        transition={{
          duration: 1.3,
          ease: [0.76, 0, 0.24, 1],
        }}
        style={{
          position: "absolute",
          inset: 0,

          backgroundImage: "url('/envelope.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",

          clipPath: "inset(0 50% 0 0)",

          willChange: "transform",
        }}
      />

      {/* =========================
          RIGHT HALF
      ========================== */}

      <motion.div
        animate={{
          x:
            phase === "closed"
              ? "0%"
              : "100%",
        }}
        transition={{
          duration: 1.3,
          ease: [0.76, 0, 0.24, 1],
        }}
        style={{
          position: "absolute",
          inset: 0,

          backgroundImage: "url('/envelope.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",

          clipPath: "inset(0 0 0 50%)",

          willChange: "transform",
        }}
      />

      {/* =========================
          CENTER LINE
      ========================== */}

      <motion.div
        animate={{
          opacity:
            phase === "closed"
              ? 1
              : 0,
        }}
        transition={{
          duration: 0.3,
        }}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "50%",
          width: "1px",

          transform: "translateX(-50%)",

          background:
            "linear-gradient(to bottom, transparent 4%, #d7a94c 18%, #f0c76d 50%, #d7a94c 82%, transparent 96%)",

          boxShadow:
            "0 0 10px rgba(215,169,76,0.4)",

          pointerEvents: "none",
          zIndex: 5,
        }}
      />

      {/* =========================
          TOUCH HINT
      ========================== */}

      {phase === "closed" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 1,
          }}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: "9%",

            textAlign: "center",

            color: "rgba(255,239,202,0.75)",

            fontFamily:
              "'EB Garamond', serif",

            fontSize: "13px",
            letterSpacing: "4px",

            pointerEvents: "none",
            zIndex: 10,
          }}
        >
          TOUCH TO OPEN
        </motion.div>
      )}

      {/* =========================
          DARK CENTER AFTER SPLIT
          Keeps Hero hidden until
          the split is completely done.
      ========================== */}

    </motion.div>
  );
}