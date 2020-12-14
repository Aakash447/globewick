import React, { useState, useEffect, useRef } from "react";
import "./CSS/Sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import Submenu from "./Submenu";
import routes from "./routes.json";
import { Link } from "react-router-dom";

function Sidebar({ toggleSidemenu }) {
  const [toggleSub, setToggleSub] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });
  useEffect(() => {
    routes.routes.map((row, index) => {
      if (row.childRoutes) {
        row.childRoutes.map((cr, ci) => {
        });
      }
    });
  }, []);
  let inlineStyle = {};
  if (toggleSidemenu == false) {
    inlineStyle = {
      display: "block",
      width: "13%",
    };
  } else {
    inlineStyle = {
      display: "none",
      width: "0%",
    };
  }

  const toggleSubmenu = (i) => {
    setToggleSub({
      ...toggleSub,
      [i]: !toggleSub[i],
    });
  };

  return (
    <>
      <div className="sidebar" style={inlineStyle}>
        <div className="logo">
          <Link to="/admin" ><img src="/images/globewick_logo.png"/></Link>
        </div>
        <ul>
          {routes.routes.map((row, index) => {
            return (
              <li
                onClick={() => toggleSubmenu(index)}
                className={toggleSub[index] ? "linkActive" : ""}
              >
                {
                  row.childRoutes==null ? 
                <span><Link to={'/admin'+row.path}>{row.showName}</Link></span>
                  : 
                  <span>{row.showName}</span>
                }
                
                <i>
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    className={"icon" + (toggleSub[index] ? "active" : "")}
                  />
                </i>
                {toggleSub[index] ? <Submenu data={row.childRoutes} /> : null}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  // console.log('state:',state)
  return {
    toggleSidemenu: state.admin.toggleSidemenu,
  };
};

export default connect(mapStateToProps)(Sidebar);
