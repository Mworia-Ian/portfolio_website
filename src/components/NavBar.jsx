import { FaLinkedin, FaGithub } from "react-icons/fa";

const NavBar = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "technologies", label: "Technologies" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "home")}
          className="text-xl font-bold text-cyan-500 hover:text-cyan-400 transition-colors"
        >
          Ian Mworia
        </a>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => scrollToSection(e, link.id)}
            className="text-neutral-300 hover:text-cyan-400 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/ian-mworia/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-300 hover:text-cyan-400 transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Mworia-Ian?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-300 hover:text-cyan-400 transition-colors"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
