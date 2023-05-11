import React, { useState, useRef } from 'react';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs';

import {meal} from '../../constants';

import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const videRef = React.useRef();

  const handleVideo = () => {
    setPlayVideo(prevPlayVideo => !prevPlayVideo);
  
    if (playVideo) {
      videRef.current.pause();
    } else {
      videRef.current.play();
    }
  };

  return (
    <div className='app__video'>
      <video src={meal} type="video/mp4" loop controls={false} muted
        ref={videRef}
      />    

      <div className='app__video-overlay flex__center'>
        <div 
        className='app__video-overlay__center flex__center app__video-overlay_circle'
        onClick={handleVideo}
        >
          {playVideo 
            ? <BsPauseFill color='#fff' fontSize={30} /> 
            : <BsFillPlayFill color='#fff' fontSize={30} />
          }

        </div>
      </div>           
    </div>
  )
};

export default Intro;
