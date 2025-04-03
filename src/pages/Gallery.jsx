import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Removed Navigation Module Import
import { Pagination, Autoplay } from "swiper/modules"; // Removed Navigation from Import
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const cards = [
    { id: 1, image: "https://bootstrapmade.com/content/demo/Yummy/assets/img/gallery/gallery-1.jpg" },
    { id: 2, image: "https://bootstrapmade.com/content/demo/Yummy/assets/img/gallery/gallery-7.jpg" },
    { id: 3, image: "https://bootstrapmade.com/content/demo/Yummy/assets/img/gallery/gallery-8.jpg" },
    { id: 4, image: "https://bootstrapmade.com/content/demo/Yummy/assets/img/gallery/gallery-6.jpg" },
    { id: 5, image: "https://bootstrapmade.com/content/demo/Yummy/assets/img/gallery/gallery-5.jpg" },
    { id: 6, image: "https://bootstrapmade.com/content/demo/Yummy/assets/img/gallery/gallery-4.jpg" },
    { id: 7, image: "https://bootstrapmade.com/content/demo/Yummy/assets/img/gallery/gallery-3.jpg" },
    { id: 8, image: "https://bootstrapmade.com/content/demo/Yummy/assets/img/gallery/gallery-2.jpg" },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4 sm:p-5" id="gallery">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1481833761820-0509d3217039?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFjdCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')] bg-cover bg-center"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 mb-6 font-nunito" data-aos="fade-up">
          Gallery
        </h2>

        {/* Swiper Slider without Navigation Buttons */}
        <Swiper
          modules={[Pagination, Autoplay]} // Removed Navigation Module
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          slidesPerView={1}
          breakpoints={{
            480: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full max-w-5xl"
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id} className="flex justify-center">
              <div className="text-center w-full max-w-xs sm:max-w-sm md:max-w-md">
                <img
                  src={card.image}
                  alt="Gallery Image"
                  className="w-full h-52 p-10 sm:h-60 md:h-72 rounded-lg object-cover mb-4 transition-transform transform hover:scale-105 duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(card.image)}
                  data-aos="zoom-in"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Full-Screen Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full p-5" data-aos="fade-in">
            {/* Close Button */}
            <button className="absolute top-4 right-4 text-white text-3xl" onClick={() => setSelectedImage(null)}>
              <FaTimes />
            </button>

            {/* Full Image */}
            <img src={selectedImage} alt="Full View" className="w-full max-h-[90vh] object-contain rounded-lg" data-aos="zoom-in" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

