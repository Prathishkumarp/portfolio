import { motion } from "framer-motion";
import { FaBriefcase, FaCertificate } from "react-icons/fa";

function Experience() {
  const technologies = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Python",
    "Django",
    "MySQL",
    "Git",
    "GitHub",
  ];

  return (
    <section
      id="experience"
      className="bg-slate-950 py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center mb-4"
        >
          Experience
        </motion.h2>

        <p className="text-center text-gray-400 mb-16 text-lg">
          My professional internship experience and technical journey.
        </p>

        <div className="relative border-l-4 border-blue-500 ml-5">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mb-12 ml-10"
          >

            <div className="absolute -left-[60px] w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
              <FaBriefcase className="text-white text-lg" />
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl p-8 hover:border-blue-500 transition duration-300">

              <div className="flex flex-col md:flex-row md:justify-between md:items-center">

                <div>
                  <h3 className="text-3xl font-bold text-white">
                    Full Stack Python Development Intern
                  </h3>

                  <p className="text-blue-400 text-lg mt-2">
                    Tap Academy • Bengaluru
                  </p>
                </div>

                <span className="mt-4 md:mt-0 bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold">
                  Summer Internship • 2026
                </span>

              </div>

              <p className="text-gray-300 leading-8 mt-8">
                Successfully completed a Full Stack Python Development Internship
                at <span className="text-blue-400 font-semibold">Tap Academy, Bengaluru</span>.
                Worked on real-world web development projects involving responsive
                frontend design, backend development using Python and Django,
                database integration with MySQL, REST API implementation,
                version control using Git & GitHub, and modern software
                development practices.
              </p>

              <div className="mt-10">

                <h4 className="text-2xl font-semibold mb-5">
                  Technologies Used
                </h4>

                <div className="flex flex-wrap gap-3">

                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 border border-blue-500 text-blue-400 px-4 py-2 rounded-full text-sm hover:bg-blue-500 hover:text-white transition"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

              </div>

              <div className="mt-10">

                <h4 className="text-2xl font-semibold mb-5">
                  Key Responsibilities
                </h4>

                <ul className="space-y-3 text-gray-300">

                  <li>✅ Developed responsive frontend interfaces using HTML, CSS and JavaScript.</li>

                  <li>✅ Built backend applications using Python and Django.</li>

                  <li>✅ Connected MySQL databases with web applications.</li>

                  <li>✅ Implemented CRUD operations and backend logic.</li>

                  <li>✅ Used Git & GitHub for version control and collaboration.</li>

                  <li>✅ Followed responsive design principles and clean coding standards.</li>

                  <li>✅ Participated in developing real-world full stack web applications.</li>

                </ul>

              </div>

              <div className="mt-12">

                <a
                  href="/internship-certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-7 py-4 rounded-xl font-semibold text-white shadow-lg transition duration-300"
                >
                  <FaCertificate />
                  View Internship Certificate
                </a>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Experience;