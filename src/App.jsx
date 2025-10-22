import { useState } from "react";
import mnw from "./assets/mnw_linkedin.png";

function App() {
  return (
    <>
      <main>
        <div className="profile-placeholder">
          <img src={mnw}></img>
          <div className="profile-name">M Nur Wicaksono</div>
          <div className="profile-location">Tangerang, Indonesia</div>
          <div className="profile-desc">
            "Front-end Developer, Full-stack Developer, AI Designer"
          </div>
        </div>
        <div className="button-placeholder">
          <a href="https://github.com/mnurw" target="_blank">
            <button>Github</button>
          </a>
          <a href="https://www.frontendmentor.io/profile/mnurw" target="_blank">
            <button>Frontend Mentor</button>
          </a>
          <a href="https://www.linkedin.com/in/mnurwicaksono/" target="_blank">
            <button>Linkedin</button>
          </a>
          <button>Twitter</button>
          <button>Instagram</button>
        </div>
      </main>
    </>
  );
}

export default App;
