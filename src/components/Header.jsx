import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoIosHeart } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";

const Header = ({ user, logout }) => {
  const { cart } = useCart(); 
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Header */}
      <nav className="fixed top-0 left-0 w-full z-50 p-4 shadow-lg transition duration-300 font-nunito bg-black">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <h1
            className="text-purple-50 text-2xl font-semibold font-dancing cursor-pointer"
            onClick={() => navigate("/")}
          >
            The Purple Plate
          </h1>
          {user ? (
          <div>
            <button onClick={logout} className="ml-4">Logout {user}</button>
          </div>
        ) : (
          <Link to="/login" className="ml-4">
            <IoMdPerson className="text-2xl" />
          </Link>
        )}
          
          {/* Desktop Navigation Links (Hidden on Mobile) */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <NavLink to="/" className="text-gray-300 font-thin text-lg hover:text-purple-600">
              Home
            </NavLink>
            <NavLink to="/gallery" className="text-gray-300 font-thin text-lg hover:text-purple-600">
              Gallery
            </NavLink>
            <NavLink to="/menu" className="text-gray-300 font-thin text-lg hover:text-purple-600">
              Menu
            </NavLink>
            <NavLink to="/blog" className="text-gray-300 font-thin text-lg hover:text-purple-600">
              Blog
            </NavLink>
            <NavLink to="/contact" className="text-gray-300 font-thin text-lg hover:text-purple-800">
              Contact
            </NavLink>
          </div>

          {/* Icons Section */}
          <div className="flex items-center gap-4 md:gap-5">
            {/* Mobile Menu Button (Visible Only on Small Screens) */}
            <button
              className="md:hidden text-white text-2xl transition duration-300 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Desktop Icons (Hidden on Mobile) */}
            <div className="hidden md:flex items-center gap-3 md:gap-5">
              {/* Cart Icon */}
              <div className="group relative">
                <Link to="/cart">
                  <FaCartShopping className="text-white cursor-pointer transition-transform duration-300 transform group-hover:scale-110" />
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cart.length}
                    </span>
                  )}
                </Link>
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 bg-black text-white text-xs px-2 py-1 rounded transition-all">
                  Cart
                </span>
              </div>

              {/* User Icon */}
              <div className="group relative">
                <Link to="/profile">
                  <IoMdPerson className="text-white cursor-pointer transition-transform duration-300 transform group-hover:scale-110" />
                </Link>
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 bg-black text-white text-xs px-2 py-1 rounded transition-all">
                  Profile
                </span>
              </div>

              {/* Wishlist */}
              <div className="group relative">
                <Link to="/wishlist">
                  <IoIosHeart className="text-white cursor-pointer hover:text-red-500 transition-transform duration-300 transform group-hover:scale-110" />
                </Link>
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 bg-black text-white text-xs px-2 py-1 rounded transition-all">
                  Favourite
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Navigation */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black text-white transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 pt-20 md:hidden`}
      >
        <nav className="flex flex-col text-center">
          <NavLink to="/" className="block text-xl py-4 px-6 text-gray-300 hover:bg-gray-800" onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/gallery" className="block text-xl py-4 px-6 text-gray-300 hover:bg-gray-800" onClick={toggleMenu}>
            Gallery
          </NavLink>
          <NavLink to="/menu" className="block text-xl py-4 px-6 text-gray-300 hover:bg-gray-800" onClick={toggleMenu}>
            Menu
          </NavLink>
          <NavLink to="/blog" className="block text-xl py-4 px-6 text-gray-300 hover:bg-gray-800" onClick={toggleMenu}>
            Blog
          </NavLink>
          <NavLink to="/contact" className="block text-xl py-4 px-6 text-gray-300 hover:bg-gray-800" onClick={toggleMenu}>
            Contact
          </NavLink>
        </nav>

        {/* Mobile Icons (Visible in Menu) */}
        <div className="flex justify-center gap-8 mt-12">
          <Link to="/cart" className="flex flex-col items-center" onClick={toggleMenu}>
            <FaCartShopping className="text-white text-2xl" />
            <span className="text-xs mt-1 text-gray-300">Cart</span>
            {cart.length > 0 && (
              <span className="absolute mt-[-8px] ml-5 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>
          
          <Link to="/profile" className="flex flex-col items-center" onClick={toggleMenu}>
            <IoMdPerson className="text-white text-2xl" />
            <span className="text-xs mt-1 text-gray-300">Profile</span>
          </Link>
          
          <Link to="/wishlist" className="flex flex-col items-center" onClick={toggleMenu}>
            <IoIosHeart className="text-white text-2xl" />
            <span className="text-xs mt-1 text-gray-300">Favorites</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;





// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
// import AuthPopup from "./AuthPop";
// import HeroSection from "./HeroSection";
// import FeaturedDishes from "./FeaturedDishes";
// import AboutUs from "./AboutUs";
// import Testimonials from "./Testimonials";
// import Reservation from "./Reservation";
// import MenuPage from "./MenuPage";
// import FAQPage from "./FAQPage.jsx";
// import BlogPage from "./BlogPage";
// import ContactPage from "./ContactPage";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleSearch = () => {
//     setIsSearchOpen(!isSearchOpen);
//   };

//   const togglePopup = () => {
//     setIsPopupOpen(!isPopupOpen);
//   };

//   return (
//     <>
//       {/* Header */}
//       <nav className="p-4 fixed top-0 left-0 w-full z-50 bg-blue-950  transition duration-300 ">
//   <div className="max-w-7xl mx-auto flex justify-between items-center gap-7 ">
//     {/* Logo Section */}
//     <div className="flex items-center gap-3">
//       <img
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8xgP9LZJ3t4oQsSUffpdXPpIah-XbLanByA&s"
//         alt="Restaurant Logo"
//         className="h-12 w-auto rounded-full"
//       />
//       <h1 className="text-white text-2xl font-bold">The Purple Plate</h1>
//     </div>

//     {/* Hamburger Menu for Mobile Screens */}
//     <div className="md:hidden">
//       <button
//         className="text-white text-2xl transition duration-300 focus:outline-none"
//         onClick={toggleMenu}
//       >
//         <FaBars />
//       </button>
//     </div>

//     {/* Desktop Navigation Links */}
//     <div className="hidden md:flex items-center gap-8 p-5">
//       <NavLink
//         to="/"
//         className="text-white text-lg hover:text-purple-800"
//         activeClassName="text-yellow-400"
//       >
//         Home
//       </NavLink>
//       <NavLink
//         to="/Menu"
//         className="text-white text-lg hover:text-purple-800"
//         activeClassName="text-yellow-400"
//       >
//         Menu
//       </NavLink>
//       <NavLink
//         to="/blog"
//         className="text-white text-lg hover:text-purple-800"
//         activeClassName="text-yellow-400"
//       >
//         Blog
//       </NavLink>
//       <NavLink
//         to="/contact"
//         className="text-white text-lg hover:text-purple-800"
//         activeClassName="text-yellow-400"
//       >
//         Contact
//       </NavLink>
//       <NavLink
//         to="/faq"
//         className="text-white text-lg hover:text-purple-800"
//         activeClassName="text-yellow-400"
//       >
//         FAQ
//       </NavLink>
//       <NavLink
//         to="/reservation"
//         className="text-white text-lg hover:text-purple-800"
//         activeClassName="text-yellow-400"
//       >
//         Reservation
//       </NavLink>
//     </div>
//   </div>

//   {/* Sidebar for Mobile View */}
//   <div
//     className={`fixed top-0 left-0 h-screen w-64 bg-gray-800 transform transition-transform duration-300 z-50 ${
//       isMenuOpen ? "translate-x-0" : "-translate-x-full"
//     } md:hidden`}
//   >
//     <div className="p-4 flex justify-between items-center">
//       <h2 className="text-white text-2xl">Menu</h2>
//       <button
//         className="text-white text-2xl focus:outline-none"
//         onClick={toggleMenu}
//       >
//         <FaTimes />
//       </button>
//     </div>
//     <nav className="mt-8">
//       <NavLink
//         to="/"
//         className="block text-white text-lg py-2 px-4 hover:bg-gray-700"
//         activeClassName="bg-gray-700"
//         onClick={toggleMenu}
//       >
//         Home
//       </NavLink>
//       {/* <NavLink
//         to="/Menu"
//         className="block text-white text-lg py-2 px-4 hover:bg-gray-700"
//         activeClassName="bg-gray-700"
//         onClick={toggleMenu}
//       >
//         Menu
//       </NavLink>
//       <NavLink
//         to="/blog"
//         className="block text-white text-lg py-2 px-4 hover:bg-gray-700"
//         activeClassName="bg-gray-700"
//         onClick={toggleMenu}
//       >
//         Blog
//       </NavLink> */}
//       <NavLink
//         to="/contact"
//         className="block text-white text-lg py-2 px-4 hover:bg-gray-700"
//         activeClassName="bg-gray-700"
//         onClick={toggleMenu}
//       >
//         Contact
//       </NavLink>
//       <NavLink
//         to="/faq"
//         className="block text-white text-lg py-2 px-4 hover:bg-gray-700"
//         activeClassName="bg-gray-700"
//         onClick={toggleMenu}
//       >
//         FAQ
//       </NavLink>
//       <NavLink
//         to="/reservation"
//         className="block text-white text-lg py-2 px-4 hover:bg-gray-700"
//         activeClassName="bg-gray-700"
//         onClick={toggleMenu}
//       >
//         Reservation
//       </NavLink>
//     </nav>
//   </div>

//   {/* Overlay */}
//   {isMenuOpen && (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-50 z-40"
//       onClick={toggleMenu}
//     ></div>
//   )}
// </nav>


//       {/* Popup for Signup/Login */}
//       {isPopupOpen && <AuthPopup />}

//       {/* Components */}
//       <HeroSection />
//       <AboutUs />
//       <MenuPage />
//       <BlogPage />
//       <FAQPage />
//       <FeaturedDishes />
//       <Testimonials />
//       <Reservation />
//       <ContactPage />
//     </>
//   );
// };

// export default Header;
