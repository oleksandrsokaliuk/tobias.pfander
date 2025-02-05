import GridContainer from "./../../helpers/GridContainer";

function Press() {
  return (
    <GridContainer className="press with-header white-background">
      <h1 className="press__header">
        <span>Presse</span>
      </h1>
      <ul className="press__content">
        <li><a href="https://www.gaeubote.de/Nachrichten/CDU-Abgeordnete-Sabine-Kurtz-tritt-bei-der-Landtagswahl-2026-nicht-mehr-an-148125.html" target="_blank" rel="noopener noreferrer">28.10.2024 - Gäubote: Sabine Kurtz tritt 2026 nicht mehr an</a></li>
        <li><a href="https://www.gaeubote.de/Nachrichten/Tobias-Pfander-will-in-den-Landtag-149147.html " target="_blank" rel="noopener noreferrer">23.11.2024 - Gäubote: Tobias Pfander will in den Landtag</a></li>
      </ul>
    </GridContainer>
  );
}

export default Press;
