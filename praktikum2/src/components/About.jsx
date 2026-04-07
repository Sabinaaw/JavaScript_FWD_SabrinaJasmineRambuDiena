function About() {
  return (
    <div className="about-container">

      <h2 className="about-title">About WeeBookstore</h2>

      <p className="about-desc">
        WeeBookstore adalah platform sederhana berbasis web yang menampilkan 
        berbagai koleksi buku dengan tampilan yang modern dan interaktif. 
        Website ini dibuat menggunakan React JS dengan konsep komponen 
        untuk mempermudah pengelolaan data dan tampilan.
      </p>

      <div className="about-wrapper">

        {/* LEFT */}
        <div className="about-card">
          <h3>📚 Tentang Website</h3>
          <p>
            WeeBookstore dirancang untuk memberikan pengalaman menjelajah buku 
            yang menarik dengan tampilan card dan gambar yang interaktif. 
            Pengguna juga dapat menambahkan buku baru secara langsung melalui website.
          </p>
        </div>

        {/* RIGHT */}
        <div className="about-card">
          <h3>⚙️ Fitur Utama</h3>
          <ul>
            <li>Menampilkan daftar buku</li>
            <li>Menambahkan buku baru</li>
            <li>Desain responsif dan interaktif</li>
            <li>Struktur berbasis komponen React</li>
          </ul>
        </div>

      </div>

    </div>
  );
}

export default About;