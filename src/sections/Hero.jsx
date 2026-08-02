import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

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
        className="text-center max-w-4xl"
      >
        <p className="text-blue-400 text-lg mb-3">Hello, I'm</p>

        <h1 className="text-5xl md:text-7xl font-bold mb-4">
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
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
          className="text-2xl md:text-4xl text-gray-300 font-semibold mb-6"
        />

        <p className="text-gray-400 max-w-2xl mx-auto leading-8 mb-10">
          MCA student passionate about building modern, responsive, and scalable
          web applications using the MERN stack. I enjoy solving real-world
          problems and creating clean, user-friendly interfaces.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="/resume.pdf"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="border border-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium transition"
          >
            Contact Me
          </a>
        </div>

        <div className="flex justify-center gap-8 text-3xl text-gray-300">
          <a href="https://github.com/Prathishkumarp" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-white transition" />
          </a>

          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-blue-500 transition" />
          </a>

          <a href="mailto:prathishkumar692@gmail.com">
            <FaEnvelope className="hover:text-red-400 transition" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;