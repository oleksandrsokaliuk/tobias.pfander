import { QuoteIcon } from "../Quote/Quote";
import GridContainer from "./../../helpers/GridContainer";

function MyEngagement() {
  return (
    <GridContainer className="my-engagement with-header white-background" id="engagement">
      <h1 className="my-engagement__header">
        <span>Mein Engagement</span>
      </h1>
      <div className="my-engagement__content">
        <div className="my-engagement__content__text">
          <div>
            <h2>Ehrenamtliches Engagement</h2>
            <p>
              Verantwortung für die Gemeinschaft habe ich schon früh als
              Klassensprecher und in der SMV übernommen. Heute engagiere ich
              mich in vielen Ehrenämtern in Vereinen, Gruppen und meiner
              Kirchengemeinde. Als Ortschafts- und Stadtrat bin ich fest
              verwurzelt in der Kommunalpolitik. Seit 2019 gestalte ich als
              ehrenamtlicher Ortsvorsteher und mit{" "}
              <strong>viel Engagement, Pragmatismus und Bürgernähe</strong> die
              Entwicklung meiner 3.100 Einwohner zählenden Heimatgemeinde
              Oberjesingen.
            </p>
          </div>
          <div>
            <h2>Politisches Engagement</h2>
            <p>
              Mein politisches Engagement begann mit 16 Jahren in der Jungen
              Union als begeisterter Wahlkämpfer für den großen Europäer Helmut
              Kohl. Seit vielen Jahren bin ich ein aktives Mitglied in der
              Christlich Demokratischen Union und{" "}
              <strong>
                Vorstandsmitglied im Stadtverband Herrenberg, sowie im
                Kreisverband Böblingen.
              </strong>
            </p>
          </div>
        </div>
        <blockquote className="my-engagement__content__quote">
          <QuoteIcon type="start goal" />
          <p>Ehrenamt leben, statt nur darüber reden!</p>
          <QuoteIcon type="end goal" />
        </blockquote>
      </div>
    </GridContainer>
  );
}

export default MyEngagement;
