import GridContainer from "./../../helpers/GridContainer";
import ChristValueIcon from "./../../assets/christ-icon.svg";
import BadenWurttemberIcon from "./../../assets/baden-wurttemberg-icon.svg";
import ProgressIcon from "./../../assets/progress-icon.svg";
import DialogIcon from "./../../assets/dialog-icon.svg";
import JusticeIcon from "./../../assets/justice-icon.svg";
import TreeIcon from "./../../assets/tree-icon.svg";

const values = [
  {
    icon: TreeIcon,
    titles: ["Wurzeln und ", "Prägung"],
    content:
      "Geprägt haben mich mein modernes und weltoffenes Elternhaus, sowie bodenständige Großeltern der Nachkriegsgeneration mit Wurzeln in Handwerk und Landwirtschaft.",
  },
  {
    icon: ChristValueIcon,
    titles: ["Glaube und ", "Orientierung"],
    content:
      "Meine Familie und die kirchliche Jugendarbeit haben es mir ermöglicht, meinen Weg zum christlichen Glauben und zur Kirche zu finden. Auch hier gilt für mich: Nicht nur drüber reden – christliche Werte im Alltag leben!",
  },
  {
    icon: BadenWurttemberIcon,
    titles: ["Heimat und", "Freiheit"],
    content:
      "Mir liegt unsere Zukunft und die der folgenden Generationen am Herzen. Ich brenne für unser Land, für unsere Demokratie und für unsere Freiheit.",
  },
  {
    icon: ProgressIcon,
    titles: ["Leistung und ", "Fleiß"],
    content:
      "Wohlstand und Sicherheit gibt es aber nicht zum Nulltarif. Unsere Gesellschaft lebt vom Leistungswillen, von Fleiß und der Arbeit derjenigen, die hier leben.",
  },
  {
    icon: DialogIcon,
    titles: ["Gemeinsamer ", "Dialog"],
    content:
      "Der intensive Austausch mit Ihnen ist mir wichtig. Ich möchte Ihnen zuhören und mit Ihnen auf Augenhöhe kommunizieren. Dialog und das argumentative Ringen um die besten Lösungen sind der Schlüssel zum gemeinsamen Erfolg.",
  },
  {
    icon: JusticeIcon,
    titles: ["Konstruktiv und ", "Ehrlich"],
    content:
      "Spaltung und radikaler Populismus ist das Gegenmodel zu der Politik, für die ich mich stark machen werde!",
  },
];

function OneValue({ icon, titles, content }) {
  return (
    <div className="one-value">
      <img src={icon} alt={icon} className="icon" />
      <span className="title">{titles.map((title, index) => {
        return index === 0 ? <><span>{title}</span><br/></> : <span>{title}</span>
      })}</span>
      <span className="content">{content}</span>
    </div>
  );
}

function MyValues() {
  return (
    <GridContainer className="my-values with-header blue-background" id="values">
      <h1 className="my-values__header">
        <span>Meine Werte</span>
      </h1>
      <div className="my-values__content">
        <div className="my-values__content__description">
          Warum bewerbe ich mich für die Nominierung als Landtagskandidat? Mir
          liegt unsere Zukunft und die der folgenden Generationen am Herzen.{" "}
          <strong>
            Ich brenne für unser Land, für unsere Demokratie und für unsere
            Freiheit.{" "}
          </strong>
          Wohlstand und Sicherheit gibt es aber nicht zum Nulltarif. Unsere
          Gesellschaft lebt vom{" "}
          <strong>Leistungswillen, von Fleiß und der Arbeit </strong>
          derjenigen, die hier leben. Lassen Sie uns deshalb gemeinsam mit Mut,
          Zuversicht und Erfahrung die enormen Herausforderungen anpacken.
          <strong> Baden-Württemberg kann mehr.</strong> Ich werde dazu
          beitragen, dass unser Land wieder an der Spitze steht!
        </div>
        <div className="my-values__content__all-values">
          {values.map((value) => {
            return <OneValue {...value} />;
          })}
        </div>
      </div>
    </GridContainer>
  );
}

export default MyValues;
