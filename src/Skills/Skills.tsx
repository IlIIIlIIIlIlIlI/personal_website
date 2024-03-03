import React from 'react';
import scssObj from './_Skills.scss';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import Engineering from '@mui/icons-material/Engineering';
import Insights from '@mui/icons-material/Insights';
import Chips from '../Chip';

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

          <div className={`${scssObj.baseClass}__intro-skill`}>
            Skillfully harnessing front-end technologies to craft efficient,
            responsive solutions
          </div>

          <div className={`${scssObj.baseClass}__tech-header`}>
            <div className={`${scssObj.baseClass}__tech-bricks`}>
              <Chips label='React.JS' />
              <Chips label='Redux' />
              <Chips label='JavaScript' />
              <Chips label='Material-UI' />
              <Chips label='HTML' />
              <Chips label='CSS' />
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

          <div className={`${scssObj.baseClass}__intro-skill`}>
            Proficient in back-end processes to ensure scalable and secure
            functionality within web applications.
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

          <div className={`${scssObj.baseClass}__intro-skill`}>
            Efficiently administering databases, adept at optimizing data
            storage for seamless application performance.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
