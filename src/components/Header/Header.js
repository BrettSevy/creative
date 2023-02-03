import logo from '..//img/logo2.png';
import '../Header/Header.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, } from 'react-bootstrap'

// import { Navbar, Nav } from 'react-bootstrap/Navbar'

function Header() {
    return (
        <div className="Header">
            <Navbar bg="transparent" variant="dark"
                fixed="top" expand="sm" collapseOnSelect >
                <div class="container">
                    <div class="row justify-content-md-start">
                        <div class="col col-lg-2">
                            <Navbar.Brand href="/">
                                <img
                                    alt="Sevy Studios"
                                    src={logo}
                                    width="75"
                                    height="75"
                                />
                            </Navbar.Brand>
                        </div>
                    </div>

                    <div class="col col-lg-2">
                    </div>

                    <div class="col md-auto-2">
                        <Navbar.Toggle className="coloring" />
                        <Navbar.Collapse>
                            <Nav className="position-absolute top-50 end-0 translate-middle">
                                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                                <Nav.Link href="#about">About</Nav.Link>
                                <Nav.Link href="#services">Services</Nav.Link>
                                {/* <Nav.Link href="#footer">contact</Nav.Link> */}
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                
                </div>
            </Navbar>
        </div >

    );
}

export default Header;