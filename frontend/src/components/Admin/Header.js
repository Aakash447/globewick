import React, { useEffect, useState, useRef } from "react";
import "./CSS/Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faEnvelope,
  faBell,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { ToggleSidemenu } from "../store/Actions/admin";
import { Link } from "react-router-dom";

import api from '../api/index';


function Header(props) {
  const [togSide, setTogSide] = useState(null);
  const [envelopTog, setEnvelopTog] = useState(false);
  const [notofTog, setNotofTog] = useState(false);
  const [profile, setProfile] = useState(false);

  useEffect(() => {
    // console.log("useEffect state togSide:", togSide);
    // console.log("Header props.toggleSidemenu:", props.toggleSidemenu);
    setTogSide(props.toggleSidemenu);
  }, [props.toggleSidemenu]);
  //console.log("envelopTog:", envelopTog);
  // console.log("outside  state togSide", togSide);

  const handleLogout = () => {
    api.logoutUser().then((res)=>{
      console.log('res',res.data)
      if(res.data.success==true){
        window.location = 'http://localhost:3000/'
      }
    }).catch((err)=>{
      console.log('err:',err)
    })
  }

  return (
    <>
      <div className="header">
        <div
          className="logo"
          style={{
            float: "left",
            marginLeft: "3px",
            marginTop: "12px",
            backgroundColor: "rgb(70, 185, 70)",
            padding: "7px 9px",
            // borderBottom: "1px solid black",
          }}
          onClick={props.ToggleSidemenu}
        >
          <FontAwesomeIcon
            icon={faBars}
            // style={{ fontSize: "1.3rem" }}
            className="fontBars"
          />
        </div>

        {/* ============= Right Side Nav   1- Profile =======================  */}

        <div
          style={{
            float: "right",
            margin: "11px 50px 0 10px",
            position:'relative'
          }}
          onClick={() => {
            //profile
            //envelopTog
            //notofTog
            if (envelopTog == true) {
              setEnvelopTog(false);
            }
            if(notofTog==true){
              setNotofTog(false);
            }
            setProfile(!profile);
          }}
        >
          <FontAwesomeIcon
            icon={faUser}
            style={{ fontSize: "1.2rem", color: "black" }}
            // className="fontBars"
          />
          <div id="profile" className={profile == false ? "Inactive" : ""}>
            <div>Profile</div>
            <div>Settings</div>
            <div>Change Password</div>
            <div><button onClick={handleLogout} >Logout</button></div>
      </div>
        </div>
        {/* ======== Two Bell ========== */}

        <div
          style={{
            float: "right",
            margin: "0 20px",
            padding: "12px 22px 0px 0px",
            position: "relative",

            // borderBottom:'1px solid black'
          }}
          className={
            "displayInactive" +
            (props.toggleSidemenu === true ? "displayActive" : "")
          }
          onClick={() => {
            //profile
            //envelopTog
            //notofTog
            if (profile == true) {
              setProfile(false);
            }
            if(envelopTog==true){
              setEnvelopTog(false);
            }
            setNotofTog(!notofTog);
          }}
        >
          <FontAwesomeIcon
            icon={faBell}
            style={{ fontSize: "1.2rem", color: "black" }}
          />
          <span
            style={{
              position: "absolute",
              top: "0",
              left: "0.7rem",
              paddingRight: "1px",
              backgroundColor: "#46b946",
            }}
          >
            16
          </span>

          {/* Notification Block  */}
      <div id="notif_block" className={notofTog == false ? "Inactive" : ""} >
        <div className="row">
          <div className="title">
            <div>
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ fontSize: "0.8rem", color: "black" }}
              />
            </div>
            <p>You have 16 messages</p>
          </div>
          <span> 4 min ago </span>
        </div>
      </div>
      {/* Notification ends here */}

        </div>

        {/* ============== Three  Envelop==================  */}

        <div
          style={{
            float: "right",
            margin: "0 20px",
            padding: "12px 22px 0px 0px",
            position: "relative",
          }}
          className={
            "displayInactive" +
            (props.toggleSidemenu === true ? "displayActive" : "")
          }
          onClick={() => {
            //profile
            //envelopTog
            //notofTog
            if (profile == true) {
              setProfile(false);
            }
            if(notofTog==true){
              setNotofTog(false);
            }
            setEnvelopTog(!envelopTog);
          }}
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ fontSize: "1.2rem", color: "black" }}
          />
          <span
            style={{
              position: "absolute",
              top: "0",
              left: "1rem",
              paddingRight: "1px",
              backgroundColor: "orange",
            }}
          >
            16
          </span>

          <div id="msg_block" className={envelopTog == false ? "Inactive" : ""}>
        <div className="row">
          <div>
            <img src="./images/aakash.jpeg"></img>
          </div>

          <div id="block_content">
            <p>Lorem Ipsum is simply dummy text of the printing</p>
            <div>
              
              <span>3 d ago 7:58 pm</span> <span>10.06.2014</span>
            </div>
          </div>
          <p>46hr ago</p>
        </div>

        {/* ========== 2 ===========  */}
        <div className="row">
          <div>
            <img src="./images/aakash.jpeg"></img>
          </div>

          <div id="block_content">
            <p>Lorem Ipsum is simply dummy text of the printing</p>
            <div>
              {" "}
              <span>3 d ago 7:58 pm</span> <span>10.06.2014</span>{" "}
            </div>
          </div>
          <p>46hr ago</p>
        </div>

        {/* ========== 3 ===========  */}
        <div className="row">
          <div>
            <img src="./images/aakash.jpeg"></img>
          </div>

          <div id="block_content">
            <p>Lorem Ipsum is simply dummy text of the printing</p>
            <div>
              {" "}
              <span>3 d ago 7:58 pm</span> <span>10.06.2014</span>{" "}
            </div>
          </div>
          <p>46hr ago</p>
        </div>
      </div>
      {/* msg block ends here */}
        </div>
      </div>
      {/* ======================= Blocks ========================== */}


      

      
    </>
  );
}

const mapStateToProps = (state) => {
  // console.log('state:',state)
  return {
    toggleSidemenu: state.admin.toggleSidemenu,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ToggleSidemenu: () => dispatch(ToggleSidemenu()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
