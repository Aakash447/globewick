import React from "react";
import Header from "./Header";
import "./CSS/Content.scss";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ShowContent1, ShowContent2, ShowContent3, ShowContent4 } from './ShowContent';
import Register from './ContentArea/User/Register'

function Content({toggleSidemenu}) {

  let inlineStyle = {};
  if (toggleSidemenu == false) {
    inlineStyle = {
      width: "87%",
    };
  } else {
    inlineStyle = {
      width: "100%",
    };
  }
  return (
    <div id="RightSide" style={inlineStyle}>
      <Header />
      <Switch>
        <Route path={'/admin/'+'link1'} component={ShowContent1} />
        <Route path={'/admin/'+'link2'} component={ShowContent2} />
        <Route path={'/admin/'+'link3'} component={ShowContent3} />
        <Route path={'/admin/'+'sublink1'} component={ShowContent1} />
        <Route path={'/admin/'+'sublink2'} component={ShowContent2} />
        <Route path={'/admin/'+'sublink3'} component={ShowContent3} />
        <Route path={'/admin/'+'register'} component={Register} />
        <Route path={'/admin/'+'sublink22'} component={ShowContent1} />
        <Route path={'/admin/'+'sublink33'} component={ShowContent2} />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  // console.log('state:',state)
  return {
    toggleSidemenu: state.admin.toggleSidemenu,
  };
};

export default connect(mapStateToProps)(Content);
