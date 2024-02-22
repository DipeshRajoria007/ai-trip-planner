import "./style.css";
import BrandHeader from "../Common/BrandHeader";
import error from "../../assets/error.svg";
const ErrorScreen = ({ errorMessage }) => {
  return (
    <div className="mainScreen">
      <div className="gradient">
        <BrandHeader />
        <div className="error-content">
          <img
            src={error}
            alt="error"
            style={{
              width: "70%",
            }}
          />
          <div className="error-text">
            <div>Something went wrong</div>
            <div>{errorMessage || "Data format not as specified"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ErrorScreen;
