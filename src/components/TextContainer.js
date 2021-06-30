import React from 'react';
import "./TextContainer.css";

let TextContainer = (props) => {
    return (
            <div className={props.name + " text-container"}>
                <div className={props.name + " title"}>
                    <h1>
                        {props.title}
                    </h1>
                </div>
                <div className={props.name + " text-p"}>
                    {props.children}
                </div>
                
                {props.src === undefined ? '' : <div className={props.name + " image-div"}><img src={props.src} alt={props.title} /></div>}

            </div>
    )
}

export default TextContainer;