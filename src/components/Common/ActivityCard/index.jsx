import React from "react";
import Dot from "../../../assets/dot.svg";
import "./style.css";

const ActivityCard = () => {
  return (
    <div className="activity-card">
      <div className="activity-number">1</div>
      <div className="main-info-wrapper">
        <div className="timing">8:00 AM</div>
        <div className="text">Breakfast at Ginger House</div>
        <div className="text">Price</div>
        <div className="detail-text">
          <span>₹500</span> <img src={Dot} alt="dot" /> <span> 1 hour</span>
        </div>
      </div>
      <div className="detail-text">
        Start your day with a scrumptious breakfast at Ginger House, an iconic
        eatery with a beautiful view. Start your day with a scrumptious
        breakfast at Ginger House, an iconic eatery with a beautiful view.
      </div>
    </div>
  );
};

export default ActivityCard;
