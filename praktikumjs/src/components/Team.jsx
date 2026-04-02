import "./Team.css";

import team1 from "../assets/tim1 (1).jpg";
import team2 from "../assets/tim1 (2).jpg";
import team3 from "../assets/tim1 (3).jpg";
import team4 from "../assets/tim1 (4).jpg";
import team5 from "../assets/tim1 (5).jpg";
import team6 from "../assets/tim1 (6).jpg";
import team7 from "../assets/tim1 (7).jpg";
import team8 from "../assets/tim1 (8).jpg";

function Team() {
  const members = [
    {
      name: "Han Sooyoung",
      role: "Frontend Developer",
      image: team1,
    },
    {
      name: "Yoo Jounghyuk",
      role: "Backend Developer",
      image: team2,
    },
    {
      name: "Secretive Plotter",
      role: "UI/UX Designer",
      image: team3,
    },
    {
      name: "Uriel",
      role: "Fullstack Developer",
      image: team4,
    },
    {
      name: "Kim Dokja",
      role: "Project Manager",
      image: team5,
    },
    {
      name: "Yoo Sangah",
      role: "Mobile Developer",
      image: team6,
    },
    {
      name: "Lee Jihye",
      role: "Mobile Developer",
      image: team7,
    },
    {
      name: "Kyrgios",
      role: "Scrum Master",
      image: team8,
    },
  ];

  return (
    <div className="team-container">

      <h2 className="team-title">OUR MEMBER</h2>
      <p className="team-desc">
        Kami adalah tim yang terdiri dari individu kreatif dan berdedikasi dalam mengembangkan solusi digital yang modern dan inovatif. Dengan kolaborasi antara frontend, backend, dan desain, kami berusaha menciptakan pengalaman pengguna yang menarik, responsif, dan fungsional di setiap project yang kami kerjakan. ✨
      </p>

      <div className="team-grid">
        {members.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Team;