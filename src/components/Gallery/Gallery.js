import React, { useState } from 'react';
// import { useState } from 'react';
import './Gallery.css';

// import image1 from "./images/1.jpg";
// import image2 from "./images/2.jpg";
// import image3 from "./images/3.jpg";
// import image4 from "./images/4.jpg";
// import image5 from "./images/5.jpg";
import image6 from "./images/6.jpg";
import image7 from "./images/7.jpg";
import image8 from "./images/8.jpg";
import image9 from "./images/9.jpg";
import image10 from "./images/10.jpg";
import image11 from "./images/11.jpg";
import image12 from "./images/12.jpg";
import image13 from "./images/13.jpg";
import image14 from "./images/14.jpg";
import image15 from "./images/15.jpg";
import image16 from "./images/16.jpg";
import image17 from "./images/17.jpg";
import image18 from "./images/18.jpg";
import image19 from "./images/19.jpg";
import image20 from "./images/20.jpg";
import image21 from "./images/21.jpg";
import image22 from "./images/22.jpg";
import image23 from "./images/23.jpg";
import image24 from "./images/24.jpg";
import image25 from "./images/25.jpg";
import image26 from "./images/26.jpg";
import image27 from "./images/27.jpg";
import image28 from "./images/28.jpg";
import image29 from "./images/29.jpg";
import image30 from "./images/30.jpg";
import image31 from "./images/31.jpg";
import image32 from "./images/32.jpg";
import image33 from "./images/33.jpg";
import image34 from "./images/34.jpg";
import image35 from "./images/35.jpg";
import image36 from "./images/36.jpg";
import image37 from "./images/37.jpg";
import image38 from "./images/38.jpg";
import image39 from "./images/39.jpg";
import image40 from "./images/40.jpg";
import image41 from "./images/41.jpg";
import image42 from "./images/42.jpg";
import image43 from "./images/43.jpg";
import image44 from "./images/44.jpg";
import image45 from "./images/45.jpg";
import image46 from "./images/46.jpg";
import image47 from "./images/47.jpg";



const Gallery = () => {

  const data = [
    {
      id: 6,
      imgSrc: image6,
    },
    {
      id: 7,
      imgSrc: image7,

    },
    {
      id: 8,
      imgSrc: image8,

    },
    {
      id: 9,
      imgSrc: image9,

    },
    {
      id: 10,
      imgSrc: image10,

    },
    {
      id: 11,
      imgSrc: image11,

    },
    {
      id: 12,
      imgSrc: image12,

    },
    {
      id: 13,
      imgSrc: image13,

    },
    {
      id: 14,
      imgSrc: image14,

    },
    {
      id: 15,
      imgSrc: image15,

    },
    {
      id: 16,
      imgSrc: image16,

    },
    {
      id: 17,
      imgSrc: image17,

    },
    {
      id: 18,
      imgSrc: image18,

    },
    {
      id: 19,
      imgSrc: image19,

    },
    {
      id: 20,
      imgSrc: image20,

    },
    {
      id: 21,
      imgSrc: image21,

    },
    {
      id: 22,
      imgSrc: image22,

    },
    {
      id: 23,
      imgSrc: image23,

    },
    {
      id: 24,
      imgSrc: image24,

    },
    {
      id: 25,
      imgSrc: image25,

    },
    {
      id: 26,
      imgSrc: image26,

    },
    {
      id: 27,
      imgSrc: image27,

    },
    {
      id: 28,
      imgSrc: image28,

    },
    {
      id: 29,
      imgSrc: image29,

    },
    {
      id: 30,
      imgSrc: image30,

    },
    {
      id: 31,
      imgSrc: image31,

    },
    {
      id: 32,
      imgSrc: image32,

    },
    {
      id: 33,
      imgSrc: image33,

    },
    {
      id: 34,
      imgSrc: image34,

    },
    {
      id: 35,
      imgSrc: image35,

    },
    {
      id: 36,
      imgSrc: image36,

    },
    {
      id: 37,
      imgSrc: image37,

    },
    {
      id: 38,
      imgSrc: image38,

    },
    {
      id: 39,
      imgSrc: image39,

    },
    {
      id: 40,
      imgSrc: image40,

    },
    {
      id: 41,
      imgSrc: image41,

    },
    {
      id: 42,
      imgSrc: image42,

    },
    {
      id: 43,
      imgSrc: image43,

    },
    {
      id: 44,
      imgSrc: image44,

    },
    {
      id: 45,
      imgSrc: image45,

    },
    {
      id: 46,
      imgSrc: image46,

    },
    {
      id: 47,
      imgSrc: image47,

    },


  ]

  const [modal, setModal] = useState(false);
  const [tempimgSrc, setTempimgSrc] = useState('');

  const getImg = (imgSrc) => {
    setTempimgSrc(imgSrc);
    setModal(true);
    console.log(imgSrc);
  }

  return (
    <>
      <div className={modal ? "modal open" : "modal"}>
        <img src={tempimgSrc} />
        <div> onClick={() => setModal(false)} </div>
      </div>

      {/* <div>
        <div> className="portfolioheader" mb={10}</div>
          <Typography variant="h3" data-aos="fade-right" data-aos-duration="1000">PORTFOLIO</Typography>
          <Divider />
        
        </div> */}
      <div className="gallery" id="portfolio">
        {data.map((item, index) => {
          return (
            <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
              <img src={item.imgSrc} style={{ width: '100%' }} />
            </div>

          )
        })}
      </div>
    </>
  )
}



export default Gallery