import { use } from 'react';
import { Link, NavLink } from 'react-router';
import { LogInContext } from '../Context/AuthContext';
import { CartContext } from '../Context/CartContext';

const HeaderFile = () => {
  const { handleLogout, isLoggedIn,user } = use(LogInContext);
    const{cart:{productCount}} = use(CartContext)
  
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Left Section - Logo */}
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
              : 'text-gray-700 hover:text-blue-600 transition'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? 'text-blue-600 font-semibold border-b-2 border-blue-600 pb-1'
              : 'text-gray-700 hover:text-blue-600 transition'
          }
        >
          Products
        </NavLink>
      </div>

      {/* Right Section - Auth & Cart */}
      <div className="flex items-center space-x-4">
        {!isLoggedIn ? (
          <>
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
          </>
        ) : (
          <>
          <span>Welcome {user?.user}</span>
          <button
            onClick={handleLogout}
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
            >
            Log Out
          </button>
            </>
        )}

        <Link className='relative' to={isLoggedIn ? '/cart' : '/login'}>
          <button className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow hover:bg-yellow-600 transition">
            Cart
          </button>
          <span className='absolute -top-2 -right-3 rounded-full grid place-content-center bg-gray-700 text-white size-6'>{productCount}</span>
        </Link>
      </div>
    </nav>
  );
};

export default HeaderFile;
