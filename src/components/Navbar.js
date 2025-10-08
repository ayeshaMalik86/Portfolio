import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  MailIcon,
  CubeIcon,
  AcademicCapIcon,
  CollectionIcon,
  DocumentTextIcon,
  ViewGridIcon,
  MenuIcon,
} from "@heroicons/react/outline";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const menuItems = [
    { label: "Skills", icon: <ViewGridIcon className="w-5 h-5 text-gray-600 stroke-1" />, path: "/skills" },
    { label: "Projects", icon: <CubeIcon className="w-5 h-5 text-gray-600 stroke-1" />, path: "/projects" },
    { label: "Experience", icon: <CollectionIcon className="w-5 h-5 text-gray-600 stroke-1" />, path: "/experience" },
    { label: "Education", icon: <AcademicCapIcon className="w-5 h-5 text-gray-600 stroke-1" />, path: "/education" },
    { label: "Resumé", icon: <DocumentTextIcon className="w-5 h-5 text-gray-600 stroke-1" />, path: "/resume" },
  ];

  const sharedClasses = "flex items-center text-gray-600 hover:text-black cursor-pointer gap-2";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="font-mona flex justify-between items-center px-6 py-4 bg-white shadow">
      <div className="text-lg font-semibold flex items-center">
        <Link to="/" className="flex items-center hover:text-gray-600">
          <span className="text-gray-600">&lt;/&gt;</span>
          <span className="ml-2">Ayesha Malik</span>
        </Link>
      </div>

      <div className="hidden md:flex space-x-6 gap-6 flex-wrap justify-center">
        {menuItems.map((item, index) => (
          <Link key={index} to={item.path} className={sharedClasses}>
            {item.icon}
            {item.label}
          </Link>
        ))}
      </div>

      <div className="hidden md:flex items-center space-x-4 gap-2 text-gray-600 cursor-pointer hover:text-black">
        <Link to="/contact" className={sharedClasses}>
          <MailIcon className="w-5 h-5 text-gray-600 stroke-1" />
          Contact me
        </Link>
      </div>

      <div className="md:hidden flex items-center">
        <MenuIcon
          className="w-6 h-6 text-gray-600 cursor-pointer hover:text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 md:hidden z-40 ${
          isMenuOpen ? "opacity-50 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Drawer */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-screen bg-white shadow-2xl w-64 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 hover:text-black transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col space-y-6">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`${sharedClasses} transition-colors duration-200`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className={`${sharedClasses} transition-colors duration-200`}
              onClick={() => setIsMenuOpen(false)}
            >
              <MailIcon className="w-5 h-5 text-gray-600 stroke-1" />
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
