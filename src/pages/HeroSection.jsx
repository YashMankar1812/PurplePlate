// import { useRef } from "react";
// import { ChevronLeft, ChevronRight, Menu } from "lucide-react";
// import FoodShowcase from "./FoodShowcase";
// import BlogPage from "./BlogPage";
// import Testimonials from "./Testimonials";
// import About from "./About";
// import FAQPage from "./FAQPage";
// import CateringEvents from "./CateringEvents";
// import Gallery from "./Gallery";



// const foodItems = [
//   {  img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png" },
//   {  img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chole%20bhature.png" },
//   { img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png" },
//   {  img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png" },
//   {  img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Noodles.png" },
//   {  img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png" },
//   {  img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/3f2c40d3-96c7-44ce-8b35-aef6ea746cdc_lassi.png" },
//   {  img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Gulab%20jamun.png" },
//   {
//     img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/897bc750-6b57-4e7d-9365-87c1ab2c6d7e_Chinese2.png"
//   },
//   {
// img :"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Rasgulla.png"
//   },
//   {
//     img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pure%20Veg.png"
//   },
//   {
//     img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/05a939eb-fd4e-4308-b989-d1c54f4421b3_northindian1.png"
//   },
//   {
//     img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Desserts.png"
//   },
//   {
//     img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/2/4/2b999748-b33c-4560-a422-e90f3e60a5fb_Poori1.png"
//   },
//   {
//     img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Salad-1.png"
//   }
  
// ]
// export default function FoodCarousel() {
//   const carouselRef = useRef(null);

//   const scroll = (direction) => {
//     if (carouselRef.current) {
//       const scrollAmount = 300;
//       carouselRef.current.scrollBy({
//         left: direction === "left" ? -scrollAmount : scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <>
//     <FoodShowcase/>
//     <About/>
//     <div className="w-ful">
//       <h6 className="text-center text-gray-500 uppercase tracking-wider">Menu</h6>
//       {/* Heading */}
//       <h2 className="text-center text-3xl font-bold font-nunito">
//         What's on your{" "}
//         <span className="text-5xl text-purple-700 font-dancing font-semibold">
//           Mind
//         </span>
//         ?
//       </h2>

//       {/* Grid Container */}
//       <div className="mt-2X grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-10 place-items-center">
//         {foodItems.map((item, index) => (
//           <div
//             key={index}
//             className={`relative  rounded-lg overflow-hidden transition transform hover:scale-110 hover:rotate-3  ${
//               index % 2 === 0 ? "w-28 h-38" : "w-26 h-36"
//             }`}
//           >
//             {/* Food Image */}
//             <img
//               src={item.img}
//               alt={`Food ${index}`}
//               className="w-full h-full object-cover  transition cursor-pointer "
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//     <Menu/>
//     <BlogPage/>
//     <Testimonials/>
//     <Gallery/>
//     <CateringEvents/>
//     <FAQPage/>
    
//     </>
//   );
// }



import { Menu } from "lucide-react";
import FoodShowcase from "./FoodShowcase";
import BlogPage from "./BlogPage";
import Testimonials from "./Testimonials";
import About from "./About";
import FAQPage from "./FAQPage";
import CateringEvents from "./CateringEvents";
import Gallery from "./Gallery";
import EmptyCart from "./EmptyCart";
import EventsPage from "./EventsPage";
import WhyChoose from "./WhyChoose";
import HappyCustomers from "./HappyCustomers";
import SpecialDishes from "./SpecialDishes";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";
import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import MenuGrid from "./MenuGrid";


export default function FoodCarousel() {
  // const { handleAddToCart } = useCart();
  // const [selectedFood, setSelectedFood] = useState();


  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <FoodShowcase />
     <MenuGrid/>
      <About />
      <WhyChoose/>
      <SpecialDishes/>
      <BlogPage />
      <Testimonials />
      <EventsPage/>
      <Gallery />
      <CateringEvents />
      <HappyCustomers/>
      <FAQPage />
    </>
  );
}

