import { useContext } from "react";
import { UserContext } from "../context/userContext";
import '../styles/Profile.styles.css'

export const Profile = () => {

 const userData = useContext(UserContext)


  return (
    <div className="profile-container">
      <p>{userData.name}</p>
      <p>{userData.balance}</p>
    </div>
  );
};
