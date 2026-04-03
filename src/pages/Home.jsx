import "./Home.css";
import profileImg from "../assets/kny.jpg";

function Home() {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* LEFT */}
        <div className="hero-left">
          <span className="badge">🌙 A Dark Journey Begins</span>

          <h1>
            The night changed everything...
            <span className="gradient-text">鬼狩りの物語 </span>
          </h1>

          <h2 className="subtitle">
            A story carved in blood, fire, and destiny
          </h2>

          <p>
            Cerita ini mengikuti perjalanan Tanjiro Kamado, yang hidupnya berubah drastis setelah keluarganya dibantai oleh iblis saat ia tidak di rumah. Hanya adiknya, Nezuko Kamado, yang selamat namun ia telah berubah menjadi iblis. 
            Diliputi duka dan amarah, Tanjiro bertekad membalas dendam sekaligus mencari cara untuk mengembalikan Nezuko menjadi manusia. Ia kemudian bergabung dengan Korps Pembasmi Iblis, sebuah pasukan yang bertugas membasmi iblis dan mengalahkan pemimpin mereka, Muzan Kibutsuji.
            Dalam perjalanannya, Tanjiro menghadapi berbagai pertarungan berbahaya, sambil perlahan memahami takdir keluarganya dan perannya sebagai salah satu harapan untuk mengalahkan Muzan.
          </p>

          <div className="hero-buttons">
            <a href="https://www.netflix.com/id-en/title/81410810" className="btn-primary">Start Journey</a>
            <a href="https://www.netflix.com/id-en/title/81410810" className="btn-outline">View World</a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <div className="profile-card">
            <img src={profileImg} alt="anime" />

            <div className="floating-badge">
              🔥 Demon Slayer
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;