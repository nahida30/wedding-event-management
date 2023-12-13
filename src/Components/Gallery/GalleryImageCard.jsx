import React from 'react';

const GalleryImageCard = ({image}) => {

    const {id, url, altText,name, date} = image || {}
    return (
        <div>
            <div className="hero min-h-screen" data-aos="fade-right">
                <img src={url} alt={altText} />
  <div className="hero-overlay bg-opacity-10"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-gray-800">{date}</h1>
      <p className="mb-5 text-5xl text-white font-bold">{name}</p>
    
    </div>
  </div>
</div>
        </div>
    );
};

export default GalleryImageCard;