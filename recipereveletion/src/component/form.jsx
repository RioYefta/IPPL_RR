import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth"
import FloatingMessage from '../component/pesan';
import { useNavigate } from 'react-router-dom'; 
import './Bahan.css';



const LoginForm = ({}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      console.info(result.user)
      localStorage.setItem('user', JSON.stringify(result.user))
      navigate("/reciperevelation/")
    })
    .catch((err)=>{
      console.error(err)
    })
  }

  return (
    <form>
      <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      <button className="Email" onClick={handleLogin}>Masuk</button>
    </form>
  );
};


const Registerform = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('')

  const navigate = useNavigate();

  const handleregister = (e) => {
    e.preventDefault();

    if (!email || !password || !password2 ) {
      return alert('Silahkan lengkapi data');
    }

    if (password !== password2) {
      return alert('Password harus sama');
    }

    if (password.length < 8) {
      return alert('Password harus lebih dari 8 karakter');
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.info('Pendaftaran berhasil:', result.user);
        navigate("/reciperevelation/login")
        setSuccessMessage('Registrasi berhasil! Selamat datang, ' + user.email);
        setError(null);
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          setError('Email sudah terdaftar. Silahkan gunakan email lain.');
        } else {
          setError('Pendaftaran gagal. Error: ' + error.message);
        }
        setSuccessMessage('');
      });
  };

  return (
    <section>
      <form>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          id="password2"
          placeholder="Konfirmasi Password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
        {error && <div className="error">{error}</div>}
        <button className="Register" onClick={handleregister}>Daftar</button>
      </form>

      <form>
        {successMessage && (
        <FloatingMessage
          message={successMessage}
          duration={3000}
          onMessageClose={() => setSuccessMessage('')}
        />
        )}
      </form>
    </section>
  );
};


export { LoginForm, Registerform };


