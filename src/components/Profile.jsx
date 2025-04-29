import { useContext } from "react";
import { UserContext } from "../context/userContext";
import "../styles/Profile.styles.css";

export const Profile = () => {
  const userData = useContext(UserContext);

  return (
    <div className="profile-container">
      <p className="profile-name">{userData.name}</p>
      <span className="divider" />
      <p className="balance">
        Balance actual<p>${userData.balance}</p>
      </p>
    </div>
  );
};
