// import React from "react";
// import 'animate.css';
// const About = () => (
//   <section className="relative py-16 bg-gray-900 text-white">
//     {/* Background Image */}
//     <div
//       className="absolute inset-0 bg-cover bg-center opacity-60"
//       style={{
//         backgroundImage: "url(https://source.unsplash.com/1200x800/?restaurant)",
//       }}
//     ></div>
//     {/* Overlay */}
//     <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-800 to-black opacity-70"></div>
//     {/* Content */}
//     <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16">
//       <h2 className="text-5xl font-extrabold text-center leading-tight tracking-wide ">
//         About Us
//       </h2>
//       <div className="flex flex-col md:flex-row mt-12 items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
//         {/* Text Section */}
//         <div className="md:w-1/2 text-lg leading-relaxed">
//           <p className="mb-6">
//             Welcome to our restaurant! With over{" "}
//             <span className="font-bold text-yellow-400">20 years</span> of
//             culinary excellence, we are dedicated to providing you with an
//             unforgettable dining experience.
//           </p>
//           <p className="mb-6">
//             Our chefs use only the freshest ingredients to create{" "}
//             <span className="italic text-green-400">mouth-watering dishes</span>{" "}
//             that cater to all taste preferences. Join us to enjoy a blend of
//             traditional and contemporary flavors in a{" "}
//             <span className="underline">warm and inviting atmosphere</span>.
//           </p>
//           <p className="text-sm text-gray-400">
//             We take pride in delivering the best service and ensuring every
//             visit leaves a lasting impression.
//           </p>
//         </div>
//         {/* Image Section */}
//         <div className="md:w-1/9 relative">
//           <img
//             src="data:image/jpeg;base64,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"
//             alt="Restaurant Interior"
//             className="rounded-lg shadow-xl transition-transform duration-500 hover:scale-105"
//           />
//           {/* Decorative Circle */}
//           <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-50 animate-pulse"></div>
//         </div>
//       </div>
//       {/* Call to Action */}
//       <div className="text-center mt-12">
//         <button className="px-8 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-600 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-300 animate__animated animate__bounce animate__infinite	infinite  animate__slower	3s">
//           Discover Our Menu
//         </button>
//       </div>
//     </div>
//   </section>
// );

// export default About;



// import React, { useEffect } from "react";
// import "aos/dist/aos.css"; // Import AOS styles
// import AOS from "aos";

// const About = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1200, // Animation duration
//       offset: 200, // Offset for triggering animations
//       easing: "ease-in-out", // Easing function
//     });
//   }, []);

//   return (
//     <section className="relative py-16 bg-gray-100 text-purple-400 font-nunito h-screen">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center opacity-9  0"
        
//       ></div>
//       {/* Overlay */}
//       <div className="absolute inset-0"></div>
//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16">
//         {/* <h2
//           className="text-3xl font-extrabold text-center leading-tight tracking-wide text-black"
//           data-aos="fade-up"
//         >
//           About Us
//         </h2> */}

//         <h4 className="text-center text-gray-500 uppercase tracking-wider">
//           About Us
//         </h4>
//         {/* <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 my-4">
//           Book Your <span className="text-red-500">Stay With Us</span>
//         </h2> */}
//         <div
//           className="flex flex-col md:flex-row mt-12 items-center md:items-start space-y-8 md:space-y-0 md:space-x-12"
//           data-aos="fade-left"
//         >
//           {/* Text Section */}
//           <div className="md:w-1/2 text-lg leading-relaxed text-black font-nunito">
//             <p className="mb-6">
//               Welcome to our restaurant! With over{" "}
//               <span className="font-bold text-purple-600">20 years</span> of
//               culinary excellence, we are dedicated to providing you with an
//               unforgettable dining experience.
//             </p>
//             <p className="mb-6">
//               Our chefs use only the freshest ingredients to create{" "}
//               <span className="italic text-purple-900 font-bold">mouth-watering dishes</span>{" "}
//               that cater to all taste preferences. Join us to enjoy a blend of
//               traditional and contemporary flavors in a{" "}
//               <span className="underline">warm and inviting atmosphere</span>.
//             </p>
//             <p className="text-md text-gray-900">
//               We take pride in delivering the best service and ensuring every
//               visit leaves a lasting impression.
//             </p>
//           </div>

