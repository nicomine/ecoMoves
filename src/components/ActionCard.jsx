import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import "../styles/ActionCard.styles.css";

export const ActionCard = () => {
  const [amount, setAmount] = useState();
  const [movementName, setMovementName] = useState();

  const { setBalance, setMovements } = useContext(UserContext);

  const handleBalance = (amountF, increment) => {
    parseFloat(amountF);
    if (amountF <= 0) return;
    if (movementName.length < 1) return;

    if (increment) {
      setBalance((prevState) => prevState + amountF);
    } else {
      setBalance((prevState) => prevState - amountF);
    }

    setMovements((prevState) => [
      ...prevState,
      { name: movementName, amount: amount },
    ]);

    setAmount(0);
    setMovementName("");
  };

  console.log(amount);

  return (
    <div className="action-card-container">
      <p className="title">añadir movimientos</p>
      <span className="divider" />
      <div className="input-container">
        <div>
          <h4>Movimiento</h4>
          <input
            onChange={(e) => setMovementName(e.target.value)}
            placeholder="Nombre del movimiento"
            type="string"
            value={movementName}
          />
        </div>
        <h4>Monto</h4>
        <input
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Cantidad de dinero"
          type="number"
          value={amount}
        />
      </div>
      <div className="button-container">
        <button
          className="button-add"
          onClick={() => handleBalance(amount, true)}
        >
          +
        </button>
        <button
          className="button-decrease"
          onClick={() => handleBalance(amount, false)}
        >
          -
        </button>
      </div>
    </div>
  );
};
