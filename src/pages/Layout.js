import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-slate-500 text-slate-800 rounded">
      <nav className="py-4 px-6 text-sm font-medium">
        <ul className="flex space-x-3">
          <li className="hover:text-red-500">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-red-500">
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className="hover:text-red-500">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
