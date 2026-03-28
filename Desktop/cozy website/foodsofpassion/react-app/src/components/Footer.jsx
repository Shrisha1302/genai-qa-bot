import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <div className="footer-logo-icon">❤️</div>
              <span>Foods of Passion</span>
            </div>
            <p className="footer-desc">
              Your trusted Indian food market — premium teas, coffees, spices, snacks, lentils, rice and more. 100% natural, always fresh.
            </p>
            <div className="footer-socials">
              <div className="footer-social">📷</div>
              <div className="footer-social">💬</div>
              <div className="footer-social">📘</div>
            </div>
          </div>
          <div>
            <h4>Products</h4>
            <ul className="footer-links">
              <li><Link to="/products">Packed Tea & Coffee</Link></li>
              <li><Link to="/products">Chocolates</Link></li>
              <li><Link to="/products">Spices & Spice Blends</Link></li>
              <li><Link to="/products">Ready to Cook & Eat</Link></li>
              <li><Link to="/products">Bulk Lentils & Rice</Link></li>
              <li><Link to="/products">Vegan Leather</Link></li>
            </ul>
          </div>
          <div>
            <h4>Store Info</h4>
            <div className="footer-info">
              <span>📍 Main Market Area</span>
              <span>🕐 Mon–Sat: 9 AM – 8 PM</span>
              <span>📞 +91 98765 43210</span>
              <span>✉️ hello@foodsofpassion.com</span>
              <span style={{ marginTop: '.5rem', fontSize: '.78rem', opacity: .6 }}>FSSAI Lic No: 12345678901234</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Foods of Passion. All rights reserved. Made with 🌿 & ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
}
