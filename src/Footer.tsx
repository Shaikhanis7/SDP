// Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-50 w-full h-screen flex flex-row justify-evenly items-end p-20 md:flex-col md:items-center md:gap-10">
      <div className="flex flex-col items-start justify-start p-4 w-1/4 md:w-full bg-gray-800 rounded-lg">
        <h3 className="font-semibold text-lg">CoolSite</h3>
        <p className="text-gray-300 text-sm">Made with <span className="text-pink-500">❤</span> by Jux</p>
        <div className="flex flex-row gap-4 mt-2">
          <a href="https://codepen.io/Juxtoposed" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center">
            <img src="https://assets.codepen.io/9051928/codepen_1.png" alt="CodePen" />
          </a>
          <a href="https://twitter.com/juxtoposed" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center">
            <img src="https://assets.codepen.io/9051928/x.png" alt="Twitter" />
          </a>
          <a href="https://youtube.com/@juxtoposed" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center">
            <img src="https://assets.codepen.io/9051928/youtube_1.png" alt="YouTube" />
          </a>
        </div>
        <p className="text-gray-500 text-sm mt-2">2024 © All Rights Reserved</p>
      </div>
      <div className="flex flex-col items-start justify-start p-4 w-1/4 md:w-full bg-gray-800 rounded-lg">
        <p>About</p>
        <p>Our mission</p>
        <p>Privacy Policy</p>
        <p>Terms of service</p>
      </div>
      <div className="flex flex-col items-start justify-start p-4 w-1/4 md:w-full bg-gray-800 rounded-lg">
        <p>Services</p>
        <p>Products</p>
        <p>Join our team</p>
        <p>Partner with us</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
      <div className="absolute inset-0 backdrop-blur-xl bg-black/40"></div>
    </footer>
  );
};

export default Footer;
