import { data } from "../../assets/data";
import { useContext } from "react";
import { ActiveContext } from "../../Contexts/State.contexts";
const CrewImage = ({ images, index }) => {
  const { crew } = data;
  const { CrewState } = useContext(ActiveContext);
  let Position = "";
  if (index === CrewState) {
    Position = "active-image";
  }
  if (index === CrewState - 1 || index - CrewState === crew.length - 1) {
    Position = "previous-image";
  }
  if (index === CrewState + 1 || CrewState - index === crew.length - 1) {
    Position = "next-image";
  }
  return <img className={`crew-img ${Position}`} src={images} />;
};
export default CrewImage;
