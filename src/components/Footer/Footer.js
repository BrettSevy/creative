import React from 'react';
import logo from '..//img/logo2.png';
// import { Instagram } from "react-bootstrap-icon";



function Footer() {
    return (
        <div>
            <footer class="bg-light py-5">
                <div class="container px-4 px-lg-5"><div class="small text-center text-muted"><a href="mailto: justbrettt@gmail.com">Email</a>
                </div></div>

                <div class="container px-4 px-lg-5"><div class="small text-center text-muted">801.915.9397
                </div></div>

                <div class="container px-4 px-lg-5"><div class="small text-center text-muted"><a href="https://www.instagram.com/sevy.studios/">Follow Us</a>
                </div></div>

                <div class="container px-4 px-lg-5"><div class="small text-center text-muted">Appleton, WI
                </div></div>

                <div class="container px-4 px-lg-5"><div class="small text-center text-muted">Copyright &copy; 2023  -
                    <img
                        alt="Sevy Studios"
                        src={logo}
                        width="75"
                        height="75"
                    /></div></div>
            </footer>
        </div>

    );
}

export default Footer