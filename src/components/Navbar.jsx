import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ cart, cartCount, isCartOpen, setIsCartOpen, removeFromCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const cartTotal = cart.reduce((total, item) => total + (parseFloat(item.price.replace('$', '')) * item.quantity), 0);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <motion.a
            href="#"
            className="navbar-logo"
            whileHover={{ scale: 1.05 }}
          >
            <span className="logo-icon">🌶️</span>
            <span className="logo-text">Spice Market</span>
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <motion.li
                key={link.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href={link.href}>{link.name}</a>
              </motion.li>
            ))}
          </ul>

          <div className="navbar-actions">
            {/* Cart Button */}
            <motion.button
              className="cart-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              🛒 <span className="cart-count">{cartCount}</span>
            </motion.button>

            {/* Cart Popup */}
            <AnimatePresence>
              {isCartOpen && (
                <motion.div
                  className="cart-popup"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="cart-header">
                    <h3>Your Cart</h3>
                    <button className="cart-close" onClick={() => setIsCartOpen(false)}>✕</button>
                  </div>
                  <div className="cart-items">
                    {cart.length === 0 ? (
                      <p className="cart-empty">Your cart is empty</p>
                    ) : (
                      cart.map((item) => (
                        <div key={item.id} className="cart-item">
                          <img src={item.image} alt={item.name} className="cart-item-image" />
                          <div className="cart-item-info">
                            <h4>{item.name}</h4>
                            <p>{item.price} x {item.quantity}</p>
                          </div>
                          <button 
                            className="cart-item-remove"
                            onClick={() => removeFromCart(item.id)}
                          >
                            ✕
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                  {cart.length > 0 && (
                    <div className="cart-footer">
                      <div className="cart-total">
                        <span>Total:</span>
                        <span>${cartTotal.toFixed(2)}</span>
                      </div>
                      <button className="btn-primary cart-checkout">Checkout</button>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="menu-toggle"
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? '✕' : '☰'}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              className="navbar-mobile-links"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a href={link.href} onClick={() => setIsOpen(false)}>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
