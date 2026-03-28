import ScrollReveal from '../components/ScrollReveal';

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <ScrollReveal>
            <h1>About Us</h1>
            <p>
              Discover the story behind Foods of Passion — our journey, our values, and our unwavering
              commitment to bringing you the healthiest foods nature has to offer.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Who We Are */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="about-grid">
            <ScrollReveal direction="left">
              <div>
                <p className="section-label">🌱 Who We Are</p>
                <h2 className="section-title" style={{ color: 'var(--primary-800)' }}>Who We Are</h2>
                <p style={{ color: '#555', fontSize: '1.05rem', marginBottom: '1rem', lineHeight: 1.8 }}>
                  We are dedicated to providing the highest quality healthy foods. Our journey started with a
                  simple idea: food should be natural, healing, and accessible to everyone.
                </p>
                <p style={{ color: '#555', fontSize: '1.05rem', marginBottom: '2rem', lineHeight: 1.8 }}>
                  Founded with a passion for wholesome nutrition, we source directly from organic farms and
                  small-scale producers who share our commitment to quality and sustainability.
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {[
                    { val: '15+', label: 'New Products' },
                    { val: '24/7', label: 'Service Availability' },
                    { val: '5+', label: 'Years of Experience' },
                  ].map((s, i) => (
                    <div key={i} style={{
                      flex: 1, background: 'var(--primary-50)', border: '1px solid var(--primary-100)',
                      borderRadius: '12px', padding: '1.25rem', textAlign: 'center', transition: 'transform .3s',
                    }}>
                      <strong style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', color: 'var(--primary-800)' }}>
                        {s.val}
                      </strong>
                      <br />
                      <span style={{ fontSize: '.85rem', color: '#666' }}>{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="video-wrapper">
                <div className="video-placeholder">
                  <div className="play-icon">▶</div>
                  <p style={{ fontWeight: 500 }}>Video Coming Soon</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section style={{ padding: '5rem 0', background: '#fafafa' }}>
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>Our Story</h2>
          </ScrollReveal>
          <div className="story-grid">
            <ScrollReveal direction="left">
              <div className="story-text">
                <p>
                  It all began in a small kitchen with a big dream. We noticed that the market was flooded with
                  processed, chemical-laden food products, and we wanted to offer something different — something real.
                </p>
                <p>
                  We started by connecting with local farmers and artisans who grow and produce food the traditional
                  way — without harmful pesticides, without artificial preservatives, and with a deep respect for nature.
                </p>
                <p>
                  Today, Foods of Passion serves thousands of families, restaurants, and health-conscious individuals
                  who trust us to deliver the purest, most nutritious food products available.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop"
                alt="Farm to table journey"
                className="story-image"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="vm-row">
            <ScrollReveal delay={0.1}>
              <div className="vm-card">
                <div className="vm-icon">👁️</div>
                <h3>OUR VISION</h3>
                <p>
                  To become India's most trusted brand for healthy, organic, and sustainably sourced food products,
                  making nutritious food accessible to every household.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="vm-card">
                <div className="vm-icon">🎯</div>
                <h3>OUR MISSION</h3>
                <p>
                  To bridge the gap between organic farms and urban kitchens by providing premium quality food
                  products that nourish the body, support local communities, and protect the environment.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section">
        <div className="container">
          <ScrollReveal>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.2rem)', marginBottom: '.75rem' }}>Our Core Values</h2>
            <p style={{ opacity: .9, maxWidth: 600, margin: '0 auto 3rem' }}>
              These principles guide everything we do, from sourcing to serving.
            </p>
          </ScrollReveal>
          <div className="values-grid">
            {[
              { icon: '🌾', title: 'Farm-First Approach', text: 'We prioritize fair partnerships with farmers, ensuring they receive fair compensation.' },
              { icon: '🧪', title: 'Zero Chemicals', text: 'No artificial preservatives, colors, or flavors. Pure, natural goodness.' },
              { icon: '♻️', title: 'Sustainability', text: 'Eco-friendly packaging and biodegradable materials to reduce our carbon footprint.' },
              { icon: '🤝', title: 'Community First', text: 'We support rural communities by sourcing from small-scale farmers and local producers.' },
              { icon: '✅', title: 'Quality Assured', text: 'Rigorous quality control at every stage from farm to packaging to delivery.' },
              { icon: '💡', title: 'Innovation', text: 'Constantly researching and developing new, healthier product options for our customers.' },
            ].map((v, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="value-card">
                  <div className="icon">{v.icon}</div>
                  <h4>{v.title}</h4>
                  <p>{v.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Our Products Gallery
            </h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
            {['/images/packed_tea.png', '/images/coffee.png', '/images/chocolates.png', '/images/spices.png', '/images/ready_to_cook.png', '/images/ready_to_eat.png'].map((src, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <img
                  src={src}
                  alt={`Product ${i + 1}`}
                  style={{
                    width: '100%', height: 180, objectFit: 'cover', borderRadius: '12px',
                    boxShadow: 'var(--shadow-sm)', transition: 'transform .4s',
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.04)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
