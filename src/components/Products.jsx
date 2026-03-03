import { motion } from 'framer-motion';
import kashmiriSaffron from '../assets/p5lTTTm9kfGvq7VeAxEcb1pcL51RVmeaEqoFeXaUxvOwfgInDStgnIVBXvz5yBK3bPk28zGu473vmPeMlqv3vTzoHqpl7gvNFlWq1ptNzl0.jpg';
import blackPeppercorns from '../assets/macro-photo-of-full-black-pepper-kernels.jpg';
import ceylonCinnamon from '../assets/718oQ8sYCwL._AC_UF350,350_QL80_.jpg';
import chiliPowder from '../assets/u57nd2Uiis80rJSJN8fJa0rqhXxoc_YIfdbk6twYxc6PPi5kfrR3oJj_wRaav0AFJVUlLrRiZwPFK4oDUQYXJxDK1xxDGSKUmCGIGPN6Wkg.jpg';

const products = [
  {
    id: 1,
    name: "Kashmiri Saffron",
    description: "Premium-grade saffron threads, hand-picked for rich color and aroma",
    price: "$24.99",
    image: kashmiriSaffron,
    color: "#E8D5B7"
  },
  {
    id: 2,
    name: "Cardamom Pods",
    description: "Green cardamom with intense, complex flavor profile",
    price: "$18.99",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=400&fit=crop",
    color: "#C8E6C9"
  },
  {
    id: 3,
    name: "Ceylon Cinnamon",
    description: "True cinnamon from Sri Lanka, sweet and aromatic",
    price: "$12.99",
    image: ceylonCinnamon,
    color: "#D7CCC8"
  },
  {
    id: 4,
    name: "Black Peppercorns",
    description: "Freshly ground black pepper, bold and pungent",
    price: "$9.99",
    image: blackPeppercorns,
    color: "#424242"
  },
  {
    id: 5,
    name: "Turmeric Powder",
    description: "Organic turmeric with powerful antioxidants",
    price: "$11.99",
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&h=400&fit=crop",
    color: "#FFD54F"
  },
  {
    id: 6,
    name: "Chili Powder",
    description: "Hot and flavorful red chili from India",
    price: "$8.99",
    image: chiliPowder,
    color: "#FF5722"
  },
 
];

const Products = ({ addToCart }) => {
  return (
    <section className="products" id="products">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title" style={{ color: '#000000' }}>Our Collection</h2>
          <p className="section-subtitle">
            Premium spices sourced from the finest regions around the world
          </p>
        </motion.div>
        
        <div className="products-grid">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div 
                className="product-image" 
              >
                <img src={product.image} alt={product.name} className="product-img" />
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <button className="btn-add" onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="products-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <button className="btn-view-all" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>View All Products →</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
