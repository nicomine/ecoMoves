import { UserContext } from "./context/userContext";
import "./App.css";
import { Profile } from "./components/Profile";
import { ActionCard } from "./components/ActionCard";
import { Movements } from "./components/Movements";

function App() {

  return (
    <div className="app-container">
      <Profile />
      <ActionCard />
      <Movements />
    </div>
  );
}

export default App;
