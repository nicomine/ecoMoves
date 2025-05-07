import { useContext } from "react";
import { UserContext } from "../context/userContext";
import "../styles/Profile.styles.css";

export const Profile = () => {
  const userData = useContext(UserContext);

  return (
    <div className="profile-container">
      <h1 className="profile-name">{userData.name}</h1>
      <span className="divider" />
      <p className="balance">
        Balance actual<p>${userData.balance}</p>
      </p>
    </div>
  );
};
