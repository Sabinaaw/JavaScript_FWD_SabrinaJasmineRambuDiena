import "./Team.css";

import team1 from "../assets/kasian (1).jpg";
import team2 from "../assets/kasian (2).jpg";
import team3 from "../assets/kasian (3).jpg";
import team4 from "../assets/kasian (4).jpg";
import team5 from "../assets/kasian (5).jpg";
import team6 from "../assets/kasian (6).jpg";
import team7 from "../assets/kasian (7).jpg";
import team8 from "../assets/kasian.jpg";

function Team() {
  const members = [
    { name: "Muichiro Tokito", role: "Hashira Kabut", image: team1 },
    { name: "Genya Shinazugawa", role: "Transformasi Iblis", image: team2 },
    { name: "Shinobu Kocho", role: "Hashira Serangga", image: team3 },
    { name: "Gyomei Himejima", role: "Hashira Batu", image: team4 },
    { name: "Mitsuri Kanroji", role: "Hashira Cinta", image: team5 },
    { name: "Obanai Iguro", role: "Hashira Ular", image: team6 },
    { name: "Rengoku Kyojuro", role: "Hashira Api", image: team7 },
    { name: "Kagaya Ubuyashiki", role: "Oyakata-sama", image: team8 },
  ];

  return (
    <div className="team-container">
      <h2 className="team-title">THE HUNTERS</h2>

      <p className="team-desc">
        They walk the path between darkness and destiny.
Bound by pain, driven by purpose, each of them carries a story written in blood and fire. 🔥
      </p>

      <div className="team-grid">
        {members.map((member, index) => (
          <div className="team-card" key={index}>
            
            <div className="card-image">
              <img src={member.image} alt={member.name} />

              {/* OVERLAY */}
              <div className="overlay">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;