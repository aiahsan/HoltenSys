import React, { useState } from "react";
import Logo from '../components/logo'
const Login = () => {
  return (
    <div className="container">
      <div className="login-bxsdas">
        <Logo isBlue={true}/>

        <div className="iasdojwewiasaar2 ioiwq923as2">
          <form >
            <div>
              <label className="lblds-weds">Email</label>
              <input className="form-control" type="text" name="username"  />
            </div>
            <div>
              <div className="d-flex justify-content-between">
                {" "}
                <label className="lblds-weds">Password</label>
                <label className="lblds-weds">
                  <a href="">Forgot password?</a>
                </label>
              </div>
              <input className="form-control" type="password" name="password"  />
            </div>
            <div>
              <button className="btn btn-104123 mt-3">Sign in</button>
            </div>
          </form>
        </div>
        <div>
          <button className="btn mt-4 aodsfid-fjasieer">
            New to HoltenSys? <a href="/signup">Create an account.</a>
          </button>
        </div>
       
      </div>
    </div>
  );
};

export default Login;
