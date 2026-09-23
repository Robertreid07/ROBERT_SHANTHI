import { motion } from "framer-motion";
import { useCountdown } from "../hooks/useCountdown";

export default function CountdownSlide() {
  const { days, hours, minutes, seconds } = useCountdown(
    "2026-11-23T10:00:00+05:30"
  );

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100svh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
      }}
    >
      {/* Background */}
      <img
        src="/couple2.jpg"
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "35% 10%",
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(20, 8, 2, 0.62)",
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "14px",
            letterSpacing: "0.3em",
            margin: 0,
          }}
        >
          COUNTING DOWN TO
        </p>

        <h2
          style={{
            fontFamily: "Great Vibes, cursive",
            fontSize: "48px",
            fontWeight: 400,
            margin: "12px 0 8px",
          }}
        >
          Our Forever
        </h2>

        <p
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "17px",
            margin: "0 0 30px",
          }}
        >
          23 November 2026
        </p>

        {/* COUNTDOWN */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "8px",
            maxWidth: "380px",
            margin: "0 auto",
          }}
        >
          <TimeBox value={days} label="DAYS" />
          <TimeBox value={hours} label="HOURS" />
          <TimeBox value={minutes} label="MINUTES" />
          <TimeBox value={seconds} label="SECONDS" />
        </div>
      </motion.div>
    </section>
  );
}

function TimeBox({ value, label }) {
  return (
    <div
      style={{
        padding: "16px 5px",
        borderRadius: "12px",
        background: "rgba(255,255,255,0.12)",
        border: "1px solid rgba(255,255,255,0.2)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        style={{
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "30px",
          lineHeight: 1,
        }}
      >
        {String(value).padStart(2, "0")}
      </div>

      <div
        style={{
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "9px",
          letterSpacing: "0.15em",
          marginTop: "7px",
          opacity: 0.8,
        }}
      >
        {label}
      </div>
    </div>
  );
}