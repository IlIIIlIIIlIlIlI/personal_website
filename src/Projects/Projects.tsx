import React from 'react';
import scssObj from './_Projects.scss';
import InteractiveCards from '../InteractiveCards/InteractiveCards';

function Projects() {
  return (
    <div className={`${scssObj.baseClass}__container`}>
      <InteractiveCards
        backGroundImageLink='/images/desktop_background.png'
        backGroundColour='rgba(255, 255, 255, 0.8)'
      />
    </div>
  );
}

export default Projects;
