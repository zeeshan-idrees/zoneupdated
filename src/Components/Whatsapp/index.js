import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = "+923280707853"; // Your WhatsApp number here
  const message = "Welcome to Thrill zone - where fun knows no bounds! Dive into an exhilarating World of arcade games, bumper cars trampolines, and more. Little ones can explore safely in our toddler area whileyou recharge at our cafe. Ready to party"; // Pre-filled message
   
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button 
      onClick={handleWhatsAppClick}
      style={{
        position: 'fixed', // Fixes the button position
        left: '20px', // Adjust this to move it left or right
        bottom: '20px', // Keeps it 20px from the bottom of the screen
        backgroundColor: '#25D366',
        color: 'white',
        border: 'none',
        padding: '10px 10px',
        borderRadius: '50%', // Circular button, remove if you want rectangular
        cursor: 'pointer',
        fontSize: '24px',
        zIndex: 1000, // Ensures the button stays on top of other elements
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Optional shadow
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}   
    >
      <FaWhatsapp style={{ fontSize: '28px' }} />
    
    </button>
  );
};

export default WhatsAppButton;
