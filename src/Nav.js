import logo from './logo.svg';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
      </button>
      <a className="navbar-brand" href="#">
        <img src="/logo192.png" alt="" />
      </a>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/association">Association</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/schedule">Schedule</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Shop</a>
          </li>
        </ul>
        <ul className="navbar-nav navbar-right">
          <li className="nav-item">
            <Link to="/donate/any" className="nav-link btn text-dark btn-warning float-right">
              Donate!
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Nav;