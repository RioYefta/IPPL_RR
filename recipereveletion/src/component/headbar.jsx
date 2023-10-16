import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation, useNavigate } from 'react-router-dom'; 
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Header() {
  const [user, setUser] = useState(null); 
  const location = useLocation();
  const navigate = useNavigate()

  const hideButtonsOnPaths = ['/login', '/register'];

  const shouldHideButtons = hideButtonsOnPaths.includes(location.pathname);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleProfileClick = () => {
    navigate("/myAccount");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark text-light" style={{ backgroundColor: '#004A2F' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="src/assets/rr_logo.png" alt="Logo" width="100" height="50" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Generator</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Other
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/myRecipe">My Recipe </a></li>
                <li><a className="dropdown-item" href="/cookingDictionary">Cooking Dictionary</a></li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li><a className="dropdown-item" href="/myAccount">My Account</a></li>
              </ul>
            </li>
          </ul>
          {user ? (
            <div className="d-flex align-items-center" onClick={handleProfileClick} style={{ cursor: 'pointer' }}>
              <img src={user.photoURL} alt="Profile" className="rounded-circle me-2" style={{ width: '30px', height: '30px' }} />
              <span className="text-light me-2">{user.displayName}</span>
            </div>
          ) : (
            !shouldHideButtons && (
              <div className="d-flex">
                <Link to="/login" className="btn btn-outline-light me-2">Masuk</Link>
                <Link to="/register" className="btn btn-light">Daftar</Link>
              </div>
            )
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;







