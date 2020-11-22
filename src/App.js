import { useEffect } from "react";
import { DonationProvider } from './DonationContext';
import './App.css';
import Toast from './Toast';
import Nav from './Nav';
import Root from './Root';
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
            <div className="alert alert-success text-center mb-0">
               Merci à tous pour tous vos dons qui dépassent tout ce que l'on pouvait espérer !
               <br/>Merci à tous les cercles d'avoir jouer le jeu et d'avoir rendu cela possible !
               <br/>Merci pour le soutient de l'ULB et de l'ACE. La Team Orga.
               <br/>
               <br/>Pour celles et ceux qui n’auraient pas encore eu l’occasion de faire un don,
               <br/>il vous est toujours possible de faire un virement bancaire (jusqu’au mercredi 25/11)
               <br/>directement sur le compte de l’ACE : BE52 3631 1343 8409 avec la communication : « Don quête sociale 2020 ».
            </div>
            <Switch>
              <Route exact path="/" component={ Root } />
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
