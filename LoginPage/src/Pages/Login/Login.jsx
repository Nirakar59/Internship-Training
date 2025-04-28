import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const[isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://office.lunarit.com.np/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          UserName: userId,
          password: password,
        }),
      });
  
      const text = await response.text(); 
      console.log("Raw server response:", text); 
  
      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        console.error("Response is not JSON", e);
        setError("Server returned invalid response.");
        return;
      }
  
      console.log("Parsed server response:", data); 
  
      if (data && data.Token) {
        localStorage.setItem('authToken', data.Token);
        setIsLoggedIn(true)
        navigate("/dashboard");
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error("Network or Fetch error:", err);
      setError("Login failed");
    }
  };
  

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700">Login ID</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-bold text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

