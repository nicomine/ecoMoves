import "animate.css";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import "../styles/Movements.styles.css";

export const Movements = () => {
  let { movements } = useContext(UserContext);

  console.log(movements?.length);
  return (
    <div className="movements-container">
      <p className="title-name">Movimientos</p>
      <p className="subtitle">Historial de transacciones</p>
      <span className="divider" />
      {movements?.length !== 0 ? (
        movements
          ?.map((movement) => (
            <div className="movement animate__animated animate__slideInLeft">
              <div className="container">
                <p className="movement-name">{movement?.name}</p>
                <p
                  className={
                    movement?.action === "-"
                      ? "movement-amount consume-movement"
                      : "movement-amount add-movement"
                  }
                >
                  {movement?.action}
                  {movement?.amount}
                </p>
              </div>
              <p className="date">{movement?.date}</p>
            </div>
          ))
          .toReversed()
      ) : (
        <p className="subtitle">Aún no hay transacciones registradas!</p>
      )}
    </div>
  );
};
