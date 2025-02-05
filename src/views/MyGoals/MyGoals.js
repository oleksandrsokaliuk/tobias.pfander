import GridContainer from "./../../helpers/GridContainer";
import GoalsImage from "./../../assets/goals.jpg";

function MyGoals() {
  return (
    <GridContainer className="my-goals with-header white-background" id="goals">
      <h1 className="my-goals__header">
        <span>Politische Ziele für unser Land</span>
      </h1>
      <div className="my-goals__content">
        <ul className="my-goals__content__list">
          <li>
            Die langfristige und nachhaltige Sicherung unserer{" "}
            <strong>Energieversorgung</strong>
          </li>
          <li>
            Unsere Wirtschaft, Vereine und Gesellschaft von übergriffiger
            <strong> Bürokratie</strong> befreien
          </li>
          <li>
            <strong>Bildung</strong> als Markenzeichen von Baden-Württemberg
            etablieren
          </li>
          <li>
            Menschen in unserem Land durch zukunftsfähige Arbeitsplätze in
            <strong> Arbeit</strong> halten
          </li>
          <li>
            <strong>Leistungsbereitschaft</strong> in allen Bereichen wieder zum
            Grundprinzip machen
          </li>
          <li>
            Eine Kultur{" "}
            <strong>
              der Innovationsfreude, Technologieoffenheit und
              Veränderungsbereitschaft
            </strong>{" "}
            in Baden-Württemberg fördern
          </li>
          <li>
            <strong>Die Digitalisierung</strong> nutzen, um
            Produktivitätsreserven zu heben
          </li>
          <li>
            <strong>Landwirtschaft und Ökologie</strong> zu Partnern bei der
            regionalen Nahrungsmittelerzeugung und bei Umwelt- und Klimaschutz
            machen
          </li>
          <li>
            <strong>Sicherheit</strong> bieten und gleichzeitig
            <strong> Eigenverantwortung</strong> der Bürger einfordern
          </li>
        </ul>
        <img
          src={GoalsImage}
          alt="Tobias Pfander Rede"
          className="my-goals__content__image"
        />
      </div>
    </GridContainer>
  );
}

export default MyGoals;
