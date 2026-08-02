import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-slate-800 rounded-2xl p-10 shadow-lg"
        >
          <p className="text-lg leading-8 text-gray-300">
            I'm <span className="text-blue-400 font-semibold">Prathish Kumar</span>,
            an MCA student and aspiring Full Stack Developer. I enjoy building
            modern, responsive, and user-friendly web applications using the
            MERN stack. I am passionate about learning new technologies,
            solving real-world problems, and continuously improving my
            development skills.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-10">

            <div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>

              <p className="text-gray-300">
                Master of Computer Applications (MCA)
              </p>
              <p className="text-gray-500 text-sm mb-4">
                Currently Pursuing
              </p>

              <p className="text-gray-300">
                Bachelor of Science (B.Sc.) in Computer Science
              </p>
              <p className="text-gray-500 text-sm">
                Completed
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-400">
                Tamil Nadu, India
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Domain</h3>
              <p className="text-gray-400">
                Full Stack Development (MERN)
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Programming Languages</h3>
              <p className="text-gray-400">
                JavaScript, Java, Python, SQL
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;