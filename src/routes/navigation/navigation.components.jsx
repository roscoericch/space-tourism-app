import { Outlet, Link, useLocation } from "react-router-dom";
import { useState, Fragment, useContext } from "react";
import { ActiveContext } from "../../Contexts/State.contexts";
import { ReactComponent as SpaceLogo } from "../../assets/shared/logo.svg";
import "./navigation.style.scss";
const Navigation = () => {
  const { pathname } = useLocation();
  return (
    <Fragment>
      <Outlet />
      <div className="navigation">
        <Link className="navigation-logo" to="/">
          <SpaceLogo className="logo" />
        </Link>
        <div className="border-line"></div>
        <div className="nav-links-container">
          <Link
            className={pathname === "/" ? "nav-link active" : "nav-link"}
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
