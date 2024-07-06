import React from 'react';
import Modal from 'react-modal';
import '../App.css'; // Import the CSS file to use styles

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, image, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-content">
        <button onClick={onRequestClose} className="close-button">x</button>
        <img src={image.url} alt={image.alt} />
      </div>
    </Modal>
  );
};

export default ImageModal;
