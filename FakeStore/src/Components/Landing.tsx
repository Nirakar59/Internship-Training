import React from 'react';
import { Link } from 'react-router'; 

const Landing: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome to Fake Store
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          From here you can visit any page of our fake store, browse items, and add them to your cart by logging in.
        </p>
        <Link to="/products">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            View Products
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Landing;
