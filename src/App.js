import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { CartProvider } from './components/CartContext'; // Import CartProvider
import NavScrollExample from './components/Navbar';
import Categories from './components/Categories';
import Login from './components/Login';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Features from './components/Features';
import BestSelling from './components/BestSelling';
import OrganicShop from './components/Organicshop';
import OfferBanner from './components/OfferBanner';
import Trending from './components/Trending';
import Reviews from './components/Reviews';
import Banner from './components/Banner';
import Brands from './components/Brands';
import Footer from './components/Footer';
import './styles/Navbar.css';

const App = () => {
  const location = useLocation();

  const noFooterRoutes = ['/login', '/cart'];

  return (
    <>
      <NavScrollExample />

      <Routes>
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={
          <>
            <Hero />
            <Features />
            <BestSelling />
            <OrganicShop />
            <OfferBanner />
            <Trending />
            <Reviews />
            <Banner />
            <Brands />
          </>
        } />
      </Routes>
      {!noFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};

const WrappedApp = () => (
  <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>
);

export default WrappedApp;
