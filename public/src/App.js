import { useState } from "react";
import "./style.css";
import profile from "./anu.jpg";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      <nav>
        <div className="logo">TECH-G</div>

        {/* Mobile Menu Button */}
        <div
          className="menu-btn"
          onClick={() => setShowMenu(!showMenu)}
        >
          ☰
        </div>

        {/* Menu */}
        <div className={`menu ${showMenu ? "show" : ""}`}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Features</a>
          <a href="#">Blog</a>
          <a href="#">Info</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className={`container ${showMenu ? "fade" : ""}`}>
        <div className="left">
          <h1>Welcome to My Website</h1>
          <p>
            My name is Anupriya Jha. I am from Bihar.
            I have recently started my journey in full stack web development.
            I have a good understanding of HTML, CSS, JavaScript, and React.js.
            Currently, I am learning backend technologies and looking for an opportunity where I can learn, grow, and contribute to the team.
          </p>

          <button>
            <a href="https://ajanu33github.github.io/Portfolio/" className="btn">Read more</a>
          </button>
        </div>

        <div className="right">
          <img src={profile} alt="Anupriya" />
        </div>
      </div>
    </header>
  );
}

export default App;
