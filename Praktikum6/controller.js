// controller

import data from "./app.js";

// Lihat Data
function lihatData() {
    console.log("\n DAFTAR DATA");

    data.map((item, index) => {
        console.log(`
            Data ke-${index + 1}
            Nama   : ${item.nama}
            Umur   : ${item.umur}
            Alamat : ${item.alamat}
            Email  : ${item.email}
            ---------------------------`);
    });
}

// Tambah Data
function tambahData() {
  data.push(
    { nama: "Kevin", umur: 21, alamat: "Bekasi", email: "kevin@gmail.com" },
    { nama: "Lina", umur: 23, alamat: "Tangerang", email: "lina@gmail.com" }
  );

  console.log("\n Berhasil menambahkan 2 data baru!");
}

// Hapus Data
function hapusData(nama) {
  const index = data.findIndex((item) => item.nama === nama);

  if (index !== -1) {
    data.splice(index, 1);
    console.log(`\n Data dengan nama ${nama} berhasil dihapus!`);
  } else {
    console.log("\n Data tidak ditemukan!");
  }
}

// Testing
lihatData();       
tambahData();      
lihatData();       
hapusData("Andi");  
lihatData();        