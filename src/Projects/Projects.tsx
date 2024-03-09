import React from 'react';
import scssObj from './_Projects.scss';
import InteractiveCards from '../InteractiveCards/InteractiveCards';

function Projects() {
  return (
    <div className={`${scssObj.baseClass}__container`}>
      <div className={`${scssObj.baseClass}__rows`}>
        <div className={`${scssObj.baseClass}__box`}>
          <InteractiveCards
            backGroundImageLink='/images/desktop_background.png'
            backGroundColour='rgba(255, 255, 255, 0.8)'
            nonHoverContent={<div>suraj</div>}
            hoverContent={<div>sandesh</div>}
          />
        </div>

        <div className={`${scssObj.baseClass}__box`}>
          <InteractiveCards
            backGroundImageLink='/images/desktop_background.png'
            backGroundColour='rgba(255, 255, 255, 0.8)'
            nonHoverContent={<div>suraj</div>}
            hoverContent={<div>sandesh</div>}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
