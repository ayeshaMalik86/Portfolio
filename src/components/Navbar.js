import React, { useState } from "react";
import {
  SearchIcon,
  CubeIcon,
  AcademicCapIcon,
  CollectionIcon,
  DocumentTextIcon,
  ViewGridIcon,
  MenuIcon,
} from "@heroicons/react/outline";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Skills", icon: <ViewGridIcon className="w-5 h-5 text-gray-600 stroke-1" /> },
    { label: "Projects", icon: <CubeIcon className="w-5 h-5 text-gray-600 stroke-1" /> },
    { label: "Experience", icon: <CollectionIcon className="w-5 h-5 text-gray-600 stroke-1" /> },
    { label: "Education", icon: <AcademicCapIcon className="w-5 h-5 text-gray-600 stroke-1" /> },
    { label: "Résumé", icon: <DocumentTextIcon className="w-5 h-5 text-gray-600 stroke-1" /> },
  ];

  const sharedClasses = "flex items-center text-gray-600 hover:text-black cursor-pointer gap-2";

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <div className="text-lg font-semibold flex items-center">
        <span className="text-gray-600">&lt;/&gt;</span>
        <span className="ml-2">Ayesha Malik</span>
      </div>

      <div className="hidden md:flex space-x-6 gap-6 flex-wrap justify-center">
        {menuItems.map((item, index) => (
          <p key={index} className={sharedClasses}>
            {item.icon}
            {item.label}
          </p>
        ))}
      </div>

      <div className="hidden md:flex items-center space-x-4">
          <SearchIcon className="w-6 h-6 text-gray-600 cursor-pointer hover:text-black" />
        </div>

      <div className="md:hidden flex items-center">
        <MenuIcon
          className="w-6 h-6 text-gray-600 cursor-pointer hover:text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 right-0 bg-white shadow-lg p-4 space-y-4 w-40">
          {menuItems.map((item, index) => (
            <p key={index} className={sharedClasses}>
              {item.icon}
              {item.label}
            </p>
          ))}
          <div className={sharedClasses}>
            <SearchIcon className="w-6 h-6 text-gray-600 cursor-pointer hover:text-black" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
