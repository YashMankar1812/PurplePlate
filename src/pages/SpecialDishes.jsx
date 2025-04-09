import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import { useCart } from "../context/CartContext"; // Import useCart

AOS.init();

const dailySpecials = {
  Monday: [
    { id: 1, name: "Grilled Chicken", image: "https://www.foxandbriar.com/wp-content/uploads/2023/07/Grilled-BBQ-Chicken-15-of-18.jpg", price: "$12.99", description: "Juicy grilled chicken with herbs & spices." },
    { id: 2, name: "Pasta Alfredo", image: "https://previews.123rf.com/images/naiklon/naiklon2305/naiklon230508589/205133946-top-view-fettuccine-alfredo-on-white-round-plate-on-white-background.jpg", price: "$10.99", description: "Creamy Alfredo sauce over fresh pasta." },
  ],
  Tuesday: [
    { id: 3, name: "Tandoori Paneer", image: "https://media.istockphoto.com/id/1186759790/photo/paneer-tikka-at-skewers-in-black-bowl-at-dark-slate-background-paneer-tikka-is-an-indian.jpg?s=612x612&w=0&k=20&c=cITToqM1KEnrixXjoLhEciqP24SxdKtW3QXykq-W5OE=", price: "$11.49", description: "Spiced paneer grilled to perfection." },
    { id: 4, name: "Caesar Salad", image: "https://media.istockphoto.com/id/1304648757/photo/caesar-salad-with-grilled-chicken-meat-romaine-and-parmesan-shot-from-the-top.jpg?s=612x612&w=0&k=20&c=gD1UdTalKcTAM8PVbyaRyJHRoZmvTSUCRgQW36UZUMY=", price: "$8.99", description: "Crisp romaine lettuce with classic dressing." },
  ],
  Wednesday: [
    { id: 5, name: "Sushi Platter", image: "https://media.istockphoto.com/id/1224916255/photo/sushi-maki-with-salmon-shrimp-cucumber.jpg?s=612x612&w=0&k=20&c=qIu0V_qKpP1R2xWMxID0tRGPDhOivHQ9CJFiZLcXpI8=", price: "$14.99", description: "Assorted fresh sushi rolls." },
    { id: 6, name: "Miso Soup", image: "https://www.pressurecookrecipes.com/wp-content/uploads/2021/05/miso-soup.jpg", price: "$5.99", description: "Traditional Japanese miso soup." },
  ],
  Thursday: [
    { id: 7, name: "Beef Steak", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0UqS2Ktxm-0pi9-wO8T_i0RInN7RrlC7Sqw&s", price: "$15.99", description: "Tender grilled steak with garlic butter." },
    { id: 8, name: "Garlic Bread", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPeOj1A1Z7h2fAZnF1b3NF4txwqEAI-aCQAA&s", price: "$6.49", description: "Crispy bread with garlic & cheese." },
  ],
  Friday: [
    { id: 9, name: "Shrimp Tacos", image: "https://www.nutmegnanny.com/wp-content/uploads/2016/11/shrimp-tacos-6.jpg", price: "$13.99", description: "Spicy shrimp tacos with fresh toppings." },
    { id: 10, name: "Margarita Pizza", image: "https://i0.wp.com/cookingitalians.com/wp-content/uploads/2024/11/Margherita-Pizza.jpg?fit=1344%2C768&ssl=1", price: "$11.99", description: "Classic pizza with basil & mozzarella." },
  ],
  Saturday: [
    { id: 11, name: "BBQ Ribs", image: "https://www.mantitlement.com/wp-content/uploads/2023/07/best-bbq-ribs-recipe-plate-top.jpg", price: "$17.99", description: "Slow-cooked BBQ ribs with smoky flavor." },
    { id: 12, name: "Loaded Nachos", image: "https://www.savorynothings.com/wp-content/uploads/2020/01/sheet-pan-nachos-image-1-1.jpg", price: "$9.99", description: "Crunchy nachos with cheese & salsa." },
  ],
  Sunday: [
    { id: 13, name: "Lamb Biryani", image: "https://pipingpotcurry.com/wp-content/uploads/2024/05/Lamb-Biryani.-Mutton-Biryani-Piping-Pot-Curry.jpg", price: "$14.99", description: "Aromatic rice with spiced lamb." },
    { id: 14, name: "Gulab Jamun", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1L7gr3WiYIW9q5PoDy4-oEjzxGu7_NZwZtA&s", price: "$6.99", description: "Soft & sweet Indian dessert." },
  ],
};

const SpecialDishes = () => {
  const [selectedDay, setSelectedDay] = useState("Monday");
  const { addToCart } = useCart(); // Use the useCart hook

  const displayedDishes = dailySpecials[selectedDay] || [];

  const handleAddToCart = (dish) => {
    const parsedPrice = typeof dish.price === 'string' ? parseFloat(dish.price.replace('$', '')) : dish.price;
    addToCart({ ...dish, price: parsedPrice }); // Pass the dish object to addToCart
    toast.success(`${dish.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 py-8 px-4 sm:px-6 lg:px-10 font-nunito">
      <ToastContainer />
      <h2 className="text-5xl text-purple-700 text-center uppercase p-10">What's Special</h2>
      <div className="flex justify-center items-center mb-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-dancing font-bold text-purple-700 text-center">Special Dishes</h2>
      </div>
      <div className="relative w-full px-4"> {/* Added padding container */}
  <div className="flex overflow-x-auto gap-3 sm:gap-4 py-5 w-full scrollbar-hide whitespace-nowrap">
    {Object.keys(dailySpecials).map((day, index) => (
      <button
        key={day}
        className={`flex-shrink-0 px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold rounded-full transition-all ${
          selectedDay === day
            ? "bg-purple-600 text-white shadow-lg scale-110"
            : "bg-gray-200 hover:bg-purple-400 hover:text-white"
        }`}
        onClick={() => setSelectedDay(day)}
        style={{ transitionDelay: `${index * 50}ms` }}
      >
        {day}
      </button>
    ))}
  </div>
</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-6 ">
        {displayedDishes.map((dish, index) => (
          <div
            key={dish.id}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform duration-300 m-10"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img src={dish.image} alt={dish.name} className="w-full h-40 object-cover rounded-md" />
            <h3 className="mt-3 text-lg font-bold">{dish.name}</h3>
            <p className="text-gray-600 text-sm">{dish.description}</p>
            <p className="text-purple-700 font-semibold mt-2">${typeof dish.price === 'string' ? dish.price.replace('$', '') : dish.price.toFixed(2)}</p>
            <button
              className="mt-3 w-full border border-orange-500 text-orange-500 font-semibold px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white transition-all"
              onClick={() => handleAddToCart(dish)}
            >
              Pick Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialDishes;