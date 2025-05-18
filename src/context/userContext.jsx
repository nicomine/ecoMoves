import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [name, setName] = useState("nico");
  const [balance, setBalance] = useState(5000);
  const [movements, setMovements] = useState();
  const [moneyHistory, setMoneyHistory] = useState();
  useEffect(() => {
    setMovements(JSON.parse(localStorage.getItem("movements")) || []);
    setBalance(JSON.parse(localStorage.getItem("balance")) || 0);
    setMoneyHistory(JSON.parse(localStorage.getItem("moneyHistory")) || {income:0, consume:0});
  }, []);

  const value = {
    name,
    setName,
    balance,
    setBalance,
    movements,
    setMovements,
    moneyHistory,
    setMoneyHistory,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
