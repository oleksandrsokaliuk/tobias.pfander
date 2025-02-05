import GridContainer from "../../helpers/GridContainer";
import ImageWithColleague from "./../../assets/for-people.jpg";

function ForPeople() {
  return (
    <GridContainer className="with-header for-people orange-background">
      <h1 className="for-people__header">
        <span>Für die Menschen</span>
        <span>in unserem Wahlkreis</span>
      </h1>
      <div className="for-people__content-container">
        {/* <div className="for-people__content-container__image">Image</div> */}
        <img
          src={ImageWithColleague}
          alt="Tobias Pdander mit Kollegen"
          className="for-people__content-container__image"
        />
        <div className="for-people__content-container__text">
          <p>
            Im März 2026 wählen wir in in Baden-Württemberg einen neuen Landtag.
            Nach Sabine Kurtz braucht unser Wahlkreis weiterhin eine
            <strong> starke, verlässliche und erfahrene Stimme</strong> in
            Stuttgart. Zusammen mit Ihnen möchte ich das Direktmandat für
            unseren Wahlkreis gewinnen und für die Bürgerinnen und Bürger von
            Weissach bis Bondorf eine{" "}
            <strong>
              mutige und eine durch Zuversicht geprägte Landespolitik
            </strong>{" "}
            mitgestalten.
          </p>
          <p>
            Sie kennen mich als{" "}
            <strong>
              Ersatzkandidat der CDU bei der letzten Landtagswahl.
            </strong>{" "}
            2021 haben wir einen engagierten Wahlkampf geführt. An diese
            wertvolle Erfahrung möchte ich mit Ihnen anknüpfen.
          </p>
          <p>
            <strong>
              Unser Ziel: Das Direktmandat im Wahlkreis 6 für die CDU!
            </strong>
          </p>
        </div>
      </div>
    </GridContainer>
  );
}

export default ForPeople;
