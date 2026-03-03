import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Home Cook",
    image: "👩‍🍳",
    rating: 5,
    text: "The quality of spices from Spice Market is unmatched. My curry has never tasted better! The saffron threads are incredibly aromatic.",
    location: "New York, USA"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Professional Chef",
    image: "👨‍🍳",
    rating: 5,
    text: "As a professional chef, I demand the best ingredients. Spice Market consistently delivers premium quality spices that elevate my dishes.",
    location: "San Francisco, USA"
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Food Blogger",
    image: "📸",
    rating: 5,
    text: "I've tried many spice suppliers, but Spice Market is simply the best. Their packaging keeps everything fresh, and the flavors are extraordinary!",
    location: "London, UK"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Join thousands of satisfied customers who trust us for their culinary needs
          </p>
        </motion.div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  {testimonial.image}
                </div>
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-role">{testimonial.role}</p>
                  <p className="testimonial-location">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">⭐</span>
                ))}
              </div>
              
              <p className="testimonial-text">"{testimonial.text}"</p>
              
              <div className="testimonial-quote">"</div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="testimonials-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="stat-number">50,000+</span>
            <span className="stat-label">Happy Customers</span>
          </motion.div>
          <motion.div
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="stat-number">4.9</span>
            <span className="stat-label">Average Rating</span>
          </motion.div>
          <motion.div
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="stat-number">100+</span>
            <span className="stat-label">Premium Spices</span>
          </motion.div>
          <motion.div
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="stat-number">25+</span>
            <span className="stat-label">Years Experience</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
