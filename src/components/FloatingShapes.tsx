import { motion } from "framer-motion";

const shapes = [
  { size: 60, x: "15%", y: "20%", delay: 0, duration: 7, color: "var(--neon-purple)", type: "circle" },
  { size: 40, x: "80%", y: "30%", delay: 1, duration: 9, color: "var(--neon-pink)", type: "square" },
  { size: 50, x: "70%", y: "70%", delay: 2, duration: 8, color: "var(--neon-blue)", type: "triangle" },
  { size: 35, x: "20%", y: "75%", delay: 0.5, duration: 10, color: "var(--neon-orange)", type: "circle" },
  { size: 45, x: "50%", y: "15%", delay: 1.5, duration: 6, color: "var(--neon-purple)", type: "diamond" },
  { size: 30, x: "90%", y: "55%", delay: 3, duration: 11, color: "var(--neon-pink)", type: "square" },
];

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: shape.x, top: shape.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.15, 0.08, 0.15, 0],
            scale: [0.5, 1, 0.8, 1, 0.5],
            y: [0, -30, -15, -40, 0],
            x: [0, 15, -10, 20, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {shape.type === "circle" && (
            <div
              className="rounded-full border"
              style={{
                width: shape.size,
                height: shape.size,
                borderColor: `hsl(${shape.color})`,
                boxShadow: `0 0 20px hsl(${shape.color} / 0.2)`,
              }}
            />
          )}
          {shape.type === "square" && (
            <div
              className="rounded-md border"
              style={{
                width: shape.size,
                height: shape.size,
                borderColor: `hsl(${shape.color})`,
                boxShadow: `0 0 20px hsl(${shape.color} / 0.2)`,
              }}
            />
          )}
          {shape.type === "triangle" && (
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: `${shape.size / 2}px solid transparent`,
                borderRight: `${shape.size / 2}px solid transparent`,
                borderBottom: `${shape.size}px solid hsl(${shape.color} / 0.2)`,
                filter: `drop-shadow(0 0 10px hsl(${shape.color} / 0.2))`,
              }}
            />
          )}
          {shape.type === "diamond" && (
            <div
              className="border"
              style={{
                width: shape.size,
                height: shape.size,
                borderColor: `hsl(${shape.color})`,
                transform: "rotate(45deg)",
                boxShadow: `0 0 20px hsl(${shape.color} / 0.2)`,
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingShapes;
