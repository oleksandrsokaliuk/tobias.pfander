import { Link } from "react-router-dom";
import BackNavigation from "./../../assets/back-navigation.svg";


function Impressum() {
  return (
    <main className="impressum-page grid">
      <div className="impressum-page__back">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z"/></svg>
      <Link to="/">Zurück zur Hauptseite</Link>
      </div>
      <div className="impressum-page__info">
      <h1>Tobias Pfander</h1>
      <span>Murrstraße 4, 71083 Herrenberg</span>
      <span>0176 616 32 717</span>
      <span>kontakt@tobiaspfander.de</span>
      </div>
    </main>
  );
}

export default Impressum;
