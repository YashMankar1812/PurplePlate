import { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const events = [
  {
    title: "Private Parties",
    price: "$290",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    image: "https://a.storyblok.com/f/125576/4896x2440/0d2e8a5b7d/hero_private-dining.jpg/m/1440x0",
    benefits: [
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },
  {
    title: "Concert Nights",
    price: "$150",
    description: "Experience the best live concerts with an electrifying atmosphere.",
    image: "https://plus.unsplash.com/premium_photo-1661393046556-b0209672d39e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29uY2VydCUyMG5pZ2h0fGVufDB8fDB8fHww",
    benefits: [
      "Live performances by top artists.",
      "State-of-the-art sound and lighting.",
      "Exclusive VIP access with premium perks.",
    ],
  }
];

export default function EventSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === events.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="p-10 bg-black font-nunito">
      <h6 className="text-center text-gray-500 uppercase tracking-wider" data-aos="fade-up">Events</h6>
      <h2 className="text-3xl text-center text-gray-300 font-bold mb-8" data-aos="fade-up">
        We Organized <span className="text-5xl text-purple-600 font-dancing font-semibold">Events</span>
      </h2>

      <div className="relative w-full h-screen flex items-center justify-center bg-black" data-aos="zoom-in">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: `url(${events[currentIndex].image})` }}></div>

        <div className="relative flex flex-col md:flex-row items-center bg-black bg-opacity-50 p-6 rounded-lg shadow-lg max-w-5xl w-full">
          <img src={events[currentIndex].image} alt="Event" className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md" data-aos="fade-right" />

          <div className="md:w-1/2 md:pl-6 text-white text-center md:text-left" data-aos="fade-left">
            <h2 className="text-3xl font-bold">{events[currentIndex].title}</h2>
            <p className="text-yellow-400 text-xl font-semibold mt-2">{events[currentIndex].price}</p>
            <p className="text-gray-300 mt-2">{events[currentIndex].description}</p>
            <ul className="mt-4 text-sm text-gray-400">
              {events[currentIndex].benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
