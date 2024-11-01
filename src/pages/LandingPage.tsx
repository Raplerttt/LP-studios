// pages/index.tsx
import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <div className="flex flex-col items-center mb-10">
        <img src="/path/to/logo.png" alt="Logo" className="mb-5 w-48" />
        <h1 className="text-5xl font-bold text-center">Music Organizer</h1>
        <p className="mt-3 text-lg">Your ultimate hub for metal music!</p>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-4">Join Us Now</h2>
        <p className="mb-6 text-center">Sign up to organize and explore your favorite metal tracks and events.</p>
        <button className="px-6 py-3 text-lg font-semibold text-black bg-white rounded-full hover:bg-gray-300 transition duration-300">
          Sign Up
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
        <p>&copy; 2024 Music Organizer. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default LandingPage;
