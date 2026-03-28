import { Link } from 'react-router-dom';

export default function ProductCard({ product, delay = 0 }) {
  const { name, tags, description, price, image, badge, badgeClass } = product;

  return (
    <div className="product-card" style={{ transitionDelay: `${delay}ms` }}>
      <div className="product-card-image">
        <img src={image} alt={name} loading="lazy" />
        <div className="product-card-overlay" />
        {badge && <div className={`product-card-badge ${badgeClass}`}>{badge}</div>}
      </div>
      <div className="product-card-body">
        <h3>{name}</h3>
        <div className="product-card-tags">{tags}</div>
        <p>{description}</p>
        <div className="product-card-footer">
          <span className="product-card-price">{price}</span>
          <Link to="/contact" className="product-card-order">
            Order
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
