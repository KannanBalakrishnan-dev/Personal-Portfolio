import React from 'react';
import kbLogo from '../../assets/logo/kb_logo.png'; // adjust relative path to your actual folder depth

const Navleft = () => {
  return (
    <div>
      <img className='w-[10vw]' src={kbLogo} alt="KB Logo" />
    </div>
  );
};

export default Navleft;