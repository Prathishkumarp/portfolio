import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaPaperPlane,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 flex items-center justify-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl"
      >
        <p className="text-blue-400 text-lg font-medium mb-4 tracking-wide">
          Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-5">
          Prathish Kumar
        </h1>

        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "MERN Stack Developer",
            2000,
            "React Developer",
            2000,
            "Python Developer",
            2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
          className="text-2xl md:text-4xl text-blue-400 font-bold mb-8"
        />

        <p className="text-gray-400 text-lg leading-8 max-w-3xl mx-auto mb-12">
          MCA student and passionate <span className="text-white font-semibold">Full Stack Developer</span>
          specializing in the <span className="text-blue-400 font-semibold">MERN Stack</span>.
          I enjoy building modern, scalable, and responsive web applications
          while continuously learning new technologies to solve real-world
          business problems through clean and efficient code.
        </p>

        <div className="flex flex-wrap justify-center gap-5 mb-12">

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition duration-300 shadow-lg hover:scale-105"
          >
            <FaDownload />
            Download Resume
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-blue-500 hover:bg-blue-600 px-8 py-4 rounded-xl font-semibold transition duration-300 hover:scale-105"
          >
            <FaPaperPlane />
            Contact Me
          </a>

        </div>

        <div className="flex justify-center gap-8 text-3xl">

          <a
            href="https://github.com/Prathishkumarp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300 hover:scale-125"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/prathish-kumar-p-549762331"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition duration-300 hover:scale-125"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:prathishkumar692@gmail.com"
            className="text-gray-400 hover:text-red-400 transition duration-300 hover:scale-125"
          >
            <FaEnvelope />
          </a>

        </div>

      </motion.div>
    </section>
  );
}

export default Hero;