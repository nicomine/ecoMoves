import { useContext } from "react";
import { UserContext } from "../context/userContext";
import "../styles/Profile.styles.css";

export const Profile = () => {
  const { name, balance, moneyHistory } = useContext(UserContext);

  const formatNumber = (number) => {
    return new Intl.NumberFormat("es-AR", {
      currency: "ARS",
      minimumFractionDigits: 2,
    }).format(number);
  };

  return (
    <div className="profile-container">
      <h1 className="title-name">{name}</h1>
      <div className="balance-container">
        <p className="subtitle">Balance actual </p>
        <p className="money-amount">${formatNumber(balance)}</p>
      </div>
      <p className="subtitle">Resumen Financiero</p>
      <div className="money-history-container">
        <div className="history-item earn">
          <p className="subtitle">ingresos</p>
          <p>
            ${moneyHistory?.income > 0 ? formatNumber(moneyHistory?.income) : 0}
          </p>
        </div>
        <div className="history-item consume">
          <p className="subtitle">Gastos</p>
          <p>
            $
            {moneyHistory?.consume > 0 ? formatNumber(moneyHistory?.consume) : 0}
          </p>
        </div>
      </div>
    </div>
  );
};
