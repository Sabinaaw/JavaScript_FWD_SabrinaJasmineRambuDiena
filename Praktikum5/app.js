// ================= IMPORT MODULE =================
const readline = require("readline");

// ================= DATA AWAL (MINIMAL 5) =================
let produkList = [
  { id: 1, nama: "Laptop", harga: 12000000 },
  { id: 2, nama: "Smartphone", harga: 5000000 },
  { id: 3, nama: "Tablet", harga: 7000000 },
  { id: 4, nama: "Headphone", harga: 1500000 },
  { id: 5, nama: "Keyboard", harga: 800000 }
];

// ================= FUNCTION =================

// Tambah Produk (Spread Operator)
function tambahProduk(id, nama, harga) {
  const produkBaru = { id, nama, harga };
  produkList = [...produkList, produkBaru]; // spread operator
  console.log("\n Produk berhasil ditambahkan!");
}

// Hapus Produk (Rest + Destructuring)
function hapusProduk(id) {
  const produkBaru = produkList.filter(({ id: produkId, ...rest }) => {
    return produkId !== id; // destructuring + rest
  });

  if (produkBaru.length !== produkList.length) {
    produkList = produkBaru;
    console.log("\n Produk berhasil dihapus!");
  } else {
    console.log("\n Produk tidak ditemukan!");
  }
}

// Tampilkan Produk (Destructuring)
function tampilkanProduk() {
  console.log("\n DAFTAR PRODUK:");
  console.log("====================================");

  produkList.forEach(({ id, nama, harga }) => {
    console.log(`ID: ${id}`);
    console.log(`Nama: ${nama}`);
    console.log(`Harga: Rp${harga}`);
    console.log("------------------------------------");
  });
}

// ================= EVENT LISTENER (CLI) =================
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// object event handler
const eventHandler = {
  tampilkan: tampilkanProduk,
  tambah: tambahProduk,
  hapus: hapusProduk
};

// ================= MENU =================
function menu() {
  console.log(`
========= MENU =========
1. Tampilkan Produk
2. Tambah Produk
3. Hapus Produk
4. Keluar
========================
`);

  rl.question("Pilih menu: ", (pilihan) => {

    switch (pilihan) {
      case "1":
        eventHandler.tampilkan();
        menu();
        break;

      case "2":
        console.log("\n=== Tambah Produk ===");

        rl.question("Masukkan ID: ", (id) => {
          rl.question("Masukkan Nama: ", (nama) => {
            rl.question("Masukkan Harga: ", (harga) => {

              eventHandler.tambah(Number(id), nama, Number(harga));
              menu();

            });
          });
        });
        break;

      case "3":
        console.log("\n=== Hapus Produk ===");

        rl.question("Masukkan ID produk yang ingin dihapus: ", (id) => {

          eventHandler.hapus(Number(id));
          menu();

        });
        break;

      case "4":
        console.log("\n Terima kasih! Program selesai.");
        rl.close();
        break;

      default:
        console.log("\n Pilihan tidak valid!");
        menu();
    }

  });
}

// ================= JALANKAN PROGRAM =================
console.log("Aplikasi Manajemen Produk");
menu();