import React, { useState, useEffect } from "react";
import "../css/utility.scss";
import "../css/index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import api from '../../../api/index';

function Register() {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    let local_data = { ...data };
    local_data[e.target.name] = e.target.value;
    setData(local_data);
    // console.log(e.target.name, " : ", e.target.value);
  };
  useEffect(()=>{
    console.log('data: ',data)
  },[data])

  const handleSubmit = () => {
    api.registerUser(data).then(res=>{
      console.log('res:',res.data)
    }).catch(err=>{
      console.log('error:',err)
    })
  }
  return (
    <>
      <div id="register-user">
        <div className="show">
          <form >
            <FontAwesomeIcon className="fa-3x" icon={faShieldAlt} />
            <div className="form-control">
              <label>FirstName:</label>
              <input
                type="text"
                value={data.firstName}
                name="firstName"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="form-control">
              <label>LastName:</label>
              <input
                type="text"
                value=""
                value={data.lastName}
                name="lastName"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="form-control">
              <label>Username:</label>
              <input
                type="text"
                value=""
                value={data.username}
                name="username"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="form-control">
              <label>Password:</label>
              <input
                type="password"
                value=""
                value={data.password}
                name="password"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="form-control">
              <label>Confirm Password:</label>
              <input
                type="password"
                value=""
                value={data.confirm_password}
                name="confirm_password"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="form-control">
              <div className="button">
              <button className="btn btn-red" type="button" onClick={handleSubmit} >Submit</button>
              </div>
            
            </div>
            
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
