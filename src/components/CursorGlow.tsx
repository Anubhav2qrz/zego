import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CursorGlow = () => {
  const [visible, setVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 200, damping: 30 });
  const springY = useSpring(cursorY, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [cursorX, cursorY, visible]);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-screen"
      style={{
        x: springX,
        y: springY,
        width: 300,
        height: 300,
        marginLeft: -150,
        marginTop: -150,
        background:
          "radial-gradient(circle, hsl(270 80% 60% / 0.07) 0%, hsl(330 85% 60% / 0.03) 40%, transparent 70%)",
        borderRadius: "50%",
      }}
    />
  );
};

export default CursorGlow;
