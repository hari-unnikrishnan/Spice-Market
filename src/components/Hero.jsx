import { motion } from 'framer-motion';



const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      {/* Floating Spice Background Elements */}
     

      <div className="hero-overlay"></div>
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            ✨ Premium Quality Spices
          </motion.span>
          <h2 className="hero-subtitle">Welcome to</h2>
          <h1 className="hero-title">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Spice
            </motion.span>
            <motion.span
              className="hero-title-accent"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Market
            </motion.span>
          </h1>
          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Discover the finest spices from around the world. 
            Handpicked, ethically sourced, and delivered fresh to your door.
            <span className="hero-highlight"> Transform every meal into a masterpiece.</span>
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(216, 67, 21, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              onClick={scrollToProducts}
            >
              <span>Explore Collection</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 2 }}
              >
                →
              </motion.span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 171, 145, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
              onClick={scrollToAbout}
            >
              Our Story
            </motion.button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            className="hero-trust-badges"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <div className="trust-badge">
              <span className="trust-icon">🌿</span>
              <span>100% Natural</span>
            </div>
            <div className="trust-badge">
              <span className="trust-icon">🚚</span>
              <span>Free Shipping</span>
            </div>
            <div className="trust-badge">
              <span className="trust-icon">⭐</span>
              <span>4.9 Rating</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToProducts}
      >
        <motion.div
          animate={{ y: [0, 10, 0], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          ↓
        </motion.div>
        <span className="scroll-text">Scroll to explore</span>
      </motion.div>
    </section>
  );
};

export default Hero;
