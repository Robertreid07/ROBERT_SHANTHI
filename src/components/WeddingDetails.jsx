import { motion, time } from "framer-motion";

const agenda = [
  {
    time: "10:30 AM",
    title: "Invocation Prayer",
    description:
      "Beginning the wedding ceremony with prayer, inviting God's presence and blessings upon the couple.",
  },
  {
    title: "Worship Songs",
    description:
      "Songs of praise and worship, giving thanks to God for His love and faithfulness.",
  },
  {
    title: "Groom's March",
    description:
      "The groom enters the church, accompanied by family and loved ones.",
  },
  {
    title: "Bride's March",
    description:
      "The bride makes her graceful entrance as family and friends witness this special moment.",
  },
  {
    title: "Bible Reading",
    description:
      "Scripture readings reflecting God's design for marriage, love, faithfulness and unity.",
  },
  {
    title: "Wedding Sermon",
    description:
      "A message from God's Word on building a Christ-centred marriage.",
  },
  {
    title: "Solemnization",
    description:
      "The marriage vows, exchange of rings and declaration of the couple's marriage before God and the congregation.",
  },
  {
    title: "Vote of Thanks",
    description:
      "Expressing gratitude to God, the church, families and everyone who shared in the celebration.",
  },
  {
    title: "Benediction",
    description:
      "A closing prayer for God's guidance, grace and blessings over the newly married couple.",
  },
  {
    title: "Wedding March",
    description:
      "The newly married couple's joyful recessional, beginning their journey together as husband and wife.",
  },
  {
    title: "Love Feast",
    description:
      "A time of fellowship, a shared meal and joyful celebration with family, friends and the church community.",
  },
];

function Sparkle({ top, left, delay, size = 3 }) {
  return (
    <motion.div
      initial={{ opacity: 0.1, scale: 0.5 }}
      animate={{
        opacity: [0.1, 0.9, 0.1],
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
        boxShadow: "0 0 10px rgba(243, 201, 107, 0.8)",
        pointerEvents: "none",
      }}
    />
  );
}

export default function WeddingDetails() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100svh",
        overflow: "hidden",

        background:
          "radial-gradient(circle at 50% 20%, #302015 0%, #1d130d 45%, #100b08 100%)",

        padding: "75px 22px",
        boxSizing: "border-box",
        color: "#fff5e5",
      }}
    >
      {/* SPARKLES */}

      <Sparkle top="8%" left="12%" delay={0} size={3} />
      <Sparkle top="14%" left="84%" delay={1.2} size={4} />
      <Sparkle top="27%" left="7%" delay={0.5} size={2} />
      <Sparkle top="34%" left="92%" delay={1.8} size={3} />
      <Sparkle top="47%" left="14%" delay={2.2} size={3} />
      <Sparkle top="55%" left="88%" delay={0.8} size={2} />
      <Sparkle top="69%" left="6%" delay={1.4} size={4} />
      <Sparkle top="77%" left="94%" delay={0.3} size={3} />
      <Sparkle top="90%" left="18%" delay={2} size={2} />
      <Sparkle top="94%" left="81%" delay={1} size={3} />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "390px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* HEADER */}

        <p
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "11px",
            letterSpacing: "0.38em",
            textTransform: "uppercase",
            color: "#e5c47b",
            margin: "0 0 14px",
          }}
        >
          The Wedding Day
        </p>

        <div
          style={{
            width: "55px",
            height: "1px",
            background: "#c9942a",
            margin: "0 auto 18px",
            opacity: 0.8,
          }}
        />

        <h2
          style={{
            fontFamily: "Great Vibes, cursive",
            fontSize: "52px",
            fontWeight: 400,
            lineHeight: 1.15,
            color: "#f1c66b",
            margin: 0,
          }}
        >
          A Day to Remember
        </h2>

        <p
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "16px",
            lineHeight: 1.6,
            letterSpacing: "0.08em",
            color: "#d8c8b4",
            margin: "18px auto 45px",
            maxWidth: "310px",
          }}
        >
          A day filled with love, laughter
          <br />
          and blessings.
        </p>

        {/* TIMELINE */}

        <div
          style={{
            position: "relative",
            textAlign: "left",
          }}
        >
          {/* GOLD LINE */}

          <div
            style={{
              position: "absolute",
              left: "18px",
              top: "8px",
              bottom: "8px",
              width: "1px",
              background:
                "linear-gradient(to bottom, transparent, #c9942a 10%, #c9942a 90%, transparent)",
            }}
          />

          {agenda.map((item, index) => (
            <motion.div
              key={item.time}
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                margin: "-50px",
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              style={{
                position: "relative",
                display: "flex",
                gap: "22px",
                marginBottom:
                  index === agenda.length - 1
                    ? "0"
                    : "32px",
              }}
            >
              {/* DOT */}

              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  flexShrink: 0,
                  width: "37px",
                  height: "37px",
                  borderRadius: "50%",

                  background: "#1b120d",

                  border:
                    "1px solid #d4a646",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  boxShadow:
                    "0 0 12px rgba(201,148,42,0.2)",
                }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#f3c96b",
                    boxShadow:
                      "0 0 8px rgba(243,201,107,0.8)",
                  }}
                />
              </div>

              {/* CONTENT */}

              <div
                style={{
                  paddingTop: "1px",
                  flex: 1,
                }}
              >
                <div
                  style={{
                    fontFamily:
                      "Cormorant Garamond, serif",
                    fontSize: "12px",
                    letterSpacing: "0.15em",
                    color: "#e4bd67",
                    marginBottom: "4px",
                  }}
                >
                  {item.time}
                </div>

                <h3
                  style={{
                    fontFamily:
                      "Cormorant Garamond, serif",
                    fontSize: "21px",
                    fontWeight: 600,
                    color: "#fff3df",
                    margin: "0 0 5px",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontFamily:
                      "Cormorant Garamond, serif",
                    fontSize: "15px",
                    lineHeight: 1.45,
                    color: "#cbbba7",
                    margin: 0,
                  }}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* VENUE CARD */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          style={{
            marginTop: "55px",
            padding: "26px 20px",

            borderRadius: "18px",

            border:
              "1px solid rgba(212,166,70,0.7)",

            background:
              "rgba(20,13,9,0.72)",

            boxShadow:
              "0 12px 40px rgba(0,0,0,0.35)",
          }}
        >
          <p
            style={{
              fontFamily:
                "Cormorant Garamond, serif",
              fontSize: "10px",
              letterSpacing: "0.35em",
              color: "#e5c47b",
              margin: "0 0 10px",
            }}
          >
            THE VENUE
          </p>

          <h3
            style={{
              fontFamily:
                "Great Vibes, cursive",
              fontSize: "34px",
              fontWeight: 400,
              color: "#f1c66b",
              margin: 0,
            }}
          >
            Paradise Garden
          </h3>

          <p
            style={{
              fontFamily:
                "Cormorant Garamond, serif",
              fontSize: "15px",
              lineHeight: 1.5,
              color: "#d2c1ac",
              margin: "8px 0 20px",
            }}
          >
            Full venue address goes here
          </p>

          <a
            href="https://maps.app.goo.gl/6mfmk3ssacTXpFVi9"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "10px 24px",
              borderRadius: "30px",

              border:
                "1px solid #c9942a",

              color: "#f1c66b",

              textDecoration: "none",

              fontFamily:
                "Cormorant Garamond, serif",

              fontSize: "13px",

              letterSpacing: "0.14em",
            }}
          >
            VIEW LOCATION
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}