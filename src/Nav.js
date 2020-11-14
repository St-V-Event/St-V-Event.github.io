import logo from './logo.svg';
import { Link, useLocation } from 'react-router-dom';
import useDonations from './DonationContext';

const Nav = () => {
  let {donations} = useDonations();
  const totalDonations = () => Object.values(donations).reduce((acc,val) => acc + val, 0);

  let location = useLocation();

  const navItemClass = url => {
    return "nav-item"+(url===location.pathname && " active")
  }

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
      </button>
      <Link className="navbar-brand" to="/">
        <img src="/logo192.png" alt="" />
      </Link>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className={navItemClass("/")}>
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className={navItemClass("/association")}>
            <Link className="nav-link" to="/association">Association</Link>
          </li>
          <li className={navItemClass("/schedule")}>
            <Link className="nav-link" to="/schedule">Schedule</Link>
          </li>
          <li className={navItemClass("/shop")}>
            <Link className="nav-link" to="/shop">Shop</Link>
          </li>
        </ul>
        <ul className="navbar-nav navbar-right">
          <li className="nav-item">
            <Link to="/donate/team-organisateur" className="btn text-dark btn-warning font-weight-bold">
              Donate!
            </Link>
          </li>
          <li className="nav-item">
            <span className="nav-link text-warning text-center">
              Total {totalDonations().toFixed(2)}€
            </span>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Nav;
