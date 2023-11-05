import React from 'react';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import './Bahan.css';

const Popup = ({ setIsOpenPopup, recipe }) => {
  return (
    <div
      onClick={() => setIsOpenPopup(false)}
      className="popup-container"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="popup-content"
      >
        <div className="popup-header">
          <h1>{recipe.judul}</h1>
          <div
            onClick={() => setIsOpenPopup(false)}
            className="popup-close"
          >
            <AiOutlineCloseSquare />
          </div>
        </div>
        <div className="popup-body">
          <p>{recipe.alatBahan}</p>
          <p>{recipe.caraMasak2}</p>
        </div>
        <footer className="popup-footer">
          {recipe.timestamp && (
            <small className="text-muted">
              Tanggal: {recipe.timestamp.toDate().toDateString()}
            </small>
          )}
        </footer>
      </div>
    </div>
  );
};

export default Popup;
