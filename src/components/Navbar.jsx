function Navbar() {
  const links = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Education",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-lg border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

        <h1 className="text-3xl font-bold text-blue-500 cursor-pointer">
          PK
        </h1>

        <ul className="hidden md:flex items-center gap-8 text-gray-300">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-blue-500 transition duration-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;