"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, BookOpen, Hand, Brain, Languages, Users, Download } from "lucide-react";


const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const fadeIn: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

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

export function Content() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 space-y-12">
        
        <motion.div 
          variants={fadeIn} 
          initial="initial" 
          whileInView="animate" 
          viewport={{ once: true }}
          className="relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 text-left">
                Why Choose First Rank for Effortless Learning?
              </h2>
              <p className="text-muted-foreground md:text-lg/relaxed text-left">
                In today&apos;s digital age, students have access to a wealth of educational resources. However, not all platforms provide a safe, engaging, and effective learning experience. First Rank is a revolutionary AI-powered mobile app designed to transform the way students learn. With its unique features and expert-crafted content, First Rank is the ideal choice for students seeking to excel in their studies.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image 
                src="/Svgs/learning_illustration.svg" 
                alt="Learning Illustration" 
                width={500}
                height={400}
                className="w-full max-w-xl h-auto"
                priority
              />
            </div>
          </div>
        </motion.div>

        <motion.div 
          variants={fadeIn} 
          initial="initial" 
          whileInView="animate" 
          viewport={{ once: true, margin: "-100px" }} 
          className="pt-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 mb-4">
              Key Benefits of First Rank
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how First Rank transforms learning with its innovative features and student-focused approach
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                icon: <ShieldCheck className="h-12 w-12" />,
                title: "Safe and Secure Environment",
                description: "First Rank prioritizes student safety, filtering out inappropriate content. Parents can have peace of mind knowing their children are learning in a secure environment.",
                color: "from-green-500 to-emerald-400"
              },
              {
                icon: <BookOpen className="h-12 w-12" />,
                title: "Expert-Crafted Content",
                description: "The app is loaded with curriculum-related syllabus crafted by experts, ensuring students receive accurate and relevant information.",
                color: "from-blue-500 to-cyan-400"
              },
              {
                icon: <Hand className="h-12 w-12" />,
                title: "Easy-to-Use Interface",
                description: "A simple and intuitive interface, accessible to all ages. The touch-to-speak feature simulates a real classroom experience.",
                color: "from-purple-500 to-pink-400"
              },
              {
                icon: <Brain className="h-12 w-12" />,
                title: "Personalized Learning",
                description: "The AI-powered teacher provides personalized support, answering questions and helping students learn at their own pace.",
                color: "from-pink-500 to-rose-400"
              },
              {
                icon: <Languages className="h-12 w-12" />,
                title: "Indian Language Support",
                description: "Supports all major Indian languages, with AI teachers communicating in Indian English slang for better comfort and engagement.",
                color: "from-amber-500 to-yellow-400"
              },
              {
                icon: <Users className="h-12 w-12" />,
                title: "Engaging Experience",
                description: "Interactive features and real-time feedback make learning fun and effective for students of all ages.",
                color: "from-indigo-500 to-blue-400"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-transparent"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-100 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          variants={fadeIn} 
          initial="initial" 
          whileInView="animate" 
          viewport={{ once: true, margin: "-100px" }} 
          className="pt-20"
        >
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 mb-4">
              Why First Rank Stands Out
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our unique approach to digital learning
            </p>
          </motion.div> */}

          {/* <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-8 md:grid-cols-3"
          >
            {[
              {
                icon: <BookOpen className="h-12 w-12" />,
                title: "Comprehensive Curriculum",
                description: "Covers the entire curriculum with a vast repository of knowledge, ensuring no topic is left behind.",
                color: "from-orange-500 to-amber-400"
              },
              {
                icon: <Users className="h-12 w-12" />,
                title: "Engaging Learning",
                description: "Interactive Q&A sessions and touch-to-speak functionality make learning fun and effective.",
                color: "from-teal-500 to-emerald-400"
              },
              {
                icon: <ShieldCheck className="h-12 w-12" />,
                title: "Parental Peace of Mind",
                description: "Robust safety features ensure a secure learning environment for children of all ages.",
                color: "from-red-500 to-pink-400"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-transparent"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-100 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div> */}
        </motion.div>

        <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center bg-muted p-8 rounded-lg">
          <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">Conclusion</h3>
          <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed">
            First Rank is more than just an educational app – it&apos;s a comprehensive learning platform that provides students with the tools they need to succeed. With its safe, engaging, and effective approach to learning, First Rank is the perfect choice for students seeking to excel in their studies.
          </p>
          <button className="mt-6 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8">
            <Download className="mr-2 h-5 w-5" />
            Download First Rank Today
          </button>
        </motion.div>

      </div>
    </section>
  );
}


