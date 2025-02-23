import GridContainer from "./../../helpers/GridContainer";
import TobiasPhoto from "./../../assets/tobias-photo.jpg";
import TobiasPhotoBike from "./../../assets/tobias-photo-bike.jpg";

function AboutMe() {
  return (
    <GridContainer className="about-me with-header white-background">
      <h1 className="about-me__header">
        <span>Über mich</span>
      </h1>
      <div className="about-me__content">
        <div className="about-me__content__image-left">
          <img src={TobiasPhoto} alt="Tobias Pfander" className="image" />
          <div>
            <p>
              Ich bin Tobias (Benjamin) Pfander. Meine schwäbische Heimat liegt
              mir am Herzen und ich verbinde Tradition mit einem pragmatischen
              Einsatz für unsere Umwelt: In meinem Garten und auf den
              familieneigenen Streuobstwiesen pflege ich unsere wertvolle
              Kulturlandschaft mit Leidenschaft.
            </p>
            <p>
              Gute Gesellschaft, Freundschaften und persönliche Kontakte sind
              für mich von großer Bedeutung. Ich genieße es, in geselliger Runde
              zu lachen, gutes Essen zu teilen und bei einem schönen Glas Wein
              zusammenzukommen.
            </p>
            <p>
              Als neugieriger und reisefreudiger Mensch interessiere ich mich
              für andere Kulturen und Regionen. Musik ist für mich wichtig. Das
              Gäu und der Kreis Böblingen sind meine Heimat. Hier bin ich fest
              verwurzelt. Sie verbindet und inspiriert – genau wie der Austausch
              mit Menschen.
            </p>
            <p>
              Lernen Sie mich persönlich kennen – ich freue mich darauf, mit
              Ihnen ins Gespräch zu kommen!
            </p>
          </div>
        </div>
        <div className="about-me__content__image-right">
          <ul>
            <li>
              <span>1977</span>
              <span>Geboren im Kreiskrankenhaus Böblingen</span>
            </li>
            <li>
              <span>1984 – 1997</span>
              <span>
                Grundschule Oberjesingen, Jerg-Ratgeb-Realschule Herrenberg,
                Wirtschaftsgymnasium Böblingen
              </span>
            </li>
            <li>
              <span>1997 – 1998</span>
              <span>Zivildienst Gemeindeverwaltung Gärtringen</span>
            </li>
            <li>
              <span>1998 – 2001</span>
              <span>
                Studium der Betriebswirtschaftslehre, Berufsakademie Stuttgart
              </span>
            </li>
            <li>
              <span>2001 – heute</span>
              <span>
                Verkaufsgebietsleiter und Exportleiter im Mittelstand unter
                anderem ROLF BENZ, Walter Knoll, RENZ und AERO-LIFT
              </span>
            </li>
            <li>
              <span>seit 2007</span>
              <span>
                Glückliche Beziehung mit meinem Partner Dirk, der mein Engagement
                unterstützt
              </span>
            </li>
            <li>
              <span>2018</span>
              <span>Hausbau in meiner Heimat Oberjesingen</span>
            </li>
            <li>
              <span>seit 2019</span>
              <span>Ehrenamtlicher Ortsvorsteher von Oberjesingen </span>
            </li>
          </ul>
          <img src={TobiasPhotoBike} alt="Tobias Pfander auf dem Fahrrad" />
        </div>
      </div>
    </GridContainer>
  );
}

export default AboutMe;
