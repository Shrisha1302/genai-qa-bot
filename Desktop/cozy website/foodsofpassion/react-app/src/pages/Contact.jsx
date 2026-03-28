import { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const faqs = [
  { q: 'Do you deliver across India?', a: 'Yes! We deliver our products across India. Shipping charges may vary depending on your location and order size.' },
  { q: 'Are your products truly organic?', a: 'Absolutely. All our products are sourced from certified organic farms and undergo rigorous quality testing.' },
  { q: 'Do you offer bulk or wholesale pricing?', a: 'Yes, we offer special wholesale pricing for restaurants, hotels, and businesses. Contact us for a custom quote.' },
  { q: 'What is your return policy?', a: 'We offer a hassle-free return policy within 7 days of delivery if you\'re not satisfied with the product quality.' },
  { q: 'How do I track my order?', a: 'Once your order is shipped, you\'ll receive a tracking link via email and SMS to monitor your delivery in real-time.' },
  { q: 'Can I request a specific product?', a: 'Of course! Use the contact form or reach out via phone/email to let us know what you need.' },
];

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sent');
    setTimeout(() => {
      setFormStatus('idle');
      e.target.reset();
    }, 3000);
  };

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <ScrollReveal>
            <h1>Contact Us</h1>
            <p>
              Have a question, feedback, or a bulk order inquiry? We'd love to hear from you.
              Reach out through any of the channels below.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="quick-cards">
            {[
              { icon: '📞', title: 'Call Us', text: '+91 98765 43219', small: 'Mon – Sat, 9 AM – 7 PM' },
              { icon: '✉️', title: 'Email Us', text: 'info@foodsofpassion.com', small: 'We reply within 24 hours' },
              { icon: '📍', title: 'Visit Us', text: 'Main Market Area', small: 'Walk-ins welcome!' },
            ].map((card, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="quick-card">
                  <div className="quick-card-icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <p className="small">{card.small}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container">
          <div className="contact-grid">
            <ScrollReveal direction="left">
              <div className="contact-form-wrapper">
                <h3>Get In Touch</h3>
                <p style={{ color: '#777', marginBottom: '1.5rem', fontSize: '.92rem' }}>
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" required placeholder="Enter your full name" />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Email Address</label>
                      <input type="email" placeholder="Enter your email address" />
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input type="tel" required placeholder="+91 98765 98765" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <input type="text" placeholder="What is this regarding?" />
                  </div>
                  <div className="form-group">
                    <label>Your Message</label>
                    <textarea rows="5" placeholder="Tell us more about your inquiry..." />
                  </div>
                  <button type="submit" className="form-submit">
                    {formStatus === 'sent' ? '✅ Message Sent!' : 'Send Message'}
                  </button>
                </form>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="contact-info-cards">
                <img
                  src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=800&auto=format&fit=crop"
                  alt="Healthy food spread"
                  style={{ width: '100%', height: 280, objectFit: 'cover', borderRadius: '16px', boxShadow: 'var(--shadow-md)', marginBottom: '1.5rem' }}
                />
                <div className="contact-info-card">
                  <h4>📍 Our Location</h4>
                  <p>Foods of Passion<br />Main Market Area<br />Your City, India</p>
                </div>
                <div className="contact-info-card">
                  <h4>🔗 Follow Us</h4>
                  <div style={{ display: 'flex', gap: '.6rem', marginTop: '.5rem' }}>
                    {['G', 'In', 'f', 'X'].map(s => (
                      <div key={s} style={{
                        width: 40, height: 40, border: '2px solid var(--primary-600)', borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600,
                        color: 'var(--primary-600)', cursor: 'pointer', transition: 'all .3s',
                        fontSize: '.9rem',
                      }}
                        onMouseEnter={(e) => { e.target.style.background = 'var(--primary-600)'; e.target.style.color = '#fff'; }}
                        onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--primary-600)'; }}
                      >{s}</div>
                    ))}
                  </div>
                  <p style={{ marginTop: '.75rem', fontSize: '.88rem', color: '#666' }}>
                    Stay connected for the latest updates, recipes, and exclusive offers!
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '5rem 0', background: '#fafafa' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">Got questions? We've got answers!</p>
            </div>
          </ScrollReveal>
          <div className="faq-grid">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <FaqCard question={faq.q} answer={faq.a} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <ScrollReveal>
            <h2>Ready to Eat Healthy?</h2>
            <p>
              Explore our wide range of organic and nutritious food products. Start your health journey
              with Foods of Passion today!
            </p>
            <div className="cta-banner-actions">
              <Link to="/products" className="btn-white">Browse Products</Link>
              <Link to="/about" className="btn-outline">Learn About Us</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

function FaqCard({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-card" onClick={() => setOpen(!open)}>
      <h4>
        {question}
        <span style={{ fontSize: '1.2rem', transition: 'transform .3s', display: 'inline-block', transform: open ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
      </h4>
      <div style={{
        maxHeight: open ? '200px' : '0',
        overflow: 'hidden',
        transition: 'max-height .4s ease, opacity .3s',
        opacity: open ? 1 : 0,
      }}>
        <p style={{ marginTop: '.5rem' }}>{answer}</p>
      </div>
    </div>
  );
}
