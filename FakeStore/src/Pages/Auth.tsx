import React from 'react';
import { Link } from 'react-router';

type TypeOfToken = {
  token: string;
};

const Auth: React.FC = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = String(formData.get('inpUsername'));
    const password = String(formData.get('passInpName'));

    const credentials = { username, password };

    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const data: TypeOfToken = await response.json();
        console.log('Token:', data.token);
      }
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="usernameInp" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="inpUsername"
              id="usernameInp"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="passInp" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="passInpName"
              id="passInp"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{' '}
          <Link to="/createUser" className="text-blue-600 hover:underline">
            Create User
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Auth;
