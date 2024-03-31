import React from "react";
import { useRef } from "react";
import CarouselImg from "./CarouselImg"
import '../index.css'

const imgs = useRef(null); 


const homecarousel = () => { 
    const displayImg = [
        {id: 0, route: "../assets/images/meteor-shower.png", desc:"meteor shower art"},
        {id: 1, route: "../assets/images/romw.png", desc:"romw art"},
        {id: 2, route: "../assets/images/kaveh-sad.png", desc:"kaveh (sad) art"}
    ]
    
    return (
        <div className="homecarousel">
            <div className="carousel-img" ref={imgs}> 
                {displayImg.map((indivImg) => (
                    <CarouselImg Link={indivImg.route} Desc={indivImg.desc}/>
                ))
                }
            </div>

        </div>

    );
}

export default homecarousel;