import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clapperboard, PenTool, Shirt, TrendingUp } from "lucide-react";
import TiltCard from "./TiltCard";
import AnimatedBackground from "./AnimatedBackground";

const services = [
  {
    icon: Clapperboard,
    title: "Cinematic Reel Editing",
    desc: "Dynamic transitions, color grading, and visual storytelling that captivate audiences in seconds.",
    gradient: "from-neon-purple to-neon-blue",
  },
  {
    icon: PenTool,
    title: "Graphic Design",
    desc: "Logos, posters, and full brand identities crafted with precision and creative vision.",
    gradient: "from-neon-blue to-neon-pink",
  },
  {
    icon: Shirt,
    title: "Apparel Design",
    desc: "Custom t-shirts, merch, and streetwear graphics that make brands wearable.",
    gradient: "from-neon-pink to-neon-orange",
  },
  {
    icon: TrendingUp,
    title: "Social Media Management",
    desc: "Content strategy, posting schedules, and growth tactics that build real engagement.",
    gradient: "from-neon-orange to-neon-purple",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative overflow-hidden" ref={ref}>
      <AnimatedBackground variant="mesh" />
      <div className="max-w-6xl mx-auto relative">
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
            className="text-sm uppercase text-neon-pink mb-4 font-medium"
          >
            Services
          </motion.p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            What I <span className="gradient-text">Create</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60, y: 30 }}
              animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * i, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <TiltCard className="glass-card p-8 group hover:border-neon-purple/30 transition-all duration-500 relative overflow-hidden cursor-default">
                {}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: `linear-gradient(135deg, hsl(var(--neon-purple) / 0.08), transparent 50%, hsl(var(--neon-pink) / 0.05))`,
                  }}
                />
                {}
                <motion.div
                  className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-neon-purple to-transparent"
                  initial={{ width: "0%", opacity: 0 }}
                  whileHover={{ width: "100%", opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="relative z-10">
                  <motion.div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5`}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <service.icon className="text-primary-foreground" size={24} />
                  </motion.div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
