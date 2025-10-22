import { useState } from "react";
import mnw from "./assets/mnw_linkedin.png";

function App() {
  return (
    <>
      <main>
        <div className="profile-placeholder">
          <img src={mnw} alt="M Nur Wicaksono"></img>
          <div className="profile-name">M Nur Wicaksono</div>
          <div className="profile-location">Tangerang, Indonesia</div>
          <div className="profile-desc">
            "Front-end Developer, Full-stack Developer, AI Designer"
          </div>
        </div>
        <div className="button-placeholder">
          <div className="button-link">
            <a href="https://github.com/mnurw" target="_blank">
              <div className="button-div">Github</div>
            </a>
          </div>
          <div className="button-link">
            <a
              href="https://www.frontendmentor.io/profile/mnurw"
              target="_blank"
            >
              <div className="button-div">Frontend Mentor</div>
            </a>
          </div>
          <div className="button-link">
            <a
              href="https://www.linkedin.com/in/mnurwicaksono/"
              target="_blank"
            >
              <div className="button-div">Linkedin</div>
            </a>
          </div>
          <div className="button-link">
            <div className="button-div">Twitter</div>
          </div>
          <div className="button-link">
            <div className="button-div">Instagram</div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
