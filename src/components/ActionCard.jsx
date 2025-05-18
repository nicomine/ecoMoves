import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import "../styles/ActionCard.styles.css";

export const ActionCard = () => {
  const [amount, setAmount] = useState();
  const [movementName, setMovementName] = useState();

  const { setBalance, setMovements, balance, moneyHistory, setMoneyHistory } =
    useContext(UserContext);

  const dateString = new Date();

  const handleBalance = (amountF, increment) => {
    parseFloat(amountF);
    if (amountF <= 0) return;
    if (movementName.length < 1) return;

    console.log(typeof amountF);

    let action = increment ? "+" : "-";

    if (increment) {
      setBalance((prevState) => prevState + amountF);
      localStorage.setItem("balance", balance + amountF);
      let totalMoneyIncome = {
        income: moneyHistory.income + amountF,
        consume: moneyHistory.consume,
      };
      setMoneyHistory(totalMoneyIncome);

      localStorage.setItem("moneyHistory", JSON.stringify(totalMoneyIncome));
    } else {
      setBalance((prevState) => prevState - amountF);
      localStorage.setItem("balance", balance - amountF);
      let totalMoneyConsume = {
        income: moneyHistory.income,
        consume: moneyHistory.consume + amountF,
      };
      setMoneyHistory(totalMoneyConsume);
      localStorage.setItem("moneyHistory", JSON.stringify(totalMoneyConsume));
    }

    setMovements((prevState) => [
      ...prevState,
      {
        name: movementName,
        amount: amount,
        action: action,
        date: dateString.toLocaleDateString(),
      },
    ]);

    const stored = JSON.parse(localStorage.getItem("movements") || "[]");

    localStorage.setItem(
      "movements",
      JSON.stringify([
        ...stored,
        {
          name: movementName,
          amount: amount,
          action: action,
          date: dateString.toLocaleDateString(),
        },
      ])
    );

    setAmount("");
    setMovementName("");
  };

  console.log("ACA", moneyHistory);

  return (
    <div className="action-card-container">
      <p className="title-name">añadir movimientos</p>
      <p className="subtitle">Registrar tus ingresos y gastos</p>
      <div className="input-container">
        <div>
          <h4 className="subtitle">Movimiento</h4>
          <input
            onChange={(e) => setMovementName(e.target.value)}
            placeholder="Nombre del movimiento"
            type="string"
            value={movementName}
          />
        </div>
        <div>
          <h4 className="subtitle">Monto</h4>
          <input
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="Cantidad de dinero"
            type="number"
            value={amount}
          />
        </div>
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
