import React from 'react';
import scssObj from './_Projects.scss';
import InteractiveCards from '../InteractiveCards/InteractiveCards';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';

function Projects() {
  return (
    <div className={`${scssObj.baseClass}__container`}>
      <div className={`${scssObj.baseClass}__rows`}>
        <div className={`${scssObj.baseClass}__box`}>
          <InteractiveCards
            backGroundColor='#F7F0E8'
            backGroundImageLink='/images/sudoku.png'
            backGroundColour='rgba(63, 58, 137, 0.85)'
            nonHoverContent={
              <div className={`${scssObj.baseClass}__non-hover`}>
                <div>Mobile Responsive</div>
                <div>Sudoku Puzzle Website</div>
              </div>
            }
            hoverContent={
              <div className={`${scssObj.baseClass}__on-hover`}>
                <div className={`${scssObj.baseClass}__extra`}>
                  Implemented a mobile responsive Sudoku web application with
                  varying difficulty levels using React, Redux, Redux-Saga,
                  Formik, Material-UI.
                </div>
                <div>
                  <Button
                    className={`${scssObj.baseClass}__button-website`}
                    endIcon={<GitHubIcon style={{ color: 'white' }} />}
                    onClick={() => {
                      window.open(
                        'https://github.com/IlIIIlIIIlIlIlI/sudoku-react-client/tree/sudoku-react-client-with-saga',
                        '_blank'
                      );
                    }}
                  >
                    Github
                  </Button>

                  <Button
                    className={`${scssObj.baseClass}__button-website`}
                    onClick={() => {
                      window.open(
                        'https://suraj-jaiswal-react-sudoku.netlify.app/',
                        '_blank'
                      );
                    }}
                  >
                    Visit Website {'>'}
                  </Button>
                </div>
              </div>
            }
          />
        </div>

        <div className={`${scssObj.baseClass}__box`}>
          <InteractiveCards
            backGroundColor=''
            backGroundImageLink='/images/sudoku.png'
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
