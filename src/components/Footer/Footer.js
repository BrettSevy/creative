import React from 'react';
import logo from '..//img/Logo.png';



function Footer() {
    return (
        <div>
            <footer class="bg-light py-5">
                <div class="container px-4 px-lg-5"><div class="small text-center text-muted">Copyright &copy; 2022  -      
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