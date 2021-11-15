import { useEffect } from "react";
import './App.css';
import { DonationProvider } from './DonationContext';
import Nav from './Nav';
import Root from './Root';
import Schedule from './Schedule';
import Shop from './Shop';
import Live from './Live';
import Association from './Association';
import Sablon from './Sablon';
import Donation from './Donation';
import Discord from './Discord';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <DonationProvider>
      <Router>
          <Nav/>
          <div style={{paddingTop:"64px", minHeight: "100vh"}}>
            <Switch>
              <Route exact path="/" component={ Root } />
              <Route path="/shop" component={ Shop } />
              <Route path="/live" component={ Live } />
              <Route path="/association" component={ Association } />
              <Route path="/sablon" component={ Sablon } />
              <Route path="/donate" component={ Donation } />
            </Switch>
          </div>
          <Discord/>
          <Footer/>
      </Router>
    </DonationProvider>
  );
}

export default App;
