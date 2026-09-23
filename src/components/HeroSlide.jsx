import { motion } from "framer-motion";

export default function HeroSlide() {
  return (
    <section
      style={{
        position: "relative",
        height: "100svh",
        overflow: "hidden",
        background: "#1a0800",
      }}
    >
      {/* COUPLE PHOTO */}
      <img
        src="/couple.jpg"
        alt="R & S"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "35% 10%",
        }}
      />

      {/* DARK GRADIENT OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.05) 35%, rgba(0,0,0,0.72) 100%)",
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* TOP SECTION */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: "center",
            padding: "42px 24px 0",
            color: "#fff",
          }}
        >
          <div
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "12px",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              opacity: 0.9,
            }}
          >
            Together with their families
          </div>

          <div
            style={{
              fontFamily: "Great Vibes, cursive",
              fontSize: "28px",
              marginTop: "12px",
            }}
          >
            R & S
          </div>
        </motion.div>

        {/* EMPTY SPACE */}
        <div
          style={{
            flex: 1,
          }}
        />

        {/* BOTTOM GLASS CARD */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            margin: "0 12px 14px",
            padding: "22px 20px 30px",
            borderRadius: "18px",
            background: "rgba(15, 8, 2, 0.34)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(255,255,255,0.18)",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <div
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "13px",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              marginBottom: "12px",
              opacity: 0.9,
            }}
          >
            We are getting married
          </div>

          {/* GROOM */}
        <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{
                fontFamily: "Great Vibes, cursive",
                fontSize: "54px",
                fontWeight: 400,
                lineHeight: 1.2,
                margin: 0,
                paddingTop: "8px",
                background:
                "linear-gradient(90deg, #c9942a, #ffe8a0, #c9942a)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                }}
        >
            Robert Reid
            </motion.h1>

          <div
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "22px",
              margin: "5px 0",
              color: "#fdf8f0",
            }}
          >
            &
          </div>

          {/* BRIDE */}
            <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            style={{
                fontFamily: "Great Vibes, cursive",
                fontSize: "54px",
                fontWeight: 400,
                lineHeight: 1.2,
                margin: 0,
                paddingTop: "8px",
                background:
                "linear-gradient(90deg, #c9942a, #ffe8a0, #c9942a)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
            }}
            >
            Shanthi Sudha
            </motion.h1>


          <div
            style={{
              width: "45px",
              height: "1px",
              background: "#c9942a",
              margin: "14px auto 0",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}