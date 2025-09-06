import { motion } from "framer-motion";
import { useMemo, useState, useEffect } from "react";
import { Code, Database, Globe, Terminal, Cpu, Zap } from "lucide-react";

const FloatingElements = () => {
  const icons = [Code, Database, Globe, Terminal, Cpu, Zap];

  const generateItems = () => {
    if (typeof window === "undefined") return [];
    return icons.map((Icon) => ({
      Icon,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 24 + Math.random() * 32,
      duration: 20 + Math.random() * 20,
    }));
  };

  // state to store floating items
  const [floatingItems, setFloatingItems] = useState(generateItems);

  // re-generate items on window resize
  useEffect(() => {
    const handleResize = () => {
      setFloatingItems(generateItems());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {floatingItems.map(({ Icon, x, y, size, duration }, index) => (
        <motion.div
          key={index}
          className="absolute text-brand-purple/10"
          initial={{ x, y }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: 360,
          }}
          transition={{
            duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        >
          <Icon size={size} />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
