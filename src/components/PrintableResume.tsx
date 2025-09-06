import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const PrintableResume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "mayank-rawat-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center">
      <motion.button
        onClick={handleDownload}
        aria-label="Download Mayank Rawat's Resume"
        whileHover={{ scale: 1.05, boxShadow: "0 8px 15px rgba(155, 135, 245, 0.3)" }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center bg-brand-purple text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all mb-8"
      >
        <Download className="mr-2 h-5 w-5" />
        Download My Resume
      </motion.button>
    </div>
  );
};

export default PrintableResume;
