import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 size={45} className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt size={45} className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs size={45} className="text-yellow-400" /> },
  { name: "React", icon: <FaReact size={45} className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs size={45} className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress size={45} className="text-white" /> },
  { name: "MongoDB", icon: <SiMongodb size={45} className="text-green-600" /> },
  { name: "MySQL", icon: <SiMysql size={45} className="text-blue-400" /> },
  { name: "Java", icon: <FaJava size={45} className="text-red-500" /> },
  { name: "Python", icon: <FaPython size={45} className="text-yellow-500" /> },
  { name: "Git", icon: <FaGitAlt size={45} className="text-orange-600" /> },
  { name: "GitHub", icon: <FaGithub size={45} className="text-white" /> },
];

function Skills() {
  return (
    <section id="skills" className="bg-slate-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center mb-14"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              className="bg-slate-800 rounded-xl p-6 flex flex-col items-center shadow-lg"
            >
              {skill.icon}
              <h3 className="mt-4 text-lg font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;