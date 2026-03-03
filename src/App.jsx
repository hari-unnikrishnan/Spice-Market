import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import BrandStory from './components/BrandStory';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useState } from 'react';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="app">
      <Navbar cart={cart} cartCount={cartCount} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} removeFromCart={removeFromCart} />
      <main>
        <Hero />
        <Features />
        <Products addToCart={addToCart} />
        <Testimonials />
        <BrandStory />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
