import { motion } from 'framer-motion';

// Custom SVG Icons Components
const LeafIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
);

const HandshakeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
    <line x1="9" y1="9" x2="9.01" y2="9"/>
    <line x1="15" y1="9" x2="15.01" y2="9"/>
  </svg>
);

const PackageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16.5 9.4 7.55 4.24"/>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    <polyline points="3.29 7 12 12 20.71 7"/>
    <line x1="12" y1="22" x2="12" y2="12"/>
  </svg>
);

const TruckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 17h4V5H2v12h3"/>
    <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1"/>
    <circle cx="7.5" cy="17.5" r="2.5"/>
    <circle cx="17.5" cy="17.5" r="2.5"/>
  </svg>
);

const SparklesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v4"/>
    <path d="M12 17v4"/>
    <path d="M3 12h4"/>
    <path d="M17 12h4"/>
    <path d="m4.93 4.93 2.83 2.83"/>
    <path d="m16.24 16.24 2.83 2.83"/>
    <path d="M2 12h2"/>
    <path d="M20 12h2"/>
    <path d="m6.34 17.66-2.83 2.83"/>
    <path d="m19.07 4.93-2.83 2.83"/>
    <path d="m3 17.5 1.5 1.5"/>
    <path d="m19.5 3 1.5 1.5"/>
  </svg>
);

const HeadphonesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
  </svg>
);

const features = [
  {
    id: 1,
    icon: LeafIcon,
    title: "100% Natural",
    description: "All our spices are sourced directly from farms, with no artificial additives or preservatives."
  },
  {
    id: 2,
    icon: HandshakeIcon,
    title: "Fair Trade",
    description: "We partner with local farmers to ensure fair wages and sustainable farming practices."
  },
  {
    id: 3,
    icon: PackageIcon,
    title: "Fresh Packaging",
    description: "Our spices are packaged in airtight containers to preserve their natural aroma and flavor."
  },
  {
    id: 4,
    icon: TruckIcon,
    title: "Fast Delivery",
    description: "Free shipping on orders over $50. We deliver fresh spices straight to your doorstep."
  },
  {
    id: 5,
    icon: SparklesIcon,
    title: "Premium Quality",
    description: "Handpicked selection of the finest spices from the world's best growing regions."
  },
  {
    id: 6,
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Our dedicated team is always ready to help you find the perfect spices for your needs."
  }
];

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title" style={{ color: '#000000' }}>Why Choose Us</h2>
          <p className="section-subtitle">
            Experience the difference with our premium spice collection
          </p>
        </motion.div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="feature-icon-wrapper">
                <span className="feature-icon">
                  <feature.icon />
                </span>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="features-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="cta-card">
            <div className="cta-content">
              <h3>Ready to Elevate Your Cooking?</h3>
              <p>Explore our collection of premium spices and transform your meals into culinary masterpieces.</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Shop Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
