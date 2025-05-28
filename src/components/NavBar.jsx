import { FaLinkedin, FaGithub } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-end py-12">
      {/* Empty div to push social icons to the right */}
      <div className="flex-1"></div>

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
