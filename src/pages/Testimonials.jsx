import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft, FaQuoteRight, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Reservation from "./Reservation";

// Slider Settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-quad',
      once: true,
      offset: 100
    });
  }, []);

  const testimonialData = [
    {
      id: 1,
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      rate: "⭐⭐⭐⭐⭐",
      testimonial: "The food was absolutely amazing! Best dining experience ever.",
    },
    {
      id: 2,
      name: "Emily Smith",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      rate: "⭐⭐⭐⭐",
      testimonial: "Great service and delicious dishes. Highly recommend!",
    },
    {
      id: 3,
      name: "Michael Brown",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      rate: "⭐⭐⭐⭐⭐",
      testimonial: "Exceptional taste and wonderful ambiance. Loved it!",
    },
    {
      id: 4,
      name: "Sophia Johnson",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      rate: "⭐⭐⭐⭐",
      testimonial: "A truly delightful experience! Will visit again for sure.",
    }
  ];

  
  

  const chefsData = [
    {
      id: 1,
      name: "Chef Gordon Ramsay",
      image: "https://bootstrapmade.com/content/demo/Yummy/assets/img/chefs/chefs-1.jpg",
      role: "Head Chef",
      socialLinks: [
        { platform: "Facebook", url: "https://facebook.com" },
        { platform: "Twitter", url: "https://twitter.com" },
        { platform: "Instagram", url: "https://instagram.com" },
      ],
    },
    // {
    //   id: 2,
    //   name: "Chef Jamie Oliver",
    //   image: "https://randomuser.me/api/portraits/men/11.jpg",
    //   role: "Sous Chef",
    //   socialLinks: [
    //     { platform: "Facebook", url: "https://facebook.com" },
    //     { platform: "Twitter", url: "https://twitter.com" },
    //     { platform: "Instagram", url: "https://instagram.com" },
    //   ],
    // },
    {
      id: 3,
      name: "Chef Julia Child",
      image: "https://bootstrapmade.com/content/demo/Yummy/assets/img/chefs/chefs-2.jpg",
      role: "Pastry Chef",
      socialLinks: [
        { platform: "Facebook", url: "https://facebook.com" },
        { platform: "Twitter", url: "https://twitter.com" },
        { platform: "Instagram", url: "https://instagram.com" },
      ],
    },
    {
      id: 4,
      name: "Chef Thomas Keller",
      image: "https://bootstrapmade.com/content/demo/Yummy/assets/img/chefs/chefs-3.jpg",
      role: "Executive Chef",
      socialLinks: [
        { platform: "Facebook", url: "https://facebook.com" },
        { platform: "Twitter", url: "https://twitter.com" },
        { platform: "Instagram", url: "https://instagram.com" },
      ],
    }
  ];
  

  return (
    <>

    <Reservation/>
      {/* Team Members Section */}
      <section className=" py-10 px-4 md:px-8 font-nunito"
      style={{
        background: 'linear-gradient(to bottom, #000000 0%, #1e0521 30%, #2d0a3a 60%, #5a1a5a 100%)',
        backgroundAttachment: 'fixed', // Creates parallax effect
        backgroundSize: 'cover'
      }}>
  <div className="text-center mt-10">
    <h4 className="text-lg md:text-xl font-semibold text-purple-700 font-pacifico flex items-center justify-center">
      <span className="w-10 md:w-16 h-0.5 bg-purple-700"></span>
      <span className="mx-2 md:mx-4 text-purple-100">Team Members</span>
      <span className="w-10 md:w-16 h-0.5 bg-purple-700"></span>
    </h4>
    <h1 className="text-xl md:text-3xl font-bold text-gray-50 my-6 md:my-8 font-dancing">
      Our Master <span className="text-purple-300 text-3xl md:text-4xl">Chefs</span>
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 px-4 md:px-20 py-6 md:py-10 ">
      {chefsData.map((chef) => (
        <div
          key={chef.id}
          className="group bg-gray-50 shadow-lg hover:shadow-xl duration-300 overflow-hidden text-center rounded-lg"
        >
          <div className="relative  md:p-10">
            <img
              src={chef.image}
              alt={chef.name}
              className="w-full h-60 md:h-72 object-cover transition transform brightness-75 hover:scale-105 hover:brightness-95 mx-auto rounded-md"
            />
          </div>

          {/* Name & Role - Now positioned below the image */}
          <div className="p-4 opacity-0 max-h-0 overflow-hidden transition-all duration-300 group-hover:opacity-100 group-hover:max-h-40">
            <h3 className="text-lg md:text-2xl font-bold text-purple-700">{chef.name}</h3>
            <div className="flex justify-center space-x-3 mt-2">
              {chef.socialLinks.map((link, index) => {
                const Icon =
                  link.platform === "Facebook"
                    ? FaFacebook
                    : link.platform === "Twitter"
                    ? FaTwitter
                    : FaInstagram;
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 text-xl md:text-2xl transition-transform transform scale-100 hover:scale-110 hover:text-purple-500"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* Testimonial Section */}
   <section className="bg-50 py-10 px-4 md:px-8  "
   style={{
    background: 'linear-gradient(to bottom, #000000 0%, #1e0521 30%, #2d0a3a 60%, #5a1a5a 100%)',
    backgroundAttachment: 'fixed', // Creates parallax effect
    backgroundSize: 'cover'
  }}>
        <div className="text-center">
        <h4 className="mt-10 text-xl font-semibold text-purple-700 font-pacifico flex items-center justify-center">
            <span className="w-16 h-0.5 bg-purple-700"></span>
            <span className="mx-4 text-gray-200">Testimonials</span>
            <span className="w-16 h-0.5 bg-purple-700"></span>
          </h4>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-200 my-8 font-dancing">What Are They <span className="text-purple-300 text-4xl ">Saying About Us</span></h3>
          {/* <h2 className="text-2xl md:text-4xl font-bold text-purple-700 my-8 font-dancing ">
            Customer Testimonials
          </h2> */}
       <div className="container mx-auto py-8 p-10 ">
            <Slider {...sliderSettings}>
              {testimonialData.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-10  transition-transform duration-300"
                >
                  <div className="flex items-center mb-4 p-2">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 object-cover rounded-full mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-500">{testimonial.rate}</p>
                    </div>
                  </div>
                  <div className="p-3 flex">
                  <FaQuoteLeft className="text-red-400"/><p className="text-gray-700 w-full h-30">{testimonial.testimonial}</p><FaQuoteRight  className="text-red-400"/>
                  </div>
                  
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>  
    </>
  );
};

export default Testimonials;



// import React, { useEffect } from "react";
// import AOS from "aos";
// import "animate.css"; // Import animate.css if you're using it

// import "aos/dist/aos.css"; // Import AOS styles

// const Testimonials = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 }); // Initialize AOS with duration for animation
//   }, []);

//   return (
//     <section className="py-10 bg-gradient-to-b from-[#ff7e5f] to-[#feb47b] h-screen ">
//       <h2 className="text-4xl font-semibold text-center mb-8 text-white" data-aos="fade-up">
//         Customer Testimonials
//       </h2>
//       <div
//         className="flex items-center max-w-4xl mx-auto bg-white . p-6"
//         data-aos="fade-left" // Animation on this div
//       >
//         {/* Content */}
//       </div>
//     </section>
//   );
// };

// export default Testimonials; 











// const testimonialsData = [
//   {
//     id: 1,
//     name: "John Doe",
//     feedback: "The food was amazing, and the service was excellent!",
//     rating: 5,
//     image: "data:image/jpeg;base64,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",
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     feedback: "A wonderful dining experience. Highly recommended!",
//     rating: 4,
//     image: "data:image/jpeg;base64,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",
//   },
//   {
//     id: 3,
//     name: "Mike Johnson",
//     feedback: "The ambiance was perfect, and the food exceeded expectations.",
//     rating: 5,
//     image: "data:image/jpeg;base64,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",
//   },
//   {
//     id: 4,
//     name: "Emily Davis",
//     feedback: "Fantastic flavors and exceptional service. Will come back soon!",
//     rating: 5,
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZ7nKCoJb4ljaQ6BZ17Z3VVAjZb4Ek0qvfg&s",
//   },
//   {
//     id: 5,
//     name: "Chris Brown",
//     feedback: "A cozy atmosphere paired with delightful dishes. Loved it!",
//     rating: 4,
//     image: "data:image/jpeg;base64,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",
//   },
//   {
//     id: 6,
//     name: "Sophia Wilson",
//     feedback: "The staff was friendly, and the desserts were heavenly!",
//     rating: 5,
//     image: "data:image/jpeg;base64,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",
//   },
//   {
//     id: 7,
//     name: "Daniel Taylor",
//     feedback: "A gem of a restaurant. Every dish was cooked to perfection.",
//     rating: 5,
//     image: "data:image/jpeg;base64,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",
//   },
//   {
//     id: 8,
//     name: "Olivia Martinez",
//     feedback: "Amazing menu options and the cocktails were superb!",
//     rating: 4,
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0swHbzlxFPzeLG4K7E2lku0icEQMpyARKoQ&s",
//   },
//   {
//     id: 9,
//     name: "Liam Harris",
//     feedback: "An extraordinary culinary experience. Will recommend to all.",
//     rating: 5,
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQCLM3Lx3x4A465Q63oGW9OiZBuT4OUmcFVg&s",
//   },
//   {
//     id: 10,
//     name: "Ava Anderson",
//     feedback: "Perfect spot for celebrations. Great food and ambiance!",
//     rating: 5,
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkMZ0ag9GNvO4K6QFWEERvmYiUAPCpQhLHXw&s",
//   },
// ];