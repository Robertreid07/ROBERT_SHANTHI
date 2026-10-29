import { useState } from "react";
import { motion } from "framer-motion";

import EnvelopeIntro from "./components/EnvelopeIntro";
import HeroSlide from "./components/HeroSlide";
import ScratchReveal from "./components/ScratchReveal";
import InvitationSlide from "./components/InvitationSlide";
import CountdownSlide from "./components/CountdownSlide";
import WeddingDetails from "./components/WeddingDetails";
import FinalSlide from "./components/FinalSlide";

function App() {
  const [inviteOpen, setInviteOpen] = useState(
    () => sessionStorage.getItem("invited") === "true"
  );

  const [heroReveal, setHeroReveal] = useState(
    () => sessionStorage.getItem("invited") === "true"
  );

  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#080604",
      }}
    >

      {/* =================================
          ACTUAL WEBSITE
      ================================= */}

        <motion.div
  initial={{
    opacity: 0,
    filter: "blur(18px)",
    scale: 1.015,
  }}
  animate={{
    opacity: heroReveal ? 1 : 0,
    filter: heroReveal
      ? "blur(0px)"
      : "blur(18px)",
    scale: heroReveal ? 1 : 1.015,
  }}
  transition={{
    duration: 1.3,
    ease: [0.22, 1, 0.36, 1],
  }}
>
  <HeroSlide />
  <ScratchReveal />
  <InvitationSlide />
  <CountdownSlide />
  <WeddingDetails />
  <FinalSlide />
</motion.div>


      {/* =================================
          OPENING SCREEN
      ================================= */}

      {!inviteOpen && (
        <EnvelopeIntro
          onRevealStart={() => {
            setHeroReveal(true);
          }}
          onComplete={() => {
            setInviteOpen(true);
          }}
        />
      )}

    </main>
  );
}

export default App;