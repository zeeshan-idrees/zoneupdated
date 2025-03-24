import React, { useState, useEffect } from 'react';
import popup from '../../assets/img/popup.jpg';
const PopupModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(false), 6000); // Auto close after 5 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div style={styles.overlay}>
        <div style={styles.modal}>
          <span style={styles.closeButton} onClick={handleClose}>
            &times;
          </span>
          <img
            src={popup} // Replace with your image path
            alt="Popup"
            style={styles.image}
          />
        </div>
      </div>
    )
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 50,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    position: 'relative', // Add relative positioning to position the close button
    // backgroundColor: '#fff',
    padding: '30px 0px',
    borderRadius: '10px',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.3)',
    maxWidth: '400px',
    width: '90%',
    textAlign: 'center',
  },
  image: {
    maxWidth: '100%',
    borderRadius: '8px',
  },
  closeButton: {
    position: 'absolute', // Make the button float in the modal
    top: '20px',
    right: '15px',
    fontSize: '30px',
    cursor: 'pointer',
    color: '#ffffff',
    fontWeight: 'bold',
  },
};

export default PopupModal;
