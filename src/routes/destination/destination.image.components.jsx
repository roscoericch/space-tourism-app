import "./destination.img.style.scss";
import { data } from "../../assets/data";
import React from "react";
const DestinationImage = (props) => {
  const { destinations } = data;
  const { index, id, name } = props;
  let Position = "";
  if (index === id) Position = "active-image";
  if (index === id - 1 || index - id === destinations.length - 1)
    Position = "previous-image";
  if (index === id + 1 || id - index === destinations.length - 1)
    Position = "next-image";
  return (
    <div className={`planets ${Position}`}>
      <div
        className="planet"
        style={{ backgroundImage: `url(${destinations[index].name})` }}
      ></div>
    </div>
  );
};
export default DestinationImage;
