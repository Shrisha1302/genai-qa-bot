import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import ProductCard from '../components/ProductCard';
import { products, testimonials, benefits, stats } from '../data';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div className="hero-grid" style={{ gap: '4rem' }}>
            <ScrollReveal direction="left">
              <div className="hero-content">
                <p className="section-label" style={{ marginBottom: '1rem' }}>🌿 100% Pure & Traditional</p>
                <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1.5rem' }}>
                  Authentic <span>Indian Spices</span> <br />
                  & Premium Teas
                </h1>
                <p className="hero-subtitle" style={{ fontSize: '1.15rem' }}>
                  Bringing the heritage of Bharat directly to your home with 
                  uncompromising purity and passion.
                </p>
                <div className="hero-actions" style={{ marginTop: '2.5rem' }}>
                  <Link to="/products" className="btn-primary" style={{ padding: '1rem 2.5rem' }}>Shop Collection</Link>
                  <Link to="/about" className="btn-outline" style={{ border: '2px solid var(--primary-200)', color: 'var(--primary-700)' }}>Learn More</Link>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="hero-image-wrapper">
                <img
                  src="/images/packed_tea.png"
                  alt="Foods of Passion - Premium Products"
                  style={{ width: '100%', borderRadius: '24px', boxShadow: 'var(--shadow-xl)' }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section style={{ padding: '5rem 0', background: 'var(--sand-50)' }} className="pattern-dots">
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <p className="section-label">🛒 What We Offer</p>
              <h2 className="section-title">Our Product Collection</h2>
              <p className="section-subtitle">
                A curated selection of the finest Indian food products — all natural, all authentic, all with passion.
              </p>
            </div>
          </ScrollReveal>
          <div className="products-grid">
            {products.slice(0, 6).map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 0.08}>
                <ProductCard product={p} />
              </ScrollReveal>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/products" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="container">
          <div className="about-grid">
            <ScrollReveal direction="left">
              <div className="about-image-wrapper">
                <div className="about-image-bg" />
                <img src="/images/packed_tea.png" alt="About Foods of Passion" className="about-image" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <p className="section-label">🌱 Our Story</p>
              <h2 className="section-title">Rooted in Tradition, Driven by Passion</h2>
              <p style={{ color: '#555', marginBottom: '1rem', fontSize: '1.05rem', lineHeight: '1.8' }}>
                <strong style={{ color: 'var(--primary-800)' }}>Foods of Passion</strong> was born from a simple belief —
                every family deserves access to pure, unadulterated, and authentic Indian food products.
              </p>
              <p style={{ color: '#555', marginBottom: '1rem', lineHeight: '1.8' }}>
                We work directly with farmers and artisans across 12 states in India to bring you spices that
                haven't been diluted, teas that are authentic, and lentils that cook exactly as they should.
              </p>
              <p style={{ color: '#555', marginBottom: '2rem', lineHeight: '1.8' }}>
                Every product on our shelf is <strong>FSSAI certified</strong>, <strong>lab-tested for purity</strong>,
                and packaged with care to ensure freshness from our store to your kitchen.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <div className="about-feature-icon">🌿</div>
                  <div className="about-feature-label">All Natural</div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">🧪</div>
                  <div className="about-feature-label">Lab Tested</div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">❤️</div>
                  <div className="about-feature-label">With Love</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits-section">
        <div className="pattern-dots" style={{ position: 'absolute', inset: 0, opacity: 0.05 }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>
                Why Customers Love Us
              </h2>
              <p style={{ color: 'var(--primary-200)', maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem' }}>
                What makes Foods of Passion different from every other grocery store
              </p>
            </div>
          </ScrollReveal>
          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="benefit-card">
                  <div className="benefit-icon">{b.icon}</div>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section pattern-dots">
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <p className="section-label">💬 Customer Love</p>
              <h2 className="section-title">What Our Customers Say</h2>
            </div>
          </ScrollReveal>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.id} delay={i * 0.1}>
                <div className="testimonial-card">
                  <div className="testimonial-stars">★★★★★</div>
                  <p className="testimonial-text">{t.text}</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{t.initial}</div>
                    <div>
                      <div className="testimonial-author-name">{t.name}</div>
                      <div className="testimonial-author-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section" style={{ background: '#fff' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <p className="section-label">📍 Reach Out</p>
              <h2 className="section-title">Visit Us or Send a Message</h2>
              <p className="section-subtitle">
                Questions about products, bulk orders, or wholesale pricing? We're here to help.
              </p>
            </div>
          </ScrollReveal>
          <div className="contact-grid">
            <ScrollReveal direction="left">
              <div className="contact-info-cards">
                <div className="contact-info-card">
                  <h4>📍 Store Location</h4>
                  <p>Foods of Passion<br />Main Market Area<br />Open: Mon–Sat, 9 AM – 8 PM<br />Sunday: 10 AM – 2 PM</p>
                </div>
                <div className="contact-info-card">
                  <h4>📞 Contact</h4>
                  <p>Phone: +91 98765 43210<br />WhatsApp: +91 98765 43210<br />Email: hello@foodsofpassion.com</p>
                </div>
                <div className="contact-info-card">
                  <h4>🚚 Bulk Orders</h4>
                  <p>Minimum order: 5 kg per item<br />Delivery within 2–5 business days<br />Special rates for 25kg+ orders</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.textContent = '✅ Message Sent!';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.disabled = false;
      e.target.reset();
    }, 3000);
  };

  return (
    <div className="contact-form-wrapper">
      <h3>Send us a message</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Name</label>
            <input type="text" required placeholder="Your name" />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" required placeholder="+91 98765 43210" />
          </div>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="you@email.com (optional)" />
        </div>
        <div className="form-group">
          <label>What are you looking for?</label>
          <textarea rows="4" placeholder="e.g. 5kg Basmati Rice, 1kg Garam Masala, bulk enquiry..." />
        </div>
        <button type="submit" className="form-submit">Send Message</button>
      </form>
    </div>
  );
}
