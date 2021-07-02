
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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <>
                        <TopMenu/>

     <Router>
    <Switch>
          <Route exact path="/">
            <Home />
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
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/ola">
            <Ola />
          </Route>
          <Route path="/messaging">
            <Messaging />
          </Route>
        </Switch>
  </Router>
 

    </>
  );
}

export default App;
