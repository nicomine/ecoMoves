import { useContext } from "react";
import { UserContext } from "../context/userContext";
import "../styles/Movements.styles.css";

export const Movements = () => {
  let { movements } = useContext(UserContext);

  return (
    <div className="movements-container">
      <p className="title">Movements</p>
      <span className="divider" />
      {movements &&
        movements?.toReversed().map((movement) => (
          <div className="movement">
            <p className="movement-name">{movement.name}</p> 
            <p className="movement-amount">{movement.amount}</p> 
          </div>
        ))}
    </div>
  );
};
