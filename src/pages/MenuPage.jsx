const MenuPage = () => (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-semibold text-center">Our Menu</h2>
      <div className="mt-8">
        <h3 className="text-2xl font-semibold">Appetizers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="font-semibold">Dish Name</h4>
            <p className="text-gray-600">A short description of the dish</p>
            <p className="text-red-600 mt-2">$8.99</p>
          </div>
          {/* Repeat for other appetizers */}
        </div>
  
        <h3 className="text-2xl font-semibold mt-12">Main Courses</h3>
        {/* Repeat similar structure for Main Courses */}
        
        <h3 className="text-2xl font-semibold mt-12">Desserts</h3>
        {/* Repeat similar structure for Desserts */}
      </div>
    </section>
  );
  
  export default MenuPage;
  