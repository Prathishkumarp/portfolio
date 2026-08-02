import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h2 className="text-3xl font-bold text-blue-500">
              Prathish Kumar
            </h2>

            <p className="text-gray-400 mt-2">
              Full Stack Developer | MCA Student | MERN Stack Enthusiast
            </p>
          </div>

          <div className="flex gap-5">

            <a
              href="#"
              className="bg-slate-800 p-4 rounded-full hover:bg-blue-600 transition"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="#"
              className="bg-slate-800 p-4 rounded-full hover:bg-gray-700 transition"
            >
              <FaGithub size={20} />
            </a>

            <button
              onClick={scrollToTop}
              className="bg-blue-600 p-4 rounded-full hover:bg-blue-700 transition"
            >
              <FaArrowUp />
            </button>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 text-center text-gray-500">

          © {new Date().getFullYear()} Prathish Kumar. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;