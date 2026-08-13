import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-blue-800 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold inline">My App</h1>

        <ul className="float-right flex gap-6">
          <li>
            <Link to="/" className="hover:text-gray-200">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-gray-200">
              About
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-gray-200">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
