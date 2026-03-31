import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MessageCircle } from "lucide-react";
import MagneticButton from "./MagneticButton";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      { }
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-[600px] h-[600px] rounded-full bg-neon-purple/10 blur-[200px]" />
      </motion.div>
      <motion.div
        className="absolute top-20 right-20 pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="w-[300px] h-[300px] rounded-full bg-neon-pink/10 blur-[150px]" />
      </motion.div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Let's Build Your <span className="gradient-text">Brand</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Ready to transform your visual identity? Let's collaborate and create something extraordinary.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <MagneticButton
            href="https://wa.me/+919763790404"
            className="glow-button text-primary-foreground font-display inline-flex items-center gap-2"
          >
            <MessageCircle size={20} /> WhatsApp
          </MagneticButton>
          <MagneticButton
            href="mailto:hello@zego.studio"
            className="glow-button-outline inline-flex items-center gap-2"
          >
            <Mail size={20} /> Email Me
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-8"
        >
          {[
            { label: "Instagram", href: "https://www.instagram.com/sai_shirole8/" },
            { label: "YouTube", href: "https://youtube.com/" },
            { label: "Behance", href: "https://behance.net/" }
          ].map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.1 }}
              whileHover={{ y: -3, color: "hsl(var(--primary))" }}
              className="text-muted-foreground text-sm font-medium transition-colors"
            >
              {social.label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
