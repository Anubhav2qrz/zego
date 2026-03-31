import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  gradient?: boolean;
}

const TextReveal = ({ text, className = "", delay = 0, gradient = false }: TextRevealProps) => {
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <motion.span
            initial={{ y: "110%", rotateX: -80 }}
            animate={{ y: "0%", rotateX: 0 }}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.08,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className={`inline-block ${gradient ? "gradient-text" : ""}`}
            style={{ transformOrigin: "bottom" }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export default TextReveal;
