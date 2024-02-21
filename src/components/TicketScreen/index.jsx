import { useState } from "react";
import "./style.css";
import Ticket from "../Common/Ticket";
import BrandHeader from "../Common/BrandHeader/index.jsx";
import { useNavigate } from "react-router-dom";
const TicketDetails = [
  {
    ticketNumber: 1,
    headerText: "I want to travel to...",
    inputPlaceholder: "ex. Bangkok",
    inputType: "text",
    CTAButton: "Next",
  },
  {
    ticketNumber: 2,
    headerText: "For the duration of",
    inputPlaceholder: "ex. 6",
    inputType: "text",
    CTAButton: "Next",
  },
  {
    ticketNumber: 3,
    headerText: "Starting on",
    inputType: "date",
    CTAButton: "Next",
  },
  {
    ticketNumber: 4,
    headerText: "The trip should be",
    inputType: "options",
    options: [
      {
        id: 1,
        value: "Adventure",
      },
      {
        id: 2,
        value: "Solo travel",
      },
      {
        id: 3,
        value: "Couple friendly",
      },
      {
        id: 4,
        value: "Road Trip",
      },
      {
        id: 5,
        value: "Family friendly",
      },
      {
        id: 6,
        value: "Relaxation",
      },
      {
        id: 7,
        value: "Partying",
      },
      {
        id: 8,
        value: "City Experiences",
      },
      {
        id: 9,
        value: "Pet friendly",
      },
      {
        id: 10,
        value: "Foodie",
      },
      {
        id: 11,
        value: "Nature",
      },
      {
        id: 12,
        value: "Low budget",
      },
      {
        id: 13,
        value: "Luxury",
      },
    ],
    bodySize: "large",
    CTAButton: "Next",
  },
  {
    ticketNumber: 5,
    headerText: "and my budget is",
    inputPlaceholder: "ex. Bangkok",
    inputType: "options",
    options: [
      {
        id: 1,
        value: "Low",
      },
      {
        id: 2,
        value: "Midium",
      },
      {
        id: 3,
        value: "High",
      },
    ],
    bodySize: "medium",
    CTAButton: "Plan my trip",
  },
];
const TicketScreen = () => {
  const [activeTicket, setActiveTicket] = useState(0);
  const [inputValues, setInputValues] = useState({});

  const navigate = useNavigate();
  const onPlanItineraryClick = () => {
    navigate("/your-itinerary", { state: { inputValues } });
  };

  const numTickets = TicketDetails.length;
  const radius = 600;

  // Function to update input values
  const handleInputChange = (ticketNumber, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [ticketNumber]: value,
    }));
  };
  const nextTicket = () => {
    setActiveTicket((prev) => (prev < numTickets ? prev + 1 : 0));
  };

  const calculatePositionAndRotation = (
    index,
    activeIndex,
    numCards,
    radius
  ) => {
    // Offset angle to start from the top (-90 degrees)
    const startAngle = -90;
    // Calculate angle for each card
    const angle = startAngle + (index - activeIndex) * (360 / numCards);
    const radians = angle * (Math.PI / 180); // Convert angle to radians

    const x = radius * Math.cos(radians);
    const y = radius * Math.sin(radians);
    // Cards should be perpendicular to the circle's tangent
    const rotation = angle + 90; // Rotate to be perpendicular
    return { x, y: y + 500, rotation };
  };

  return (
    <div className="cards-container">
      <div
        className="animation-layer"
        style={{
          position: "absolute",
          backgroundColor: "#192226",
          width: "101%",
          height: "100%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "100",
        }}
      >
        <div
          className="cutout"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "230px",
            height: "360px",
            borderRadius: "130px",
            border: "12px solid white",
            outline: "16px solid #2B3C44",
            // backgroundColor: "blue",
          }}
        ></div>
      </div>
      <BrandHeader />
      {TicketDetails.map((ticket, index) => {
        const { x, y, rotation } = calculatePositionAndRotation(
          index,
          activeTicket,
          numTickets,
          radius
        );
        let inputValue = inputValues[ticket.ticketNumber] || "";
        return (
          <Ticket
            active={`${index === activeTicket ? "active" : ""} `}
            key={ticket.ticketNumber}
            onButtonClick={
              ticket.ticketNumber === 5 ? onPlanItineraryClick : nextTicket
            }
            style={{
              transform: `translate(${x}px, ${
                y +
                (ticket.bodySize === "large" ? 120 : 0) +
                (ticket.bodySize === "medium" ? 60 : 0)
              }px) rotate(${rotation}deg)`,
            }}
            inputValue={inputValue}
            handleInputChange={(value) =>
              handleInputChange(ticket.ticketNumber, value)
            }
            {...ticket}
          />
        );
      })}
    </div>
  );
};
export default TicketScreen;
