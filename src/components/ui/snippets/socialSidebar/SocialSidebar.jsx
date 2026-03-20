"use client";

import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

export default function SocialSidebar() {

    return (
         <div className="hidden md:flex fixed left-8 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-6 opacity-0 -translate-x-4 animate-sidebar">
        <a
          href="#"
          className="text-slate-400 hover:text-white hover:scale-110 transition duration-300 text-xl"
        >
          <FaEnvelope />
        </a>
        <a
          href="#"
          className="text-slate-400 hover:text-white hover:scale-110 transition duration-300 text-xl"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="#"
          className="text-slate-400 hover:text-white hover:scale-110 transition duration-300 text-xl"
        >
          <FaGithub />
        </a>

        
      </div>
    )
}