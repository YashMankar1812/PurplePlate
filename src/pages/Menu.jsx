import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { useCart } from "../context/CartContext"; // Import useCart

AOS.init();

export const dailySpecialsData = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "Starters",
    img: "https://bootstrapmade.com/content/demo/Yummy/assets/img/menu/menu-item-1.png" ,
    description: "Classic margherita pizza with fresh basil and mozzarella.",
    price: "$ 15.99", 
  },
  {
    id: 2,
    name: "Caesar Salad",
    category: "Starters",
    img: "https://bootstrapmade.com/content/demo/Yummy/assets/img/menu/menu-item-2.png",
    description: "Crisp romaine lettuce with Caesar dressing and croutons.",
    price: "$ 8.99",
  },
  {
    id: 3,
    name: "Crispy Chicken Wings",
    category: "Starters",
    img: "https://png.pngtree.com/png-clipart/20241114/original/pngtree-chicken-wings-on-white-plate-png-image_17014036.png",
    description: "Juicy wings tossed in spicy BBQ sauce.",
    price: "$ 12.99",

  },
  {
    id: 4,
    name: "Stuffed Mushrooms",
    category: "Starters",
    img: "https://thumbs.dreamstime.com/b/plate-baked-stuffed-mushrooms-isolated-white-background-highlighting-flavorful-appetizer-344168539.jpg",
    description: "Mushrooms filled with cheese, garlic, and herbs.",
    price: "$ 10.99",
  },
  {
    id: 5,
    name: "Spring Rolls",
    category: "Starters",
    img: "https://png.pngtree.com/png-clipart/20241114/original/pngtree-crispy-spring-rolls-with-parsley-garnish-on-white-plate-png-image_17043113.png",
    description: "Crispy rolls packed with fresh veggies and soy sauce.",
    price: "$ 9.99",
  },
  {
    id: 6,
    name: "Bruschetta",
    category: "Starters",
    img: "https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-bruschetta-italian-food-png-image_10093556.png",
    description: "Toasted bread topped with tomatoes, basil, and olive oil.",
    price: "$ 7.99",


  },
  { 
    id: 7,
    name: "Cheese Garlic Bread",
    category: "Starters",
    img: "https://img.freepik.com/premium-photo/round-wooden-plate-with-garlic-bread-cutout-transparent-background_1077802-444959.jpg",
    description: "Crunchy bread with melted cheese and garlic butter.",
    price: "$ 8.99",
  },
  {
    id: 8,
    name: "Margherita Pizza",
    category: "Starters",
    img: "https://bootstrapmade.com/content/demo/Yummy/assets/img/menu/menu-item-3.png" ,
    description: "Classic margherita pizza with fresh basil and mozzarella.",
    price: "$ 15.99", 
    
  },


  // Dessert  
  {
    id: 9,
    name: "Latte",
    category: "Main Course",
    img: "https://bootstrapmade.com/content/demo/Yummy/assets/img/menu/menu-item-2.png",
    description: "Creamy latte with a perfect balance of coffee and milk.",
    price: "$ 4.99",
  },
  {
    id: 10,
    name: "Bruschetta",
    category: "Main Course",
    img: "https://bootstrapmade.com/content/demo/Yummy/assets/img/menu/menu-item-3.png",
    description: "Toasted bread topped with fresh tomatoes and basil.",
    price: "$ 7.99",
  },
  {
    id: 11,
    name: "Grilled Chicken",
    category: "Main Course",
    img: "https://bootstrapmade.com/content/demo/Yummy/assets/img/menu/menu-item-1.png",
    description: "Juicy grilled chicken served with seasonal vegetables.",
    price: "$ 14.99",
  },
  {
    id: 12,
    name: "Chocolate Lava Cake",
    img: "https://www.shutterstock.com/image-photo/lava-cake-chocolate-coming-out-600nw-2500970875.jpg",
    category: "Desserts",
    description: "Warm chocolate cake with a gooey molten center.",
    price: "$ 8.99",
  },
  {
    id: 13,
    name: "Tiramisu",
    img: "https://img.freepik.com/premium-photo/tiramisu-white-plate-white-background-directly-view_864588-11646.jpg",
    category: "Desserts",
    description: "Classic Italian dessert with coffee-soaked layers and mascarpone.",
    price: "$ 7.99",
  },
  {
    id: 14,
    name: "Gulab Jamun",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBGByQ80MvikGRjmcTeVhFvhZHWXvI7TRwsw&s",
    category: "Desserts",
    description: "Soft fried dumplings soaked in sugar syrup.",
    price: "$ 6.99",
  },
  {
    id: 15,
    name: "Cheesecake",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuHEUCb-goB_UkThp8utWbzOzH3jWkj0PASA&s",
    category: "Desserts",
    description: "Creamy baked cheesecake with a biscuit base.",
    price: "$ 8.99",
  },
  {
    id: 16,
    name: "Brownie with Ice Cream",
    img: "https://www.shutterstock.com/image-photo/tasty-brownies-ice-cream-mint-600nw-2375561853.jpg",
    category: "Desserts",
    description: "Rich chocolate brownie served with vanilla ice cream.",
    price: "$ 9.99",
  },

  // Main Course 
  {
    id: 17,
    name: "Margherita Pizza",
    img: "https://bootstrapmade.com/content/demo/Yummy/assets/img/menu/menu-item-2.png" ,
    category: "Main Course",
    description: "Classic margherita pizza with fresh basil and mozzarella.",
    price: "$ 15.99", 
    
  },
  {
    id: 18,
    name: "Fruit Salad",
    img: "https://bootstrapmade.com/content/demo/Yummy/assets/img/menu/menu-item-3.png",
    category: "Main Course",
    description: "Fresh mix of seasonal fruits.",
    price: "$ 5.99",
  },
  {
    id: 19,
    name: "Chicken Wings",
    img: "https://png.pngtree.com/png-clipart/20241204/original/pngtree-a-plate-of-crispy-chicken-wings-coated-in-tangy-buffalo-sauce-png-image_17556762.png",
    category: "Main Course",
    description: "Crispy fried chicken served with your choice of sauce.",
    price: "$ 8.99",
  },
  {
    id: 20,
    name: "Grilled Salmon",
    img: "https://media.istockphoto.com/id/898087604/photo/fish-dish-salmon-steak-and-vegetables.jpg?s=612x612&w=0&k=20&c=jTXkvfw6naChqYqY3JnQoHZyRdd0y-C6uVwVns-V3UU=",
    category: "Main Course",
    description: "Freshly grilled salmon served with lemon butter sauce.",
    price: "$ 19.99",
  },
  {
    id: 21,
    name: "Paneer Butter Masala",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm-mXNgX_BHASEeEEnSeVWKWptsRHLefXJgA&s",
    category: "Main Course",
    description: "Soft paneer cubes in a rich tomato and butter gravy.",
    price: "$ 14.99",
  },
  {
    id: 22,
    name: "Chicken Biryani",
    img: "https://img.freepik.com/premium-photo/chicken-biryani-plate-isolated-white-background-delicious-spicy-biryani-isolated_667286-5782.jpg",
    category: "Main Course",
    description: "Fragrant rice cooked with marinated chicken and spices.",
    price: "$ 16.99",
  },
  {
    id: 23,
    name: "Pasta Alfredo",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj0mZLoJJkeIarK9pJn4_lfh_5fplU3i9U_Q&s",
    category: "Main Course",
    description: "Creamy white sauce pasta with mushrooms and parmesan.",
    price: "$ 12.99",
  },
  {
    id: 24,
    name: "Veg Thali",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU8L6Oq5UgkQxcaze-zqfDJSfM8Ne5cOGjdg&s",
    category: "Main Course",
    description: "A wholesome platter with dal, sabzi, roti, and rice.",
    price: "$ 9.99",
  },

  // Beverages 
  {
    id: 25,
    name: "Chicken Burger",
    img: "https://bootstrapmade.com/content/demo/Yummy/assets/img/menu/menu-item-5.png",
    category: "Beverages",
    description: "Juicy chicken patty served with lettuce, tomato, and cheese.",
    price: "$ 12.99",
  },{
    id: 26,
    name: "Chicken Fajitas",
    img: "https://bootstrapmade.com/content/demo/Yummy/assets/img/menu/menu-item-6.png",
    category: "Beverages",
    description: "Sizzling chicken and vegetables served with warm flour tortillas.",
    price: "$ 16.99",
  },
  {
    id:27,
    name: "Chicken Quesadilla",
    img: "https://bootstrapmade.com/content/demo/Yummy/assets/img/menu/menu-item-1.png",
    category: "Beverages",
    description: "Crispy chicken and cheese wrapped in a warm flour tortilla.",
    price: "$ 14.99",
  },
  {
    id: 28,
    name: "Mojito",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpgBSyovcG7cXnFup0oTby9-5MBfTET3G1lw&s",
    category: "Beverage",
    description: "Refreshing lime and mint drink with soda.",
    price: "$ 5.99",
  },
  {
    id: 29,
    name: "Cold Coffee",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5u5iopS_aDDFBFrjn3i_-V6Ny2g_VtaXrnA&s",
    category: "Beverage",
    description: "Chilled coffee blended with ice cream.",
    price: "$ 4.99",
  },
  {
    id: 30,
    name: "Fruit Punch",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF-uVQHx0xnyhjJv3YKgu6RId9diJ43o9ubQ&s",
    category: "Beverage",
    description: "A mix of fresh fruit juices and soda.",
    price: "$ 6.99",
  },
  {
    id: 31,
    name: "Masala Chai",
    img: "https://thumbs.dreamstime.com/b/traditional-tea-presentation-richly-colored-masala-chai-served-clay-cup-elegantly-displayed-white-background-aromatic-351553011.jpg",
    category: "Beverage",
    description: "Traditional Indian spiced tea.",
    price: "$ 4.99",
  },
  {
    id: 32,
    name: "Lassi",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBVulwYVwVwIOuo2Jef74U5gN2gQsbQ9kfHA&s",
    category: "Beverage",
    description: "Thick and creamy yogurt-based drink (sweet or salty).",
    price: "$ 5.99",
  }
];

