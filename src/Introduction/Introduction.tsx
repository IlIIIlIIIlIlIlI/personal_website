import React from 'react';
import scssObj from './_Introduction.scss';

function Introduction() {
  return (
    <div className={`${scssObj.baseClass}__container`}>
      <div>Hello there,</div>
      <div>I'm Suraj,</div>
    </div>
  );
}

export default Introduction;
