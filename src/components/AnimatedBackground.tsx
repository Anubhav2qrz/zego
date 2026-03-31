import { motion } from "framer-motion";

interface Orb {
  x: string;
  y: string;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

interface AnimatedBackgroundProps {
  variant?: "aurora" | "mesh" | "pulse" | "wave";
  orbs?: Orb[];
}

const presets: Record<string, Orb[]> = {
  aurora: [
    { x: "10%", y: "20%", size: 400, color: "--neon-purple", duration: 12, delay: 0 },
    { x: "70%", y: "60%", size: 350, color: "--neon-pink", duration: 15, delay: 2 },
    { x: "40%", y: "80%", size: 300, color: "--neon-blue", duration: 10, delay: 1 },
  ],
  mesh: [
    { x: "0%", y: "0%", size: 500, color: "--neon-purple", duration: 20, delay: 0 },
    { x: "100%", y: "0%", size: 450, color: "--neon-blue", duration: 18, delay: 1 },
    { x: "50%", y: "100%", size: 400, color: "--neon-pink", duration: 22, delay: 3 },
    { x: "80%", y: "50%", size: 300, color: "--neon-orange", duration: 16, delay: 2 },
  ],
  pulse: [
    { x: "50%", y: "50%", size: 500, color: "--neon-purple", duration: 4, delay: 0 },
    { x: "30%", y: "30%", size: 300, color: "--neon-pink", duration: 5, delay: 1 },
    { x: "70%", y: "70%", size: 300, color: "--neon-blue", duration: 6, delay: 2 },
  ],
  wave: [
    { x: "20%", y: "30%", size: 350, color: "--neon-blue", duration: 8, delay: 0 },
    { x: "80%", y: "40%", size: 300, color: "--neon-purple", duration: 10, delay: 1.5 },
    { x: "50%", y: "70%", size: 280, color: "--neon-orange", duration: 9, delay: 3 },
  ],
};

const AnimatedBackground = ({ variant = "aurora", orbs }: AnimatedBackgroundProps) => {
  const activeOrbs = orbs || presets[variant] || presets.aurora;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {}
      {activeOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            marginLeft: -orb.size / 2,
            marginTop: -orb.size / 2,
            background: `radial-gradient(circle, hsl(var(${orb.color}) / 0.12) 0%, hsl(var(${orb.color}) / 0.04) 40%, transparent 70%)`,
            filter: `blur(${orb.size * 0.3}px)`,
          }}
          animate={{
            x: [0, 60, -40, 30, 0],
            y: [0, -50, 30, -20, 0],
            scale: [1, 1.2, 0.9, 1.1, 1],
            opacity: [0.6, 1, 0.7, 0.9, 0.6],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {}
      {variant === "mesh" && (
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--neon-purple) / 0.03) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--neon-purple) / 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {}
      {variant === "wave" && (
        <motion.div
          className="absolute left-0 right-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, hsl(var(--neon-blue) / 0.3), hsl(var(--neon-purple) / 0.3), transparent)",
          }}
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