const categoriesToShow = ["All", "Starters", "Main Course", "Desserts" ,"Beverage"];

const Menu = () => {
  const [filter, setFilter] = useState("All");
  const { addToCart } = useCart(); // Use the useCart hook

  const filteredDishes = dailySpecialsData.filter(
    (dish) => filter === "All" || dish.category === filter
  );

  const handleAddToCart = (dish) => {
    const parsedPrice = typeof dish.price === 'string' ? parseFloat(dish.price.replace('$', '')) : dish.price;

    if (isNaN(parsedPrice)) {
      console.error("Invalid price for dish:", dish);
      toast.error("Invalid price! Please try again.");
      return;
    }

    addToCart({ ...dish, price: parsedPrice }); // Use addToCart from context
    toast.success(`${dish.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 py-8 px-4 sm:px-6 lg:px-10 font-nunito">
      <ToastContainer />
      <h2 className="text-5xl text-purple-700 text-center uppercase p-10">Our Menu</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-y-4 md:gap-x-6 py-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-dancing font-bold text-purple-700 text-center md:text-left">Special Dishes</h2>
        <div className="overflow-x-auto scrollbar-hide md:overflow-visible">
          <div className="flex flex-row gap-2 sm:gap-3 p-3 sm:p-0 justify-start md:justify-center">
            {categoriesToShow.map((category, index) => (
              <button
                key={category}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full whitespace-nowrap min-w-[80px] text-center transition-all ${
                  filter === category
                    ? "bg-purple-600 text-white shadow-md scale-105"
                    : "bg-gray-200 hover:bg-purple-400 hover:text-white"
                }`}
                onClick={() => setFilter(category)}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-6 ">
        {filteredDishes.map((dish, index) => (
          <div
            key={dish.id}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform duration-300 m-10"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img src={dish.img} alt={dish.name} className="w-full h-40 object-cover rounded-md" />
            <h3 className="mt-3 text-lg font-bold">{dish.name}</h3>
            <p className="text-gray-600 text-sm">{dish.description}</p>
            <p className="text-purple-700 font-semibold mt-2">{dish.price}</p>
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

export default Menu;









        
