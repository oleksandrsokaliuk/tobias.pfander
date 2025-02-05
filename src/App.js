import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./views/AboutMe/AboutMe";
import Footer from "./views/Footer/Footer";
import ForPeople from "./views/ForPeople/ForPeople";
import MyEngagement from "./views/MyEngagement/MyEngagement";
import MyGoals from "./views/MyGoals/MyGoals";
import MyValues from "./views/MyValues/MyValues";
import Press from "./views/Press/Press";
import Quote from "./views/Quote/Quote";
import TopHero from "./views/TopHero/TopHero";
import Impressum from "./views/Impressum/Impressum";

const ContactButton = () => {
  return (
    <div className="hero-contacts">
      <a href="#contacts">
        <svg
          width="198"
          height="228"
          viewBox="0 0 198 228"
          fill="#52b7c1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M197.23 208.029V20.5844C195.996 5.35576 183.351 1.03061 177.182 0.77162C156.62 0.836368 113.338 0.927015 104.701 0.77162C96.0655 0.616226 89.4085 8.08812 87.1596 11.8435C63.3206 49.203 13.1751 127.846 3.30532 143.54C-4.55962 161.255 7.73899 171.512 14.8714 174.425C59.7864 189.576 153.934 221.277 171.206 226.871C189.712 229.668 196.266 215.475 197.23 208.029Z"
            fill="#52B7C1"
            stroke="#fff"
          />
        </svg>
        <span>Kontakt</span>
      </a>
    </div>
  );
};

const MainPage = () => {
  return (
    <>
      <ContactButton />
      <TopHero />
      <Quote />
      <ForPeople />
      <MyValues />
      <MyEngagement />
      <MyGoals />
      <AboutMe />
      <Footer />
    </>
  )
}



function App() {
  return (
    <Router>
       <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/impressum" element={<Impressum />} />
       </Routes>
    </Router>
  );
}

export default App;
