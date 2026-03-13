let produkToko = [
    {id: 1, nama: "Laptop", harga: 7000000, stok: 5},
    {id: 2, nama: "Mouse", harga: 200000, stok: 10},
    {id: 3, nama: "Keyboard", harga: 350000, stok: 7}
];

// Menampilkan produk
function tampilkanProduk(){
    let tabel = document.getElementById("tabelProduk");
    tabel.innerHTML = "";

    produkToko.forEach(produk => {
        tabel.innerHTML += `
        <tr>
            <td>${produk.id}</td>
            <td>${produk.nama}</td>
            <td>${produk.harga}</td>
            <td>${produk.stok}</td>
            <td>
                <button onclick="hapusProduk(${produk.id})">Hapus</button>
            </td>
        </tr>
        `;
    });
}

// Menambahkan produk Baru
function tambahProduk(){
    let nama = document.getElementById("nama").value;
    let harga = document.getElementById("harga").value;
    let stok = document.getElementById("stok").value;

    let idBaru = produkToko.length + 1;

    let produkBaru = {
        id: idBaru,
        nama: nama,
        harga: harga,
        stok: stok
    };

    produkToko.push(produkBaru);

    tampilkanProduk();
}

// Menghapus produk
function hapusProduk(id){
    produkToko = produkToko.filter(produk => produk.id !== id);
    tampilkanProduk();
}
tampilkanProduk();