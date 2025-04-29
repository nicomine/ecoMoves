import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";

export const ActionCard = () => {
  const [amount, setAmount] = useState();
  const [movementName, setMovementName] = useState();

  const { setBalance, setMovements } = useContext(UserContext);

  const handleBalance = (amountF, increment) => {
    if (amountF <= 0) return;

    if (increment) {
      setBalance((prevState) => prevState + amountF);
    } else {
      setBalance((prevState) => prevState - amountF);
    }

    setMovements(prevState => [
      ...prevState,
      { name: movementName, amount: amount },
    ]);

    setAmount(0);
  };

  return (
    <div>
      Añadir Movimientos
      <input
        onChange={(e) => setMovementName(e.target.value)}
        placeholder="Nombre del movimiento"
        type="string"
        value={movementName}
      />
      <input
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Cantidad de dinero"
        type="number"
        value={amount}
      />
      <button onClick={() => handleBalance(amount, true)}>+</button>
      <button onClick={() => handleBalance(amount, false)}>-</button>
    </div>
  );
};
