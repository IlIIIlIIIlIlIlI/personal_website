import React from 'react';
import scssObj from './_Introduction.scss';

function Introduction() {
  return (
    <div className={`${scssObj.baseClass}__container`}>
      <div className={`${scssObj.baseClass}__greeting`}>
        <div className={`${scssObj.baseClass}__hello`}>Hello there,</div>

        <div className={`${scssObj.baseClass}__intro-name`}>
          <div className={`${scssObj.baseClass}__name`}>I'm Suraj,</div>
          <div className={`${scssObj.baseClass}__subname`}>Tech Devotee</div>
        </div>

        <div className={`${scssObj.baseClass}__intro`}>
          Passionate{' '}
          <span className={`${scssObj.baseClass}__proffession`}>
            Full Stack Developer
          </span>{' '}
          adept at crafting innovative solutions. Enjoys building projects from
          conception to implementation.
        </div>
        <div className={`${scssObj.baseClass}__background-image`}>
          <img
            src={require('../assets/desktop_background.png')}
            alt='Alternative Text'
          />
        </div>
      </div>
    </div>
  );
}

export default Introduction;
