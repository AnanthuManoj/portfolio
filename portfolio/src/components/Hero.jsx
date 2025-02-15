import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCoffee, FaDownload, FaLaptopCode } from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 px-6 sm:px-10 md:px-16 lg:px-24 min-h-screen flex items-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse" />
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm text-blue-400 mb-4 flex items-center justify-center md:justify-start gap-2"
            >
              <span className="h-0.5 w-6 bg-blue-400" />
              Welcome to my portfolio
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="block"
              >
                Hello, I'm
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
              >
                Ananthu Manoj
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl text-gray-400 mb-8"
            >
              <span className="text-blue-400">Full Stack Developer</span> crafting seamless, engaging, and cutting-edge digital experiences with passion and precision.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/AnanthuManoj"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 sm:px-8 sm:py-4 bg-blue-500 rounded-full text-white font-semibold hover:bg-blue-600 transition-colors flex items-center gap-2"
              >
                View My Work <FaArrowRight />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Ananthu_CV.pdf"
                download="Ananthu_CV.pdf"
                className="px-6 py-3 sm:px-8 sm:py-4 border border-blue-500 rounded-full text-blue-400 font-semibold hover:bg-blue-500/10 transition-colors flex items-center gap-2"
              >
                Download CV <FaDownload />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex justify-center"
          >
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg relative">
              {/* Modern image container with geometric shapes */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl rotate-6 transform hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gray-900 rounded-2xl" />
              <img
                src="profile.png"
                alt="Profile"
                className="relative rounded-2xl object-cover shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-blue-500/20 rounded-full blur-xl" />
              <div className="absolute -top-4 -left-4 w-16 h-16 sm:w-24 sm:h-24 bg-purple-500/20 rounded-full blur-xl" />
              {/* Tech stack floating icons */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-6 top-1/4 bg-gray-800/80 p-2 sm:p-3 rounded-full backdrop-blur-sm"
              >
                <FaLaptopCode className="text-blue-400 text-lg sm:text-xl" />
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-6 top-1/2 bg-gray-800/80 p-2 sm:p-3 rounded-full backdrop-blur-sm"
              >
                <FaCoffee className="text-purple-400 text-lg sm:text-xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
