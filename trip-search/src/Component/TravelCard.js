import React from 'react';
import TitleWithCopyLink from './TitleWithCopyLink'; // Adjust the path as necessary

const TravelCard = ({ title, description, mainImage, smallImages,url,tags,onClickTag }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6 p">
      <img src={mainImage} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">
          <TitleWithCopyLink title={title} link={url}/>
        </h3>
        <p className="text-gray-600 mb-2">{description}</p><a href={url} onClick={() => window.location.href = url}>อ่านต่อ</a>
        <div className="flex space-x-2 py-2">
         หมวดหมู่ : {tags.map((tag, index) => (
            <button onClick={() => onClickTag(tag)} className="text-blue-500 underline">{tag}</button>
          ))}
        </div>
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