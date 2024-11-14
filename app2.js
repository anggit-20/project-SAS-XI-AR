const daftarKelas = [
    'XI RPL 1',
    'XI RPL 2'
]

let daftarSiswaRPL1 = [
    "237627_Aiswatun Chasanah", 
    "237629_Aldyaz Budi",
    "237630_Alfiah Nur Aini",
    "237631_Alzhar Chandraaditya",
    "237632_Anggita Dewi",
    "237633_Anggreini Hidayatul",
    "237634_Ani Ghoniyyah",
    "237635_Apsha Arvianah",
    "237636_Aryasatya Aditya"
]

let daftarSiswaRPL2 = [
    "Ade Ikhsan",
    "Agonia Senja",
    "Ahmad Zaenal", 
    "Amelda Ayu",
    "Amelia Asyanova",
    "Andika Satria",
    "Anin Dyta ",
    "Aulia Diarnala"
]

const pilihanAbsen = [
    'Hadir',
    'Izin',
    'Sakit'
]

const selectAbsen = 
    document.getElementById('selectAbsen');
    const inputAbsen = document.getElementById('inputAbsen');

    // Isi
    attendanceOptions.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option;
      optionElement.text = option;
      attendanceSelect.appendChild(optionElement);
    });
    
    // Event listener untuk perubahan attendance
    attendanceSelect.addEventListener('change', () => {
      studentData.attendance = attendanceSelect.value;
      // Tampilkan atau sembunyikan input file
      evidenceInput.style.display = studentData.attendance === 'Izin' ? 'block' : 'none';
    });
    
    // Event listener untuk perubahan file bukti
    evidenceInput.addEventListener('change', () => {
      const file = evidenceInput.files[0];
      if (file) {
        studentData.evidence = file;
        console.log('File bukti izin:', file);
      }
    });
    
    // Simpan data absen (contoh)
    function saveAttendance() {
      // ... (Kode untuk menyimpan data ke database atau file)
      console.log('Data absen berhasil disimpan:', studentData);
    }