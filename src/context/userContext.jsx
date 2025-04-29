import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({children}) {
  const [name, setName] = useState("nico")
  const [balance, setBalance] = useState(5000)
 const [movements, setMovements] = useState([{name:'test', amount:1500}])


const value ={name,setName, balance, setBalance, movements,setMovements}

 return(
 
<UserContext.Provider value={value}>
{children}
</UserContext.Provider>

)

}
