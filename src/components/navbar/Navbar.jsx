import { Link } from 'react-router-dom';
import style from './Navbar.module.css';

function Navbar() {
  return (
    <>
      <nav className={`${style.Navbar} p-3 navbar navbar-expand-lg fixed-top `}>
        <div className="container-fluid d-flex justify-content-around align-items-center">
          <Link className="navbar-brand fs-3 fw-bold text-uppercase text-white" to="#">
            Start Bootstrap
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav text-uppercase fs-5 fw-bold text-white">
              <li className="nav-item">
                <Link className={`nav-link px-3 text-white ${style.actve}`} to="/Portfolio">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link px-3 text-white ${style.actve}`} to="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link px-3 text-white ${style.actve}`} to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
