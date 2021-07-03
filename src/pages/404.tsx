import Logo from '../components/logo';
import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { checkLogin } from '../components/checkLogin';

const PageNotFound = () => {
    let history = useHistory();
    const returnHome = () => {
        if (checkLogin()) {
            history.push('/');
        } else {
            history.push('/login');
        }
    }


  return (
    <div className="container">
      <div className="login-bxsdas">
        <Logo isBlue={true}/>

        <div className="iasdojwewiasaar2 ioiwq923as2">
            <div>
              <label className="lblds-weds-login-error">
                  <a>404 PAGE NOT FOUND.</a>
              </label>
            <div>
                <a onClick={() => {returnHome()}} className="btn btn-104123 mt-3">GO HOME</a>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
