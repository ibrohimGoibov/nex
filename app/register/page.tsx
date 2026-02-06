"use client";

import { useState, useEffect } from "react";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff, FiCheck, FiShield, FiArrowRight, FiTerminal } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CyberRegister() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeInput, setActiveInput] = useState<string | null>(null);
  const [glitchEffect, setGlitchEffect] = useState(false);
  const [matrixChars, setMatrixChars] = useState<string[]>([]);

  useEffect(() => {
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const matrix = Array.from({ length: 100 }, () => 
      chars[Math.floor(Math.random() * chars.length)]
    );
    setMatrixChars(matrix);
    
    const interval = setInterval(() => {
      const newMatrix = [...matrixChars];
      const randomIndex = Math.floor(Math.random() * newMatrix.length);
      newMatrix[randomIndex] = chars[Math.floor(Math.random() * chars.length)];
      setMatrixChars(newMatrix);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchEffect(true);
      setTimeout(() => setGlitchEffect(false), 200);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(formData);
    setIsLoading(false);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden relative mt-[50px]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-shimmer"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-shimmer animation-delay-2000"></div>
        
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900/5 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-800/5 rounded-full"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        
        <div className="absolute inset-0 grid grid-cols-10 gap-4 p-8 opacity-10">
          {matrixChars.map((char, idx) => (
            <motion.span
              key={idx}
              className="text-red-500 text-xl font-mono"
              initial={{ opacity: 0.1 }}
              animate={{ opacity: [0.1, 0.5, 0.1] }}
              transition={{ duration: 2, repeat: Infinity, delay: idx * 0.01 }}
            >
              {char}
            </motion.span>
          ))}
        </div>
        
        <motion.div 
          className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <motion.div 
        className="relative z-10 min-h-screen flex items-center justify-center p-4"
        //@ts-ignore
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full max-w-lg">
          <motion.div 
            className="text-center mb-12 relative"
            //@ts-ignore
            variants={itemVariants}
          >
            <h1 className={`text-6xl font-bold tracking-wider relative ${glitchEffect ? 'glitch-effect' : ''}`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-700">
                REGISTER
              </span>
              <span className="absolute top-0 left-0 text-red-400 opacity-70 animate-pulse">
                REGISTER
              </span>
            </h1>
            
            <motion.p 
              className="text-red-400/80 text-xl mt-4 font-mono"
              animate={{ textShadow: ["0 0 10px rgba(239,68,68,0.3)", "0 0 20px rgba(239,68,68,0.6)", "0 0 10px rgba(239,68,68,0.3)"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              &gt;_ Enter the cyber realm
            </motion.p>
            
            <motion.div 
              className="h-1 w-64 mx-auto mt-6 bg-gradient-to-r from-red-900 via-red-600 to-red-900 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          <motion.div 
            className="bg-black/80 backdrop-blur-xl border-2 border-red-900/50 rounded-2xl p-8 shadow-2xl shadow-red-900/20 relative overflow-hidden"
            //@ts-ignore
            variants={itemVariants}
            whileHover={{ boxShadow: "0 0 40px rgba(239,68,68,0.3)" }}
          >
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-red-600"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-red-600"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-red-600"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-red-600"></div>
            
            <div className="absolute inset-0 grid grid-cols-10 gap-2 opacity-10">
              {Array.from({ length: 100 }).map((_, idx) => (
                <div key={idx} className="w-1 h-1 bg-red-500 rounded-full"></div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
              <motion.div
                //@ts-ignore
                variants={itemVariants}
                animate={activeInput === "fullName" ? { scale: 1.02 } : { scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center mb-3">
                  <FiUser className="text-red-500 mr-3 text-xl" />
                  <label className="text-red-400 font-bold tracking-wider text-lg">
                    FULLNAME
                  </label>
                </div>
                <motion.div
                  className={`relative ${activeInput === "fullName" ? 'input-glow' : ''}`}
                  whileHover={{ scale: 1.01 }}
                >
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    onFocus={() => setActiveInput("fullName")}
                    onBlur={() => setActiveInput(null)}
                    placeholder="Enter your full name"
                    className="w-full px-5 py-4 bg-black/50 border-2 border-red-900/30 rounded-xl text-white placeholder-red-900/50 focus:outline-none focus:border-red-600 font-mono text-lg transition-all duration-300"
                    required
                  />
                  {activeInput === "fullName" && (
                    <motion.div 
                      className="absolute -bottom-1 left-0 right-0 h-1 bg-red-600 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              </motion.div>

              <motion.div
                //@ts-ignore
                variants={itemVariants}
                animate={activeInput === "email" ? { scale: 1.02 } : { scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center mb-3">
                  <FiMail className="text-red-500 mr-3 text-xl" />
                  <label className="text-red-400 font-bold tracking-wider text-lg">
                    EMAILADDRESS
                  </label>
                </div>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-red-600 font-mono">@</div>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    onFocus={() => setActiveInput("email")}
                    onBlur={() => setActiveInput(null)}
                    placeholder="your.email@cyber.net"
                    className="w-full px-12 py-4 bg-black/50 border-2 border-red-900/30 rounded-xl text-white placeholder-red-900/50 focus:outline-none focus:border-red-600 font-mono text-lg transition-all duration-300"
                    required
                  />
                </div>
              </motion.div>

              <motion.div
                //@ts-ignore
                variants={itemVariants}
                animate={activeInput === "username" ? { scale: 1.02 } : { scale: 1 }}
              >
                <div className="flex items-center mb-3">
                  <FiTerminal className="text-red-500 mr-3 text-xl" />
                  <label className="text-red-400 font-bold tracking-wider text-lg">
                    USERNAME
                  </label>
                </div>
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) => handleInputChange("username", e.target.value)}
                  onFocus={() => setActiveInput("username")}
                  onBlur={() => setActiveInput(null)}
                  placeholder="Choose your cyber ID"
                  className="w-full px-5 py-4 bg-black/50 border-2 border-red-900/30 rounded-xl text-white placeholder-red-900/50 focus:outline-none focus:border-red-600 font-mono text-lg transition-all duration-300"
                  required
                />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div 
                //@ts-ignore
                variants={itemVariants}>
                  <div className="flex items-center mb-3">
                    <FiLock className="text-red-500 mr-3 text-xl" />
                    <label className="text-red-400 font-bold tracking-wider text-lg">
                      PASSWORD
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      onFocus={() => setActiveInput("password")}
                      onBlur={() => setActiveInput(null)}
                      placeholder="••••••••"
                      className="w-full px-5 py-4 bg-black/50 border-2 border-red-900/30 rounded-xl text-white placeholder-red-900/50 focus:outline-none focus:border-red-600 font-mono text-lg transition-all duration-300 pr-12"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-500 hover:text-red-400 transition-colors"
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                </motion.div>

                <motion.div 
                //@ts-ignore
                variants={itemVariants}>
                  <div className="flex items-center mb-3">
                    <FiLock className="text-red-500 mr-3 text-xl" />
                    <label className="text-red-400 font-bold tracking-wider text-lg">
                      CONFIRMPASSWORD
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                      onFocus={() => setActiveInput("confirmPassword")}
                      onBlur={() => setActiveInput(null)}
                      placeholder="••••••••"
                      className="w-full px-5 py-4 bg-black/50 border-2 border-red-900/30 rounded-xl text-white placeholder-red-900/50 focus:outline-none focus:border-red-600 font-mono text-lg transition-all duration-300 pr-12"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-500 hover:text-red-400 transition-colors"
                    >
                      {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                className="flex items-start space-x-3 pt-4"
                //@ts-ignore
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <motion.button
                  type="button"
                  onClick={() => handleInputChange("agreeTerms", !formData.agreeTerms)}
                  className={`relative w-7 h-7 flex items-center justify-center border-2 rounded mt-1 ${formData.agreeTerms ? 'border-red-600 bg-red-600' : 'border-red-900/50'}`}
                  whileTap={{ scale: 0.9 }}
                >
                  {formData.agreeTerms && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring" }}
                    >
                      <FiCheck className="text-white" />
                    </motion.div>
                  )}
                </motion.button>
                <label className="text-red-300 cursor-pointer flex-1">
                  I agree to the <span className="text-red-400 underline">Terms of Service</span> and <span className="text-red-400 underline">Privacy Policy</span>
                </label>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isLoading || !formData.agreeTerms}
                className={`w-full py-4 rounded-xl font-bold text-xl tracking-wider relative overflow-hidden group ${!formData.agreeTerms ? 'opacity-50 cursor-not-allowed' : ''}`}
                //@ts-ignore
                variants={itemVariants}
                whileHover={formData.agreeTerms ? { scale: 1.03 } : {}}
                whileTap={formData.agreeTerms ? { scale: 0.98 } : {}}
                animate={formData.agreeTerms ? {
                  background: [
                    "linear-gradient(135deg, #991b1b 0%, #7f1d1d 50%, #991b1b 100%)",
                    "linear-gradient(135deg, #dc2626 0%, #991b1b 50%, #dc2626 100%)",
                    "linear-gradient(135deg, #991b1b 0%, #7f1d1d 50%, #991b1b 100%)"
                  ]
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800 to-red-900 group-hover:from-red-800 group-hover:via-red-700 group-hover:to-red-800 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="relative z-10 text-white flex items-center justify-center">
                  {isLoading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mr-3"
                      />
                      PROCESSING...
                    </>
                  ) : (
                    <>
                      <FiShield className="mr-3" />
                      CREATE ACCOUNT
                    </>
                  )}
                </span>
              </motion.button>
            </form>

            <motion.div 
              className="relative my-8"
              //@ts-ignore
              variants={itemVariants}
            >
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-red-900/30"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-black text-red-500 font-mono tracking-wider">OR</span>
              </div>
            </motion.div>
            <Link href={'/ru/login'}>
            <motion.div 
              className="text-center"
              //@ts-ignore
              variants={itemVariants}
              >
              <button className="text-red-400 hover:text-red-300 text-lg font-mono group transition-all duration-300">
                <span className="inline-flex items-center">
                  Already have an account?
                  <Link href={'/ru/login'}>
                  <motion.span 
                    className="ml-2 text-red-500 group-hover:text-red-400"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    >
                    SIGN IN →
                  </motion.span>
                    </Link>
                </span>
              </button>
            </motion.div>
            </Link>
          </motion.div>

          <motion.div 
            className="flex items-center justify-center mt-8 text-red-500/80 text-sm font-mono tracking-wider"
            //@ts-ignore
            variants={itemVariants}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FiShield className="mr-2 animate-pulse" />
            <span className="text-shadow-glow">256-BIT ENCRYPTED</span>
          </motion.div>
        </div>
      </motion.div>

      <style jsx global>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(239, 68, 68, 0.5), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s infinite linear;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .glitch-effect {
          animation: glitch 0.3s linear;
        }
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        .text-shadow-glow {
          text-shadow: 0 0 10px rgba(239, 68, 68, 0.7);
        }
        .input-glow {
          box-shadow: 0 0 20px rgba(239, 68, 68, 0.3);
        }
      `}</style>
    </div>
  );
}