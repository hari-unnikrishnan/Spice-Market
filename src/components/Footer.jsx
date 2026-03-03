import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="footer-logo">Spice Market</h3>
            <p className="footer-description">
              Bringing the world's finest spices to your kitchen since 1998.
              Quality you can taste, service you can trust.
            </p>
            <div className="social-links">
              <motion.a
                href="#"
                className="social-link"
                aria-label="Facebook"
                whileHover={{ scale: 1.2, color: '#1877F2' }}
                transition={{ duration: 0.2 }}
              >
                <FaFacebook />
              </motion.a>
              <motion.a
                href="#"
                className="social-link"
                aria-label="Instagram"
                whileHover={{ scale: 1.2, color: '#E4405F' }}
                transition={{ duration: 0.2 }}
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="#"
                className="social-link"
                aria-label="Twitter"
                whileHover={{ scale: 1.2, color: '#1DA1F2' }}
                transition={{ duration: 0.2 }}
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                href="#"
                className="social-link"
                aria-label="YouTube"
                whileHover={{ scale: 1.2, color: '#FF0000' }}
                transition={{ duration: 0.2 }}
              >
                <FaYoutube />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4>Customer Service</h4>
            <ul>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            className="footer-newsletter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4>Stay Updated</h4>
            <p>Subscribe to get special offers and updates</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="newsletter-button"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Spice Market. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
