import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <Link to="/">/</Link>
        <Link to="/gallery">/gallery</Link>
        <Link to="/contact">/contact</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
