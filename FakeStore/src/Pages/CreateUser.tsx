import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router';

const CreateUser: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = String(formData.get('inpUsername'));
    const email = String(formData.get('emailInpName'));
    const password = String(formData.get('passInpName'));

    try {
      const response = await fetch('https://fakestoreapi.com/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('User created:', data);
        navigate('/login');
      }
    } catch (err) {
      console.error('Error creating user:', err);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Create Account</h1>
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
            <label htmlFor="emailInp" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="emailInpName"
              id="emailInp"
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
            className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
          >
            Create Account
          </button>

          <p className="text-sm text-center text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default CreateUser;
