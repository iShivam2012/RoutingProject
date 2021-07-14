import { Link, NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <ul>
        <li>
          {/* <Link to="welcome">Welcome</Link> */}
          <NavLink activeClassName={classes.active} to="/welcome">
            Welcome
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/product">
            Product
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default MainHeader;
