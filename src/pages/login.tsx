import Logo from '../components/logo';
import Cookies from 'js-cookie';
import React, { useState, useEffect, useContext } from 'react';
import {checkLogin} from '../components/checkLogin';
import axios from 'axios';
import {
  Redirect, useHistory
} from "react-router-dom";
import Routes from '../routes';



const Login = () => {
  let history = useHistory();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');


  const LoginRequest = async () => {
  
    const loginData = {
      "email": email,
      "password": password
    }
    axios.post('/api/auth/login', loginData)
      .then(async response => {
        if (response.data.error) {
          setError(response.data.error);
        } else {
          setError('');
          console.log(response.data);

          Cookies.set('token', response.data.token,{ expires: 30 });
          Cookies.set('email', response.data.email,{ expires: 30 });
          window.location.href="/";
        }
      })
      .catch((error) => {
        console.log(error);
        setError('Invalid Request');
      })
  }

  return (
    <div className="container">
      <div className="login-bxsdas">
        <Logo isBlue={true}/>

        <div className="iasdojwewiasaar2 ioiwq923as2">
          <form >
            <div>
              <label className="lblds-weds-login-error">
                  <a>{error}</a>
              </label>
            </div>
            <div>
              <label className="lblds-weds">Email</label>
              <input className="form-control" type="text" name="email" onChange={(e) => setEmail(e.target.value)}  />
            </div>
            <div>
              <div className="d-flex justify-content-between">
                
                <label className="lblds-weds">Password</label>
                <label className="lblds-weds">
                  <a href="/">Forgot password?</a>
                </label>
              </div>
              <input className="form-control" type="password" name="password"  onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
              <a onClick={() => LoginRequest()} className="btn btn-104123 mt-3">Sign in</a>
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
