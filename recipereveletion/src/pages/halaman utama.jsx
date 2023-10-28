import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Halaman.css';

export default function HalamanUtama() {
  const [sajian, setSajian] = useState('');
  const [khas, setKhas] = useState('');
  const [caraMasak, setCaraMasak] = useState('');
  const [bahan, setBahan] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [gptResponse, setGptResponse] = useState('');
  const [isCreatingRecipe, setIsCreatingRecipe] = useState(false);
  

  const callGPTAPI = async () => {
    setIsCreatingRecipe(true);

    try {
      const response = await fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer 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',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: `Buatkan satu resep makanan dengan sajian ${sajian}, dengan khas dari ${khas}, Cara Masak ${caraMasak}, menggunakan Bahan-bahan berikut ${bahan}. 
                    Pisahkan resep menjadi tiga paragraf yang berbeda tanpa menuliskan kata paragfar di depannya. 
                    Bagian paragraf awal adalah judul, Bagian paragraf kedua adalah alat dan bahan, dan Bagian paragraf ketiga adalah cara masaknya.`,
          max_tokens: 2000,
        }),
      });

      const data = await response.json();
      const responseText = data.choices[0].text;
      const [judul, alatBahan, caraMasak2, baru] = responseText.split('\n\n');

      setGptResponse({ judul, alatBahan, caraMasak2, baru });
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    } finally {
      setIsCreatingRecipe(false);
    }
  };

  const handleSubmit = () => {
    if (sajian && khas && caraMasak && bahan) {
      callGPTAPI();
    } else {
      alert('Mohon isi semua inputan terlebih dahulu.');
    }
  };

  const checkFormValidity = () => {
    if (sajian && khas && caraMasak && bahan) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: '#002F35' }}>
      <div className="container text-center text-light">
        <div className="row justify-content-center">
          <div className="col-10">
            <h6>
              Buat resepmu sendiri dan temukan beragam ide resep makanan yang tidak terbatas di sini.
              <p>Jelajahi dunia kuliner tanpa batas, mengeksplorasi rasa baru, dan menciptakan hidangan lezat yang tak terlupakan.</p>
            </h6>
          </div>
        </div>
      </div>
      <div className="formInput text-light" style={{ height: '100vh' }}>
        <div className="container text-center">
          <div className="row">
            <div className="col-4">
              <label htmlFor="sajianDataList" className="form-label">Sajian</label>
              <input
                className="form-control"
                list="datalistSajian"
                id="sajianDataList"
                placeholder="Isi jenis sajiannya"
                value={sajian}
                onChange={(e) => {
                  setSajian(e.target.value);
                  checkFormValidity();
                }}
              />
              <datalist id="datalistSajian">
                <option value="Hidangan Pembuka" />
                <option value="Hidangan Utama" />
                <option value="Hidangan Penutup" />
                <option value="Sarapan" />
                <option value="Kudapan" />
                <option value="Minuman" />
              </datalist>
            </div>
            <div className="col-4">
              <label htmlFor="khasDataList" className="form-label">Khas</label>
              <input
                className="form-control"
                list="datalistKhas"
                id="khasDataList"
                placeholder="Isi khas negara apa"
                value={khas}
                onChange={(e) => {
                  setKhas(e.target.value);
                  checkFormValidity();
                }}
              />
              <datalist id="datalistKhas">
                <option value="Nusantara" />
                <option value="Japanese" />
                <option value="Thailand" />
                <option value="Chinese" />
                <option value="Italia" />
              </datalist>
            </div>
            <div className="col-4">
              <label htmlFor="caraDataList" className="form-label">Cara Masak</label>
              <input
                className="form-control"
                list="datalistCara"
                id="caraDataList"
                placeholder="Isi cara masaknya"
                value={caraMasak}
                onChange={(e) => {
                  setCaraMasak(e.target.value);
                  checkFormValidity();
                }}
              />
              <datalist id="datalistCara">
                <option value="Panggang" />
                <option value="Rebus" />
                <option value="Goreng" />
                <option value="Tumis" />
                <option value="Kukus" />
                <option value="Cepat Saji" />
              </datalist>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Bahan-bahan</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="2"
                placeholder="Isi bahan-bahan yang akan digunakan"
                value={bahan}
                onChange={(e) => {
                  setBahan(e.target.value);
                  checkFormValidity();
                }}
              />
            </div>
          </div>
          <div className="justify-content-center">
            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={handleSubmit}
              disabled={!isFormValid}
            >
              Buat Resep
            </button>
          </div>
          {isCreatingRecipe && (
            <div className="creating-recipe">
              <p>Sedang Membuat Resep...</p>
              <div className="loader"></div>
            </div>
          )}
          {gptResponse && (
            <div className="result-box">
              <h2>Resep Anda</h2>
              <p>{gptResponse.judul}</p>
              <p> Nama Masakan: {gptResponse.alatBahan}</p>
              <p> {gptResponse.caraMasak2}</p>
              <p>{gptResponse.baru}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


