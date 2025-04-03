import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";

// Customer Testimonials Data
const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    review: "Amazing food! The best restaurant experience I’ve had in years.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Verma",
    review: "Delicious meals and great ambiance. Highly recommend this place!",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Amit Patel",
    review: "Loved the service! The staff was really friendly and welcoming.",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    review: "A must-visit restaurant! Tasty food and beautiful presentation.",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    rating: 4.8,
  },
];

const HappyCustomers = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-cover bg-center"
      style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3shga3yQSJu5cmDAogxwgNPS_gj5JwIEHXqcfHlYsoqB7QY9eJPjBh_PYqUKulEpsCQE&usqp=CAU')" }}
      id="happy-customers"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Title */}
      <div className="relative z-10 text-center mb-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-200 mb-4 font-nunito" data-aos="fade-up">
          Our Happy
          <span className="text-purple-500">  Guests</span>
        </h2>
        <p className="text-gray-300 text-lg" data-aos="fade-up" data-aos-delay="200">
          See what our beloved customers have to say about us!
        </p>
      </div>

      {/* Testimonials Swiper */}
      <div className="relative z-10 w-full max-w-5xl">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          className="w-full"
        >
          {testimonials.map((customer) => (
            <SwiperSlide key={customer.id} className="flex justify-center">
              <div
                className="relative bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-2xl shadow-lg max-w-md text-center border border-white/20"
                data-aos="zoom-in"
              >
                {/* Customer Image */}
                <img
                  src={customer.image}
                  alt={customer.name}
                  className="w-20 h-20 rounded-full mx-auto border-4 border-white shadow-md"
                />
                
                {/* Review */}
                <p className="text-lg text-white mt-4 italic">{customer.review}</p>

                {/* Name */}
                <h3 className="text-xl font-semibold text-white mt-3">{customer.name}</h3>

                {/* Rating */}
                <p className="text-yellow-400 mt-2">{"⭐".repeat(Math.round(customer.rating))}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HappyCustomers;
