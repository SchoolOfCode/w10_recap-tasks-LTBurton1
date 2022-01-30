import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "antd";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {
  const { isAuthenticated, loginWithPopup, logout } = useAuth0();

  return (
    <header className={styles.header}>
      <Link to="/">
        <h1 className={styles.title}>WikiPigeon</h1>
      </Link>
      <div className={styles.controls}>
        <Link to="/profile">
          <Button className={styles.profileButton}>Profile</Button>
        </Link>
        {isAuthenticated ? (
          <Button className={styles.button} onClick={logout} type="danger">
            Log Out
          </Button>
        ) : (
          <Button className={styles.button} onClick={loginWithPopup} type="primary">
            Log In
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
