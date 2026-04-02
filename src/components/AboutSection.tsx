import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Film, Megaphone, Sparkles } from "lucide-react";
import TiltCard from "./TiltCard";
import ParallaxSection from "./ParallaxSection";
import AnimatedBackground from "./AnimatedBackground";

const skills = [
  { icon: Film, label: "Motion Graphic Editor", desc: "Cinematic edits & transitions", color: "neon-purple" },
  { icon: Sparkles, label: "Reel Creator", desc: "Viral short-form content", color: "neon-pink" },
  { icon: Palette, label: "Graphic Designer", desc: "Logos, posters & brand identity", color: "neon-blue" },
  { icon: Megaphone, label: "Social Media Manager", desc: "Strategy, growth & engagement", color: "neon-orange" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      <AnimatedBackground variant="aurora" />
      <div className="max-w-6xl mx-auto relative z-10">
        <ParallaxSection speed={0.2}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={inView ? { opacity: 1, letterSpacing: "0.3em" } : {}}
              transition={{ duration: 1 }}
              className="text-sm uppercase text-neon-purple mb-4 font-medium"
            >
              About
            </motion.p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Multi-Skilled <span className="gradient-text">Creative</span> Freelancer
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              I'm Zego — a creative freelancer who blends motion design, branding, and social strategy
              to help brands stand out in the digital noise. Every project is a visual story engineered to convert.
            </p>
          </motion.div>
        </ParallaxSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill) => (
            <motion.div key={skill.label} variants={cardVariants}>
              <TiltCard className="glass-card p-6 text-center group hover:border-neon-purple/40 transition-all duration-300 cursor-default">
                <motion.div
                  className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center"
                  whileHover={{ scale: 1.2, rotate: 5, backgroundColor: "hsl(var(--primary) / 0.25)" }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <skill.icon className="text-primary" size={28} />
                </motion.div>
                <h3 className="font-display font-semibold text-foreground mb-1">{skill.label}</h3>
                <p className="text-sm text-muted-foreground">{skill.desc}</p>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
