import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function CookingDictionary() {
  return (
    <div className="container text-center text-light" style={{ height: '100vh' }}>
      <div className="row justify-content-center">
        <div className="col-10">
          <h6>
            Buat resepmu sendiri dan temukan beragam ide resep makanan yang tak terbatas di sini.
            <p>Jelajahi dunia kuliner tanpa batas, mengeksplorasi rasa baru, dan menciptakan hidangan lezat yang tak terlupakan.</p>
          </h6>
        </div>
      </div>
      <button type="button" className="btn btn-outline-primary">Primary</button>
      <button type="button" className="btn btn-outline-secondary">Secondary</button>
      <button type="button" className="btn btn-outline-success">Success</button>
      <button type="button" className="btn btn-outline-danger">Danger</button>
      <button type="button" className="btn btn-outline-warning">Warning</button>
      <button type="button" className="btn btn-outline-info">Info</button>
      <button type="button" className="btn btn-outline-light">Light</button>
      <button type="button" className="btn btn-outline-dark">Dark</button>
    </div>
  );
}

export default CookingDictionary;
