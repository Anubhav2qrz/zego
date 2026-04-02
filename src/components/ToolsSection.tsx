import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedBackground from "./AnimatedBackground";

const tools = [
  { name: "Premiere Pro", abbr: "Pr", color: "--neon-purple" },
  { name: "After Effects", abbr: "Ae", color: "--neon-blue" },
  { name: "Photoshop", abbr: "Ps", color: "--neon-pink" },
  { name: "CapCut", abbr: "Cc", color: "--neon-orange" },
  { name: "Canva", abbr: "Cv", color: "--neon-purple" },
];

const ToolsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tools" className="section-padding relative overflow-hidden" ref={ref}>
      <AnimatedBackground variant="pulse" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={inView ? { opacity: 1, letterSpacing: "0.3em" } : {}}
            transition={{ duration: 1 }}
            className="text-sm uppercase text-neon-orange mb-4 font-medium"
          >
            Tools
          </motion.p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            My <span className="gradient-text">Arsenal</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{
                delay: 0.15 * i,
                duration: 0.6,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{
                scale: 1.15,
                y: -8,
                boxShadow: `0 20px 40px hsl(var(${tool.color}) / 0.2)`,
              }}
              className="glass-card w-28 h-28 flex flex-col items-center justify-center gap-2 cursor-default hover:border-neon-purple/40 transition-colors duration-300"
            >
              <motion.span
                className="font-display text-2xl font-bold gradient-text"
                whileHover={{ scale: 1.2 }}
              >
                {tool.abbr}
              </motion.span>
              <span className="text-xs text-muted-foreground">{tool.name}</span>
            </motion.div>
          ))}
        </div>

        {}
        <motion.div
          className="mt-12 h-[1px] mx-auto max-w-md"
          initial={{ width: 0 }}
          animate={inView ? { width: "100%" } : {}}
          transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
          style={{
            background: "linear-gradient(90deg, transparent, hsl(var(--neon-purple) / 0.4), hsl(var(--neon-pink) / 0.4), transparent)",
          }}
        />
      </div>
    </section>
  );
};

export default ToolsSection;
