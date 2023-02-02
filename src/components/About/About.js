import React from 'react';
import Logo from '../img/logo2.png';
import Photo from '../Gallery/images/25.jpg';
import Social from '../Social/Social';



function About() {
  return (
    <div>
      <section className="page-section" id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 text-center">
              <img src={Logo} width="60%" height="auto" />
             
              <p className="mt-0 text-start align-self-start">
                I am Brett, and I am currently a Husband and father to one sassy little girl. I grew up in Salt Lake City, UT. matured in Tampa, FL.  became an adult in Ft. Worth, TX.  and currently reside in Appleton WI.
              </p>
             
              <p className="mt-0 text-start">
                I first fell in love with photography in high school where I learned how to develop film and make my own prints in the darkroom. This continued into college where it became my creative outlet. Although my camera has changed over the years it has always been my most prized possession. I love being able to show the way I see things.
              </p>
              <p className="mt-0 text-start">
                During the times moving from city to city it became clear that photography was where my passion was. Shortly after, Sevy Studios was created. It has been 10 years since then and my work has come so far. I am proud to now offer the upmost in quality and I hope that you will see that through my work.
              </p>
              <p className="mt-0 text-start">
                I would describe my work as realistic, intimate and subtle. I aim to create images you will use for many years to come. I would be honored to capture part of your story.
              </p>
              <hr className="divider divider-dark" />
              <div className="text-white-75 mb-4 text-center">
                {/* <Social /> */}
              <img src={Photo} width="50%" height="auto" />
              </div>

              {/* <a class="btn btn-light btn-xl" href="#services">Get Started!</a> */}
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}

export default About