import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, ExternalLink } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

const categories = ["All", "Reels & Motion", "Logo Design", "Posters", "Apparel", "Social Media"];

const projects = [
  { 
    title: "NEX Studio — Brand Identity", 
    category: "Logo Design", 
    color: "from-neon-purple to-neon-blue",
    image: "/projects/nex-studio.png",
    link: "https://example.com/nex-studio"
  },
  { 
    title: "Sarthakkk — Logo Redesign", 
    category: "Logo Design", 
    color: "from-neon-blue to-neon-pink",
    image: "/projects/sarthakkk.png",
    link: "https://example.com/sarthakkk"
  },
  { 
    title: "Fortuner Cinematic Poster", 
    category: "Posters", 
    color: "from-neon-orange to-neon-pink",
    image: "/projects/fortuner.png",
    link: "https://example.com/fortuner"
  },
  { 
    title: "GT 650 Automotive Edit", 
    category: "Posters", 
    color: "from-neon-pink to-neon-purple",
    image: "/projects/gt650.png",
    link: "https://example.com/gt650"
  },
  { 
    title: "Viral Reel — 1M+ Views", 
    category: "Reels & Motion", 
    color: "from-neon-blue to-neon-purple",
    image: "/projects/viral-reel.png",
    link: "https://example.com/viral-reel"
  },
  { 
    title: "Streetwear Collection", 
    category: "Apparel", 
    color: "from-neon-orange to-neon-purple",
    image: "/projects/streetwear.png",
    link: "https://example.com/streetwear"
  },
  { 
    title: "Restaurant Social Campaign", 
    category: "Social Media", 
    color: "from-neon-pink to-neon-orange",
    image: "/projects/restaurant.png",
    link: "https://example.com/restaurant"
  },
  { 
    title: "Motion Graphics Showreel", 
    category: "Reels & Motion", 
    color: "from-neon-purple to-neon-pink",
    image: "/projects/motion-reel.png",
    link: "https://example.com/motion-reel"
  },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden" ref={ref}>
      <AnimatedBackground variant="wave" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={inView ? { opacity: 1, letterSpacing: "0.3em" } : {}}
            transition={{ duration: 1 }}
            className="text-sm uppercase text-neon-blue mb-4 font-medium"
          >
            Portfolio
          </motion.p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Selected <span className="gradient-text">Works</span>
          </h2>
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                active === cat
                  ? "text-primary-foreground shadow-lg"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {active === cat && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </motion.button>
          ))}
        </motion.div>

        {}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.5, delay: i * 0.06, type: "spring", stiffness: 300 }}
                onClick={() => setLightbox(project.title)}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="glass-card overflow-hidden cursor-pointer group relative"
              >
                <div className={`aspect-[4/3] bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent z-10"
                    initial={{ x: "-100%" }}
                    animate={hoveredIdx === i ? { x: "200%" } : { x: "-100%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center bg-background/70 backdrop-blur-sm z-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIdx === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={hoveredIdx === i ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                      className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-3"
                    >
                      <ExternalLink className="text-primary-foreground" size={20} />
                    </motion.div>
                    <span className="font-display font-bold text-foreground">View Project</span>
                  </motion.div>
                  {!project.image && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-2xl font-bold text-primary-foreground/20 text-center px-4">
                        {project.title}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-display font-semibold text-foreground text-sm">{project.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-xl p-6"
            onClick={() => setLightbox(null)}
          >
            <motion.button
              className="absolute top-6 right-6 text-foreground"
              onClick={() => setLightbox(null)}
              whileHover={{ scale: 1.2, rotate: 90 }}
              transition={{ type: "spring" }}
            >
              <X size={32} />
            </motion.button>
            <motion.div
              initial={{ scale: 0.5, y: 100, rotateX: -30 }}
              animate={{ scale: 1, y: 0, rotateX: 0 }}
              exit={{ scale: 0.5, y: 100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="glass-card p-8 max-w-lg text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                className={`w-full aspect-video rounded-lg mb-6 relative overflow-hidden ${
                  !projects.find(p => p.title === lightbox)?.image ? "bg-gradient-to-br from-neon-purple to-neon-pink" : ""
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {projects.find(p => p.title === lightbox)?.image && (
                  <img 
                    src={projects.find(p => p.title === lightbox)?.image} 
                    alt={lightbox} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
              </motion.div>
              <motion.h3
                className="font-display text-2xl font-bold text-foreground mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {lightbox}
              </motion.h3>
              <motion.p
                className="text-muted-foreground mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {projects.find(p => p.title === lightbox)?.category} — A professional showcase of high-quality design work.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <a 
                  href={projects.find(p => p.title === lightbox)?.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  <ExternalLink size={18} />
                  Live Project
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
