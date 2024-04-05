import React from "react";
import Link from "next/link"; // Import the Link component
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import the FontAwesome icons

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="https://github.com/DiegoPM90" passHref>
            <FaGithub className="text-2xl hover:text-gray-400 cursor-pointer" />
          </Link> {/* Add the Link component for the GitHub icon */}
          <Link href="https://www.linkedin.com/in/your-linkedin-profile-url" passHref>
            <FaLinkedin className="text-2xl hover:text-gray-400 cursor-pointer" />
          </Link> {/* Add the Link component for the LinkedIn icon */}
        </div>
        <p className="text-slate-600"></p>
      </div>
    </footer>
  );
};

export default Footer;