import "./style.css";
import Flight from "../../assets/flight.svg";
import Button from "../Common/Button";
import { Link } from "react-router-dom";
const IntroScreen = () => {
  return (
    <div className="introScreen">
      <div className="gradient"></div>
      <img
        src={Flight}
        alt="flight"
        style={{
          width: "90%",
        }}
      />
      <div className="brand-wrapper">
        <div className="intro-brand-name">Wanderlust</div>
        <div className="brand-text">Plan your ultimate trip with AI</div>
      </div>
      <Link to="/fill-details" className="CTA-button">
        <Button text="Let's Start" />
      </Link>
    </div>
  );
};

export default IntroScreen;
