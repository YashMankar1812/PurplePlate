const CategoryFilter = ({ filterItem, menuList }) => (
    <div className="py-6 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Explore Our Menu</h2>
        <div className="flex justify-center gap-4 flex-wrap">
          {menuList.map((category, index) => (
            <button
              key={index}
              className="px-6 py-2 bg-gray-200 hover:bg-purple-600 hover:text-white rounded-lg transition"
              onClick={() => filterItem(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  export default CategoryFilter;
  