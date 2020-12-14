import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCode,faCode,faHandsHelping } from '@fortawesome/free-solid-svg-icons'

function OurServices() {
  return (
    <>
      <div id="our-services">
        <div className="container">
          <div className="column">
            <h1>Our Services</h1>
            <div className="line"></div>
            <div className="services">
              <div className="box">
               <FontAwesomeIcon className="fa-2x" icon={faFileCode}/>
                <h3>Web Development</h3>
                <p>
                  
                </p>
              </div>
              <div  className="box">
              <FontAwesomeIcon className="fa-2x" icon={faCode}/>
                <h3>Software Development</h3>
                <p>
                  
                </p>
              </div>
              <div className="box">
              <FontAwesomeIcon className="fa-2x" icon={faHandsHelping}/>
                <h3>CRM Development</h3>
                <p>
                  
                </p>
              </div>
            </div>
            <a href="#" className="btn btn-red">
              More Services
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurServices;
