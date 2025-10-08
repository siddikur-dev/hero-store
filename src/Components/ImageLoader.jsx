// ImageLoader.jsx
import React from "react";

const ImageLoader = ({ src, size = 24 }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className={`w-${size} h-${size} flex items-center justify-center animate-spin`}
      >
        <img src={src} alt="loader" className="w-full h-full object-contain" />
      </div>
    </div>
  );
};

export default ImageLoader;
