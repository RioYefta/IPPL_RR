import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

function RecipeList() {
  return (
    <div className="container-fluid" style={{ backgroundColor: '#002F35' }}>
      <div className="container text-dark" style={{ height: '100vh' }}>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Resep Keren</h5>
                <p className="card-text">Isi Resep</p>
                <a href="#" className="btn btn-primary">Baca Selengkapnya</a>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Resep Keren</h5>
                <p className="card-text">Isi Resep</p>
                <a href="#" className="btn btn-primary">Baca Selengkapnya</a>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Resep Keren</h5>
                <p className="card-text">Isi Resep</p>
                <a href="#" className="btn btn-primary">Baca Selengkapnya</a>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeList;
