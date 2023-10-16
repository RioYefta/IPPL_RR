import React from 'react'
import {Registerform} from '../component/form'
import { Link } from "react-router-dom"
import './Halaman.css'

function Register() {
  const handleregister = (userData) => {
    // Tambahkan logika autentikasi di sini
    console.log('User data:', userData);
  };

  return (
    <div className="register-container">
      <h2>Daftar</h2>
      <Registerform onRegister={handleregister} />
      <p>sudah punya akun?  <Link to="/login"> masuk </Link></p>
    </div>
  );
};

export default Register;