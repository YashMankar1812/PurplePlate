import React, { useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
import { FaLocationDot, FaClock } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (    
    <footer className="relative bg-purple-100 text-white py-16 font-nunito">
      <h1 className="text-3xl text-purple-800   font-dancing font-bold text-center">
        The Purple Plate
      </h1>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 mt-14 mb-10 font-nunito">
        
        {/* About Us Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-purple-900">The Purple Plate</h3>
          <p className="text-md text-gray-700 font-nunito font-bold ">
            Welcome to The Purple Plate, where we serve delicious dishes crafted
            with the freshest ingredients and a touch of love. Join us for a
            memorable dining experience!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-purple-900">Quick Links</h3>
          <ul className="space-y-2 text-sm ">
            {["Menu", "About Us", "Menu","Reservations","Contact Us"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-gray-700 font-bold  hover:underline hover:text-purple-700 transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-purple-900">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-400 font-semibold">
            <li className="flex items-center gap-2 text-gray-700 font-bold ">
              <FaLocationDot className="text-purple-900" /> 123 Food Street, Gourmet City
            </li>
            <li className="flex items-center gap-2 text-gray-700 font-bold ">
              <FaPhone className="text-purple-900" /> +123 456 7890
            </li>
            <li className="flex items-center gap-2 text-gray-700 font-bold ">
              <FaEnvelope className="text-purple-900" /> contact@thepurpleplate.com
            </li>
            <li className="flex items-center gap-2 text-gray-700 font-bold ">
              <FaClock className="text-purple-900" /> Mon-Sun: 9 AM - 11 PM
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-purple-900">Social Link</h3>
          <div className="flex space-x-5 ">
            {[
              { href: "https://facebook.com", icon: <FaFacebook className="text-purple-600"/> },
              { href: "https://instagram.com", icon: <FaInstagram className="text-purple-600" /> },
              { href: "https://twitter.com", icon: <FaTwitter className="text-purple-600" /> },
              { href: "https://linkedin.com", icon: <FaLinkedin className="text-purple-600"/> },
            ].map(({ href, icon }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-gray-400 hover:text-purple-900 transition transform hover:scale-110"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
        <div> 
            <div className="text-right rounded-lg">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQS7GOeeSBB6yV82R3hFfzHOwGl3PEYi2zTw&s" alt="" className="rounded-lg" />
            </div>
          </div>
      </div>
      

      {/* Footer Bottom */}
      <div className="text-center text-sm border-t border-gray-700 pt-3 ">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} The Purple Plate Restaurant. All rights reserved. Designed by{" "}
          <span className="text-purple-700 font-semibold">Yash Mankar</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
