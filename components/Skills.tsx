'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiCode, HiDatabase, HiCog, HiLightningBolt, HiChip, HiSparkles } from 'react-icons/hi';
import { skills } from '@/data/portfolio';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const categoryConfig: { [key: string]: {
    gradient: string;
    icon: any;
    bgColor: string;
    borderColor: string;
    iconColor: string;
  }} = {
    "Data Engineering & Stream Processing": {
      gradient: "from-primary-500 via-primary-600 to-accent-500",
      icon: HiLightningBolt,
      bgColor: "bg-primary-50 dark:bg-primary-900/20",
      borderColor: "border-primary-200 dark:border-primary-800",
      iconColor: "text-primary-600 dark:text-primary-400"
    },
    "Programming & Databases": {
      gradient: "from-accent-400 via-accent-500 to-accent-600",
      icon: HiDatabase,
      bgColor: "bg-accent-50 dark:bg-accent-900/20",
      borderColor: "border-accent-200 dark:border-accent-800",
      iconColor: "text-accent-600 dark:text-accent-400"
    },
    "DevOps & Tools": {
      gradient: "from-primary-600 via-primary-700 to-accent-600",
      icon: HiCog,
      bgColor: "bg-primary-50 dark:bg-primary-900/20",
      borderColor: "border-primary-200 dark:border-primary-800",
      iconColor: "text-primary-600 dark:text-primary-400"
    },
    "AI/ML Integration": {
      gradient: "from-accent-500 via-accent-600 to-primary-600",
      icon: HiChip,
      bgColor: "bg-accent-50 dark:bg-accent-900/20",
      borderColor: "border-accent-200 dark:border-accent-800",
      iconColor: "text-accent-600 dark:text-accent-400"
    }
  };

  return (
    <section id="skills" ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900/50 dark:via-gray-900 dark:to-gray-900/50"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 border border-primary-500/20 mb-6">
            <HiSparkles className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
              Tech Stack
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tools and technologies I use to build production-grade data engineering systems
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => {
            const config = categoryConfig[category];
            const Icon = config.icon;

            return (
              <motion.div
                key={category}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${config.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-2xl transition-all duration-500`}></div>

                {/* Card */}
                <div className={`relative h-full p-8 rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 ${config.borderColor} shadow-xl group-hover:shadow-2xl transition-all duration-300`}>
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`p-4 rounded-2xl bg-gradient-to-br ${config.gradient} shadow-lg`}
                    >
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </motion.div>

                    {/* Category Title */}
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                        {category}
                      </h3>
                      <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${config.gradient} mt-2`}></div>
                    </div>

                    {/* Count Badge */}
                    <div className={`px-3 py-1.5 rounded-full ${config.bgColor} border ${config.borderColor}`}>
                      <span className={`text-xs font-bold ${config.iconColor}`}>
                        {skillList.length}
                      </span>
                    </div>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2.5">
                    {skillList.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: categoryIndex * 0.15 + index * 0.05, duration: 0.4 }}
                        whileHover={{ scale: 1.08, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="group/skill relative"
                      >
                        {/* Skill Tag */}
                        <div className="relative px-4 py-2.5 bg-gray-50 dark:bg-gray-900/50 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-primary-500/50 transition-all shadow-md hover:shadow-lg cursor-default">
                          {/* Hover Gradient */}
                          <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${config.gradient} opacity-0 group-hover/skill:opacity-10 transition-opacity`}></div>

                          {/* Text */}
                          <span className="relative text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover/skill:text-gray-900 dark:group-hover/skill:text-gray-100 transition-colors">
                            {skill}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-primary-50 via-accent-50 to-primary-50 dark:from-primary-900/20 dark:via-accent-900/20 dark:to-primary-900/20 border-2 border-primary-200 dark:border-primary-800 shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <HiCode className="w-10 h-10 sm:w-12 sm:h-12 text-primary-600 dark:text-primary-400" />
              </motion.div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {Object.values(skills).flat().length}+ Technologies
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Across 4 specialized domains
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {Object.entries(categoryConfig).map(([category, config], index) => {
                const Icon = config.icon;
                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`p-2 sm:p-3 rounded-xl bg-gradient-to-br ${config.gradient} shadow-lg`}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
