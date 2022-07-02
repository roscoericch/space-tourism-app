import "./technology.style.scss";
import { data } from "../../assets/data";
import React from "react";
import { useState, useContext } from "react";
import { ActiveContext } from "../../Contexts/State.contexts";
import "../destination/destination.style.scss";
import image0 from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import image1 from "../../assets/technology/image-spaceport-portrait.jpg";
import image2 from "../../assets/technology/image-space-capsule-portrait.jpg";
// import { data } from "../../App";
const Technology = () => {
  const { TechnologyState, alterTechnologyState } = useContext(ActiveContext);
  const { technology } = data;
  const image = [image0, image1, image2];
  let techPosition = "";
  let imgPosition = "";

  return (
    <div className="technology">
      <div className="title">
        <span>03</span> SPACE LAUNCH 101
      </div>
      <div className="technology-data">
        {/* <div className="prev">&rarr;</div> */}
        <div className="num-indicators">
          <span
            className={
              TechnologyState === 0
                ? "num-indicator activeIndicator"
                : "num-indicator"
            }
            onClick={() => {
              alterTechnologyState(0);
            }}
          >
            1
          </span>
          <span
            className={
              TechnologyState === 1
                ? "num-indicator activeIndicator"
                : "num-indicator"
            }
            onClick={() => {
              alterTechnologyState(1);
            }}
          >
            2
          </span>
          <span
            className={
              TechnologyState === 2
                ? "num-indicator activeIndicator"
                : "num-indicator"
            }
            onClick={() => {
              alterTechnologyState(2);
            }}
          >
            3
          </span>
        </div>

        <div className="technology-data-info">
          <div className="technology-text">THE TERMINOLOGY...</div>
          {technology.map((element, index) => {
            if (index === TechnologyState) techPosition = "active-tech";
            if (
              index === TechnologyState - 1 ||
              index - TechnologyState === technology.length - 1
            )
              techPosition = "previous-tech";
            if (
              index === TechnologyState + 1 ||
              index - TechnologyState === technology.length + 1
            )
              techPosition = "next-tech";
            return (
              <div className={`technology-description ${techPosition}`}>
                <div className="technology-name">{technology[index].name}</div>
                <div className="technology-bio">
                  {technology[index].description}
                </div>
              </div>
            );
          })}
        </div>
        {/* <div className="next">&larr;</div> */}
      </div>
      <div
        className="technology-image"
        // style={{ backgroundImage: `url(${image[TechnologyState]})` }}
      >
        {technology.map((element, index) => {
          if (index === TechnologyState) imgPosition = "active-image";
          if (
            index === TechnologyState - 1 ||
            index - TechnologyState === technology.length - 1
          )
            imgPosition = "previous-image";
          if (
            index === TechnologyState + 1 ||
            index - TechnologyState === technology.length + 1
          )
            imgPosition = "next-image";
          return (
            <img
              className={`technology-img ${imgPosition}`}
              src={image[index]}
            ></img>
          );
        })}
      </div>
    </div>
  );
};
export default Technology;
