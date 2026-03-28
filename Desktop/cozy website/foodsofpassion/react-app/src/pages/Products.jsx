import { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import ProductCard from '../components/ProductCard';
import { products } from '../data';

const categories = [
  { key: 'all', label: 'All Products', icon: '🛒' },
  { key: 'tea', label: 'Tea', icon: '🍵' },
  { key: 'coffee', label: 'Coffee', icon: '☕' },
  { key: 'chocolates', label: 'Chocolates', icon: '🍫' },
  { key: 'spices', label: 'Spices', icon: '🌶️' },
  { key: 'snacks', label: 'Snacks', icon: '🍿' },
  { key: 'bulk', label: 'Bulk', icon: '📦' },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <>
      {/* Products Hero */}
      <section className="products-hero">
        <div className="container">
          <ScrollReveal>
            <h1>Our Products</h1>
            <p>
              Explore our curated collection of organic, healthy, and traditionally crafted food products.
              Each item is carefully sourced to nourish your body and delight your taste buds.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== VEGAN LEATHER HERO ========== */}
      <section className="vegan-hero">
        <div className="container">
          <div className="vegan-grid">
            <ScrollReveal direction="left">
              <div className="vegan-label">
                <span>🌿</span> NEW COLLECTION
              </div>
              <h2 className="vegan-title">
                Introducing Our <span>Vegan Leather</span> Collection
              </h2>
              <p className="vegan-description">
                As a pure vegan, our founder believes in compassion beyond food. That's why we're proud to
                introduce our premium <strong>Vegan Leather</strong> collection — crafted from plant-based
                materials, completely cruelty-free, and built to last. Fashion that respects all living beings.
              </p>
              <div className="vegan-features">
                <div className="vegan-feature">
                  <div className="vegan-feature-icon">🐾</div>
                  <span>Cruelty-Free</span>
                </div>
                <div className="vegan-feature">
                  <div className="vegan-feature-icon">♻️</div>
                  <span>Eco-Friendly</span>
                </div>
                <div className="vegan-feature">
                  <div className="vegan-feature-icon">💪</div>
                  <span>Durable</span>
                </div>
                <div className="vegan-feature">
                  <div className="vegan-feature-icon">🌱</div>
                  <span>Plant-Based</span>
                </div>
              </div>
              <Link to="/contact" className="vegan-btn">
                🌿 Enquire About Vegan Leather
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.15}>
              <div className="vegan-image-wrapper">
                <img
                  src="/images/vegan_leather.png"
                  alt="Premium Vegan Leather Collection"
                  className="vegan-image"
                />
                <div className="vegan-image-badge">100% VEGAN</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Vegan Leather Info Section */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <p className="section-label">🌿 Why Vegan Leather?</p>
              <h2 className="section-title">Compassion Meets Craftsmanship</h2>
              <p className="section-subtitle">
                Our vegan leather is made from innovative plant-based materials including cactus, pineapple leaf
                fibers, and mushroom mycelium — providing the same luxurious look and feel as traditional leather
                without any animal products.
              </p>
            </div>
          </ScrollReveal>
          <div className="benefits-grid" style={{ background: 'transparent' }}>
            {[
              { icon: '🌵', title: 'Cactus-Based Material', text: 'Our primary material comes from mature cactus plants, harvested sustainably without harming the plant.' },
              { icon: '💧', title: 'Low Water Footprint', text: 'Uses 80% less water than traditional leather production, making it one of the most eco-friendly alternatives.' },
              { icon: '🎨', title: 'Premium Finish', text: 'Indistinguishable from animal leather in look and feel. Available in multiple colors and textures.' },
              { icon: '🏆', title: 'Long-Lasting Quality', text: 'Designed to age beautifully over time. Each product comes with a 2-year quality guarantee.' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="benefit-card" style={{ background: 'var(--primary-50)', color: 'var(--primary-800)', border: '1px solid var(--primary-200)' }}>
                  <div className="benefit-icon" style={{ background: 'var(--primary-200)', color: 'var(--primary-700)' }}>{item.icon}</div>
                  <h3 style={{ color: 'var(--primary-800)' }}>{item.title}</h3>
                  <p style={{ color: 'var(--primary-600)' }}>{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section style={{ padding: '4rem 0 2rem', background: 'var(--sand-50)' }} className="pattern-dots">
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <p className="section-label">🛒 Shop by Category</p>
              <h2 className="section-title">Our Food Products</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="categories-row" style={{ marginBottom: '3rem' }}>
              {categories.map(c => (
                <div
                  key={c.key}
                  className={`category-chip${activeCategory === c.key ? ' active' : ''}`}
                  onClick={() => setActiveCategory(c.key)}
                >
                  <span className="category-chip-icon">{c.icon}</span>
                  {c.label}
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Product Grid */}
          <div className="products-grid">
            {filtered.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 0.06}>
                <ProductCard product={p} />
              </ScrollReveal>
            ))}
          </div>
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem', color: '#888' }}>
              <p style={{ fontSize: '1.2rem' }}>No products found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose */}
      <section style={{ padding: '5rem 0', background: 'var(--primary-50)', color: 'var(--primary-900)', textAlign: 'center', borderTop: '1px solid var(--primary-200)', borderBottom: '1px solid var(--primary-200)' }}>
        <div className="container">
          <ScrollReveal>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.2rem)', marginBottom: '1rem' }}>Why Choose Our Products?</h2>
            <p style={{ opacity: .9, maxWidth: 600, margin: '0 auto 3rem' }}>Quality you can taste, purity you can trust</p>
          </ScrollReveal>
          <div className="why-grid">
            {[
              { icon: '🌿', title: '100% Natural', text: 'No artificial flavors, colors, or preservatives in any of our products.' },
              { icon: '🏅', title: 'Quality Certified', text: 'All products pass strict quality standards and freshness checks.' },
              { icon: '🚛', title: 'Fast Delivery', text: 'Quick and reliable delivery to your doorstep, fresh and on time.' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="why-card" style={{ background: '#fff', border: '1px solid var(--primary-200)', color: 'var(--primary-800)' }}>
                  <div className="icon" style={{ marginBottom: '1rem', fontSize: '2rem' }}>{item.icon}</div>
                  <h4 style={{ color: 'var(--primary-800)', marginBottom: '.5rem' }}>{item.title}</h4>
                  <p style={{ color: 'var(--primary-600)', fontSize: '.88rem' }}>{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Requirement Bar */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <ScrollReveal>
            <div className="requirement-bar">
              <div>
                <h3>Can't find what you need?</h3>
                <p>Tell us your requirement and we'll source it for you!</p>
              </div>
              <div className="requirement-inputs">
                <input type="text" placeholder="Enter Product Name" />
                <input type="text" placeholder="+91 Mobile No." />
                <button>Submit</button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
