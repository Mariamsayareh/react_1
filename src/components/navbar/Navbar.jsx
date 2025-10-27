import style from './Navbar.module.css';

function Navbar() {
  return (
    <>
      <nav className={`${style.Navbar} p-3 navbar navbar-expand-lg fixed-top `}>
        <div className="container-fluid d-flex justify-content-around align-items-center">
          <a className="navbar-brand fs-3 fw-bold text-uppercase text-white" href="#">
            Start Bootstrap
          </a>

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
                <a className={`nav-link px-3 text-white ${style.actve}`} href="#">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link px-3 text-white ${style.actve}`} href="#">About</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link px-3 text-white ${style.actve}`} href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
