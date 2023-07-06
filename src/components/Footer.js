import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="max-w-screen-lg mx-auto px-4">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Your Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
