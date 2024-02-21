import React, { useState, useEffect } from "react";
export const generateRandomPositions = (count) => {
  let positions = [];
  for (let i = 0; i < count; i++) {
    positions.push({
      id: i,
      initialX: Math.random() * 100, // Randomize based on your container size
      initialY: Math.random() * 100, // Randomize based on your container size
      // Add finalX and finalY according to the SVG positions
    });
  }
  return positions;
};

export const Dot = ({ initialX, initialY, finalX, finalY }) => {
  const style = {
    position: "absolute",
    width: "8px",
    height: "8px",
    borderRadius: "4px",
    backgroundColor: "#252C2F",
    transform: `translate(${initialX}px, ${initialY}px)`,
    transition: "transform 2s", // Adjust time as needed
  };

  // Transition to final position after render
  useEffect(() => {
    setTimeout(() => {
      style.transform = `translate(${finalX}px, ${finalY}px)`;
    }, 100); // Small delay before starting the animation
  }, [finalX, finalY]);

  return <div style={style}></div>;
};
