import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { ColorContext } from "../../context/color.context";
import "./navbar.style.scss";
import { Outlet } from "react-router-dom";
const NavBar = () => {
  const { isDark, setIsDark } = useContext(ColorContext);
  const handleDark = () => (!isDark ? setIsDark(true) : setIsDark(false));
  return (
    <>
      <header className={`header ${!isDark ? "light" : "dark"}`}>
        <div
          className={`header-content-container ${!isDark ? "light" : "dark"}`}
        >
          <h3 to="/">Where in the world!</h3>
          <button className="btn-theme-change" onClick={handleDark}>
            {!isDark ? (
              <>
                <FaMoon /> Dark Mode
              </>
            ) : (
              <>
                <FaSun /> Light Mode
              </>
            )}
          </button>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default NavBar;
