import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-responsive-modal/styles.css";

import { Modal } from "react-responsive-modal";

const events = [
  {
    title: "Wedding Catering",
    description:
      "Elegant and luxurious food options with customizable menus, buffet, plated, or family-style service.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShRHeGKg0BsRhED050QRgypCV-F0mameW90A&s",
  },
  {
    title: "Birthday Party Catering",
    description:
      "Fun and themed birthday menus, kid-friendly & adult-friendly food, custom cakes, and desserts.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQowUadkVlVuFmUmHB_IllRICwwpYZZ8jo6Dg&s",
  },
  {
    title: "Festival & Outdoor Catering",
    description:
      "BBQ, food trucks, and large-scale event catering with seasonal and regional food options.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIwPpCjBFk2QunkQIiY361dy_STkD3AenOw&s",
  },
];

const CateringEvents = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative bg-gray-100 min-h-screen p-8">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-fixed"
        style={{
          backgroundImage:
            "url('https://popmenucloud.com/cdn-cgi/image/width%3D2880%2Cheight%3D2880%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/yvfjoqab/5c73368f-8865-4706-81b8-a967352d2c39.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.4,
        }}
      ></div>
      
      {/* Section Header */}
      <h6 className="text-center text-black font-semibold uppercase tracking-wider" data-aos="fade-up">Services</h6>
      <h2 className="text-3xl font-nunito text-center text-black font-bold mb-8" data-aos="fade-up">
        Our Catering <span className="text-5xl text-purple-700 font-dancing font-semibold">Services</span>
      </h2>
      
      {/* Event Cards */}
      <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto p-6 rounded-xl">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative  rounded-2xl  p-4 hover:shadow-xl transition overflow-hidden group"
            data-aos="fade-up"
          >
            <div
              className="relative cursor-pointer overflow-hidden"
              onClick={() => setSelectedImage(event.image)}
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-40 object-cover transition transform group-hover:scale-110"
              />
            </div>
            <h3 className="text-xl text-black font-nunito font-semibold mt-4">
              {event.title}
            </h3>
            <p className="text-bold mt-2 font-nunito opacity-0 group-hover:opacity-100 transition duration-300">
              {event.description}
            </p>
          </motion.div>
        ))}
      </div>
      
      {/* Modal for Image Preview */}
      <Modal open={!!selectedImage} onClose={() => setSelectedImage(null)} center>
        <img src={selectedImage} alt="Preview" className="w-full h-auto rounded-lg" />
      </Modal>
      
      {/* Sticky Book Now Button */}
    </div>
  );
};

export default CateringEvents;