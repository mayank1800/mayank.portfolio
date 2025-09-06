import { motion } from "framer-motion";
import { LucideIcon, Github, Database, BarChart2, Code } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  code: string;
  demo?: string;          // Optional live demo link
  category: string;
  icon?: LucideIcon;      // Optional custom icon
}

// Default icons for project categories
const categoryIcons: Record<string, LucideIcon> = {
  data: Database,
  python: Code,
  sql: Database,
  powerbi: BarChart2,
};

const getCategoryName = (category: string) => {
  switch (category.toLowerCase()) {
    case "data": return "Data Analytics";
    case "python": return "Python Project";
    case "sql": return "SQL Project";
    case "powerbi": return "Power BI";
    default: return category;
  }
};

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  code,
  demo,
  category,
  icon,
}: ProjectCardProps) => {
  const Icon = icon || categoryIcons[category.toLowerCase()] || Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(155, 135, 245, 0.3)" }}
      transition={{ duration: 0.4 }}
      className="glass-panel rounded-lg overflow-hidden flex flex-col"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute top-3 left-3 bg-secondary/80 backdrop-blur-sm px-3 py-1 rounded-full flex items-center text-xs font-medium z-10">
          <Icon className="w-5 h-5 text-brand-purple" />
          <span className="ml-1.5 capitalize">{getCategoryName(category)}</span>
        </div>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700
