import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav className="nav">
        <ul className="nav-lists">
          <li className="nav-items">
            <Link className="nav-text" to="/">
              Home
            </Link>
          </li>
          <li className="nav-items">
            <Link className="nav-text" to="/about">
              About
            </Link>
          </li>
          {/* <li className="nav-items">
            <Link className="nav-text" to="/gallery">
              Gallery
            </Link>
          </li>
          <li className="nav-items">
            <Link className="nav-text" to="/contact">
              Contact
            </Link>
          </li> */}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
