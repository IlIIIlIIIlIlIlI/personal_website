import React from 'react';
import scssObj from './_ExperienceDropDown.scss';
import scssSkillsObj from '../Skills/_Skills.scss';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function ExperienceDropDown() {
  return (
    <div className={`${scssObj.baseClass}__container`}>
      <div className={`${scssObj.baseClass}__accordian-container`}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <div className={`${scssObj.baseClass}__header-container`}>
              <div className={`${scssSkillsObj.baseClass}__icon-container`}>
                <PhonelinkIcon
                  className={`${scssSkillsObj.baseClass}__icons`}
                />
              </div>

              <div className={`${scssObj.baseClass}__content-container`}>
                <div className={`${scssObj.baseClass}__designation`}>
                  Full Stack Software Developer
                </div>

                <div className={`${scssObj.baseClass}__company`}>
                  Aether Enterprise Applications LLP
                </div>

                <div className={`${scssObj.baseClass}__duration`}>
                  Nov 2021 - Present
                </div>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default ExperienceDropDown;
