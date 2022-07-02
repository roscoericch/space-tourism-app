import React from "react";
import { data } from "../../App";
import "./destination.data.style.scss";
const DestinationData = ({ id }) => {
  return (
    <div className="destination-data">
      <div className="data-title">{data.destinations[id].name}</div>
      <p className="destination-text">{data.destinations[id].description}</p>
      <div className="destination-properties">
        <div className="data-distance">
          <div>AVG.DISTANCE</div>
          <div>{data.destinations[id].distance}</div>
        </div>
        <div className="data-time">
          <div>EST.TRAVEL TIME</div>
          <div>{data.destinations[id].travel}</div>
        </div>
      </div>
    </div>
  );
};
export default DestinationData;
