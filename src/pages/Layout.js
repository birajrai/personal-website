import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-slate-500 text-slate-800">
      <nav className="md:ml-auto space-x-3 flex flex-wrap items-center text-base justify-center">
        <Link to="/">/</Link>
        <Link to="/gallery">/gallery</Link>
        <Link to="/contact">/contact</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
