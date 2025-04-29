import { useContext } from "react";
import { UserContext } from "../context/userContext";
import "../styles/Movements.styles.css";

export const Movements = () => {
  let { movements, setMovements } = useContext(UserContext);

  return (
    <div className="movements-container">
      <p className="title">Movements</p>
      <span className="divider" />
      {movements &&
        movements?.map((movement) => (
          <p>
            {movement.name} - {movement.amount}
          </p>
        ))}
    </div>
  );
};
