import React, { useEffect, useState } from 'react';
import './index.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const collectionProducts = {
    menswear: {
      title: "Premium Menswear",
      products: [
        { name: "Premium T-Shirt", image: "/men_tshirt.png", desc: "100% High-quality cotton, export ready." },
        { name: "Heavy Cotton Hoodie", image: "/men_hoodie.png", desc: "Durable, warm, and perfect for street style." }
      ]
    },
    womenswear: {
      title: "Premium Womenswear",
      products: [
        { name: "Elegant Evening Dress", image: "/women_dress.png", desc: "Sophisticated design with premium fabrics." },
        { name: "Activewear Set", image: "/women_activewear.png", desc: "Breathable, flexible fitness apparel." }
      ]
    },
    menswear_urban: {
      title: "Urban Menswear",
      products: [
        { name: "Urban Street T-Shirt", image: "/men_tshirt.png", desc: "Oversized fit with urban aesthetics." },
        { name: "Urban Hoodie", image: "/men_hoodie.png", desc: "Streetwear essential hoodie." }
      ]
    },
    womenswear_elegant: {
      title: "Elegant Womenswear",
      products: [
        { name: "Corporate Dress", image: "/women_dress.png", desc: "Professional and elegant." },
        { name: "Yoga Set", image: "/women_activewear.png", desc: "Comfortable activewear." }
      ]
    },
    sportswear: {
      title: "Sports Wear / Uniform",
      products: [
        { name: "Team Soccer Uniform", image: "/product_uniform.png", desc: "Professional athletic team uniform sets." },
        { name: "Athletic Track Jacket", image: "/product_sports_jacket.png", desc: "Lightweight, breathable sports track jacket." }
      ]
    },
    gymwear: {
      title: "Gym Wears",
      products: [
        { name: "Seamless Gym Leggings", image: "/product_gym_leggings.png", desc: "High-waisted, squat-proof workout leggings." },
        { name: "Breathable Gym Tank", image: "/product_gym_tank.png", desc: "Performance tank top for intense workouts." }
      ]
    }
  };

  const openModal = (category) => {
    setSelectedCategory(category);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCategory(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">STITCH MASTER GLOBAL</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#expertise">Expertise</a></li>
          <li><a href="#collections">Collections</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className="contact-btn">Request Quote</a>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Global Excellence in Garment Manufacturing</h1>
          <p>
            Premium quality, sustainable practices, and reliable international export. 
            We are the trusted B2B partner for world-class fashion brands globally.
          </p>
          <div className="cta-group">
            <a href="#collections" className="btn-primary">View Collections</a>
            <a href="#expertise" className="btn-secondary">Our Capabilities</a>
          </div>
        </div>
      </section>

      <section id="expertise" className="features">
        <h2 className="section-title">Why Partner With Us</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">🌐</div>
            <h4>Global Export Reach</h4>
            <p>Seamless logistics and shipping to over 50+ countries worldwide with real-time tracking and compliance handling.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✨</div>
            <h4>Uncompromising Quality</h4>
            <p>Rigorous ISO-certified quality assurance protocols at every stage of the manufacturing process.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌱</div>
            <h4>Sustainable Sourcing</h4>
            <p>Committed to ethical manufacturing, eco-friendly materials, and transparent supply chains.</p>
          </div>
        </div>
      </section>

      <section id="collections" className="categories">
        <h2 className="section-title">Our Production Lines</h2>
        <div className="category-grid">
          <div className="category-card" onClick={() => openModal('menswear')}>
            <img src="/menswear.png" alt="Premium Menswear" />
            <div className="category-info">
              <h3>Menswear</h3>
              <p>Tailored suits, casual wear, and premium basics.</p>
            </div>
          </div>
          <div className="category-card" onClick={() => openModal('womenswear')}>
            <img src="/womenswear.png" alt="Premium Womenswear" />
            <div className="category-info">
              <h3>Womenswear</h3>
              <p>High-end dresses, activewear, and daily essentials.</p>
            </div>
          </div>
          <div className="category-card" onClick={() => openModal('menswear_urban')}>
            <img src="/menswear2.png" alt="Urban Menswear" />
            <div className="category-info">
              <h3>Urban Menswear</h3>
              <p>Modern streetwear and premium outerwear.</p>
            </div>
          </div>
          <div className="category-card" onClick={() => openModal('womenswear_elegant')}>
            <img src="/womenswear2.png" alt="Elegant Womenswear" />
            <div className="category-info">
              <h3>Elegant Womenswear</h3>
              <p>Sophisticated evening wear and corporate attire.</p>
            </div>
          </div>
          <div className="category-card" onClick={() => openModal('sportswear')}>
            <img src="/sportswear_category.png" alt="Sports Wear / Uniform" />
            <div className="category-info">
              <h3>Sports Wear / Uniform</h3>
              <p>High-quality athletic team uniforms and sports apparel.</p>
            </div>
          </div>
          <div className="category-card" onClick={() => openModal('gymwear')}>
            <img src="/gymwear_category.png" alt="Gym Wears" />
            <div className="category-info">
              <h3>Gym Wears</h3>
              <p>Premium seamless leggings, tank tops, and workout gear.</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="footer-content">
          <h2>Ready to elevate your brand?</h2>
          <p>Contact our global sales team today to discuss your manufacturing needs, request samples, or get a custom quote.</p>
          <div className="social-links">
            <a href="https://www.instagram.com/stitchmasterglob?igsh=MXhsN2xvdDNsOTV0Mw==" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Stitch Master Global. All rights reserved.</p>
        </div>
      </footer>

      {/* Products Modal */}
      <div className={`modal-overlay ${selectedCategory ? 'active' : ''}`} onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={closeModal}>&times;</button>
          
          {selectedCategory && collectionProducts[selectedCategory] && (
            <>
              <div className="modal-header">
                <h2>{collectionProducts[selectedCategory].title}</h2>
              </div>
              <div className="modal-products">
                {collectionProducts[selectedCategory].products.map((product, idx) => (
                  <div key={idx} className="product-card">
                    <img src={product.image} alt={product.name} />
                    <h4>{product.name}</h4>
                    <p>{product.desc}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
