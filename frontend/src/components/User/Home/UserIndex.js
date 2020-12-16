import React, { useEffect } from "react";
import Header from "./Header";
import "./css/index.scss";

import "./css/utility.scss";
import SlickSlider from "./SlickSlider";
import AboutUs from "./AboutUs";
import OurServices from "./OurServices";
import EvenMoreServices from "./EvenMoreServices";
import OurTeam from "./OurTeam";
import TeamSlider from "./TeamSlider";
import Footer from "./Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ContactUs from './ContactUs'
import './css/mobile.scss'
import api from '../../api/index'

function UserIndex() {

  useEffect(()=>{
    api.pingBackend().then(res=>{
      console.log('res:',res.data)
    }).catch(err=>{
      console.log('err:',err)
    })
  },[])
  return (
    <>
    

      <Header />
      <div id="carousel">
        <SlickSlider />
      </div>
      {/* <AboutUs /> */}
      <OurServices />

      <div id="carousel">
        <EvenMoreServices />
      </div>

      <ContactUs />

      <Footer />

    </>
  );
}

export default UserIndex;
