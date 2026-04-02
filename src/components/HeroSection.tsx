import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ParticleField from "./ParticleField";
import FloatingShapes from "./FloatingShapes";
import MagneticButton from "./MagneticButton";
import TextReveal from "./TextReveal";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      { }
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroBg})`, y: bgY }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />

      { }
      <div className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-neon-purple/10 blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-[10%] w-96 h-96 rounded-full bg-neon-pink/10 blur-[120px] animate-float-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-blue/5 blur-[150px] animate-pulse-glow" />

      <FloatingShapes />
      <ParticleField />

      { }
      <motion.div style={{ y: contentY, opacity }} className="relative z-10 text-center max-w-5xl px-6">
        <h1 className="font-display text-xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6">
          <TextReveal text="Zego" gradient delay={0.3} className="block md:inline" />
          <TextReveal text="— Crafting Visual Stories That" delay={0.5} className="block md:inline text-foreground" />
          <TextReveal text="Convert" gradient delay={1.0} className="block md:inline" />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="text-xs md:text-sm text-muted-foreground mb-10 tracking-wide"
        >
          {["Motion Graphics", "•", "Reel Editing", "•", "Design", "•", "Social Media Growth"].map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 + i * 0.1, duration: 0.4 }}
              className="inline-block mx-1"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <MagneticButton href="#portfolio" className="glow-button text-primary-foreground font-display text-lg">
            View Portfolio
          </MagneticButton>
          <MagneticButton href="#contact" className="glow-button-outline font-display text-lg">
            Work With Me
          </MagneticButton>
        </motion.div>
      </motion.div>

      { }
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
