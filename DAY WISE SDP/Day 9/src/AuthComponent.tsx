// AuthComponent.tsx
import React, { useState } from 'react';

const AuthComponent: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);

  const handleSignUpClick = (): void => {
    setIsSignUp(true);
  };

  const handleSignInClick = (): void => {
    setIsSignUp(false);
  };

  return (
    <div
      id="container"
      className={`relative flex items-center justify-center h-screen w-full overflow-hidden transition-transform duration-600 ${
        isSignUp ? 'right-panel-active' : ''
      }`}
    >
      <div
        className={`absolute inset-0 flex items-center justify-center transition-transform duration-600 ${
          isSignUp ? 'translate-x-full' : 'translate-x-0'
        }`}
      >
        <div className="bg-white p-10 rounded-lg shadow-lg w-96">
          <h1 className="text-2xl font-bold">Sign In</h1>
          <form className="mt-6">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
            />
            <button
              type="button"
              className="w-full p-3 bg-red-500 text-white font-bold rounded transition-transform duration-150 hover:scale-95"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
      <div
        className={`absolute inset-0 flex items-center justify-center transition-transform duration-600 ${
          isSignUp ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="bg-white p-10 rounded-lg shadow-lg w-96">
          <h1 className="text-2xl font-bold">Sign Up</h1>
          <form className="mt-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
            />
            <button
              type="button"
              className="w-full p-3 bg-red-500 text-white font-bold rounded transition-transform duration-150 hover:scale-95"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center transition-transform duration-600 bg-gradient-to-r from-red-500 to-pink-600 text-white">
        <div className="absolute left-0 w-1/2 h-full flex items-center justify-center p-10 transition-transform duration-600 transform -translate-x-1/2">
          <div>
            <h1 className="text-4xl font-bold">Welcome Back!</h1>
            <p className="mt-4">
              To keep connected with us please login with your personal info
            </p>
            <button
              onClick={handleSignInClick}
              className="mt-6 p-3 bg-transparent border border-white text-white font-bold rounded transition-transform duration-150 hover:scale-95"
            >
              Sign In
            </button>
          </div>
        </div>
        <div className="absolute right-0 w-1/2 h-full flex items-center justify-center p-10 transition-transform duration-600 transform translate-x-1/2">
          <div>
            <h1 className="text-4xl font-bold">Hello, Friend!</h1>
            <p className="mt-4">
              Enter your personal details and start journey with us
            </p>
            <button
              onClick={handleSignUpClick}
              className="mt-6 p-3 bg-transparent border border-white text-white font-bold rounded transition-transform duration-150 hover:scale-95"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthComponent;
