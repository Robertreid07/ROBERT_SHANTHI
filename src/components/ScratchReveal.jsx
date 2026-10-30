import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function ScratchReveal() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const [isScratching, setIsScratching] = useState(false);
  const [revealed, setRevealed] = useState(false);

  // -----------------------------------
  // SETUP SCRATCH CANVAS
  // -----------------------------------
  const setupCanvas = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext("2d");

    ctx.scale(dpr, dpr);

    // Gold scratch surface
    const gradient = ctx.createLinearGradient(
      0,
      0,
      rect.width,
      rect.height
    );

    gradient.addColorStop(0, "#b77b16");
    gradient.addColorStop(0.5, "#f3d47a");
    gradient.addColorStop(1, "#c9942a");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Scratch text
    ctx.fillStyle = "#5a3200";
    ctx.font = "600 16px Cormorant Garamond, serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillText(
      "SCRATCH TO REVEAL",
      rect.width / 2,
      rect.height / 2
    );
  };

  // -----------------------------------
  // INITIALIZE CANVAS
  // -----------------------------------
  useEffect(() => {
    setupCanvas();

    window.addEventListener("resize", setupCanvas);

    return () => {
      window.removeEventListener("resize", setupCanvas);
    };
  }, []);

  // -----------------------------------
  // GET MOUSE / TOUCH POSITION
  // -----------------------------------
  const getPosition = (event) => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return { x: 0, y: 0 };
    }

    const rect = canvas.getBoundingClientRect();

    let clientX;
    let clientY;

    if (event.touches && event.touches.length > 0) {
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    } else {
      clientX = event.clientX;
      clientY = event.clientY;
    }

    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };

  // -----------------------------------
  // SCRATCH
  // -----------------------------------
  const scratch = (x, y) => {
    const canvas = canvasRef.current;

    if (!canvas || revealed) return;

    const ctx = canvas.getContext("2d");

    ctx.globalCompositeOperation = "destination-out";

    ctx.beginPath();

    ctx.arc(
      x,
      y,
      30,
      0,
      Math.PI * 2
    );

    ctx.fill();

    checkReveal();
  };

  // -----------------------------------
  // START SCRATCHING
  // -----------------------------------
  const handleStart = (event) => {
    event.preventDefault();

    setIsScratching(true);

    const { x, y } = getPosition(event);

    scratch(x, y);
  };

  // -----------------------------------
  // CONTINUE SCRATCHING
  // -----------------------------------
  const handleMove = (event) => {
    if (!isScratching || revealed) return;

    event.preventDefault();

    const { x, y } = getPosition(event);

    scratch(x, y);
  };

  // -----------------------------------
  // STOP SCRATCHING
  // -----------------------------------
  const handleEnd = () => {
    setIsScratching(false);
  };

  // -----------------------------------
  // CELEBRATION BLAST
  // -----------------------------------
  const triggerCelebration = () => {
    // Main blast
    confetti({
      particleCount: 150,
      spread: 100,
      startVelocity: 48,
      origin: {
        x: 0.5,
        y: 0.55,
      },
    });

    // Left blast
    setTimeout(() => {
      confetti({
        particleCount: 80,
        spread: 75,
        startVelocity: 38,
        origin: {
          x: 0.15,
          y: 0.65,
        },
      });
    }, 150);

    // Right blast
    setTimeout(() => {
      confetti({
        particleCount: 80,
        spread: 75,
        startVelocity: 38,
        origin: {
          x: 0.85,
          y: 0.65,
        },
      });
    }, 150);

    // Final shower
    setTimeout(() => {
      confetti({
        particleCount: 110,
        spread: 160,
        startVelocity: 28,
        gravity: 0.8,
        origin: {
          x: 0.5,
          y: 0.15,
        },
      });
    }, 450);
  };

  // -----------------------------------
  // CHECK HOW MUCH IS SCRATCHED
  // -----------------------------------
  const checkReveal = () => {
    const canvas = canvasRef.current;

    if (!canvas || revealed) return;

    const ctx = canvas.getContext("2d");

    const pixels = ctx.getImageData(
      0,
      0,
      canvas.width,
      canvas.height
    ).data;

    let transparent = 0;

    // Sample pixels instead of checking every pixel
    for (let i = 3; i < pixels.length; i += 40) {
      if (pixels[i] === 0) {
        transparent++;
      }
    }

    const totalSampled = pixels.length / 40;

    const percentage =
      transparent / totalSampled;

    // Reveal after approximately 45% scratched
    if (percentage > 0.45) {
      setRevealed(true);

      triggerCelebration();
    }
  };

  return (
        <section
            style={{
            background: "#fdf8f0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "55px 20px 65px",
            boxSizing: "border-box",
            textAlign: "center",
            }}
        >
      <motion.div
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
        style={{
          width: "100%",
          maxWidth: "390px",
        }}
      >
        {/* SMALL HEADING */}
        <p
          style={{
            fontFamily:
              "Cormorant Garamond, serif",
            fontSize: "12px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#6b4a18",
            margin: "0 0 14px",
          }}
        >
          A little secret awaits
        </p>

        {/* MAIN HEADING */}
        <h2
          style={{
            fontFamily:
              "Great Vibes, cursive",
            fontSize: "46px",
            fontWeight: 400,
            color: "#c9942a",
            margin: "0 0 30px",
          }}
        >

        </h2>

        {/* SCRATCH CARD */}
        <div
          ref={containerRef}
          style={{
            position: "relative",
            width: "100%",
            height: "260px",
            borderRadius: "24px",
            overflow: "hidden",
            background: "#fffaf3",
            boxShadow:
              "0 15px 40px rgba(74,34,8,0.12)",
            border:
              "1px solid rgba(201,148,42,0.25)",
          }}
        >
          {/* REVEALED CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: revealed ? 1 : 0,
              scale: revealed ? 1 : 0.5,
            }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 180,
              damping: 12,
            }}
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            {/* HEART */}
            <div
              style={{
                fontSize: "34px",
                marginBottom: "8px",
              }}
            >
              ❤️
            </div>

            {/* TITLE */}
            <div
              style={{
                fontFamily:
                  "Great Vibes, cursive",
                fontSize: "34px",
                color: "#c9942a",
                marginBottom: "10px",
              }}
            >
              Our Wedding Day
            </div>

            {/* DATE */}
            <div
              style={{
                fontFamily:
                  "Cormorant Garamond, serif",
                fontSize: "26px",
                letterSpacing: "0.08em",
                color: "#1a0800",
              }}
            >
              23 NOVEMBER 2026
            </div>

            {/* TIME */}
            <div
              style={{
                fontFamily:
                  "Cormorant Garamond, serif",
                fontSize: "18px",
                color: "#6b4a18",
                marginTop: "8px",
              }}
            >
              10:30 AM
            </div>

            {/* HEART */}
            <div
              style={{
                fontSize: "26px",
                marginTop: "14px",
              }}
            >
              ♡
            </div>
          </motion.div>

          {/* SCRATCH LAYER */}
          {!revealed && (
            <canvas
              ref={canvasRef}
              onMouseDown={handleStart}
              onMouseMove={handleMove}
              onMouseUp={handleEnd}
              onMouseLeave={handleEnd}
              onTouchStart={handleStart}
              onTouchMove={handleMove}
              onTouchEnd={handleEnd}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                cursor: "crosshair",
                touchAction: "none",
              }}
            />
          )}
        </div>

        {/* INSTRUCTION */}
        <p
          style={{
            fontFamily:
              "Cormorant Garamond, serif",
            fontSize: "15px",
            color: "#6b4a18",
            marginTop: "18px",
            fontStyle: "italic",
          }}
        >
          Reveal the day our forever begins.
        </p>
      </motion.div>
    </section>
  );
}