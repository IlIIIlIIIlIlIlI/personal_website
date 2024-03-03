import React from 'react';
import scssObj from './_Skills.scss';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import Engineering from '@mui/icons-material/Engineering';
import Insights from '@mui/icons-material/Insights';
import Chips from '../Chip';

function Skills() {
  const jobStartDate = new Date(2020, 10, 10).getTime();
  const today = new Date().getTime();
  const totalExperienceInMS = today - jobStartDate;

  const totalExperience = Number(
    (totalExperienceInMS / (365 * 24 * 60 * 60 * 1000)).toFixed(2)
  );

  const roundedOffExperince = Number(
    (Math.round(totalExperience * 10) / 10).toFixed(1)
  );

  return (
    <div>
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
                <Chips label='Redux-Saga' />
                <Chips label='Axios' />
                <Chips label='Material-UI' />
                <Chips label='Formik' />
                <Chips label='React-Router' />
                <Chips label='TypeScript' />
                <Chips label='HTML' />
                <Chips label='SCSS' />
                <Chips label='CSS' />
              </div>
            </div>
          </div>

          <div className={`${scssObj.baseClass}__parts`}>
            <div className={`${scssObj.baseClass}__frontal`}>
              <div className={`${scssObj.baseClass}__icon-container`}>
                <Engineering className={`${scssObj.baseClass}__icons`} />
              </div>
              <div className={`${scssObj.baseClass}__frontal-name`}>
                Back End
              </div>
            </div>

            <div className={`${scssObj.baseClass}__intro-skill`}>
              Proficient in back-end processes to ensure scalable and secure
              functionality within web applications.
            </div>

            <div className={`${scssObj.baseClass}__tech-header`}>
              <div className={`${scssObj.baseClass}__tech-bricks`}>
                <Chips label='Spring-Boot' />
                <Chips label='Java' />
                <Chips label='Hibernate' />
                <Chips label='JPA' />
                <Chips label='JDBC' />
                <Chips label='Spring-Boot Web MVC' />
                <Chips label='ThymeLeaf Template Engine' />
                <Chips label='Git' />
              </div>
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

            <div className={`${scssObj.baseClass}__tech-header`}>
              <div className={`${scssObj.baseClass}__tech-bricks`}>
                <Chips label='SQL' />
                <Chips label='Relational Database' />
                <Chips label='PostgreSQL' />
                <Chips label='PGAdmin' />
                <Chips label='Scalable DB Model' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${scssObj.baseClass}__journey`}>Journey so far</div>
      <div className={`${scssObj.baseClass}__exp`}>
        {roundedOffExperince}+ years of experince
      </div>
    </div>
  );
}

export default Skills;
