import { createContext, useState, useEffect } from "react";
import { data } from "../assets/data";
export const ActiveContext = createContext({
  CrewState: 0,
  DestinationState: 0,
  TechnologyState: 0,
  increaseCrewState: () => {},
  decreaseCrewState: () => {},
  alterCrewState: () => {},
  alterDestinationState: () => {},
  alterTechnologyState: () => {},
});

export const StateProvider = ({ children }) => {
  const { crew } = data;
  const [CrewState, setCrewState] = useState(0);
  const [DestinationState, setDestinationState] = useState(0);
  const [TechnologyState, setTechnologyState] = useState(0);
  useEffect(() => {
    if (CrewState > crew.length - 1) {
      return setCrewState(0);
    }
    if (CrewState < 0) {
      return setCrewState(crew.length - 1);
    }
  }, [CrewState]);
  const increaseCrewState = () => {
    setCrewState(CrewState + 1);
  };
  const decreaseCrewState = () => {
    setCrewState(CrewState - 1);
  };
  const alterCrewState = (index) => {
    setCrewState(index);
  };
  const alterDestinationState = (index) => {
    setDestinationState(index);
  };
  const alterTechnologyState = (index) => {
    setTechnologyState(index);
  };
  const value = {
    CrewState,
    DestinationState,
    TechnologyState,
    increaseCrewState,
    decreaseCrewState,
    alterCrewState,
    alterDestinationState,
    alterTechnologyState,
  };
  return (
    <ActiveContext.Provider value={value}>{children}</ActiveContext.Provider>
  );
};
