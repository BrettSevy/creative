import logo from '..//img/Logo.png';
import '../Header/Header.css';
import 'bootstrap/dist/css/bootstrap.css';
// import { Nav, Navbar, } from 'react-bootstrap';
// import { Navbar, Nav } from 'react-bootstrap/Navbar'
// import { Link as RouterLink } from 'react-router-dom'

function Social() {
    return (
        <nav className="navbar" id="about">
        <div className="container-fluid">
          <a className="navbar-brand" href="brettsevy.com">
            <img src={logo} alt="" width="100" height="auto" className="d-inline-block align-text-top"/>
          </a>
          <a className="navbar-brand" href="brettsevy.com">
          <i class="bi-github fs-1"></i>
          </a>
          <a className="navbar-brand" href="brettsevy.com">
          <i class="bi-instagram fs-1"></i>
          </a>

        </div>
      </nav>

    );
}

export default Social;