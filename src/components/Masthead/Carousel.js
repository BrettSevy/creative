import * as React from 'react';
import { useState } from 'react';
import { Carousel, } from 'react-bootstrap'
import photo1 from '..//Gallery/images/1a.jpg'
import photo2 from '..//Gallery/images/2b.jpg'
import photo3 from '..//Gallery/images/3c.jpg'
import photo4 from '..//Gallery/images/4d.jpg'
import photo5 from '..//Gallery/images/5e.jpg'
// import Logo from '../img/Logo.png';





function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (

        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>

                <img
                    className="d-block w-100"
                    src={photo1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    {/* <h3>First slide label</h3> */}
                    {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={photo2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    {/* <h3>Second slide label</h3> */}
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={photo3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    {/* <h3>Third slide label</h3> */}
                    <p>
                        {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>

                <img
                    className="d-block w-100"
                    src={photo4}
                    alt="Fourth slide"
                />
                <Carousel.Caption>
                    {/* <h3>First slide label</h3> */}
                    {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>

                <img
                    className="d-block w-100"
                    src={photo5}
                    alt="Fifth slide"
                />
                <Carousel.Caption>
                    {/* <h3>First slide label</h3> */}
                    {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>


        </Carousel>


    );
}

//   render(<ControlledCarousel />);

export default ControlledCarousel;