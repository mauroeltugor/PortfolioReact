import React from 'react';
import Navbar from '../Navbar/Navbar';
import Title from '../Title/Title';

const Header = () => {
  return (
    <div className="HeaderCompo">
      <img src="https://img.freepik.com/iconos-gratis/engranaje_318-924759.jpg" className="devImage" />
      <Title />
      <Navbar />
    </div>
  );
};

export default Header;
