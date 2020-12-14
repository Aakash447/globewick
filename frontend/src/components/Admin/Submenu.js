import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Submenu(props) {
  useEffect(() => {
    // console.log("props:", props);
  });
  let listItems = [];
  if (props.data) {
    listItems = props.data.map((row, index) => 
    <li><Link to={'/admin'+row.path}>{row.showName}</Link></li>
    );
  }
  console.log('items:',listItems)

  let style = {
    display: "block",
    // textAlign:'left'
  };

  return (
    <>
      <ul style={style}>
          {listItems}
      </ul>
    </>
  );
}

export default Submenu;
