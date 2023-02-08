import React from 'react';

const Video = () => {
  return (
    <div style={{ width: '560px', height: '315px' }}>
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/iUXg_sxcCbc" 
        frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen 
      />
    </div>
  );
};

export default Video;