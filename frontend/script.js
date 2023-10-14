// Fungsi untuk merender kartu dengan teks
function renderCard() {
    // Buat elemen div untuk kartu
    var card = document.createElement("div");
    card.className = "card";

    // Buat elemen teks di dalam kartu
    var textElement = document.createElement("p");
    textElement.textContent = "Ini adalah teks di dalam kartu.";

    // Masukkan elemen teks ke dalam kartu
    card.appendChild(textElement);

    // Masukkan kartu ke dalam container
    var cardContainer = document.getElementById("cardContainer");
    cardContainer.appendChild(card);

    // Hapus tombol "Generate" setelah ditekan sekali
    var generateButton = document.getElementById("generateButton");
    generateButton.style.display = "none"; // Menghilangkan tombol
}