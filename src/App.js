import './App.css';
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
    <Router>
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
  );
}

export default App;
