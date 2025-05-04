// import React from 'react';
import { NavLink, Link } from 'react-router';

const Header = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center ">
      {/* Left Section */}
      <div className="text-2xl font-bold text-gray-800">
        Fake Store
      </div>

      {/* Middle Navigation Links */}
      <div className="space-x-6 hidden md:flex">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'text-blue-600 font-semibold border-b-2 border-blue-600 pb-1'
              : 'text-gray-700 hover:text-blue-600'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? 'text-blue-600 font-semibold border-b-2 border-blue-600 pb-1'
              : 'text-gray-700 hover:text-blue-600'
          }
        >
          Products
        </NavLink>
      </div>

      {/* Right Section - Auth Buttons */}
      <div className="space-x-4">
        <Link to="/login">
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition">
            Log In
          </button>
        </Link>
        <Link to="/createUser">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Sign Up
          </button>
        </Link>
        <Link to="/cart">
          <button className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow hover:bg-yellow-600 transition">
            Cart
          </button>
        </Link>

      </div>
    </nav>
  );
};

export default Header;
