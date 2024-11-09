// src/LoginPage.jsx
import React, { useState } from 'react';
// import Stock from "../assets/Images/Stock1080p.mp4"
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    // Add login logic here (API call to your backend)
    console.log("Login attempt with:", email, password);
  };

  return (
    <div className="flex items-center justify-center ">
         {/* video  */}
         {/* <div className='fixed z-[-1] w-[100%] h-[100%] object-cover background top-0'>
                    <video muted autoPlay loop>
                        <source src={Stock} type="video/mp4" />
                    </video>
                </div> */}
      <div className="bg-transparent text-white border border-white p-8 rounded-lg shadow-md w-96 mt-20 mb-20 shadow-md shadow-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to Stock Market</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
        <Link to={"/signup"}>
            <p className="mt-4 text-center text-sm">
            Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Register</a>
            </p>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
