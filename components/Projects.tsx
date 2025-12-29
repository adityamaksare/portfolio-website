'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiExternalLink, HiX, HiCode, HiLightningBolt, HiCheckCircle, HiSparkles, HiChip } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { projects } from '@/data/portfolio';

interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  highlights: string[];
  technicalDetails: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const projectColors = [
    {
      gradient: "from-primary-500 via-primary-600 to-accent-500",
      bgGradient: "from-primary-50 via-primary-50 to-accent-50 dark:from-primary-900/20 dark:via-primary-900/20 dark:to-accent-900/20",
      borderColor: "border-primary-200 dark:border-primary-800",
      accentColor: "text-primary-600 dark:text-primary-400"
    },
    {
      gradient: "from-accent-500 via-accent-600 to-primary-600",
      bgGradient: "from-accent-50 via-accent-50 to-primary-50 dark:from-accent-900/20 dark:via-accent-900/20 dark:to-primary-900/20",
      borderColor: "border-accent-200 dark:border-accent-800",
      accentColor: "text-accent-600 dark:text-accent-400"
    }
  ];

  return (
    <section id="projects" ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-900/50 dark:to-gray-900"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 border border-primary-500/20 mb-6">
            <HiCode className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
              Portfolio Showcase
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Production-grade data engineering systems with real-world impact, built with modern tech stack
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const colors = projectColors[index % projectColors.length];

            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className={`relative h-full rounded-3xl bg-gradient-to-br ${colors.bgGradient} border-2 ${colors.borderColor} shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}></div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-6 right-6 z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.2, type: "spring" }}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${colors.gradient} text-white shadow-lg`}
                      >
                        <HiSparkles className="w-4 h-4" />
                        <span className="text-xs font-bold">Featured</span>
                      </motion.div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="relative p-6 sm:p-8">
                    {/* Title */}
                    <div className="mb-6">
                      <div className="flex items-start gap-4 mb-4">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className={`p-4 rounded-2xl bg-gradient-to-br ${colors.gradient} shadow-lg flex-shrink-0`}
                        >
                          <HiCode className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-primary-600 group-hover:to-accent-600 transition-all">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {project.shortDescription}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {project.metrics.map((metric, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ delay: 0.4 + index * 0.2 + idx * 0.1 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="relative group/metric"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30 dark:from-gray-700/50 dark:to-gray-700/30 rounded-xl blur-sm"></div>
                          <div className="relative p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 text-center">
                            <div className={`text-2xl sm:text-3xl font-bold mb-1 bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
                              {metric.value}
                            </div>
                            <div className="text-xs font-medium text-gray-600 dark:text-gray-400">
                              {metric.label}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <HiChip className={`w-5 h-5 ${colors.accentColor}`} />
                        <span className="text-sm font-bold text-gray-900 dark:text-gray-100">Tech Stack</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 6).map((tech, idx) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: 0.6 + index * 0.2 + idx * 0.05 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="px-3 py-1.5 bg-white dark:bg-gray-800 rounded-lg text-xs font-semibold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
                          >
                            {tech}
                          </motion.span>
                        ))}
                        {project.techStack.length > 6 && (
                          <span className="px-3 py-1.5 bg-white dark:bg-gray-800 rounded-lg text-xs font-semibold text-gray-500 dark:text-gray-500 border border-gray-200 dark:border-gray-700">
                            +{project.techStack.length - 6} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-3">
                      <button className={`flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${colors.gradient} hover:opacity-90 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all`}>
                        <span>View Details</span>
                        <HiExternalLink className="w-5 h-5" />
                      </button>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-xl font-bold border-2 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all"
                        >
                          <FaGithub className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="sticky top-4 right-4 float-right p-3 rounded-xl bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors z-10 shadow-lg"
                aria-label="Close"
              >
                <HiX className="w-6 h-6" />
              </button>

              <div className="p-8 sm:p-12">
                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-5 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-600 shadow-xl">
                      <HiCode className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                        {selectedProject.title}
                      </h3>
                      {selectedProject.featured && (
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg">
                          <HiSparkles className="w-4 h-4" />
                          <span className="text-sm font-bold">Featured Project</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                  {selectedProject.metrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                      <div className="relative p-5 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl border-2 border-primary-200 dark:border-primary-800 text-center">
                        <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-primary-600 to-accent-600 bg-clip-text text-transparent mb-2">
                          {metric.value}
                        </div>
                        <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                          {metric.label}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <HiChip className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      Tech Stack
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.techStack.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-5 py-2.5 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 text-primary-700 dark:text-primary-300 rounded-xl text-sm font-bold border border-primary-200 dark:border-primary-800 shadow-md hover:shadow-lg transition-all"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <HiLightningBolt className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      Key Highlights
                    </h4>
                  </div>
                  <div className="space-y-3">
                    {selectedProject.highlights.map((highlight, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.05 }}
                        className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-accent-50 to-accent-50/50 dark:from-accent-900/20 dark:to-accent-900/10 border border-accent-200 dark:border-accent-800"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 text-white flex items-center justify-center shadow-lg">
                          <HiCheckCircle className="w-5 h-5" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technical Implementation */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <HiCode className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      Technical Implementation
                    </h4>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {selectedProject.technicalDetails.map((detail, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.05 }}
                        className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700"
                      >
                        <div className="flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-gradient-to-br from-primary-600 to-accent-600"></div>
                        <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
                    >
                      <FaGithub className="w-6 h-6" />
                      <span>View on GitHub</span>
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:opacity-90 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
                    >
                      <HiExternalLink className="w-6 h-6" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
