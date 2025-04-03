import { useState, useEffect } from "react";
import { FaChevronCircleUp } from "react-icons/fa";


const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
<button
  onClick={scrollToTop}
  className={`group fixed bottom-6 right-6 p-2 bg-purple-600 text-white rounded-full shadow-lg transition-all duration-300 ${
    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
  }`}
>
  {/* Icon */}
  <FaChevronCircleUp className="w-8 h-8" />

  {/* Label */}
  <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    Top
  </span>
  
</button>

  );
};

export default BackToTopButton;
