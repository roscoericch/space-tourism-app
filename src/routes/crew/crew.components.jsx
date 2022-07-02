import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { ActiveContext } from "../../Contexts/State.contexts";
import "./crew.style.scss";
import "../destination/destination.style.scss";
import { data } from "../../assets/data";
import CrewData from "../../components/crewData-components/crewData-components";
import CrewImage from "../../components/CrewImage-components/crewImage.components";

// import factor from "../../components/timeout";
const Crew = () => {
  const { increaseCrewState, decreaseCrewState, alterCrewState, CrewState } =
    useContext(ActiveContext);

  const { crew } = data;
  return (
    <div className="crew-container">
      <div className="crew">
        <div className="title">
          <span>02</span> meet your Crew
        </div>
        <div className="crew-data">
          {/* <div className="prev">&rarr;</div> */}
          <div className="crew-info">
            {crew.map((element, index) => {
              const { name, role, bio } = element;
              return (
                <CrewData
                  name={name}
                  role={role}
                  bio={bio}
                  index={index}
                ></CrewData>
              );
            })}
            <div className="prev arrow" onClick={increaseCrewState}>
              &rarr;
            </div>
            <div className="next arrow" onClick={decreaseCrewState}>
              &larr;
            </div>
          </div>
          <div className="indicators">
            <span
              className={
                CrewState === 0 ? "indicator activeIndicator" : "indicator"
              }
              onClick={() => {
                alterCrewState(0);
              }}
            ></span>
            <span
              className={
                CrewState === 1 ? "indicator activeIndicator" : "indicator"
              }
              onClick={() => {
                alterCrewState(1);
              }}
            ></span>
            <span
              className={
                CrewState === 2 ? "indicator activeIndicator" : "indicator"
              }
              onClick={() => {
                alterCrewState(2);
              }}
            ></span>
            <span
              className={
                CrewState === 3 ? "indicator activeIndicator" : "indicator"
              }
              onClick={() => {
                alterCrewState(3);
              }}
            ></span>
          </div>
          {/* <div className="next">&larr;</div> */}
        </div>
        <div className="crew-image">
          <div className="crew-images">
            {crew.map((element, index) => {
              const images = element.images.png;
              return <CrewImage images={images} index={index}></CrewImage>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Crew;
