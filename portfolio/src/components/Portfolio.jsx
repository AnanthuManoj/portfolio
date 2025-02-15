import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import {
  FaArrowRight,
  FaBuilding,
  FaCalendar,
  FaDatabase,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedin,
  FaPalette,
  FaReact,
  FaServer
} from 'react-icons/fa';
import About from './About';
import Hero from './Hero';
import Navbar from './Navbar';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  const projects = [
    {
      "title": "Prosper Pitch",
      "description": "Developed a social media-like platform where users can share their startup ideas and connect with potential investors. The platform enables idea posting, investor interactions, and more",
      "tech": ["React", "Bootstrap", "Node.js", "Express", "MongoDB"],
      "image": "prosper.png",
      "link": "https://prosper-pitch.vercel.app/",
      "github": "https://github.com/AnanthuManoj/ProsperPitch"
    },
    {
      "title": "AgeSpark",
      "description": "A React-based web application that calculates a person's age with additional features like age-based insights and interactive UI elements. Built with a responsive design using Bootstrap.",
      "tech": ["React", "Bootstrap"],
      "image": "agespark.png",
      "link": "https://agespark.vercel.app/",
      "github": "https://github.com/AnanthuManoj/age-calculator"
    }
,    
{
  "title": "SkySync",
  "description": "A weather web application built using JavaScript, HTML, CSS, and Bootstrap. It provides real-time weather updates for searched locations with an enhanced UI and additional features.",
  "tech": ["JavaScript", "HTML", "CSS", "Bootstrap"],
  "image": "skysync.png",
  "link": "https://skysyncweather.netlify.app/",
  "github": "https://github.com/AnanthuManoj/weatherapp"
}

   
    
  ];

  const skills = {
    technical: [
      {
        category: "Frontend Development",
        icon: <FaReact className="text-4xl text-blue-400" />,
        skills: [
          { name: "React.js", level: 90 },
          { name: "Next.js", level: 85 },
          { name: "TypeScript", level: 80 },
          { name: "Tailwind CSS", level: 95 },
          { name: "Redux", level: 85 }
        ]
      },
      {
        category: "Backend Development",
        icon: <FaServer className="text-4xl text-green-400" />,
        skills: [
          { name: "Node.js", level: 88 },
          { name: "Express.js", level: 85 },
          { name: "REST APIs", level: 90 }
        ]
      },
      {
        category: "Database Management",
        icon: <FaDatabase className="text-4xl text-yellow-400" />,
        skills: [
          { name: "MongoDB", level: 85 },
          { name: "Firebase", level: 85 },
        ]
      },
      {
        category: "Design & Tools",
        icon: <FaPalette className="text-4xl text-purple-400" />,
        skills: [
          { name: "Figma", level: 80 },
          { name: "Git & GitHub", level: 90 },
        ]
      }
    ],
    softSkills: [
      { name: "Problem Solving", level: 95 },
      { name: "Communication", level: 90 },
      { name: "Team Leadership", level: 85 },
      { name: "Project Management", level: 88 },
      { name: "Agile Methodology", level: 85 }
    ]
  };

  const experiences = [

    {
      company: "Acmeflare Technologies",
      role: "Front-End Developer",
      period: "April 2024 - Present",
      description: "Designing and developing modern, responsive web applications with a focus on user experience and performance optimization.",
      achievements: [
        "Developed and maintained scalable front-end components",
        "Improved website performance and responsiveness",
        "Collaborated with cross-functional teams to deliver high-quality solutions"
      ],
      technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"]
    }
,    
    {
      company: "Luminar Technolab",
      role: "MERN Stack Intern",
      period: "2023 - 2024",
      description: "Completed an intensive internship focused on full-stack web development using the MERN stack, gaining hands-on experience in building scalable applications.",
      achievements: [
        "Developed and deployed a full-stack project using MERN",
        "Collaborated with a team to build real-world applications",
        "Enhanced knowledge of REST APIs, authentication, and database management"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"]
    }
    
  ];

  // Loading Screen
  if (isLoading) {
    return (
      <div className="h-screen bg-[#0a0a0a] flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
          className="w-16 h-16 bg-blue-500"
        />
      </div>
    );
  }

  const ProjectsSection = () => (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-lg border border-gray-800 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
              </div>
  
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">{project.title}</h3>
                <p className="text-gray-300 mb-4 h-24 text-sm sm:text-base">{project.description}</p>
  
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
  
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <FaGithub size={20} />
                  </motion.a>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <FaExternalLinkAlt size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
  
        {/* More Projects Link */}
        <div className="text-center mt-10">
          <motion.a
            href="https://github.com/AnanthuManoj"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-blue-400 hover:underline text-lg font-semibold"
          >
            More Projects →
          </motion.a>
        </div>
      </div>
    </section>
  );
  

  // Experience Section Component
  const ExperienceSection = () => (
    <section id="experience" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative bg-gray-900/50 rounded-xl p-6 backdrop-blur-lg border border-gray-800"
            >
              <div className="md:grid md:grid-cols-4 gap-6">
                <div className="md:col-span-1 mb-4 md:mb-0">
                  <div className="flex items-center gap-2 text-blue-400 mb-2">
                    <FaBuilding />
                    <h3 className="font-semibold">{exp.company}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <FaCalendar className="text-sm" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>

                <div className="md:col-span-3">
                  <h4 className="text-xl font-semibold text-blue-400 mb-3">{exp.role}</h4>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300">
                        <FaArrowRight className="text-blue-400 mt-1 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );


  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      {/* Navigation */}
    <Navbar/>
      {/* Hero Section */}
         <Hero/>

      {/* About Section */}
       <About/>


      {/* Enhanced Skills Section */}
      <section id="skills" className="py-20 px-4 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full" />
          </motion.div>

          {/* Technical Skills */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skills.technical.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-lg border border-gray-800"
              >
                <div className="flex items-center gap-4 mb-6">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-blue-400">
                    {category.category}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-blue-400">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-lg border border-gray-800"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-6">Soft Skills</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800/50 rounded-lg p-4"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <ProjectsSection />
      <ExperienceSection />

      {/* Contact Section with dark theme */}
      <section id="contact" className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-8"
          >
            Let's Connect
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center space-x-8"
          >
            {[
              { Icon: FaGithub, href: "https://github.com/AnanthuManoj", label: "GitHub" },
              { Icon: FaLinkedin, href: "https://www.linkedin.com/in/ananthu-manoj/", label: "LinkedIn" },
              { Icon: FaEnvelope, href: "mailto:ananthumanoj360@gmail.com", label: "Email" }
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Icon size={32} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-4 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition-colors z-50"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <FaArrowRight className="transform rotate-[-90deg]" />
      </motion.button>
    </div>
  );
};

export default Portfolio;


