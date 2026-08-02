import { motion } from "framer-motion";
import { FaAward, FaCertificate, FaMedal } from "react-icons/fa";

function Achievements() {
  const achievements = [
    {
      icon: <FaAward className="text-4xl text-yellow-400" />,
      title: "Best Presentation Award",
      organization: "Tech Talk Event",
      description:
        "Awarded Best Presentation for delivering an outstanding technical presentation during the Tech Talk event conducted by the Tech Club.",
    },
    {
      icon: <FaCertificate className="text-4xl text-blue-400" />,
      title: "Full Stack Python Development Internship",
      organization: "Tap Academy, Bengaluru",
      description:
        "Successfully completed a Full Stack Python Development Internship with practical experience in HTML, CSS, JavaScript, React, Python, Django, MySQL, Git and GitHub.",
      button: true,
    },
    {
      icon: <FaMedal className="text-4xl text-green-400" />,
      title: "Cursor AI VibeCode Mastery",
      organization: "Sunstone Education",
      description:
        "Successfully completed the Cursor AI VibeCode Mastery program, gaining hands-on experience in AI-assisted software development and modern coding workflows.",
    },
  ];

  return (
    <section id="achievements" className="bg-slate-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center mb-4"
        >
          Achievements & Certifications
        </motion.h2>

        <p className="text-center text-gray-400 mb-16">
          Awards, certifications and professional accomplishments.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-blue-500 hover:-translate-y-2 transition duration-300"
            >
              <div className="mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-2">
                {item.title}
              </h3>

              <p className="text-blue-400 mb-4">
                {item.organization}
              </p>

              <p className="text-gray-300 leading-7">
                {item.description}
              </p>

              {item.button && (
                <a
                  href="/internship-certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg font-semibold transition"
                >
                  View Certificate
                </a>
              )}
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Achievements;