import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
      <img
        alt="wave"
        className="logo"
        src="https://logodix.com/logo/825028.jpg"
      />
      <h1 className="title">Show Time</h1>
    </div>
    <ul className="nav-items-list">
      <li className="link-item">
        <Link className="route-link" to="/">
          Home
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/about">
          About
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
