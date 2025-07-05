"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Zap, BarChart, BookOpen, Users, Award, Clock, MessageSquare, Shield } from "lucide-react";

import type { Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const features = [
  {
    icon: <BrainCircuit className="h-12 w-12" />,
    title: "AI-Powered Learning",
    description: "Smart algorithms adapt to your learning style and pace for maximum efficiency.",
    color: "from-blue-500 to-cyan-400",
    delay: 0.1
  },
  {
    icon: <BookOpen className="h-12 w-12" />,
    title: "Comprehensive Courses",
    description: "Wide range of subjects with in-depth coverage and practical examples.",
    color: "from-purple-500 to-pink-400",
    delay: 0.2
  },
  {
    icon: <Users className="h-12 w-12" />,
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of teaching experience.",
    color: "from-amber-500 to-yellow-400",
    delay: 0.3
  },
  {
    icon: <Award className="h-12 w-12" />,
    title: "Certification",
    description: "Earn recognized certificates upon course completion.",
    color: "from-emerald-500 to-teal-400",
    delay: 0.4
  },
  {
    icon: <Clock className="h-12 w-12" />,
    title: "Flexible Schedule",
    description: "Learn at your own pace, anytime and anywhere.",
    color: "from-rose-500 to-pink-400",
    delay: 0.5
  },
  {
    icon: <MessageSquare className="h-12 w-12" />,
    title: "24/7 Support",
    description: "Our team is always ready to assist you with any queries.",
    color: "from-indigo-500 to-blue-400",
    delay: 0.6
  }
];

export function WhyFirstRank() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the perfect learning experience tailored to your needs with our comprehensive features
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: feature.delay }}
              className={`group relative p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-transparent`}
            >
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5 group-hover:opacity-10 transition-all duration-500`}
                aria-hidden="true"
              />
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${feature.color} text-white shadow-md group-hover:scale-105 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
