import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="header-navbar">
    <div className="header-brand-container">
      <img
        className="header-brand-image"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
      />
      <p className="header-text">Wave</p>
    </div>

    <ul className="header-links-list">
      <li className="header-link">
        <Link className="routing-link header-text" to="/">
          Home
        </Link>
      </li>

      <li className="header-link">
        <Link className="routing-link header-text" to="/about">
          About
        </Link>
      </li>

      <li className="header-link">
        <Link className="routing-link header-text" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
