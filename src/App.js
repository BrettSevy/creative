import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Gallery from './components/Gallery/Gallery'
import About from './components/About/About';
import Services from './components/Services/Services';
// import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ControlledCarousel from './components/Masthead/Carousel';
import Header from './components/Header/Header';


function App() {
  return (

    <div className="App">
      <Header/>
      <ControlledCarousel/>
      <About></About>
      <Gallery></Gallery>
      <Services></Services>

      {/* <!-- Call to action--> */}
      {/* <section class="page-section bg-dark text-white">
        <div class="container px-4 px-lg-5 text-center">
          <h2 class="mb-4">Free Download at Start Bootstrap!</h2>
          <a class="btn btn-light btn-xl" href="https://startbootstrap.com/theme/creative/">Download Now!</a>
        </div>
      </section> */}

      {/* <Contact></Contact> */}
      <Footer></Footer>

    </div>

  );
}

export default App;

