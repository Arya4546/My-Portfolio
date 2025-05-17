// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-regal-900 text-regal-500 py-6 text-center select-none">
      <p>
        &copy; {new Date().getFullYear()} Arya Deep Singh. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
