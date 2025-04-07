
import { BrowserRouter as Router, Route, Routes ,} from 'react-router-dom';
import Header from './components/Header';
import React, { useState } from 'react';
import HeroSection from './pages/HeroSection';
import About from './pages/About';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import Reservation from "./pages/Reservation";
import FAQPage from './pages/FAQPage';
import Testimonials from './pages/Testimonials';
import Gallery from './pages/Gallery';
import BackToTopButton from "./pages/BackToTopButton";
import EmptyCart from "./pages/EmptyCart";
import { CartProvider } from "./context/CartContext";
import CartPage from "./pages/CartPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmation from './pages/OrderConfirmation';
import 'react-toastify/dist/ReactToastify.css';
import MenuGrid from './pages/MenuGrid';
import FavoritesPage from './pages/FavoritesPage';


function App() {


  return (

    <>

      <ToastContainer position="top-right" autoClose={2000} />
    <CartProvider>
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<HeroSection/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart"  element={<CartPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/empty" element={<EmptyCart/>} />
        <Route path="/wishlist" element={<FavoritesPage />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/testimonials" element={<Testimonials/>}/>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
         <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/order-confirmation" element={<OrderConfirmation />} />
      </Routes>
      <Footer />
      <BackToTopButton />
    </Router>
    </CartProvider>
    </>
  );
}

export default App;







