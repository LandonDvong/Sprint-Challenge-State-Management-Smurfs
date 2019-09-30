import React from "react";

const SmurfCard = ({ smurfdetails }) => {
  return (
    <div className="smurf-card ">
      <p>
        <strong>Name:</strong> {smurfdetails.name}
      </p>
      <p>
        <strong>Age:</strong> {smurfdetails.age}
      </p>
      <p>
        <strong>Height:</strong> {smurfdetails.height}
      </p>
    </div>
  );
};

export default SmurfCard;