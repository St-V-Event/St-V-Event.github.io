import { useEffect } from "react";
import './App.css';
import Nav from './Nav';
import Root from './Root';
import Schedule from './Schedule';
import Shop from './Shop';
import Live from './Live';
import Association from './Association';
import Sablon from './Sablon';
import Discord from './Discord';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
        <Nav/>
        <div style={{paddingTop:"64px", minHeight: "100vh"}}>
          <div className="alert alert-success text-center mb-0">
             Les dons ne seront possibles qu'à partir de lundi 15 novembre 2021 à 18h00.
          </div>
          <Switch>
            <Route exact path="/" component={ Root } />
            <Route path="/shop" component={ Shop } />
            <Route path="/live" component={ Live } />
            <Route path="/association" component={ Association } />
            <Route path="/sablon" component={ Sablon } />
          </Switch>
        </div>
        <Discord/>
        <Footer/>
    </Router>
  );
}

export default App;
