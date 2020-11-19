import { useEffect } from "react";
import { DonationProvider } from './DonationContext';
import './App.css';
import Toast from './Toast';
import Nav from './Nav';
import Root from './Root';
import Donation from './Donation';
import Association from './Association';
import Schedule from './Schedule';
import Shop from './Shop';
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
          <Toast/>
          <Nav/>
          <div style={{paddingTop:"64px", minHeight: "100vh"}}>
            <div className="alert text-center" style={{color: "#721c24", backgroundColor: "#f8d7da", borderColor: "#f5c6cb", margin:0}}>
               Les paiements ne fonctionneront qu'à partir de minuit !
               <br/>Les dons qui peuvent apparaitre jusque là ne sont que des tests.
               <br/>On se retrouve tous à minuit !
            </div>
            <Switch>
              <Route exact path="/" component={ Root } />
              <Route path="/donate/:id" component={ Donation } />
              <Route path="/association" component={ Association } />
              <Route path="/schedule" component={ Schedule } />
              <Route path="/shop" component={ Shop } />
            </Switch>
          </div>
          <Discord/>
          <Footer/>
      </Router>
    </DonationProvider>
  );
}

export default App;
