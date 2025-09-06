import { useState } from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react";

const SkillsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const skills = [
  // Programming
  { name: "Python", category: "Programming", color: "#3776AB", bgColor: "bg-blue-500/20" },
  { name: "SQL", category: "Programming", color: "#4479A1", bgColor: "bg-blue-600/20" },

  // Databases
  { name: "PostgreSQL", category: "Databases", color: "#336791", bgColor: "bg-blue-700/20" },
  { name: "MySQL", category: "Databases", color: "#4479A1", bgColor: "bg-blue-500/20" },

  // Data Analysis
  { name: "Pandas", category: "Data Analysis", color: "#150458", bgColor: "bg-indigo-900/20" },
  { name: "NumPy", category: "Data Analysis", color: "#013243", bgColor: "bg-purple-900/20" },
  { name: "Matplotlib", category: "Data Analysis", color: "#11557C", bgColor: "bg-blue-700/20" },
  { name: "Seaborn", category: "Data Analysis", color: "#4B0082", bgColor: "bg-indigo-600/20" },
  { name: "Scikit-learn", category: "Data Analysis", color: "#F7931E", bgColor: "bg-orange-500/20" },

  // BI & Visualization
  { name: "Power BI", category: "BI & Visualization", color: "#F2C811", bgColor: "bg-yellow-500/20" },
  { name: "Tableau", category: "BI & Visualization", color: "#E97627", bgColor: "bg-orange-600/20" },
  { name: "Excel", category: "BI & Visualization", color: "#217346", bgColor: "bg-green-600/20" },
  { name: "Power Query", category: "BI & Visualization", color: "#1D6F42", bgColor: "bg-green-700/20" },
  { name: "DAX", category: "BI & Visualization", color: "#B73225", bgColor: "bg-red-600/20" },

  // Tools
  { name: "Jupyter", category: "Tools", color: "#DA5B0B", bgColor: "bg-orange-500/20" },
  { name: "Git", category: "Tools", color: "#F05032", bgColor: "bg-red-500/20" },
  { name: "GitHub", category: "Tools", color: "#181717", bgColor: "bg-gray-900/20" },
  { name: "VS Code", category: "Tools", color: "#007ACC", bgColor: "bg-blue-700/20" },
];

const categories = ["All", "Programming", "Databases", "Data Analysis", "BI & Visualization", "Tools"];


  const filteredSkills =
    activeFilter === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeFilter);

  const getSkillIcon = (name: string) => {
    const iconMap: { [key: string]: string } = {
      Python: "devicon-python-plain",
      SQL: "devicon-mysql-plain",
      MySQL: "devicon-mysql-plain",
      Pandas: "devicon-pandas-original",
      NumPy: "devicon-numpy-original",
      Matplotlib: "devicon-matplotlib-plain",
      Excel: "devicon-excel-plain",
      "Power BI": "devicon-powerbi-plain",
      Tableau: "devicon-tableau-plain",
      Jupyter: "devicon-jupyter-plain",
      Git: "devicon-git-plain",
      GitHub: "devicon-github-original",
      "VS Code": "devicon-vscode-original",
    };

    return iconMap[name] || "devicon-code-plain";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="glass-panel p-8 rounded-xl backdrop-blur-md border border-white/10"
    >
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-semibold flex items-center text-white">
          <Code className="w-6 h-6 mr-3 text-brand-purple" />
          Technical Skills
        </h3>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveFilter(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm border ${
              activeFilter === category
                ? "bg-brand-purple text-white border-brand-purple/50"
                : "bg-gray-800/30 text-gray-300 border-white/10 hover:bg-gray-800/50 hover:border-brand-purple/30"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6"
      >
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              duration: 0.3,
              delay: index * 0.05,
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            whileHover={{
              scale: 1.1,
              y: -5,
              transition: { duration: 0.2 },
            }}
            className="flex flex-col items-center group cursor-pointer"
          >
            <motion.div
              className={`relative w-16 h-16 ${skill.bgColor} rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:border-brand-purple/50 transition-all duration-300`}
              whileHover={{
                boxShadow: "0 10px 30px -5px rgba(155, 135, 245, 0.4)",
              }}
            >
              <i
                className={`${getSkillIcon(skill.name)} text-3xl`}
                style={{ color: skill.color }}
              ></i>

              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.span
              className="text-xs font-medium mt-3 text-center text-gray-300 group-hover:text-white transition-colors max-w-20"
              whileHover={{ scale: 1.05 }}
            >
              {skill.name}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
