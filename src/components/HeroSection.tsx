import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-brand-dark relative z-10">
      {/* Intro Line */}
      <AnimatedText
        text="Hi, I'm Mayank Rawat"
        className="text-4xl md:text-6xl font-bold text-brand-purple mb-4"
      />

      {/* Subtitle */}
      <AnimatedText
        text="Data Analyst | SQL | Python | Power BI"
        className="text-lg md:text-2xl text-muted-foreground mb-6"
      />

      {/* Animated Bio */}
      <motion.p
        className="max-w-xl text-muted-foreground mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Passionate about transforming raw data into actionable insights. Skilled
        in SQL, Python, and Power BI to drive business decisions and create
        impactful dashboards.
      </motion.p>

      {/* Animated CTA Buttons */}
      <motion.div
        className="flex space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <motion.a
          href="#projects"
          className="px-6 py-3 rounded-full bg-brand-purple text-white font-medium shadow-lg hover:shadow-xl transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Projects
        </motion.a>

        <motion.a
          href="#contact"
          className="px-6 py-3 rounded-full border border-brand-purple text-brand-purple font-medium hover:bg-brand-purple hover:text-white transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Me
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
