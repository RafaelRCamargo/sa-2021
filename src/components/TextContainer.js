import React from 'react';
import "./TextContainer.css";
import AOS from 'aos';

let TextContainer = (props) => {
    AOS.init();
    return (
            <div className={props.name + " text-container"} >
                <div className={props.name + " title"} data-aos="zoom-in-up" data-aos-duration="1000">
                    <h1 >
                        {props.title}
                    </h1>
                </div>
                <div className={props.name + " text-p"} data-aos="fade-in" data-aos-duration="1000" data-aos-delay="400">
                    {props.children}
                </div>
                
                {props.src === undefined ? '' : <div className={props.name + " image-div"}><img src={props.src} alt={props.title} /></div>}

            </div>
    )
}

export default TextContainer;