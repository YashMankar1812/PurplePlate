import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCalendarAlt, FaClock, FaUserAlt, FaPhoneAlt, FaEnvelope, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

function Reservation() {
  useEffect(() => {
    AOS.init({ 
      duration: 800,
      offset: 100,
      easing: "ease-in-out-quint",
      once: true
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "19:00",
    people: "2",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success(
      <div>
        <h3 className="font-bold">Reservation Confirmed!</h3>
        <p className="text-sm">We've sent details to {formData.email}</p>
      </div>, 
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }
    );
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "19:00",
      people: "2",
      message: "",
    });
    
    setIsSubmitting(false);
  };

  // Get today's date in YYYY-MM-DD format for date input min
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-nunito">
      <ToastContainer />
      
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12" data-aos="fade-down">
          <span className="inline-block px-4 py-1 text-xs font-semibold tracking-wider text-purple-600 uppercase bg-purple-100 rounded-full">
            Dining Reservations
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Reserve Your <span className="text-purple-600">Table</span>
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Experience excellence in our elegant dining space
          </p>
        </div>

        {/* Content Container */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden" data-aos="fade-up">
          <div className="flex flex-col lg:flex-row">
            {/* Left Image */}
            <div className="lg:w-2/5 relative">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Elegant restaurant interior"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-white text-2xl font-bold mb-2">The Experience</h3>
                  <p className="text-gray-200">
                    Our sommelier will help you select the perfect wine pairing for your meal
                  </p>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:w-3/5 p-8 sm:p-10">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  {/* Name Field */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUserAlt className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      className="pl-10 py-3 px-4 block w-full border border-gray-300 rounded-md text-sm focus:border-purple-500 focus:ring-purple-500"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="pl-10 py-3 px-4 block w-full border border-gray-300 rounded-md text-sm focus:border-purple-500 focus:ring-purple-500"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaPhoneAlt className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      className="pl-10 py-3 px-4 block w-full border border-gray-300 rounded-md text-sm focus:border-purple-500 focus:ring-purple-500"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Date Field */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaCalendarAlt className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="date"
                      name="date"
                      min={today}
                      className="pl-10 py-3 px-4 block w-full border border-gray-300 rounded-md text-sm focus:border-purple-500 focus:ring-purple-500"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Time Field */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaClock className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      name="time"
                      className="pl-10 py-3 px-4 block w-full border border-gray-300 rounded-md text-sm focus:border-purple-500 focus:ring-purple-500"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    >
                      <option value="11:00">11:00 AM</option>
                      <option value="11:30">11:30 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="12:30">12:30 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="13:30">1:30 PM</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="17:30">5:30 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                  </div>

                  {/* People Field */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUsers className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      name="people"
                      className="pl-10 py-3 px-4 block w-full border border-gray-300 rounded-md text-sm focus:border-purple-500 focus:ring-purple-500"
                      value={formData.people}
                      onChange={handleChange}
                      required
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(num => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'person' : 'people'}
                        </option>
                      ))}
                      <option value="13">13+ people (large party)</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div className="sm:col-span-2">
                    <textarea
                      name="message"
                      rows={4}
                      className="py-3 px-4 block w-full border border-gray-300 rounded-md text-sm focus:border-purple-500 focus:ring-purple-500"
                      placeholder="Special requests (allergies, celebrations, etc.)"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="sm:col-span-2">
                    <motion.button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        "Reserve Your Table"
                      )}
                    </motion.button>
                  </div>
                </div>
              </form>

              {/* Additional Info */}
              <div className="mt-8 border-t border-gray-200 pt-8">
                <h3 className="text-sm font-medium text-gray-500">Need to make changes?</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Please call us at <a href="tel:+11234567890" className="font-medium text-purple-600 hover:text-purple-500">+1 (123) 456-7890</a> to modify or cancel your reservation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;