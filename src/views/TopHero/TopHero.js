import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function TopHero() {
  return (
    <header className="top-hero">
      <div className="menu">
        <h1>
          <span>Tobias</span>
          <span>Pfander</span>
        </h1>
        <nav>
          <ul>
            <li>
              <a href="#values" className="black">
                Werte
              </a>
            </li>
            <li>
              <a href="#engagement" className="red">
                Engagement
              </a>
            </li>
            <li>
              <a href="#goals" className="golden">
                Ziele
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* <div className="side-buttons">
        <div className="scroll-down">
          <a href="#quote">
            <ArrowForwardIosIcon />
          </a>
        </div>
      </div> */}
    </header>
  );
}

export default TopHero;
