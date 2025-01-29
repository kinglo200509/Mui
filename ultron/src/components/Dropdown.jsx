import React, { useState, useEffect, useRef } from "react";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Redirect function
  function redirect(url) {
    setTimeout(() => {
      window.location.href = url;
    }, 200);
  }

  return (
    <div ref={dropdownRef} className="relative inline-flex">
      <button
        id="hs-dropdown-default"
        type="button"
        className="py-2 px-3 text-[#F7EDCA] inline-flex items-center gap-x-2 text-sm font-medium"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label="Dropdown"
        onClick={() => setIsOpen(!isOpen)}
      >
        Emergency
        <svg
          className={`size-4 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute mt-2 min-w-60 bg-[#F7EDCA] shadow-md rounded-lg transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="hs-dropdown-default"
      >
        <div className="p-1 space-y-0.5">
          <a
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm font-semibold text-[#2E3231] hover:bg-[#cbc4a7] focus:outline-none focus:bg-[#958f7b]"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              redirect("https://eservices.tnpolice.gov.in/CCTNSNICSDC/Contact"); // Change to actual URL
            }}
          >
            National emergency number 112
          </a>
          <a
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm font-semibold text-[#2E3231] hover:bg-[#cbc4a7] focus:outline-none focus:bg-[#958f7b]"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              redirect("https://eservices.tnpolice.gov.in/CCTNSNICSDC/Contact"); // Change to actual URL
            }}
          >
            Police 100
          </a>
          <a
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm font-semibold text-[#2E3231] hover:bg-[#cbc4a7] focus:outline-none focus:bg-[#958f7b]"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              redirect("https://eservices.tnpolice.gov.in/CCTNSNICSDC/Contact"); // Change to actual URL
            }}
          >
            Ambulance 102
          </a>
          <a
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm font-semibold text-[#2E3231] hover:bg-[#cbc4a7] focus:outline-none focus:bg-[#958f7b]"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              redirect("https://eservices.tnpolice.gov.in/CCTNSNICSDC/Contact"); // Change to actual URL
            }}
          >
            Fire 101
          </a>
          <a
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm font-semibold text-[#2E3231] hover:bg-[#cbc4a7] focus:outline-none focus:bg-[#958f7b]"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              redirect("https://eservices.tnpolice.gov.in/CCTNSNICSDC/Contact"); // Change to actual URL
            }}
          >
            Road Accident 1073
          </a>
          <a
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm font-semibold text-[#2E3231] hover:bg-[#cbc4a7] focus:outline-none focus:bg-[#958f7b]"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              redirect("https://eservices.tnpolice.gov.in/CCTNSNICSDC/Contact"); // Change to actual URL
            }}
          >
            Medical helpline 104
          </a>
        </div>
      </div>
    </div>
  );
}
