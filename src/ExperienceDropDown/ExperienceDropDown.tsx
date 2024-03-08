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
                Developed an{' '}
                <span className={`${scssObj.baseClass}__bold`}>
                  Auto-Logout function after a set period of inactivity
                </span>{' '}
                for banking applications specialized for{' '}
                <span className={`${scssObj.baseClass}__bold`}>
                  Accounting of Law Firms
                </span>
                .
              </div>

              <div className={`${scssObj.baseClass}__text`}>
                Researched and selected the finest React package for data
                visualization, then implemented the whole{' '}
                <span className={`${scssObj.baseClass}__bold`}>
                  data visualization application for law firms' accounting and
                  cash flow.
                </span>
              </div>

              <div className={`${scssObj.baseClass}__text`}>
                Upgraded the bank's whole front-end stack from{' '}
                <span className={`${scssObj.baseClass}__bold`}>
                  React 16 to React 18
                </span>
              </div>

              <div className={`${scssObj.baseClass}__text`}>
                Created a function that would generate a{' '}
                <span className={`${scssObj.baseClass}__bold`}>
                  Digital Balance Sheet
                </span>{' '}
                based on the{' '}
                <span className={`${scssObj.baseClass}__bold`}>
                  Transactional Activity
                </span>{' '}
                of law firms.
              </div>

              <div className={`${scssObj.baseClass}__text`}>
                Built a complete user flow for law firms'{' '}
                <span className={`${scssObj.baseClass}__bold`}>
                  Official Cheque dashboard and Official Cheque creation
                </span>{' '}
                in react framework.
              </div>

              <div className={`${scssObj.baseClass}__text`}>
                Created a feature that allows users to{' '}
                <span className={`${scssObj.baseClass}__bold`}>
                  manually add Accounts and import Transactions
                </span>{' '}
                into those accounts using a{' '}
                <span className={`${scssObj.baseClass}__bold`}>CSV file</span>.
              </div>

              <div className={`${scssObj.baseClass}__text`}>
                Created a feature that allows users to{' '}
                <span className={`${scssObj.baseClass}__bold`}>
                  upload cheque images for transactions, send those images
                </span>{' '}
                to the back end for storage, and{' '}
                <span className={`${scssObj.baseClass}__bold`}>
                  retrieve those cheque images
                </span>
                .
              </div>

              <div className={`${scssObj.baseClass}__text`}>
                Created a feature for{' '}
                <span className={`${scssObj.baseClass}__bold`}>
                  Digital Invoicing and Billing
                </span>{' '}
                that allows law firms to create bills for their services.
              </div>

              <div className={`${scssObj.baseClass}__text`}>
                Used the{' '}
                <span className={`${scssObj.baseClass}__bold`}>
                  Thymeleaf Template Engine
                </span>{' '}
                to create the ability to{' '}
                <span className={`${scssObj.baseClass}__bold`}>
                  download PDF reports
                </span>
                .
              </div>

              <div className={`${scssObj.baseClass}__text`}>
                Developed a variety of{' '}
                <span className={`${scssObj.baseClass}__bold`}>
                  APIs, constructed backend business logic
                </span>
                , and created{' '}
                <span className={`${scssObj.baseClass}__bold`}>Junits</span> for
                those business logic with more than 95% coverage.
              </div>

              <div className={`${scssObj.baseClass}__text`}>
                Utilized technologies:{' '}
                <span className={`${scssObj.baseClass}__bold`}>
                  React, Redux, Formik, Spring Boot, Postgress SQL, Material UI,
                  Hibernate, ThymeLeaf Template Engine
                </span>
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
              <div className={`${scssObj.baseClass}__text`}>
                Spearheaded the{' '}
                <span className={`${scssObj.baseClass}__bold`}>
                  website enhancements
                </span>{' '}
                for a leading electrical company, providing a{' '}
                <span className={`${scssObj.baseClass}__bold`}>
                  smooth user experience and optimal efficiency
                </span>
                .
              </div>

              <div className={`${scssObj.baseClass}__text`}>
                Leveraged{' '}
                <span className={`${scssObj.baseClass}__bold`}>
                  React.js, HTML, CSS, and Redux
                </span>{' '}
                to implement critical frontend features,{' '}
                <span className={`${scssObj.baseClass}__bold`}>
                  Spring-Boot
                </span>{' '}
                for backend activities
              </div>

              <div className={`${scssObj.baseClass}__text`}>
                Proactively identified and resolved technical issues, ensuring
                the{' '}
                <span className={`${scssObj.baseClass}__bold`}>
                  website's compatibility across multiple browsers and devices
                </span>
                .
              </div>

              <div className={`${scssObj.baseClass}__text`}>
                Implemented{' '}
                <span className={`${scssObj.baseClass}__bold`}>
                  Redux for state management
                </span>
                , significantly improving the{' '}
                <span className={`${scssObj.baseClass}__bold`}>
                  predictability and scalability
                </span>{' '}
                of the application's frontend architecture.
              </div>

              <div className={`${scssObj.baseClass}__text`}>
                Conducted{' '}
                <span className={`${scssObj.baseClass}__bold`}>
                  regular code reviews and performance optimizations
                </span>{' '}
                to uphold coding standards and enhance website responsiveness.
              </div>

              <div className={`${scssObj.baseClass}__text`}>
                Actively participated in{' '}
                <span className={`${scssObj.baseClass}__bold`}>
                  agile development processes, including sprint planning,
                  stand-ups, and retrospectives
                </span>
                , to drive continuous improvement and timely delivery of website
                updates.
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default ExperienceDropDown;
