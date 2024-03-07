import React from 'react';
import scssObj from './_ExperienceDropDown.scss';
import scssSkillsObj from '../Skills/_Skills.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';

function ExperienceDropDown() {
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
      <div className={`${scssObj.baseClass}__journey`}>Journey so far</div>
      <div className={`${scssObj.baseClass}__exp`}>
        {roundedOffExperince}+ years of experince
      </div>

      <div className={`${scssObj.baseClass}__container`}>
        <div className={`${scssObj.baseClass}__accordian-container`}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <div className={`${scssObj.baseClass}__header-container`}>
                <div className={`${scssSkillsObj.baseClass}__icon-container`}>
                  <DevicesOtherIcon
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
              <div className={`${scssObj.baseClass}__text`}>
                Developed an Auto-Logout function after a set period of
                inactivity for banking applications specialized for accounting
                of Law firms.
              </div>

              <div className={`${scssObj.baseClass}__text`}>
                Researched and selected the finest React package for data
                visualization, then implemented the whole data visualization
                application for law firms' accounting and cash flow.
              </div>

              <div className={`${scssObj.baseClass}__text`}>
                Upgraded the bank's whole front-end stack from React 16 to React
                18
              </div>

              <div className={`${scssObj.baseClass}__text`}>
                Created a function that would generate a Digital Balance Sheet
                based on the Transactional Activity of law firms.
              </div>

              <div className={`${scssObj.baseClass}__text`}>
                Built a complete user flow for law firms' Official Cheque
                dashboard and Official Cheque creation in react framework.
              </div>

              <div className={`${scssObj.baseClass}__text`}>
                Created a feature that allows users to manually add Accounts and
                import Transactions into those accounts using a CSV file.
              </div>

              <div className={`${scssObj.baseClass}__text`}>
                Created a feature that allows users to upload cheque images for
                transactions, send those images to the back end for storage, and
                retrieve those cheque images.
              </div>

              <div className={`${scssObj.baseClass}__text`}>
                Created a feature for Digital Invoicing and Billing that allows
                law firms to create bills for their services.
              </div>

              <div className={`${scssObj.baseClass}__text`}>
                Used the Thymeleaf Template Engine to create the ability to
                download PDF reports.
              </div>

              <div className={`${scssObj.baseClass}__text`}>
                Developed a variety of APIs, constructed backend business logic,
                and created Junits for those business logic with more than 95%
                coverage.
              </div>

              <div className={`${scssObj.baseClass}__text`}>
                Utilized technologies: React, Redux, Formik, Spring Boot,
                Postgress SQL, Material UI, Hibernate, ThymeLeaf Template Engine
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <div className={`${scssObj.baseClass}__header-container`}>
                <div className={`${scssSkillsObj.baseClass}__icon-container`}>
                  <DashboardIcon
                    className={`${scssSkillsObj.baseClass}__icons`}
                  />
                </div>

                <div className={`${scssObj.baseClass}__content-container`}>
                  <div className={`${scssObj.baseClass}__designation`}>
                    Senior Analyst
                  </div>

                  <div className={`${scssObj.baseClass}__company`}>
                    eClerx Services Limited
                  </div>

                  <div className={`${scssObj.baseClass}__duration`}>
                    Nov 2020 - Nov 2021
                  </div>
                </div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default ExperienceDropDown;
