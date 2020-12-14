import React from "react";
import Content from "./Content";
import Sidebar from "./Sidebar";
import './CSS/Index.scss'
import '../User/Home/css/utility.scss'
function Index() {
  return (
    <>
      <div class="main_wrapper">
        <Sidebar />
        <Content />
      </div>
    </>
  );
}

export default Index;
