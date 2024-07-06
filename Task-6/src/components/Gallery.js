import React, { useState } from 'react';
import images from '../data/images';
import ImageModal from './ImageModal';
import '../App.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="content">
      <h1>Gallery</h1>
      <div className="gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.alt}
            onClick={() => openModal(image)}
          />
        ))}
      </div>
      {selectedImage && (
        <ImageModal
          isOpen={Boolean(selectedImage)}
          image={selectedImage}
          onRequestClose={closeModal}
        />
      )}
    </div>
  );
};

export default Gallery;
