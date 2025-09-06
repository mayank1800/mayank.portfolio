import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, User, Mail, FileText, MessageSquare } from "lucide-react";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    // Mailto link (replace YOUR-EMAIL with your real email)
    window.location.href = `mailto:mayanks.rawat18@gmail.com?subject=${encodeURIComponent(
      subject as string
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    setIsSubmitted(true);
    form.reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="glass-panel p-6 rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="name" className="block text-sm font-medium text-white">
                Your Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 pointer-events-none" />
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-secondary text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple text-sm"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 pointer-events-none" />
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-secondary text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple text-sm"
                  placeholder="you@example.com"
                />
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="subject" className="block text-sm font-medium text-white">
              Subject
            </label>
            <div className="relative">
              <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 pointer-events-none" />
              <motion.input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full pl-10 pr-4 py-2.5 bg-secondary text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple text-sm"
                placeholder="Job opportunity / Collaboration..."
              />
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="message" className="block text-sm font-medium text-white">
              Message
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-4 text-muted-foreground w-4 h-4 pointer-events-none" />
              <motion.textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full pl-10 pr-4 py-2.5 bg-secondary text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple resize-none text-sm"
                placeholder="Tell me more about your project..."
              />
            </div>
          </div>

          <div className="pt-2">
            <motion.button
              type="submit"
              disabled={isSubmitted}
              whileHover={{ scale: isSubmitted ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitted ? 1 : 0.98 }}
              className={`flex items-center justify-center w-full px-6 py-3 rounded-lg font-medium transition-colors ${
                isSubmitted
                  ? "bg-green-600 text-white cursor-not-allowed"
                  : "bg-brand-purple text-white hover:bg-brand-purple/90"
              }`}
            >
              {isSubmitted ? (
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  <span>Message Sent!</span>
                </div>
              ) : (
                <div className="flex items-center">
                  <Send className="mr-2 h-4 w-4" />
                  <span>Send Message</span>
                </div>
              )}
            </motion.button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
