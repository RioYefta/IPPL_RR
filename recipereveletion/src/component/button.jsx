import React from 'react';
import './bahan.css'

const Emaillogin = ({ onClick }) => {
  return (
    <button className="Email" onClick={onClick}>
      MASUK
    </button>
  );
};

const Register = ({ onClick }) => {
  return (
    <button className="Register" onClick={onClick}>
      Daftar
    </button>
  );
};

export { Emaillogin, Register };


  
