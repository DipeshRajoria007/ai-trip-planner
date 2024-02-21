import  { useEffect, useState } from "react";
import "./style.css";

const FlapText = () => {
  const speed = 0.2; // seconds
  const [beginStr, setBeginStr] = useState("BALTIMORE".toUpperCase().split(""));
  const [endStr, setEndStr] = useState("VANCOUVER".toUpperCase().split(""));
  const [flaps, setFlaps] = useState([]);
  const char = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    " ",
  ];

  // Adjusts beginStr and endStr to have the same length
  useEffect(() => {
    const amountOfFlaps = Math.max(beginStr.length, endStr.length);
    setBeginStr((prev) => [
      ...prev,
      ...Array(amountOfFlaps - prev.length).fill(" "),
    ]);
    setEndStr((prev) => [
      ...prev,
      ...Array(amountOfFlaps - prev.length).fill(" "),
    ]);
  }, []);

  // Initialize flaps
  useEffect(() => {
    const newFlaps = beginStr.map((char, index) => ({
      currentChar: char,
      nextChar: endStr[index],
      isFlipping: false,
    }));
    setFlaps(newFlaps);
  }, [beginStr, endStr]);

  // Flip logic
  useEffect(() => {
    const interval = setInterval(() => {
      setFlaps((currentFlaps) =>
        currentFlaps.map((flap, index) => {
          if (flap.nextChar === flap.currentChar) {
            return { ...flap, isFlipping: false }; // No need to flip
          } else {
            const charIndex = char.indexOf(flap.currentChar);
            const nextIndex = (charIndex + 1) % char.length;
            return {
              ...flap,
              currentChar: char[nextIndex],
              isFlipping: true,
            };
          }
        })
      );
    }, speed * 1000);

    return () => clearInterval(interval);
  }, [flaps]);

  return (
    <div className="center">
      {flaps.map((flap, index) => (
        <div key={index} className="splitflap">
          <div className="top">{flap.currentChar}</div>
          <div className="bottom">
            {flap.isFlipping ? flap.nextChar : flap.currentChar}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlapText;
