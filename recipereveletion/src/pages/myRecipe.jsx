import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../utils/firebase'; // Pastikan Anda mengimpor firestore dari konfigurasi Firebase Anda
import Popup  from '../component/popupmr';

function formatTimestamp(timestamp) {
  const date = timestamp.toDate();
  return date.toDateString();
}

function RecipeList() {
  const [user, setUser] = useState(null);
  const [userRecipes, setUserRecipes] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);

        const fetchUserRecipes = async () => {
          const querySnapshot = await getDocs(
            collection(firestore, 'users', authUser.uid, 'resep')
          );
          const userRecipeList = [];
          querySnapshot.forEach((doc) => {
            userRecipeList.push(doc.data());
          });
          setUserRecipes(userRecipeList);
        };

        fetchUserRecipes();
      } else {
        setUser(null);
        setUserRecipes([]);
      }
    });
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <>
      <h1 style={{ margin: '0', marginBottom: '10px', textAlign: 'center', color: 'white' }}>my Recipe</h1>
      <div className="container-fluid" style={{ backgroundColor: '#002F35' }}>
        <div className="container text-dark" style={{ height: '100vh' }}>
          {user ? (
            userRecipes.length > 0 ? (
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {userRecipes.map((recipe, index) => (
                  <div className="col" key={index}>
                    <div className="card h-100 margin-top-100">
                      <div className="card-body">
                        <h5 className="card-title">{recipe.judul}</h5>
                        <p className="card-text">{truncateText(recipe.alatBahan, 100)}</p>
                        <button
                          className="btn btn-primary " style={{ backgroundColor: '#004A2F' }}
                          onClick={() => {
                            setSelectedRecipe(recipe);
                            setIsPopupOpen(true);
                          }}
                        >
                          Baca Selengkapnya
                        </button>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">
                          {formatTimestamp(recipe.timestamp)}
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className=" text-center text-light">Anda belum memiliki resep yang tersimpan.</p>
            )
          ) : (
            <p className="text-center text-light">
              Silakan login untuk melihat resep Anda.
            </p>
          )}
          {isPopupOpen && <Popup setIsOpenPopup={setIsPopupOpen} recipe={selectedRecipe} />}
        </div>
      </div>
    </>
  );
}

export default RecipeList;
