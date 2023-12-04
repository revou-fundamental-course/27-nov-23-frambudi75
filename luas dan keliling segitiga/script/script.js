// script.js

function hitung() {
  const sideA = parseFloat(document.getElementById('sideA').value);
  const sideB = parseFloat(document.getElementById('sideB').value);
  const sideC = parseFloat(document.getElementById('sideC').value);

  if (sideA > 0 && sideB > 0 && sideC > 0) {
    const keliling = sideA + sideB + sideC;
    const s = keliling / 2; // Setengah keliling untuk rumus luas

    // Menggunakan rumus Heron untuk menghitung luas segitiga
    const luas = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
      <p>Keliling Segitiga: ${keliling.toFixed(2)}</p>
      <p>Luas Segitiga: ${luas.toFixed(2)}</p>
    `;
  } else {
    alert('Sisi-sisi harus memiliki nilai yang valid (lebih dari 0).');
  }
}
