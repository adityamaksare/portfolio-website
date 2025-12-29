'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiAcademicCap, HiCode, HiLightningBolt, HiCheckCircle, HiClock, HiSparkles } from 'react-icons/hi';
import { journey } from '@/data/portfolio';

export default function Journey() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });
  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'certification':
        return HiAcademicCap;
      case 'project':
        return HiCode;
      case 'learning':
        return HiLightningBolt;
      default:
        return HiCheckCircle;
    }
  };

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'completed':
        return {
          icon: HiCheckCircle,
          iconColor: 'text-accent-500',
          ringColor: 'ring-accent-500/30',
          bgColor: 'bg-accent-500/10',
          borderColor: 'border-accent-500/50',
          glowColor: 'shadow-accent-500/50'
        };
      case 'in-progress':
        return {
          icon: HiClock,
          iconColor: 'text-primary-500',
          ringColor: 'ring-primary-500/30',
          bgColor: 'bg-primary-500/10',
          borderColor: 'border-primary-500/50',
          glowColor: 'shadow-primary-500/50'
        };
      default:
        return {
          icon: HiSparkles,
          iconColor: 'text-gray-400',
          ringColor: 'ring-gray-400/30',
          bgColor: 'bg-gray-400/10',
          borderColor: 'border-gray-400/50',
          glowColor: 'shadow-gray-400/50'
        };
    }
  };

  return (
    <section id="journey" ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={titleVariants} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 border border-primary-500/20 mb-6">
            <HiSparkles className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
              2025 Learning Journey
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 bg-clip-text text-transparent">
            My Journey
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Rapid transformation from beginner to building production-grade data engineering systems in 2025
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Animated Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-800 rounded-full">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 rounded-full shadow-lg shadow-primary-500/50"
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {journey.map((item, index) => {
              const Icon = getIcon(item.type);
              const StatusIcon = getStatusConfig(item.status).icon;
              const config = getStatusConfig(item.status);
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-8`}
                >
                  {/* Timeline Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className={`absolute left-6 md:left-1/2 -translate-x-1/2 md:translate-x-0 z-10`}
                  >
                    <div className="relative group">
                      {/* Outer Ring - Animated */}
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                        className={`absolute inset-0 rounded-full ring-4 ${config.ringColor} blur-sm`}
                      />

                      {/* Icon Container */}
                      <div className={`relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full ${config.bgColor} border-4 ${config.borderColor} bg-white dark:bg-gray-900 flex items-center justify-center shadow-lg ${config.glowColor} group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${config.iconColor}`} />

                        {/* Status Badge */}
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center shadow-lg">
                          <StatusIcon className={`w-4 h-4 ${config.iconColor} ${item.status === 'in-progress' ? 'animate-pulse' : ''}`} />
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`w-full md:w-[calc(50%-4rem)] ${
                      isEven ? 'md:pr-8 md:text-right pl-16 sm:pl-18 md:pl-0' : 'md:pl-8 pl-16 sm:pl-18 md:pl-0'
                    }`}
                  >
                    <div className={`relative group p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 ${config.borderColor} hover:border-primary-500/50 shadow-lg hover:shadow-2xl transition-all duration-300`}>
                      {/* Glow Effect */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`}></div>

                      <div className="relative">
                        {/* Period Badge */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${
                            item.status === 'completed'
                              ? 'from-accent-500/20 to-accent-600/20 border border-accent-500/30'
                              : item.status === 'in-progress'
                              ? 'from-primary-500/20 to-primary-600/20 border border-primary-500/30'
                              : 'from-gray-500/20 to-gray-600/20 border border-gray-500/30'
                          } mb-3`}
                        >
                          <div className={`w-2 h-2 rounded-full ${
                            item.status === 'completed'
                              ? 'bg-accent-500'
                              : item.status === 'in-progress'
                              ? 'bg-primary-500 animate-pulse'
                              : 'bg-gray-500'
                          }`}></div>
                          <span className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                            {item.period}
                          </span>
                        </motion.div>

                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 leading-tight">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Spacer for even layout on desktop */}
                  <div className="hidden md:block w-[calc(50%-4rem)]"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="relative group p-8 rounded-3xl bg-gradient-to-br from-primary-50 via-accent-50 to-primary-50 dark:from-primary-900/20 dark:via-accent-900/20 dark:to-primary-900/20 border-2 border-primary-200 dark:border-primary-800 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-50">
              <div className="absolute top-0 right-0 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <HiSparkles className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  2025: Year of Transformation
                </h3>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <HiSparkles className="w-8 h-8 text-accent-600 dark:text-accent-400" />
                </motion.div>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                <span className="font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  From zero to production-grade data pipelines in 2025
                </span>
                {" — "}
                Built real-time streaming systems processing 14,000+ daily events with 95%+ accuracy and zero data loss. Mastered Apache Kafka, PySpark, and modern data engineering practices.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
