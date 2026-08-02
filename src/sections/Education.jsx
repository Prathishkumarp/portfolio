import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      college: "Hindustan Institute of Technology and Science",
      location: "Chennai, Tamil Nadu",
      year: "2025 - Present",
      description:
        "Currently pursuing a Master of Computer Applications with a focus on Full Stack Development, Data Structures, Database Management Systems, Artificial Intelligence, and Software Engineering.",
    },
    {
      degree: "Bachelor of Science (B.Sc.) in Computer Science",
      college: "Dhanalakshmi Srinivasan Arts and Science College",
      location: "Perambalur, Tamil Nadu",
      year: "2022 - 2025",
      description:
        "Completed undergraduate studies in Computer Science with a strong foundation in programming, databases, networking, operating systems, and software development.",
    },
  ];

  return (
    <section id="education" className="bg-slate-900 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center mb-4"
        >
          Education
        </motion.h2>

        <p className="text-center text-gray-400 mb-16">
          My academic journey and educational background.
        </p>

        <div className="space-y-10">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-blue-500 transition"
            >
              <div className="flex items-start gap-5">
                <div className="bg-blue-600 p-4 rounded-full">
                  <FaGraduationCap className="text-white text-2xl" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white">
                    {item.degree}
                  </h3>

                  <p className="text-blue-400 mt-2">
                    {item.college}
                  </p>

                  <p className="text-gray-400">
                    {item.location}
                  </p>

                  <span className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm">
                    {item.year}
                  </span>

                  <p className="text-gray-300 mt-6 leading-8">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;