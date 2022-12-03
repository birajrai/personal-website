import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav className="nav">
        <ul className="nav-lists">
          <li className="nav-items">
            <Link className="nav-text fa-house-blank" to="/">/</Link>
          </li>
          <li className="nav-items">
            <Link className="nav-text" to="/about">/about</Link>
          </li>
          <li className="nav-items">
            <Link className="nav-text" to="/gallery">/gallery</Link>
          </li>
          <li className="nav-items">
            <Link className="nav-text" to="/contact">/contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
