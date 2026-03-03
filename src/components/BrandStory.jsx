import { motion } from 'framer-motion';
import VibrantIndianSpices from '../assets/pngtree-vibrant-indian-spice-mix-with-turmeric-and-chili-peppers-on-wooden-image_17217516.jpg';
const BrandStory = () => {
  return (
    <section className="brand-story" id="about">
      <div className="container">
        <div className="brand-content">
          <motion.div
            className="brand-image-section"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="brand-image-wrapper">
              <div className="brand-image">
                <img 
                  src={VibrantIndianSpices}
                  alt="Vibrant Indian Spices"
                  className="brand-img"
                />
              </div>
            </div>
            <div className="experience-badge">
              <span className="experience-number">25+</span>
              <span className="experience-text">Years of Excellence</span>
            </div>
          </motion.div>
          
          <motion.div
            className="brand-text-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="brand-title">Our Story</h2>
            <h3 className="brand-subtitle">A Legacy of Flavor Since 1998</h3>
            <p className="brand-description">
              Spice Market was founded with a simple mission: to bring the world's finest 
              spices directly to your kitchen. What started as a small family business in 
              the heart of the spice markets has grown into a trusted name for culinary 
              enthusiasts and professional chefs alike.
            </p>
            <p className="brand-description">
              We partner directly with farmers and producers across India, Sri Lanka, 
              Morocco, and beyond, ensuring fair trade practices and uncompromising 
              quality. Every spice tells a story of tradition, passion, and craftsmanship.
            </p>
            
            <div className="brand-features">
              <div className="feature-item">
                <span className="feature-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <path d="M9 12l2 2 4-4"/>
                  </svg>
                </span>
                <div className="feature-text">
                  <h4>100% Natural</h4>
                  <p>No artificial additives</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                    <path d="M12 16v-4"/>
                    <path d="M12 8h.01"/>
                    <path d="M8 12H4"/>
                    <path d="M20 12h-4"/>
                  </svg>
                </span>
                <div className="feature-text">
                  <h4>Fair Trade</h4>
                  <p>Supporting local farmers</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <path d="M3.27 6.96L12 12.01l8.73-5.05"/>
                    <path d="M12 22.08V12"/>
                  </svg>
                </span>
                <div className="feature-text">
                  <h4>Fresh Delivery</h4>
                  <p>Packaged with care</p>
                </div>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
