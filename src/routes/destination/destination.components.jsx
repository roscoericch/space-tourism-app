import "./destination.style.scss";
import { data } from "../../assets/data";
import Moon from "../../assets/destination/image-moon.png";
import Mars from "../../assets/destination/image-mars.png";
import Europa from "../../assets/destination/image-europa.png";
import Titan from "../../assets/destination/image-titan.png";
import DestinationData from "./destination.data.components";
import DestinationImage from "./destination.image.components";
import { useState } from "react";
const Destination = () => {
  const { destinations } = data;
  const [activeState, setActiveState] = useState({
    moon: true,
    mars: false,
    europa: false,
    titan: false,
    name: Moon,
    id: 0,
  });
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveState(id + 1);
  //   }, 4000);
  //   return () => clearInterval(interval);
  // }, [activeState]);
  return (
    <div className="destination">
      <div className="title">
        <span>01</span> Pick your destination
      </div>
      <div className="destination-navigation">
        <ul className="navigation-items">
          <li
            className={
              activeState.moon ? "navigation-item active" : "navigation-item"
            }
            to="#"
            onClick={() => {
              setActiveState({
                moon: true,
                mars: false,
                europa: false,
                titan: false,
                name: Moon,
                id: 0,
              });
            }}
          >
            MOON
          </li>
          <li
            className={
              activeState.mars ? "navigation-item active" : "navigation-item"
            }
            to="#"
            onClick={() => {
              setActiveState({
                moon: false,
                mars: true,
                europa: false,
                titan: false,
                name: Mars,
                id: 1,
              });
            }}
          >
            MARS
          </li>
          <li
            className={
              activeState.europa ? "navigation-item active" : "navigation-item"
            }
            to="#"
            onClick={() => {
              setActiveState({
                moon: false,
                mars: false,
                europa: true,
                titan: false,
                name: Europa,
                id: 2,
              });
            }}
          >
            EUROPA
          </li>
          <li
            className={
              activeState.titan ? "navigation-item active" : "navigation-item"
            }
            to="#"
            onClick={() => {
              setActiveState({
                moon: false,
                mars: false,
                europa: false,
                titan: true,
                name: Titan,
                id: 3,
              });
            }}
          >
            TITAN
          </li>
        </ul>
        <DestinationData id={activeState.id} />
      </div>
      <div className="destination-img">
        {destinations.map((element, index) => {
          return (
            <DestinationImage
              id={activeState.id}
              name={activeState.name}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Destination;
