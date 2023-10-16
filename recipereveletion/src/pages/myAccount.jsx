import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom"

function MyAccount() {

  const [user, setUser] = useState();
  const navigate = useNavigate()

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')))
  }, [])

  const handleLogout = () => {
    const auth = getAuth()
    signOut(auth)
      .then(result => {
        localStorage.clear()
        navigate("/") 
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <div className="container" style={{ height: '100vh' }}>
      {/* Content here */}
      <div className="container text-dark">
        <div className="row justify-content-center">
          <div className="card w-100">
            <div className="card-body">
              <h5 className="card-title">My Account</h5>
              {user ? ( // Tampilkan jika pengguna sudah login
                <div>
                  <div className="form-floating mb-3">
                    <img src={user.photoURL} alt="" />
                  </div>
                  <div className="form-floating mb-3">
                    <h3>{user.email}</h3>
                  </div>
                  <button className="Logout" type='button' onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              ) : ( // Tampilkan jika pengguna belum login
                <div>
                  <p> Anda belum login. </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;


