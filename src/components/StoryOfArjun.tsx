'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const StoryOfArjun = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Video is in view
            video.play().catch(error => {
              console.log('Autoplay prevented:', error);
              // If autoplay is prevented, show controls
              video.controls = true;
            });
          } else {
            // Video is out of view
            video.pause();
            video.currentTime = 0; // Reset to start
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of video is in view
      }
    );

    observer.observe(video);

    // Cleanup
    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, []);

  return (
    <section className="w-full py-20 bg-background">
      <div className="container px-8 md:px-12 lg:px-24 xl:px-32 mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-400">
            Story of Arjun
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Discover the inspiring journey of Arjun and how First Rank transformed his learning experience
          </p>
        </motion.div>

        <motion.div 
          className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            playsInline
            preload="auto"
            poster="/Images/video-poster.jpg"
            title="Story of Arjun"
          >
            <source src="/Videos/story_of_arjun.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  );
};

export default StoryOfArjun;
