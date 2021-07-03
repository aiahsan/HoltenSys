
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css'
import Home from './pages/Home'
import Konkursbo from './pages/Konkursbo'
import Lonnskrav  from './pages/Lonnskrav'
import KonkursboErvi from './pages/KonkursboErvi'
import Ola from './pages/Ola'
import Messaging from './pages/Messaging'
import TopMenu from './components/topmenu'
import Login from './pages/login'
import Signup from './pages/signup'
import Logout from './pages/logout'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import React from 'react';
import {checkLogin} from './components/checkLogin';
import PageNotFound from './pages/404';

const LoginRoutes=()=>{
  return <Switch>
     <Route path="/">
                <Login />
            </Route>
            <Route path="/signup">
                <Signup />
      </Route>

  </Switch>
}

const AuthRoutes=()=>{
  return    <Switch>
         
  <Route exact path="/">
      <Home />
  </Route>
  
  <Route exact path="/logout">
      <Logout />
  </Route>
  <Route exact path="/konkursbo">
  <Konkursbo />
  </Route>
  <Route path="/lonnskrav">
  <Lonnskrav />
  </Route>
  <Route path="/konkursboervi">
  <KonkursboErvi />
  </Route>

  <Route path="/ola">
  <Ola />
  </Route>
  <Route path="/messaging">
  <Messaging />
  </Route>

  <Route path="/404">
  <PageNotFound />
  </Route>



</Switch>

}
function Routes() {
  
    return (
      <>
        <Router>
          <TopMenu/>
          {
            checkLogin()==true?<AuthRoutes/>:<LoginRoutes/>
          }
        </Router>
  

      </>
    );
}

export default Routes;

