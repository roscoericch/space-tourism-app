import { Outlet, Link, useLocation } from "react-router-dom";
import { useState, Fragment, useContext } from "react";
import { ActiveContext } from "../../Contexts/State.contexts";
import { ReactComponent as SpaceLogo } from "../../assets/shared/logo.svg";
import "./navigation.style.scss";
const Navigation = () => {
  const { pathname } = useLocation();
  const [activateNav, setActivateNav] = useState(true);
  return (
    <Fragment>
      <Outlet />
      <div className="navigation">
        <Link className="navigation-logo" to="/">
          <SpaceLogo className="logo" />
        </Link>
        <div className="border-line">with love ❤❤💙🧡💖💖 from Razak</div>
        <div
          className={
            activateNav ? "hamburger animate-reverse" : "hamburger animate"
          }
          onClick={() => {
            setActivateNav(!activateNav);
          }}
        >
          <span className=" lines line1"></span>
          <span className="line2">
            <span className="line-half line-half1"></span>
            <span className="line-half line-half2"></span>
          </span>
          <span className=" lines line3"></span>
        </div>
        <div
          className={
            activateNav
              ? "nav-links-container displayNav moveOutNav"
              : "nav-links-container displayNav moveInNav"
          }
        >
          <Link
            className={
              pathname === "/"
                ? "nav-link active nav-link1"
                : "nav-link nav-link1"
            }
            to="/"
          >
            <span className="span">00</span> HOME
          </Link>
          <Link
            className={
              pathname === "/destination" ? "nav-link active" : "nav-link"
            }
            to="/destination"
          >
            <span className="span">01</span> DESTINATION
          </Link>
          <Link
            className={pathname === "/crew" ? "nav-link active" : "nav-link"}
            to="/crew"
          >
            <span className="span">02</span> CREW
          </Link>
          <Link
            className={
              pathname === "/technology" ? "nav-link active" : "nav-link"
            }
            to="/technology"
          >
            <span className="span">03</span> TECHNOLOGY
          </Link>
        </div>
      </div>
    </Fragment>
  );
};
export default Navigation;
