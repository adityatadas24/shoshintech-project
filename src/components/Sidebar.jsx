import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

import Dash from "../assets/dashboard.png";
import schedule from "../assets/ic_calendar.png";
import recruit from "../assets/recruitment.png";
import employee from "../assets/employee.png";
import department from "../assets/department.png";
import logo from "../assets/Logo.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed">
      <button
        className="block md:hidden p-4 focus:outline-none"
        onClick={toggleMenu}
      >
        <FiMenu size={24} />
      </button>

      <aside
        className={`fixed top-0 left-0 h-full bg-[#fafafa] text-black transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
          w-64 md:w-20 lg:w-64`}
      >
        <div className="flex items-center justify-between p-4 md:justify-start">
          <div className="flex items-center space-x-2 ml-4">
            <img src={logo} alt="Logo" className="w-12 h-auto" />
            
            <h1
              className={`text-2xl text-[#0c3378] pl-3 font-bold hidden lg:block md:hidden max-sm:block ${isOpen ? "block" : "hidden md:block"}`}
            >
              Vasitum
            </h1>
          </div>
        </div>

        <nav className="flex flex-col items-center text-gray-400 mb-4 font-semibold md:items-start p-4 space-y-4">
          <p className="text-[10px] pb-1 text-gray-500">MAIN MENU</p>

          <MenuItem
            icon={<img src={Dash} alt="Dashboard" className="w-6 h-6" />}
            label="Dashboard"
            isOpen={isOpen}
          />
          <MenuItem
            icon={<img src={recruit} alt="" className="w-6 h-6" />}
            label="Recruitment"
            isOpen={isOpen}
          />
          <MenuItem
            icon={<img src={schedule} alt="" className="w-6 h-6" />}
            label="Schedule"
            isOpen={isOpen}
          />
          <MenuItem
            icon={<img src={employee} alt="" className="w-6 h-6" />}
            label="Employee"
            isOpen={isOpen}
          />
          <MenuItem
            icon={<img src={department} alt="" className="w-6 h-6" />}
            label="Department"
            isOpen={isOpen}
          />
        </nav>

        {/* Footer */}
        <footer className="w-full p-4 text-gray-400 font-semibold">
          <p className="text-[10px] pb-2 text-gray-500">OTHER</p>
          <MenuItem
            icon={<img src={department} alt="" className="w-6 h-6" />}
            label="Department"
            isOpen={isOpen}
          />
          <MenuItem
            icon={<img src={department} alt="" className="w-6 h-6" />}
            label="Department"
            isOpen={isOpen}
          />
        </footer>
      </aside>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-5 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
};

const MenuItem = ({ icon, label, isOpen }) => (
  <div className="flex items-center space-x-3 p-2 rounded-md w-full">
    <span className="text-xl">{icon}</span>
  
    <span className={`text-sm ${isOpen ? "text-black" : "hidden lg:block"}`}>
      {label}
    </span>
  </div>
);

export default Sidebar;
