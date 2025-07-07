"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import "./ui/shimmer.css";

export function Hero() {
  return (
    <section className="w-full min-h-screen flex items-start pt-32 pb-16 justify-center bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-black/[0.05] dark:bg-grid-white/[0.05] z-0" />
      <div className="container px-8 md:px-12 lg:px-24 xl:px-32 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-24 items-center">
          <motion.div 
            className="flex flex-col justify-center space-y-4 text-center lg:text-left"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-blue-500 to-blue-300">
                Unlock Your Potential with First Rank
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0">
                The revolutionary AI-powered mobile app designed to transform the way students learn. Safe, engaging, and effective.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mx-auto lg:mx-0">
              <Button variant="cta" size="lg">Get Started</Button>
              <Button variant="outline" size="lg">Learn More</Button>
            </div>
          </motion.div>
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.8, 
                delay: 0.2 
              } 
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <div className="relative group">
            <div className="absolute inset-0 rounded-full shimmer-effect group-hover:opacity-100 transition-opacity duration-300" />
            <Image
              src="/Images/first_rank_logo.png"
              alt="First Rank Logo"
              width={500}
              height={500}
              className="relative z-10 rounded-full object-cover shadow-2xl"
              priority
            />
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
