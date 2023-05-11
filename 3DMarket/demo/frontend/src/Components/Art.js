import React, { useState } from "react";
import "../SCSS/Art.scss";
import { Link } from "react-router-dom";

function Art({ title, thumbnailUrl }) {
  const [heart, setHeart] = useState(
    "https://cdn-icons-png.flaticon.com/512/812/812327.png"
  );

  const onClickHeart = () => {
    if (heart === "https://cdn-icons-png.flaticon.com/512/812/812327.png") {
      // TODO : 차후 수정...
      setHeart("https://cdn-icons-png.flaticon.com/512/803/803087.png");
    } else {
      setHeart("https://cdn-icons-png.flaticon.com/512/812/812327.png");
    }
  };

  return (
    <div className="art-box">
      <img className="art-thumbnail" src={thumbnailUrl} alt={title} />
      <h3 className="art-desc">{title}</h3>
      <img className="heartIcon" src={heart} alt="찜" onClick={onClickHeart} />
    </div>
  );
}

export default Art;
