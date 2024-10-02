import React from 'react';

const TravelCard = ({ title, description, mainImage, smallImages }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6 p">
    <img src={mainImage} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex space-x-2">
        {smallImages.map((img, index) => (
          <img key={index} src={img} alt="" className="w-20 h-20 rounded object-cover" />
        ))}
      </div>
    </div>
  </div>
  );
};

export default TravelCard;