//           {/* Image Section */}
//           <div className="md:w-1/2 h-full   relative" data-aos="zoom-in">
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzmnuNE7Vg8_evlj5T85CKWArPluVly20wLw&s"
//               alt="Chef"
//               className="rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//         {/* Call to Action */}
//         <div className="text-center " data-aos="fade-up">
//           <button className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold rounded-lg hover:shadow-xl transition transform hover:-translate-y-1">
//             Discover Our Menu
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaAward, FaLeaf } from "react-icons/fa";
import { GiChefToque, GiMeal } from "react-icons/gi";
import { motion } from "framer-motion";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 150,
      easing: "ease-in-out-quint",
      once: true
    });
  }, []);

  return (
    <section className="relative py-20 bg-gray-900 overflow-hidden font-nunito " id="about">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 ">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-purple-900 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-900 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <span className="inline-block px-4 py-1 text-xs font-semibold tracking-wider text-purple-400 uppercase bg-purple-900/20 rounded-full mb-4">
            Our Story
          </span>
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Crafting <span className="text-purple-400">Culinary</span> Excellence
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-4" data-aos="fade-right">
            <motion.div 
              className="relative rounded-xl overflow-hidden h-64"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Chef preparing food"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-6">
                <div className="flex items-center">
                  <GiChefToque className="text-white text-2xl mr-2" />
                  <span className="text-white font-medium">Master Chef</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative rounded-xl overflow-hidden h-64"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                alt="Fresh ingredients"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-6">
                <div className="flex items-center">
                  <FaLeaf className="text-white text-xl mr-2" />
                  <span className="text-white font-medium">Fresh Ingredients</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative rounded-xl overflow-hidden h-64"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Restaurant interior"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-6">
                <span className="text-white font-medium">Elegant Ambiance</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative rounded-xl overflow-hidden h-64"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                alt="Happy customers"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-6">
                <span className="text-white font-medium">Memorable Experiences</span>
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="space-y-6" data-aos="fade-left">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <FaAward className="h-8 w-8 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">20+ Years of Excellence</h3>
                <p className="text-gray-300">
                  Since our founding in 2003, we've been recognized with numerous awards for culinary innovation and exceptional service.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <FaLeaf className="h-8 w-8 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Farm-to-Table Philosophy</h3>
                <p className="text-gray-300">
                  We partner with local farmers and purveyors to source the freshest seasonal ingredients, ensuring quality and sustainability.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <GiMeal className="h-8 w-8 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Signature Dishes</h3>
                <p className="text-gray-300">
                  Our menu features chef's specialties that blend traditional recipes with contemporary techniques.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-lg text-gray-300 italic mb-6">
                "We don't just serve meals—we craft memorable dining experiences that engage all the senses."
              </p>
              
              <motion.a
                href="/menu"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 transition-all duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Our Menu
                <svg className="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6" data-aos="fade-up">
          <div className="bg-gray-800/50 rounded-xl p-6 text-center backdrop-blur-sm">
            <div className="text-4xl font-bold text-purple-400 mb-2">20+</div>
            <div className="text-sm font-medium text-gray-300 uppercase tracking-wider">Years Experience</div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 text-center backdrop-blur-sm">
            <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-sm font-medium text-gray-300 uppercase tracking-wider">Local Suppliers</div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 text-center backdrop-blur-sm">
            <div className="text-4xl font-bold text-purple-400 mb-2">100+</div>
            <div className="text-sm font-medium text-gray-300 uppercase tracking-wider">Signature Dishes</div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 text-center backdrop-blur-sm">
            <div className="text-4xl font-bold text-purple-400 mb-2">10K+</div>
            <div className="text-sm font-medium text-gray-300 uppercase tracking-wider">Happy Guests</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;