import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";

const ContactHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-brand-purple/10 text-brand-purple mb-3">
        Contact Me
      </span>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        <AnimatedText text="Let's Collaborate" once />
      </h1>
      <div className="max-w-2xl mx-auto">
        <p className="text-base text-muted-foreground">
          I’m always open to discussing new opportunities in data/business analytics,
          business intelligence, or collaborations on impactful projects. 
          Drop me a message and let’s connect!
        </p>
      </div>
    </motion.div>
  );
};

export default ContactHeader;
