import { Link, Outlet } from "react-router";
import "./navigation.styles.scss";
import Crown from "../../assets/crown.svg?react";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Crown className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Navigation;
