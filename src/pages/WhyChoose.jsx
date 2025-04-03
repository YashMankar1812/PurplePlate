import React, { useEffect } from "react";
import { GiKnifeFork, GiCook } from "react-icons/gi";
import { BsStars } from "react-icons/bs";
import { FiAward, FiClock, FiUsers } from "react-icons/fi";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChoose = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out-quint",
      once: true
    });
  }, []);

  const stats = [
    { value: "15+", label: "Years Experience", icon: <FiAward /> },
    { value: "50+", label: "Menu Items", icon: <GiKnifeFork /> },
    { value: "10K+", label: "Happy Customers", icon: <FiUsers /> },
    { value: "30min", label: "Avg. Prep Time", icon: <FiClock /> }
  ];

  const features = [
    {
      icon: <GiKnifeFork className="text-3xl" />,
      title: "Exquisite Dishes",
      description: "Our seasonal menu features locally-sourced ingredients transformed into culinary masterpieces by our award-winning chefs."
    },
    {
      icon: <GiCook className="text-3xl" />,
      title: "Master Chefs",
      description: "With international training and decades of combined experience, our chefs bring world-class techniques to every plate."
    },
    {
      icon: <BsStars className="text-3xl" />,
      title: "Exceptional Service",
      description: "Our attentive staff provides white-glove service to ensure your dining experience is nothing short of perfect."
    }
  ];

  return (
    <section className="relative py-20 bg-gray-900 overflow-hidden font-nunito "style={{
      background: 'linear-gradient(to bottom, #000000 0%, #1e0521 30%, #2d0a3a 60%, #5a1a5a 100%)',
      backgroundAttachment: 'fixed', // Creates parallax effect
      backgroundSize: 'cover'
    }}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 ">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-purple-900 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-900 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <span className="inline-block px-4 py-1 text-xs font-semibold tracking-wider text-purple-400 uppercase bg-red-900/20 rounded-full mb-4">
            Our Difference
          </span>
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Why Choose <span className="text-purple-400">Our Restaurant</span>
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300">
            Discover what sets us apart in culinary excellence
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16" data-aos="fade-up">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800/50 rounded-xl p-6 text-center backdrop-blur-sm"
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl font-bold text-purple-400 mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Highlight Card */}
          <motion.div
            className="relative bg-gradient-to-br from-red-600 to-red-800 rounded-xl shadow-xl overflow-hidden lg:col-span-1"
            data-aos="fade-right"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-noise opacity-10"></div>
            <div className="relative  h-full flex flex-col p-10">
              <h3 className="text-2xl font-bold text-white mb-4">
                The Purple Plate Experience
              </h3>
              <p className="text-red-100 mb-6 flex-grow">
                From our sommelier-curated wine list to our farm-to-table ingredients, every detail is crafted for an unforgettable dining experience.
              </p>
              <motion.button
                className="mt-auto w-full sm:w-auto bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                whileHover={{ x: 5 }}
              >
                Our Story
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </motion.div>

          {/* Feature Cards */}
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description, delay }) => (
  <motion.div
    className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
    data-aos="fade-up"
    data-aos-delay={delay}
    whileHover={{ y: -10 }}
  >
    <div className="flex justify-center mb-6">
      <motion.span 
        className="bg-red-100 text-red-600 p-4 rounded-full transition-all duration-300 group-hover:bg-red-600 group-hover:text-white"
        whileHover={{ rotate: 15, scale: 1.1 }}
      >
        {icon}
      </motion.span>
    </div>
    <h3 className="text-xl font-bold text-center text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
      {title}
    </h3>
    <p className="text-gray-600 text-center">{description}</p>
  </motion.div>
);

export default WhyChoose;