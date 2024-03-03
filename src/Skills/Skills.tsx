import React from 'react';
import scssObj from './_Skills.scss';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import Engineering from '@mui/icons-material/Engineering';
import Insights from '@mui/icons-material/Insights';

function Skills() {
  return (
    <div className={`${scssObj.baseClass}__container`}>
      <div className={`${scssObj.baseClass}__main`}>
        <div className={`${scssObj.baseClass}__parts`}>
          <div className={`${scssObj.baseClass}__frontal`}>
            <div className={`${scssObj.baseClass}__icon-container`}>
              <PhonelinkIcon className={`${scssObj.baseClass}__icons`} />
            </div>
            <div className={`${scssObj.baseClass}__frontal-name`}>
              Front End
            </div>
          </div>
        </div>

        <div className={`${scssObj.baseClass}__parts`}>
          <div className={`${scssObj.baseClass}__frontal`}>
            <div className={`${scssObj.baseClass}__icon-container`}>
              <Engineering className={`${scssObj.baseClass}__icons`} />
            </div>
            <div className={`${scssObj.baseClass}__frontal-name`}>Back End</div>
          </div>
        </div>

        <div className={`${scssObj.baseClass}__parts`}>
          <div className={`${scssObj.baseClass}__frontal`}>
            <div className={`${scssObj.baseClass}__icon-container`}>
              <Insights className={`${scssObj.baseClass}__icons`} />
            </div>
            <div className={`${scssObj.baseClass}__frontal-name`}>
              Data Base
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
