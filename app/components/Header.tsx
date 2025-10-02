"use client";
import { useState } from "react";
import { Menu, X, GithubIcon, LinkedinIcon, InstagramIcon } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/70 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-14">
        
        {/* Logo */}
        <div className="text-xl font-semibold text-gray-800">Shinata Putra</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#hero" className="text-gray-600 hover:text-gray-900 transition">Home</a>
          <a href="#about" className="text-gray-600 hover:text-gray-900 transition">About</a>
          <a href="#portfolio" className="text-gray-600 hover:text-gray-900 transition">Portfolio</a>
          <a href="#skills" className="text-gray-600 hover:text-gray-900 transition">Skills</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 transition">Contact</a>
        </nav>

        {/* Social Media Icons (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <a href="https://github.com/shinataputra" target="_blank" rel="noopener noreferrer">
            <GithubIcon size={18} className="text-gray-500 hover:text-gray-800 transition" />
          </a>
          {/* <a href="https://linkedin.com/shinataputra" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon size={18} className="text-gray-500 hover:text-gray-800 transition" />
          </a> */}
          <a href="https://instagram.com/shinata.putra" target="_blank" rel="noopener noreferrer">
            <InstagramIcon size={18} className="text-gray-500 hover:text-gray-800 transition" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 border-t border-gray-200">
          <nav className="flex flex-col p-4 space-y-2 text-sm font-medium">
            <a href="#hero" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#portfolio" className="text-gray-600 hover:text-gray-900">Portfolio</a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}
