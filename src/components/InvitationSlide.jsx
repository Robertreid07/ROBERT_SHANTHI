import { motion } from "framer-motion";

export default function InvitationSlide() {
  return (
    <section
      style={{
        background: "#fdf8f0",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <motion.img
        src="/invitation.png"
        alt="Wedding Invitation"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          display: "block",
          width: "100%",
          height: "auto",
          margin: "0 auto",
        }}
      />
    </section>
  );
}