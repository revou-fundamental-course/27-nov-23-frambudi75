function hitung() {
    // Ambil nilai dari input
    const sideA = parseFloat(document.getElementById('sideA').value);
    const sideB = parseFloat(document.getElementById('sideB').value);
    const sideC = parseFloat(document.getElementById('sideC').value);
  
    // Validasi input (semua sisi harus lebih dari 0)
    if (sideA > 0 && sideB > 0 && sideC > 0) {
      // Hitung luas menggunakan rumus Heron
      const s = (sideA + sideB + sideC) / 2;
      const luas = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));
  
      // Hitung keliling
      const keliling = sideA + sideB + sideC;
  
      // Tampilkan hasil
      const resultDiv = document.getElementById('result');
      resultDiv.innerHTML = `
        <h2>Hasil Perhitungan</h2>
        <p>Luas Segitiga: ${luas.toFixed(2)}</p>
        <p>Keliling Segitiga: ${keliling.toFixed(2)}</p>
      `;
    } else {
      alert('Sisi-sisi harus memiliki nilai yang valid (lebih dari 0).');
    }
  }
  