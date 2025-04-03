// import React, { useState } from "react";
// import { FaTimes } from "react-icons/fa";

// const AuthPopup = ({ togglePopup }) => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.username || !formData.password) {
//       alert("Please fill in all fields!");
//       return;
//     }

//     if (!isLogin && formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     if (isLogin) {
//       console.log("Logging in with:", formData);
//     } else {
//       console.log("Signing up with:", formData);
//     }

//     setFormData({ username: "", password: "", confirmPassword: "" });
//     togglePopup(); // Close the popup
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
//         <button
//           className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
//           onClick={togglePopup} // Close the popup on click
//         >
//           <FaTimes />
//         </button>
//         <h2 className="text-xl font-bold mb-4 text-center">
//           {isLogin ? "Login" : "Sign Up"}
//         </h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleInputChange}
//             placeholder="Username"
//             className="w-full p-2 mb-4 border rounded-lg focus:outline-none"
//           />
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             placeholder="Password"
//             className="w-full p-2 mb-4 border rounded-lg focus:outline-none"
//           />
//           {!isLogin && (
//             <input
//               type="password"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleInputChange}
//               placeholder="Confirm Password"
//               className="w-full p-2 mb-4 border rounded-lg focus:outline-none"
//             />
//           )}

//           <button
//             type="submit"
//             className="w-full p-2 bg-purple-800 text-white rounded-lg hover:bg-purple-900 transition"
//           >
//             {isLogin ? "Login" : "Sign Up"}
//           </button>
//         </form>
//         <p className="text-center mt-4 text-gray-600">
//           {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
//           <button
//             className="text-purple-800 font-bold hover:underline"
//             onClick={() => setIsLogin(!isLogin)}
//           >
//             {isLogin ? "Sign Up" : "Login"}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AuthPopup;

import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookTablePopup = ({ togglePopup, }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time || !formData.guests) {
      toast.error("Please fill in all fields!");
      return;
    }

    toast.success("Table booked successfully!");
    setTimeout(() => {
      togglePopup(); // Close the popup after showing success message
    }, 2000);

    setFormData({ name: "", email: "", phone: "", date: "", time: "", guests: "" });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          onClick={togglePopup} // Ensures popup closes when clicking the close button
          
        >
          <FaTimes />
        </button>
        
        <h2 className="text-xl font-bold font-nunito mb-4 text-center text-purple-800">
          Book a Table
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="w-full p-2 mb-3 border rounded-lg focus:outline-none"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="w-full p-2 mb-3 border rounded-lg focus:outline-none"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number"
            className="w-full p-2 mb-3 border rounded-lg focus:outline-none"
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className="w-full p-2 mb-3 border rounded-lg focus:outline-none"
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            className="w-full p-2 mb-3 border rounded-lg focus:outline-none"
          />
          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleInputChange}
            placeholder="Number of Guests"
            className="w-full p-2 mb-3 border rounded-lg focus:outline-none"
          />

          <button
            type="submit"
            className="w-full p-2 bg-purple-800 text-white rounded-lg hover:bg-purple-900 transition"
          >
            Book Now
          </button>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} />
    </div>
  );
};

export default BookTablePopup;
