import React from 'react';
import scssObj from './_InteractiveCards.scss';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';

function InteractiveCards() {
  return (
    <div className={`${scssObj.baseClass}__container`}>
      <Card className={`${scssObj.baseClass}__main-card`}>
        <CardActionArea className={`${scssObj.baseClass}__action-card`}>
          <div
            className={`${scssObj.baseClass}__non-hover-variable`}
            style={{
              backgroundImage: `url('/images/desktop_background.png')`,
              backgroundSize: 'cover',
            }}
          >
            <div
              className={`${scssObj.baseClass}__faint-backgrounder`}
              style={{ backgroundColor: `rgba(255, 255, 255, ${0})` }}
            >
              first content
            </div>
          </div>

          <div className={`${scssObj.baseClass}__hover-variable`}>
            second content
          </div>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default InteractiveCards;
