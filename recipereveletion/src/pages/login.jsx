import React from 'react';
import {LoginForm} from '../component/form';
import './Halaman.css'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useNavigate, Link } from "react-router-dom"

const Login = () => {

  const navigate = useNavigate()

  const handleGoogleLogin = ()=>{
    const auth = getAuth()
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
    .then((result)=>{
      console.info(result.user)
      localStorage.setItem('user', JSON.stringify(result.user))
      navigate("/")
    })
    .catch((err)=>{
      console.error(err)
    })

  }
  const handleLogin = (userData) => {
    // Tambahkan logika autentikasi di sini
    console.log('User data:', userData);
  };

  return (
    <div className="login-container">
      <h2>MASUK</h2>
      <LoginForm onLogin={handleLogin} />
      <p>belum punya akun? <Link to="/register"> Daftar disini </Link></p>
      <button className="Google" type='button' onClick={handleGoogleLogin}>
      Masuk Dengan GOOGLE
      </button>
    </div>
  );
};

export default Login;
