import React from 'react';
import scssObj from './_Projects.scss';
import InteractiveCards from '../InteractiveCards/InteractiveCards';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

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
            backGroundColor='#2F3D49'
            backGroundImageLink='/images/coding-portal.png'
            backGroundColour='RGBA(33, 63, 113, 0.85)'
            nonHoverContent={
              <div className={`${scssObj.baseClass}__non-hover`}>
                <div>Coding Portal</div>
                <div>With React</div>
              </div>
            }
            hoverContent={
              <div className={`${scssObj.baseClass}__on-hover`}>
                <div className={`${scssObj.baseClass}__extra`}>
                  Developed a interactive coding portal utilizing React, Redux,
                  Monaco-editor, Axios, UnPkg CDN
                </div>
                <div>
                  <Button
                    className={`${scssObj.baseClass}__button-website`}
                    endIcon={<GitHubIcon style={{ color: 'white' }} />}
                    onClick={() => {
                      window.open(
                        'https://github.com/IlIIIlIIIlIlIlI/interactive-coding-website',
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
                        'https://suraj-jaiswal-coding-portal.netlify.app/',
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
      </div>

      <div className={`${scssObj.baseClass}__rows`}>
        <div className={`${scssObj.baseClass}__box`}>
          <InteractiveCards
            backGroundColor='#F7F0E8'
            backGroundImageLink='/images/api-sudoku.png'
            backGroundColour='RGBA(35, 94, 54, 0.85)'
            nonHoverContent={
              <div className={`${scssObj.baseClass}__non-hover`}>
                <div>RESTful Sudoku</div>
                <div>Solution API</div>
              </div>
            }
            hoverContent={
              <div className={`${scssObj.baseClass}__on-hover`}>
                <div className={`${scssObj.baseClass}__extra`}>
                  Developed a RESTful API to provide both Sudoku Puzzle and its
                  Solution, utilizing the Spring Boot, Java, Spring Web MVC.
                </div>
                <div>
                  <Button
                    className={`${scssObj.baseClass}__button-website`}
                    endIcon={<GitHubIcon style={{ color: 'white' }} />}
                    onClick={() => {
                      window.open(
                        'https://github.com/IlIIIlIIIlIlIlI/Sudoku-Puzzle-9x9-PreSolved',
                        '_blank'
                      );
                    }}
                  >
                    Github
                  </Button>

                  {/* <Button
                    className={`${scssObj.baseClass}__button-website`}
                    onClick={() => {
                      window.open(
                        'https://suraj-jaiswal-react-sudoku.netlify.app/',
                        '_blank'
                      );
                    }}
                  >
                    Visit Website {'>'}
                  </Button> */}
                </div>
              </div>
            }
          />
        </div>

        <div className={`${scssObj.baseClass}__box`}>
          <InteractiveCards
            backGroundColor='RGBA(250, 235, 215)'
            backGroundImageLink='/images/task-sheet.png'
            backGroundColour='RGBA(212, 103, 82, 0.80)'
            nonHoverContent={
              <div className={`${scssObj.baseClass}__non-hover`}>
                <div>Personal Task's</div>
                <div>Jira Board</div>
              </div>
            }
            hoverContent={
              <div className={`${scssObj.baseClass}__on-hover`}>
                <div className={`${scssObj.baseClass}__extra`}>
                  Developed a mobile responsive website for efficient task
                  management utilizing React, Redux, Formik and Material-UI
                </div>
                <div>
                  <Button
                    className={`${scssObj.baseClass}__button-website`}
                    endIcon={<GitHubIcon style={{ color: 'white' }} />}
                    onClick={() => {
                      window.open(
                        'https://github.com/IlIIIlIIIlIlIlI/Interactive-To-Do-List',
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
                        'https://suraj-jaiswal-to-do.netlify.app/',
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
      </div>

      <div className={`${scssObj.baseClass}__rows`}>
        <div className={`${scssObj.baseClass}__box`}>
          <InteractiveCards
            backGroundColor='#FFFFFF'
            backGroundImageLink='/images/data-over-us.png'
            backGroundColour='RGBA(103, 61, 182, 0.90)'
            nonHoverContent={
              <div className={`${scssObj.baseClass}__non-hover`}>
                <div>Data Over</div>
                <div>Ultra-Sound</div>
              </div>
            }
            hoverContent={
              <div className={`${scssObj.baseClass}__on-hover`}>
                <div className={`${scssObj.baseClass}__extra`}>
                  Utilizing ultra-sound for short-distance wireless data
                  transmission using the Audio speakers of smartphones through
                  the CUE Audio Library.
                </div>
                <div>
                  <Button
                    className={`${scssObj.baseClass}__button-website`}
                    endIcon={
                      <YouTubeIcon
                        style={{
                          color: 'red',
                          backgroundImage:
                            'radial-gradient(white 1%, transparent 30%)',
                        }}
                      />
                    }
                    onClick={() => {
                      window.open(
                        'https://www.youtube.com/watch?v=rNOetaxYksA',
                        '_blank'
                      );
                    }}
                  >
                    YouTube
                  </Button>
                </div>
              </div>
            }
          />
        </div>

        <div className={`${scssObj.baseClass}__box`}>
          <InteractiveCards
            backGroundColor='RGB(245, 255, 245)'
            backGroundImageLink='/images/personal-website.png'
            backGroundColour='RGBA(31, 81, 113, 0.90)'
            nonHoverContent={
              <div className={`${scssObj.baseClass}__non-hover`}>
                <div>Portfolio Website</div>
              </div>
            }
            hoverContent={
              <div className={`${scssObj.baseClass}__on-hover`}>
                <div className={`${scssObj.baseClass}__extra`}>
                  Crafted my personal portfolio website leveraging React and
                  Material-UI, ensuring sleek design and smooth navigation
                </div>
                <div>
                  <Button
                    className={`${scssObj.baseClass}__button-website`}
                    endIcon={<GitHubIcon style={{ color: 'white' }} />}
                    onClick={() => {
                      window.open(
                        'https://github.com/IlIIIlIIIlIlIlI/personal_website',
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
                        'https://suraj-jaiswal-to-do.netlify.app/',
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
      </div>
    </div>
  );
}

export default Projects;
