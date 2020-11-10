import { useEffect } from "react";
import { DonationProvider } from './DonationContext';
import './App.css';
import Toast from './Toast';
import Nav from './Nav';
import Root from './Root';
import Donation from './Donation';
import Association from './Association';
import Schedule from './Schedule';
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
          <Toast/>
          <Nav/>
          <div style={{paddingTop:"64px"}}>
            <Switch>
              <Route exact path="/" component={ Root } />
              <Route path="/donate/:id" component={ Donation } />
              <Route path="/association" component={ Association } />
            </Switch>
          </div>
          <Footer/>
      </Router>
    </DonationProvider>
  );
}

export default App;
