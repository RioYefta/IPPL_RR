// Ambil referensi ke elemen tempat daftar bahan makanan akan ditampilkan
const bahanMakananList = document.getElementById("bahanMakananList");

// Ambil data bahan makanan dari file JSON
fetch("bahan_makanan.json")
  .then(response => response.json())
  .then(data => {
    // Loop melalui data bahan makanan dan buat tampilan modal untuk setiap bahan makanan
    data.forEach(bahanMakanan => {
      const bahanMakananCard = `
        <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#${bahanMakanan.nama.replace(/\s/g, '')}">
          ${bahanMakanan.nama}
        </button>
        <div class="modal fade text-dark" id="${bahanMakanan.nama.replace(/\s/g, '')}" tabindex="-1" aria-labelledby="${bahanMakanan.nama.replace(/\s/g, '')}Label" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="${bahanMakanan.nama.replace(/\s/g, '')}Label">${bahanMakanan.nama}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ${bahanMakanan.penjelasan}
              </div>
            </div>
          </div>
        </div>
      `;

      // Tambahkan card bahan makanan ke dalam elemen daftar bahan makanan
      bahanMakananList.innerHTML += bahanMakananCard;
    });
  })
  .catch(error => console.error("Error fetching data: " + error));
