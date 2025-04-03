import React from 'react';
import { MdCoffee, MdLunchDining, MdDinnerDining } from 'react-icons/md';

const FoodMenu = () => {
  const menuItems = [
    {
      category: 'Breakfast',
      icon: <MdCoffee size={24} />,
      title: 'Chicken Burger',
      description: 'Ipsum ipsum clita erat amet dolor justo diam',
      price: '$115',
      image: 'https://bootstrapmade.com/content/demo/Yummy/assets/img/hero-img.png', // Replace with actual image path
    },
    {
      category: 'Lunch',
      icon: <MdLunchDining size={24} />,
      title: 'Chicken Burger',
      description: 'Ipsum ipsum clita erat amet dolor justo diam',
      price: '$115',
      image: '/path/to/lunch-image.jpg', // Replace with actual image path
    },
    {
      category: 'Dinner',
      icon: <MdDinnerDining size={24} />,
      title: 'Chicken Burger',
      description: 'Ipsum ipsum clita erat amet dolor justo diam',
      price: '$115',
      image: '/path/to/dinner-image.jpg', // Replace with actual image path
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Most Popular Items</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
          >
            <div className="flex items-center mb-4">
              <span className="text-xl">{item.icon}</span>
              <span className="ml-2 text-lg font-semibold">{item.category}</span>
            </div>

            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-cover rounded-full mb-4"
            />

            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{item.description}</p>
            <span className="text-lg font-semibold">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;