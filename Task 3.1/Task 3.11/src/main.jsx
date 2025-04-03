import React from "react";

const PhotoCard = ({ photo }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-64">
      <img
        src={photo.imageUrl}
        alt={photo.title}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="mt-2 text-xl font-semibold">{photo.title}</h2>
      <p className="mt-1 text-gray-500">{photo.description}</p>
    </div>
  );
};

export default PhotoCard;
