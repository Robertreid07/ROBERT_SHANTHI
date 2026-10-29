
import { motion } from "framer-motion";

function Sparkle({ top, left, delay, size = 3 }) {
  return (
    <motion.div
      initial={{ opacity: 0.1, scale: 0.5 }}
      animate={{
        opacity: [0.1, 0.8, 0.1],
        scale: [0.5, 1.2, 0.5],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        position: "absolute",
        top,
        left,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        background: "#f3c96b",
        boxShadow: "0 0 10px rgba(243,201,107,0.8)",
        pointerEvents: "none",
      }}
    />
  );
}

export default function FinalSlide() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100svh",
        overflow: "hidden",
        background:
          "radial-gradient(circle at 50% 20%, #302015 0%, #1d130d 45%, #100b08 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "70px 22px 0",
        boxSizing: "border-box",
        textAlign: "center",
        color: "#fff5e5",
      }}
    >
      {/* SPARKLES */}
      <Sparkle top="9%" left="12%" delay={0} size={3} />
      <Sparkle top="17%" left="86%" delay={1.2} size={4} />
      <Sparkle top="30%" left="7%" delay={0.5} size={2} />
      <Sparkle top="39%" left="93%" delay={1.8} size={3} />
      <Sparkle top="52%" left="13%" delay={2.2} size={3} />
      <Sparkle top="63%" left="88%" delay={0.8} size={2} />
      <Sparkle top="75%" left="7%" delay={1.4} size={4} />
      <Sparkle top="86%" left="94%" delay={0.3} size={3} />
      <Sparkle top="94%" left="20%" delay={2} size={2} />
      <Sparkle top="91%" left="80%" delay={1} size={3} />

      {/* EXISTING THANK YOU DESIGN */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "390px",
          flex: "1 0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "40px",
        }}
      >
        {/* TOP ORNAMENT */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "14px",
            marginBottom: "28px",
          }}
        >
          <div style={{ width: "55px", height: "1px", background: "#c9942a" }} />
          <span style={{ color: "#f3c96b", fontSize: "22px" }}>♡</span>
          <div style={{ width: "55px", height: "1px", background: "#c9942a" }} />
        </div>

        <h2
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "62px",
            fontWeight: 400,
            lineHeight: 1.15,
            color: "#f1c66b",
            margin: 0,
          }}
        >
          Thank You
        </h2>

        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "17px",
            lineHeight: 1.7,
            letterSpacing: "0.08em",
            color: "#dfcfbb",
            margin: "24px auto 0",
            maxWidth: "320px",
          }}
        >
          Your presence, blessings and love
          <br />
          mean the world to us.
        </p>

        <div
          style={{
            width: "60px",
            height: "1px",
            background: "#c9942a",
            margin: "40px auto",
          }}
        />

        <h3
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "46px",
            fontWeight: 400,
            lineHeight: 1.2,
            color: "#fff3df",
            margin: 0,
          }}
        >
          Robert Reid
        </h3>

        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "22px",
            color: "#f3c96b",
            margin: "4px 0",
          }}
        >
          &
        </div>

        <h3
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "46px",
            fontWeight: 400,
            lineHeight: 1.2,
            color: "#fff3df",
            margin: 0,
          }}
        >
          Shanthi Sudha
        </h3>

        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "12px",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#bca890",
            marginTop: "34px",
          }}
        >
          Until Forever
        </p>

        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            fontSize: "22px",
            color: "#f3c96b",
            marginTop: "18px",
          }}
        >
          ♡
        </motion.div>
      </motion.div>

      {/* PORTFOLIO FOOTER — BELOW THE WEDDING DESIGN */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "430px",
          padding: "24px 16px 30px",
          borderTop: "1px solid rgba(214,180,109,0.2)",
          boxSizing: "border-box",
        }}
      >
        <p
          style={{
            color: "#bca890",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "10px",
            letterSpacing: "2.5px",
            margin: "0 0 8px",
          }}
        >
          DIGITAL INVITATION CRAFTED BY
        </p>

        <a
          href="https://samdirsipam.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            color: "#d5c3a8",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "13px",
            letterSpacing: "1px",
            textDecoration: "none",
            borderBottom: "1px solid rgba(214,180,109,0.5)",
            paddingBottom: "4px",
          }}
        >
          SAM ↗
        </a>
      </motion.div>
    </section>
  );
}
