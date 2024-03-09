import React from 'react';
import scssObj from './_InteractiveCards.scss';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';

interface Props {
  backGroundImageLink: string;
  backGroundColour: string;
}

function InteractiveCards({ backGroundImageLink, backGroundColour }: Props) {
  return (
    <div className={`${scssObj.baseClass}__container`}>
      <Card className={`${scssObj.baseClass}__main-card`}>
        <CardActionArea className={`${scssObj.baseClass}__action-card`}>
          <div
            className={`${scssObj.baseClass}__non-hover-variable`}
            style={{
              backgroundImage: `url('${backGroundImageLink}')`,
              backgroundSize: 'cover',
            }}
          >
            <div
              className={`${scssObj.baseClass}__faint-backgrounder`}
              style={{ backgroundColor: backGroundColour }}
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
