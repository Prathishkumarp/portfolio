import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center mb-4"
        >
          Contact Me
        </motion.h2>

        <p className="text-center text-gray-400 mb-16">
          I'm always open to internships, collaborations and exciting opportunities.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Side */}
          <div className="bg-slate-800 rounded-2xl border border-slate-700 p-8">

            <div className="space-y-8">

              <div className="flex items-center gap-5">
                <FaEnvelope className="text-blue-500 text-2xl" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-400">
                    prathishkumar692@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaPhoneAlt className="text-green-500 text-2xl" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-400">
                    +91 6379191454
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaMapMarkerAlt className="text-red-500 text-2xl" />
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-400">
                      Number 24
Megathamman koil Street, kathankadai,kalppakam
Cheyyur,Chengalpattu,Tamil Nadu, India
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="bg-slate-800 rounded-2xl border border-slate-700 p-8">

            <h3 className="text-2xl font-bold mb-8">
              Connect With Me
            </h3>

            <div className="space-y-5">

              <a
                href="#"
                className="flex items-center gap-4 bg-slate-700 hover:bg-blue-600 transition p-4 rounded-xl"
              >
                <FaLinkedin className="text-2xl" />
                LinkedIn
              </a>

              <a
                href="#"
                className="flex items-center gap-4 bg-slate-700 hover:bg-gray-900 transition p-4 rounded-xl"
              >
                <FaGithub className="text-2xl" />
                GitHub
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;