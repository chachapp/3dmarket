import React from "react";
import "../SCSS/Art.scss"

function Art({title, thumbnailUrl}) {

    return(
        <div className="art-box">
            <img src={thumbnailUrl} alt={title}></img>
            <h4>왜안나와</h4>
            <h3>{title}</h3>
        </div>
    );
}

export default Art;