// app/page.tsx
'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

  return (
    <main className="min-h-screen text-white overflow-x-hidden">
      <div 
        ref={ref}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              style={{
                top: `${Math.random() * 100}%`,
                left: '-10%',
                width: '120%',
                transform: `rotate(${Math.random() * 10 - 5}deg)`,
                animation: `speedLine ${1 + Math.random() * 2}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`,
                opacity: 0.3
              }}
            />
          ))}
        </div>

        <motion.div 
          style={{ y, opacity }}
          className="relative z-10 text-center px-4"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-7xl md:text-9xl font-black mb-8 tracking-tighter"
          >
            <span className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent animate-gradient-x">
              VELOCITY
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
          >
            Engineering machines that dominate with uncompromising performance
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl -translate-y-16 translate-x-16 group-hover:scale-125 transition-transform duration-500" />
            
            <div className="relative z-10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 mb-6 mx-auto"
              >
                <div className="w-full h-full border-2 border-red-500/30 border-t-red-500 rounded-full" />
              </motion.div>
              
              <h2 className="text-5xl font-black mb-6 text-center bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                SPEED
              </h2>
              
              <p className="text-gray-300 text-lg leading-relaxed text-center">
                Velocity is in our DNA. We engineer machines that dominate the road with unparalleled acceleration and top speeds.
              </p>
              
              <div className="mt-8 relative h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                  className="absolute h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8"
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl -translate-y-16 -translate-x-16 group-hover:scale-125 transition-transform duration-500" />
            
            <div className="relative z-10">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-16 h-16 mb-6 mx-auto flex items-center justify-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-orange-300 rounded-full animate-pulse" />
                </div>
              </motion.div>
              
              <h2 className="text-5xl font-black mb-6 text-center bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                INTENSITY
              </h2>
              
              <p className="text-gray-300 text-lg leading-relaxed text-center">
                Every component, every detail is crafted with extreme intensity to deliver an experience that&apos;s nothing short of explosive.
              </p>
              
              <div className="mt-8 flex justify-center">
                <motion.div
                  animate={{ boxShadow: ["0 0 20px 0px rgba(255, 69, 0, 0.3)", "0 0 40px 10px rgba(255, 69, 0, 0.6)", "0 0 20px 0px rgba(255, 69, 0, 0.3)"] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-4 h-4 bg-orange-500 rounded-full"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8"
          >
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl translate-y-16 translate-x-16 group-hover:scale-125 transition-transform duration-500" />
            
            <div className="relative z-10">
              <motion.div
                animate={{ rotate: 90 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-16 h-16 mb-6 mx-auto flex items-center justify-center"
              >
                <div className="w-12 h-12 border-4 border-blue-500 border-r-transparent rounded-full" />
              </motion.div>
              
              <h2 className="text-5xl font-black mb-6 text-center bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                EXCELLENCE
              </h2>
              
              <p className="text-gray-300 text-lg leading-relaxed text-center">
                Compromise is not in our vocabulary. We demand perfection in every aspect of design and performance.
              </p>
              
              <div className="mt-8 relative h-1 bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0 rounded-full">
                <motion.div
                  initial={{ left: "0%" }}
                  animate={{ left: "100%" }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 w-2 h-4 bg-white -translate-y-1/2 rounded-sm"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-gray-500"
          >
            <p className="text-lg mb-2">PERFORMANCE REDEFINED</p>
            <p className="text-sm">© 2024 VELOCITY ENGINEERING. ALL RIGHTS RESERVED.</p>
          </motion.div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        @keyframes speedLine {
          0% { transform: translateX(-100%) rotate(var(--rotation)); }
          100% { transform: translateX(100%) rotate(var(--rotation)); }
        }
      `}</style>
    </main>
  );
}