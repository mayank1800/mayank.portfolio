import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/mayank-rawat", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/mayank-rawat/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:mayank.rawat@example.com", label: "Email" },
];

const SocialLinks = () => (
  <div className="flex space-x-4">
    {socials.map(({ icon: Icon, href, label }) => (
      <motion.a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-brand-purple transition-colors bg-secondary p-3 rounded-full"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={label}
      >
        <Icon className="h-5 w-5" />
      </motion.a>
    ))}
  </div>
);

export default SocialLinks;
import SocialLinks from "./SocialLinks";

const Footer = () => (
  <footer className="w-full py-8 border-t border-muted relative z-10 backdrop-blur-md bg-black/20">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <div className="text-2xl font-bold text-brand-purple mb-2">MR.</div>
          <p className="text-muted-foreground text-sm max-w-md">
            Exploring data-driven insights and creating impactful analytics dashboards using Python, SQL, and Power BI.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <p className="text-foreground font-medium mb-3">Connect with me</p>
          <SocialLinks />
        </div>
      </div>
      <div className="text-muted-foreground text-sm text-center mt-8">
        © {new Date().getFullYear()} Mayank Rawat. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
import { ReactNode, useState, useEffect } from "react";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import ParticleBackground from "./ParticleBackground";
import Loader from "./Loader";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-brand-dark relative">
      <div className="fixed inset-0 z-0">
        <ParticleBackground />
      </div>

      <Navbar />

      <main role="main" className="flex-grow relative z-10">
        {loading ? (
          <Loader />
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="min-h-screen relative z-10"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        )}
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
