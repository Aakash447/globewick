import React, { useState, useEffect } from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import "./login.scss";
import api from '../../api/index';

function Login(props) {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    let local_data = {...data}
    local_data[e.target.name] = e.target.value;
    setData(local_data);
  }

  const handleSubmit = () => {
    api.loginUser(data).then(res=>{
      console.log('res:',res.data)
      if(res.data.auth){
        props.history.push('/admin')
      }

    }).catch(err=>{
      console.log('error',err)
    })
  }


  useEffect(()=>{
    console.log('data:',data)
  })

  return (
    <>
      <div id="login-container">
        <Header />
        <div className="container">
          <form>
            <h1>Login Form</h1>
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

            {/* <br /> */}
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

            {/* <br /> */}
            <div className="form-control">
              <button type="button" className="btn" style={{ padding:'9px 20px' }} onClick={handleSubmit} >Submit</button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;
