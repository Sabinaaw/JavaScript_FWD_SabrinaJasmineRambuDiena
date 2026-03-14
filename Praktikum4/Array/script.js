const prompt = require("prompt-sync")();

// class pelanggan
class Pelanggan {
    constructor(nama, nomorTelepon, kendaraanDisewa){
        this.nama = nama
        this.nomorTelepon = nomorTelepon
        this.kendaraanDisewa = kendaraanDisewa
    }

    catatTransaksi(){
        return `${this.nama} menyewa ${this.kendaraanDisewa}`
    }
}

// data kendaraan
let kendaraan = [
    {id:1, nama:"Toyota Avanza", harga:300000},
    {id:2, nama:"Daihatsu Xenia", harga:250000},
    {id:3, nama:"Toyota Innova", harga:500000},
    {id:4, nama:"Suzuki Ertiga", harga:450000},
    {id:5, nama:"Toyota Alphard", harga:950000}
]

// array pelanggan
let daftarPelanggan = []

let jalan = true

while(jalan){

    console.log("\n===== SISTEM TRANSPORTASI =====")
    console.log("1. Lihat Daftar Kendaraan")
    console.log("2. Pesan Kendaraan")
    console.log("3. Daftar Pelanggan")
    console.log("4. Keluar")

    let menu = prompt("Pilih menu: ")

    // menu 1
    if(menu == 1){

        console.log("\n==== DAFTAR KENDARAAN ====")
        console.log("ID | Nama Kendaraan | Harga Sewa")

        for(let i = 0; i < kendaraan.length; i++){
            console.log(
                kendaraan[i].id + " | " +
                kendaraan[i].nama + " | Rp" +
                kendaraan[i].harga
            )
        }

    }

    // menu 2
    else if(menu == 2){

        let nama = prompt("Masukkan Nama Pelanggan: ")
        let telepon = prompt("Masukkan Nomor Telepon: ")
        let pilih = prompt("Pilih ID Kendaraan: ")

        let kendaraanDipilih = kendaraan.find(k => k.id == pilih)

        if(kendaraanDipilih){

            let pelangganBaru = new Pelanggan(
                nama,
                telepon,
                kendaraanDipilih.nama
            )

            daftarPelanggan.push(pelangganBaru)

            console.log("Transaksi berhasil!")
            console.log(pelangganBaru.catatTransaksi())

        } else {
            console.log("Kendaraan tidak ditemukan")
        }

    }

    // menu 3
    else if(menu == 3){

        console.log("\n==== DAFTAR PELANGGAN MENYEWA ====")

        for(let i = 0; i < daftarPelanggan.length; i++){

            console.log(
                (i+1) + ". " +
                daftarPelanggan[i].nama + " | " +
                daftarPelanggan[i].nomorTelepon + " | " +
                daftarPelanggan[i].kendaraanDisewa
            )

        }

    }

    // menu 4
    else if(menu == 4){

        console.log("Program selesai.")
        jalan = false

    }

}