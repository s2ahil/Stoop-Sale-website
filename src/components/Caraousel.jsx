import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Arrow from "../images/Arrow.svg"
const heroImages = [
    {
        imgUrl: "https://live.staticflickr.com/169/474099915_5683a2eabd_b.jpg",
        alt: "tchotchkes",
    },
    {
        imgUrl: "https://price-wise-next-js-delta.vercel.app/assets/images/hero-2.svg",
        alt: "purses",
    },
    {
        imgUrl: "https://price-wise-next-js-delta.vercel.app/assets/images/hero-3.svg",
        alt: "home goods",
    },
    {
        imgUrl: "https://price-wise-next-js-delta.vercel.app/assets/images/hero-5.svg",
        alt: "chair",
    },
];

const Caraousel = () => {
    return (
        <div className='hero-carousel'>
            <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                interval={2000}
                showArrows={false}
                showStatus={false}
            >
                {heroImages.map((item, index) => (
                  
                        <img
                            src={item.imgUrl}
                            alt={item.alt}
                            width={484}
                            height={484}
                            className="object-contain"
                        />
               
                ))}

                
            </Carousel>
            <img src={Arrow} 
                    alt="arrow"
                    width={175}
                    height={175}
                    className="max-xl:hidden absolute -left-[25%] bottom-0 z-0" />
        </div>
    );
};

export default Caraousel;