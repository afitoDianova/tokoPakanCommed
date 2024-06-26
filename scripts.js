document.addEventListener('DOMContentLoaded', function() {
    let dataBarang = [];
    const savedData = JSON.parse(localStorage.getItem('savedData')) || [];

    const kasirBody = document.getElementById('kasirBody');
    const savedDataBody = document.getElementById('savedDataBody');
    const totalHargaPabrikCell = document.getElementById('totalHargaPabrik');
    const totalHargaJualCell = document.getElementById('totalHargaJual');
    const totalSemuaCell = document.getElementById('totalSemua');

    const inputSection = document.getElementById('inputSection');
    const savedDataSection = document.getElementById('savedDataSection');

    function renderTable() {
        kasirBody.innerHTML = '';
        let totalHargaPabrik = 0;
        let totalHargaJual = 0;
        let totalSemua = 0;

        dataBarang.forEach((item, index) => {
            const row = document.createElement('tr');

            const cellNomor = document.createElement('td');
            cellNomor.textContent = index + 1;
            row.appendChild(cellNomor);

            const cellTanggal = document.createElement('td');
            cellTanggal.textContent = item.tanggal;
            row.appendChild(cellTanggal);

            const cellNama = document.createElement('td');
            cellNama.textContent = item.nama;
            row.appendChild(cellNama);

            const cellSatuanBarang = document.createElement('td');
            cellSatuanBarang.textContent = item.satuanBarang;
            row.appendChild(cellSatuanBarang);

            const cellJumlahBarang = document.createElement('td');
            cellJumlahBarang.textContent = item.jumlahBarang;
            row.appendChild(cellJumlahBarang);

            const cellHargaPabrik = document.createElement('td');
            cellHargaPabrik.textContent = item.hargaPabrik;
            row.appendChild(cellHargaPabrik);
            totalHargaPabrik += item.hargaPabrik * item.jumlahBarang;

            const cellHargaJual = document.createElement('td');
            cellHargaJual.textContent = item.hargaJual;
            row.appendChild(cellHargaJual);
            totalHargaJual += item.hargaJual * item.jumlahBarang;

            const cellTotal = document.createElement('td');
            cellTotal.textContent = item.hargaJual * item.jumlahBarang;
            row.appendChild(cellTotal);
            totalSemua += item.hargaJual * item.jumlahBarang;

            kasirBody.appendChild(row);
        });

        totalHargaPabrikCell.textContent = totalHargaPabrik;
        totalHargaJualCell.textContent = totalHargaJual;
        totalSemuaCell.textContent = totalSemua;
    }

    function renderSavedData() {
        savedDataBody.innerHTML = '';

        savedData.forEach((item, index) => {
            const row = document.createElement('tr');

            const cellNomor = document.createElement('td');
            cellNomor.textContent = index + 1;
            row.appendChild(cellNomor);

            const cellTanggal = document.createElement('td');
            cellTanggal.textContent = item.tanggal;
            row.appendChild(cellTanggal);

            const cellNama = document.createElement('td');
            cellNama.textContent = item.nama;
            row.appendChild(cellNama);

            const cellSatuanBarang = document.createElement('td');
            cellSatuanBarang.textContent = item.satuanBarang;
            row.appendChild(cellSatuanBarang);

            const cellJumlahBarang = document.createElement('td');
            cellJumlahBarang.textContent = item.jumlahBarang;
            row.appendChild(cellJumlahBarang);

            const cellHargaPabrik = document.createElement('td');
            cellHargaPabrik.textContent = item.hargaPabrik;
            row.appendChild(cellHargaPabrik);

            const cellHargaJual = document.createElement('td');
            cellHargaJual.textContent = item.hargaJual;
            row.appendChild(cellHargaJual);

            const cellTotal = document.createElement('td');
            cellTotal.textContent = item.hargaJual * item.jumlahBarang;
            row.appendChild(cellTotal);

            savedDataBody.appendChild(row);
        });
    }

    document.getElementById('addItemForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const tanggal = document.getElementById('tanggal').value;
        const namaBarang = document.getElementById('namaBarang').value;
        const satuanBarang = document.getElementById('satuanBarang').value;
        const jumlahBarang = parseInt(document.getElementById('jumlahBarang').value);
        const hargaPabrik = parseFloat(document.getElementById('hargaPabrik').value);
        const hargaJual = parseFloat(document.getElementById('hargaJual').value);

        const newItem = {
            tanggal: tanggal,
            nama: namaBarang,
            satuanBarang: satuanBarang,
            jumlahBarang: jumlahBarang,
            hargaPabrik: hargaPabrik,
            hargaJual: hargaJual
        };

        dataBarang.push(newItem);
        renderTable();

        document.getElementById('addItemForm').reset();
    });

    document.getElementById('saveButton').addEventListener('click', function() {
        savedData.push(...dataBarang);
        localStorage.setItem('savedData', JSON.stringify(savedData));
        dataBarang = [];
        renderTable();
        renderSavedData();
        alert('Data berhasil disimpan dan tabel direset!');
    });

    document.getElementById('showDataButton').addEventListener('click', function() {
        inputSection.style.display = 'none';
        savedDataSection.style.display = 'block';
        renderSavedData();
    });

    document.getElementById('backButton').addEventListener('click', function() {
        savedDataSection.style.display = 'none';
        inputSection.style.display = 'block';
    });

    renderTable();
});
