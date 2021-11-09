import { Link, useLocation } from 'react-router-dom';
import config from './config';

const Nav = () => {
  const location = useLocation();
  const navItemClass = url => {
    return "nav-item"+(url===location.pathname && " active")
  }
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <Link className="navbar-brand" to="/">
          <img src={process.env.PUBLIC_URL+'logo512.png'} alt="" style={{height:"38px", width: "auto"}} />
        </Link>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className={navItemClass("/")}>
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className={navItemClass("/lastEdition")}>
              <Link className="nav-link" to="/lastEdition">Last Edition</Link>
            </li>
            <li className={navItemClass("/live")}>
              <Link className="nav-link" to="/live">Live</Link>
            </li>
          </ul>
          <ul className="navbar-nav navbar-right">
            <li className="nav-item">
              <span className="nav-link text-warning text-center">
                Dernière édition {config.total.toFixed(2)}€
              </span>
            </li>
          </ul>

        </div>
      </nav>
    </div>
  );
}

export default Nav;
