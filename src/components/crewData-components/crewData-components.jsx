import { data } from "../../assets/data";
import { useContext } from "react";
import { ActiveContext } from "../../Contexts/State.contexts";
const CrewData = ({ name, role, bio, index }) => {
  const { crew } = data;
  const { CrewState } = useContext(ActiveContext);
  let Position = "";
  if (index === CrewState) {
    Position = "active-slide";
  }
  if (index === CrewState - 1 || index - CrewState === crew.length - 1) {
    Position = "previous-slide";
  }
  if (index === CrewState + 1 || CrewState - index === crew.length - 1) {
    Position = "next-slide";
  }
  return (
    <div className={`crew-data-info ${Position}`}>
      <div className="crew-role">{role}</div>
      <div className="crew-name">{name}</div>
      <div className="crew-bio">{bio}</div>
    </div>
  );
};

export default CrewData;
