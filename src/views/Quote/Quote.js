import GridContainer from "../../helpers/GridContainer";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export const QuoteIcon = ({ type }) => {
  return (
    <div className={`${type} quote-icon`}>
      <FormatQuoteIcon />
    </div>
  );
};

function Quote() {
  return (
    <div className="quote">
      <GridContainer className="quote-type white-background">
        <blockquote className="quote-container">
          <QuoteIcon type="start" />
          <QuoteIcon type="end" />
          <p>
            <span>
              Mit
              <strong> Mut</strong>,<strong> Zuversicht</strong> und
              <strong> Erfahrung</strong> für unseren Wahlkreis
            </span>
            <span>
              Ich bewerbe mich um die Nominierung als
              <strong> CDU-Kandidat</strong> für die Landtagswahl 2026.
            </span>
          </p>
          <footer></footer>
        </blockquote>
      </GridContainer>
    </div>
  );
}

export default Quote;
