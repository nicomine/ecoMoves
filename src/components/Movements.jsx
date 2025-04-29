import { useContext } from "react"
import { UserContext } from "../context/userContext"

export const Movements = () => {

 const {movements, setMovements} = useContext(UserContext) 

console.log('MOVIMIENTOS', movements)

 return(
<div>
{ movements && movements?.map(movement =>  
<p>{movement.name} - {movement.amount}</p>
)}
</div>
)
}