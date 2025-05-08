import 'animate.css'
import { useContext} from "react";
import { UserContext } from "../context/userContext";
import "../styles/Movements.styles.css";

export const Movements = () => {

  let { movements } = useContext(UserContext);


  return (
    <div className="movements-container">
      <p className="title">Movimientos</p>
      <span className="divider" />
      {movements &&
        movements?.map((movement) => (
          <div className="movement animate__animated animate__slideInLeft">
            <p className="movement-name">{movement?.name}</p> 
            <p className="movement-amount">{movement?.action}{movement?.amount}</p> 
          </div>
        )).toReversed()}
    </div>
  );
};
