"use client";

import { motion, Variants } from "framer-motion";
import { ShieldCheck, BookOpen, Hand, Brain, Languages, Star, Users, Download } from "lucide-react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const fadeIn: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

export function Content() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 space-y-12">
        
        <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-4">
            Why Choose First Rank for Effortless Learning?
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed text-center">
            In today&apos;s digital age, students have access to a wealth of educational resources. However, not all platforms provide a safe, engaging, and effective learning experience. First Rank is a revolutionary AI-powered mobile app designed to transform the way students learn. With its unique features and expert-crafted content, First Rank is the ideal choice for students seeking to excel in their studies.
          </p>
        </motion.div>

        <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center mb-8">Key Benefits of First Rank</h3>
          <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <BenefitCard icon={<ShieldCheck className="text-green-500" />} title="Safe and Secure Environment" description="First Rank prioritizes student safety, filtering out inappropriate content. Parents can have peace of mind knowing their children are learning in a secure environment." />
            <BenefitCard icon={<BookOpen className="text-blue-500" />} title="Expert-Crafted Content" description="The app is loaded with curriculum-related syllabus crafted by experts, ensuring students receive accurate and relevant information, plus general knowledge and interesting facts." />
            <BenefitCard icon={<Hand className="text-purple-500" />} title="Easy-to-Use Interface" description="A simple and intuitive interface, accessible to all ages. The touch-to-speak feature simulates a real classroom experience." />
            <BenefitCard icon={<Brain className="text-pink-500" />} title="Personalized Learning" description="The AI-powered teacher provides personalized support, answering questions and helping students revise and learn at their own pace." />
            <BenefitCard icon={<Languages className="text-yellow-500" />} title="Indian Language Support" description="First Rank supports all major Indian languages, and the AI teacher communicates in Indian English slang, ensuring students feel comfortable and engaged." />
          </motion.div>
        </motion.div>

        <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center mb-8">Why First Rank Stands Out</h3>
          <motion.div className="grid gap-8 md:grid-cols-3" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <BenefitCard icon={<Star className="text-orange-500" />} title="Comprehensive Curriculum" description="First Rank covers the entire curriculum, ensuring students have access to a vast repository of knowledge." />
            <BenefitCard icon={<Users className="text-teal-500" />} title="Engaging Learning Experience" description="Interactive features, such as Q&A sessions and touch-to-speak functionality, make learning fun and engaging." />
            <BenefitCard icon={<ShieldCheck className="text-red-500" />} title="Parental Peace of Mind" description="With robust safety features, parents can trust that their children are learning in a secure and responsible environment." />
          </motion.div>
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

const BenefitCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <motion.div 
    className="flex flex-col items-center text-center p-6 bg-muted rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
    variants={cardVariants}
  >
    <div className="mb-4 text-4xl">{icon}</div>
    <h4 className="text-xl font-bold mb-2">{title}</h4>
    <p className="text-muted-foreground">{description}</p>
  </motion.div>
);
