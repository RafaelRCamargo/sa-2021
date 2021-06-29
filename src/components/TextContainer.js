import React from 'react';
import "./TextContainer.css";

let TextContainer = (props) => {
    return (
            <div className={props.name + " text-container"}>
                <div className="title">
                    <h1>
                        {props.title}
                    </h1>
                </div>
                <div className="text-p">
                    {props.children}
                </div>
            </div>
    )
}

export default TextContainer;