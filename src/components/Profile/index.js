import { useAuth0 } from "@auth0/auth0-react";
import Header from "../Header";

import styles from "./Profile.module.css";

const Profile = () => {
  const { user } = useAuth0();

  return (
    <div className={styles.container}>
      <Header />
      {user ? (
        <div className={styles.userInfo}>
          <h2>Name: {user.name}</h2>
          <h2>Email: {user.email}</h2>
          <img src={user.picture} alt={user.name} />
        </div>
      ) : (
        <h2 className={styles.message}>Please log in to view your profile.</h2>
      )}
    </div>
  );
};

export default Profile;
