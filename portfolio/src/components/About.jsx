import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-20 px-6 sm:px-10 lg:px-16 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 sm:w-24 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-center md:text-left"
          >
            <h3 className="text-2xl font-semibold text-blue-400">
              My Journey
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate <strong>MERN stack developer</strong> with experience in building dynamic and responsive web applications. My journey in web development started with a strong curiosity about how technology can bring ideas to life.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Currently working at <strong>Acmeflare Technologies</strong>, I specialize in creating modern, scalable, and efficient applications using <strong>React, Next.js, and Tailwind CSS</strong>. I enjoy solving complex problems and continuously learning to improve my skills.
            </p>

            {/* Experience & Projects Completed */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <h4 className="text-2xl font-semibold text-blue-400 mb-2">
                  1+
                </h4>
                <p className="text-gray-400">Years of Experience</p>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <h4 className="text-2xl font-semibold text-blue-400 mb-2">
                  20+
                </h4>
                <p className="text-gray-400">Projects Completed</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "React & Next.js", value: "90%" },
                { title: "Node.js & Express", value: "85%" },
                { title: "Tailwind & CSS", value: "95%" },
                { title: "MongoDB & Firebase", value: "80%" },
              ].map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-5 sm:p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm"
                >
                  <h4 className="text-lg font-semibold text-gray-300 mb-2">
                    {skill.title}
                  </h4>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.value }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="bg-blue-500 h-2 rounded-full"
                    />
                  </div>
                  <p className="text-blue-400 mt-2">{skill.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
