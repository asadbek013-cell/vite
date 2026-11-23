import React from 'react';
import gif from "../img/vid.mp4";
import gif2 from "../img/vid2.mp4";

const Gif = ({ animationMode }) => {
  return (
    <div  className="gif-background ">
      <video autoPlay controls
        src={animationMode ? gif2 : gif}
        alt="Background"
      />
    </div>
  );
};

export default Gif;