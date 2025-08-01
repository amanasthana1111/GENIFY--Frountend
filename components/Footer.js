import React from 'react';
import { Link } from "react-router";

import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0a0d13] text-gray-400 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className=" w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xl">
               <img
          src="https://imgs.search.brave.com/nJVNi_CfX5ZDxQi-qUXpDY1vqBXSlYLO4LIOUO3fODQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMucmZzdGF0LmNv/bS9yZW5kZXJmb3Jl/c3QvaW1hZ2VzL3Yy/L2xvZ28taG9tZXBh/Z2UvdHJpYW5nbGUt/aWxsLnBuZw"
          alt="Genwe Logo"
          className="w-10 h-10 object-contain"
        />
            </div>
            <span className="text-white text-lg font-semibold">Genify</span>
          </div>
          <p>
            Build fast, deploy faster. Genify helps you turn your ideas into deployable sites in seconds using AI and modern web tools.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li className="hover:text-white transition-colors"> <Link to={"/about"}>About</Link></li>
            <li className="hover:text-white transition-colors"> <Link to={"/contact"}>Contact</Link></li>
            <li className="hover:text-white transition-colors"> <Link to={"/"}>Home</Link></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h4 className="text-white font-semibold mb-4">Connect</h4>
          <div className="flex gap-4 text-xl">
            <a href="https://github.com/amanasthana1111" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaGithub /></a>
            <a href="https://x.com/dev_aman12" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaTwitter /></a>
            <a href="https://www.linkedin.com/in/amanasthanacse/" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
