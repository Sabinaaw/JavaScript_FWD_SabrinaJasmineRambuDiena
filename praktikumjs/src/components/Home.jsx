import "./Home.css";
import profileImg from "../assets/jung.jpg";

function Home() {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* LEFT */}
        <div className="hero-left">
          <span className="badge">
            🚀 Future Fullstack Developer
          </span>

          <h1>
            Hello 👋 <br />
            I'm <span className="gradient-text">Sabrina Jasmine Rambu Diena</span>
          </h1>

          <h2 className="subtitle">
            Crafting modern & interactive web experiences
          </h2>

          <p>
            Saya suka membangun website yang clean, modern, dan interaktif.
            Fokus saya saat ini adalah menguasai React dan backend development
            untuk menjadi fullstack developer yang solid.
          </p>

          <div className="hero-buttons">
            <a href="https://github.com/Sabinaaw" className="btn-primary">
              Github
            </a>
            <a href="https://www.instagram.com/sabinaaw__/" className="btn-outline">
              Instagram
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <div className="profile-card">
            <img src={profileImg} alt="profile" />

            <div className="floating-badge">
               📊 Data Enthusiast
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;