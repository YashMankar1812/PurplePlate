import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
// At the top of your file
import "aos/dist/aos.css";
import { FaTimes, FaHeart, FaRegHeart, FaBookmark, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { format } from 'date-fns';

const blogPosts = [
  {
    id: 1,
    title: "The Secret to Perfect Pasta",
    preview: "Master the art of pasta making with these tips and tricks from expert chefs.",
    fullContent: "Creating perfect pasta is both an art and a science. The key lies in using high-quality durum wheat semolina, maintaining the perfect water-to-salt ratio (10g salt per liter of water), and cooking al dente. Always reserve a cup of pasta water before draining - the starch helps create silky, restaurant-quality sauces.",
    image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "2023-06-15",
    readTime: 8,
    category: "Cooking Techniques",
    ingredients: [
      "400g high-quality pasta",
      "4 liters water",
      "40g sea salt",
      "Your choice of sauce ingredients"
    ],
    steps: [
      "Bring water to a rolling boil in a large pot",
      "Add salt and stir to dissolve",
      "Add pasta and stir immediately to prevent sticking",
      "Cook for 1 minute less than package instructions",
      "Reserve 1 cup of pasta water before draining",
      "Toss pasta with sauce and reserved water"
    ],
    author: {
      name: "Marco Bianchi",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Italian chef with 20 years of experience in traditional pasta making"
    }
  },
  {
    id: 2,
    title: "5 Must-Try Street Foods Around the World",
    preview: "Take your taste buds on a journey with these must-try street foods from different cultures.",
    fullContent: "Street food offers an authentic window into a culture's culinary soul. From Bangkok's fiery Som Tam (green papaya salad) to Mexico City's complex Tacos al Pastor (with roots in Lebanese shawarma), these dishes tell stories of migration, adaptation, and local ingenuity. Don't miss Istanbul's Balik Ekmek (fish sandwiches by the Bosphorus) or Mumbai's Pav Bhaji (spiced vegetable mash with buttered buns).",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "2023-07-22",
    readTime: 12,
    category: "Food Travel",
    ingredients: [],
    steps: [],
    author: {
      name: "Priya Patel",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Food anthropologist and street food enthusiast"
    }
  },
  {
    id: 3,
    title: "10 Healthy Salad Recipes You'll Love",
    preview: "Discover refreshing and healthy salad recipes that are as delicious as they are nutritious.",
    fullContent: "Elevate your salad game with these nutrient-packed combinations that go beyond boring greens. Our Mediterranean quinoa salad with preserved lemon dressing provides complete protein, while the roasted beet and goat cheese option delivers vibrant antioxidants. The Asian-inspired sesame kale salad features massaged kale for improved digestibility, and our winter citrus salad with pomegranate offers a vitamin C boost during cold months.",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "2023-08-10",
    readTime: 15,
    category: "Healthy Eating",
    ingredients: [],
    steps: [],
    author: {
      name: "Dr. Sarah Chen",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      bio: "Nutritionist and functional medicine practitioner"
    }
  }
];

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [saved, setSaved] = useState([]);
  const modalRef = useRef();

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: "ease-in-out-quint",
      once: true,
    });
    
    // Close modal when clicking outside
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedPost(null);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleFavorite = (postId) => {
    setFavorites(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId) 
        : [...prev, postId]
    );
  };

  const toggleSaved = (postId) => {
    setSaved(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId) 
        : [...prev, postId]
    );
  };

  const sharePost = (post) => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.preview,
        url: window.location.origin + post.link,
      }).catch(err => console.log('Error sharing:', err));
    } else {
      // Fallback for browsers that don't support Web Share API
      alert(`Share this post: ${post.title}\n${window.location.origin}${post.link}`);
    }
  };

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-50 font-nunito" style={{
      background: 'linear-gradient(to bottom, #000000 0%, #1e0521 30%, #2d0a3a 60%, #5a1a5a 100%)',
      backgroundAttachment: 'fixed', // Creates parallax effect
      backgroundSize: 'cover'
    }}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-16">
          <span className="uppercase inline-block px-3 py-1 text-sm font-semibold text-purple-700 bg-purple-100 rounded-full mb-4">
            Blog page
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-400 mb-4">
            The PurplePlate Journal
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert recipes, culinary techniques, and gastronomic adventures from around the world
          </p>
        </header>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <motion.article 
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              {/* Category Label */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 text-xs font-semibold text-white bg-purple-600 rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <button 
                    className="text-white font-medium hover:underline"
                    onClick={() => setSelectedPost(post)}
                  >
                    Read Full Article
                  </button>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center">
                    <IoTimeOutline className="mr-1" />
                    {post.readTime} min read
                  </span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-purple-700 transition-colors cursor-pointer">
                  <button onClick={() => setSelectedPost(post)}>{post.title}</button>
                </h2>

                <p className="text-gray-600 mb-4">{post.preview}</p>

                {/* Author and Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name} 
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <span className="text-sm font-medium text-gray-700">{post.author.name}</span>
                  </div>

                  <div className="flex space-x-3">
                    <button 
                      onClick={() => toggleFavorite(post.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                      aria-label={favorites.includes(post.id) ? "Remove from favorites" : "Add to favorites"}
                    >
                      {favorites.includes(post.id) ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
                    </button>
                    
                    <button 
                      onClick={() => toggleSaved(post.id)}
                      className="text-gray-400 hover:text-purple-600 transition-colors"
                      aria-label={saved.includes(post.id) ? "Remove from saved" : "Save for later"}
                    >
                      {saved.includes(post.id) ? <FaBookmark className="text-purple-600" /> : <FaRegBookmark />}
                    </button>
                    
                    <button 
                      onClick={() => sharePost(post)}
                      className="text-gray-400 hover:text-purple-600 transition-colors"
                      aria-label="Share this post"
                    >
                      <FaShareAlt />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 text-center text-white mb-16">
          <h3 className="text-2xl font-bold mb-2">Join Our PurplePlate Community</h3>
          <p className="mb-6 max-w-2xl mx-auto">Get weekly recipes, cooking tips, and exclusive content delivered to your inbox</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <button className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Recipe Details Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div 
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white z-10 p-6 border-b border-gray-200 flex justify-between items-start">
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-700 bg-purple-100 rounded-full mb-2">
                    {selectedPost.category}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedPost.title}</h2>
                </div>
                <button
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  onClick={() => setSelectedPost(null)}
                  aria-label="Close modal"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Author and Date */}
                <div className="flex items-center mb-6">
                  <img 
                    src={selectedPost.author.avatar} 
                    alt={selectedPost.author.name} 
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{selectedPost.author.name}</p>
                    <p className="text-sm text-gray-500">
                      {format(new Date(selectedPost.date), 'MMMM d, yyyy')} • {selectedPost.readTime} min read
                    </p>
                  </div>
                </div>

                {/* Featured Image */}
                <div className="mb-8 rounded-lg overflow-hidden">
                  <img 
                    src={selectedPost.image} 
                    alt={selectedPost.title} 
                    className="w-full h-auto max-h-96 object-cover"
                  />
                </div>

                {/* Article Content */}
                <div className="prose max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {selectedPost.fullContent}
                  </p>

                  {selectedPost.ingredients.length > 0 && (
                    <>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <span className="w-8 h-8 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center mr-3">
                          🍽
                        </span>
                        Ingredients
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {selectedPost.ingredients.map((ingredient, index) => (
                          <li key={index} className="flex items-start">
                            <span className=" w-5 h-5 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                              •
                            </span>
                            <span className="text-gray-700">{ingredient}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {selectedPost.steps.length > 0 && (
                    <>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <span className="w-8 h-8 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center mr-3">
                          👨‍🍳
                        </span>
                        Instructions
                      </h3>
                      <ol className="space-y-4 mb-8">
                        {selectedPost.steps.map((step, index) => (
                          <li key={index} className="flex">
                            <span className=" w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                              {index + 1}
                            </span>
                            <span className="text-gray-700 pt-1">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </>
                  )}
                </div>

                {/* Author Bio */}
                <div className="bg-gray-50 rounded-lg p-6 mt-8">
                  <div className="flex items-center mb-4">
                    <img 
                      src={selectedPost.author.avatar} 
                      alt={selectedPost.author.name} 
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">About {selectedPost.author.name}</h4>
                      <p className="text-sm text-gray-600">{selectedPost.author.bio}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 flex justify-between items-center">
                <div className="flex space-x-4">
                  <button 
                    onClick={() => toggleFavorite(selectedPost.id)}
                    className="flex items-center text-gray-600 hover:text-red-500"
                  >
                    {favorites.includes(selectedPost.id) ? (
                      <FaHeart className="text-red-500 mr-2" />
                    ) : (
                      <FaRegHeart className="mr-2" />
                    )}
                    {favorites.includes(selectedPost.id) ? 'Liked' : 'Like'}
                  </button>
                  <button 
                    onClick={() => toggleSaved(selectedPost.id)}
                    className="flex items-center text-gray-600 hover:text-purple-600"
                  >
                    {saved.includes(selectedPost.id) ? (
                      <FaBookmark className="text-purple-600 mr-2" />
                    ) : (
                      <FaRegBookmark className="mr-2" />
                    )}
                    {saved.includes(selectedPost.id) ? 'Saved' : 'Save'}
                  </button>
                </div>
                <button
                  onClick={() => sharePost(selectedPost)}
                  className="flex items-center bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <FaShareAlt className="mr-2" />
                  Share
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BlogPage;