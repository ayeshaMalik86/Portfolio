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
        <Link to="/" className={sharedClasses}>
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

      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden absolute top-12 right-0 bg-white shadow-lg p-4 space-y-4 w-40 z-10"
        >
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={sharedClasses}
              onClick={() => setIsMenuOpen(false)} 
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
          <div className={sharedClasses}>
          <Link to="/" className={sharedClasses}>
          <MailIcon className="w-5 h-5 text-gray-600 stroke-1" />
          Contact me
        </Link>
      </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
