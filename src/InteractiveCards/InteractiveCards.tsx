import React, { ReactNode } from 'react';
import scssObj from './_InteractiveCards.scss';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';

interface Props {
  backGroundImageLink: string;
  backGroundColour: string;
  nonHoverContent: ReactNode;
  hoverContent: ReactNode;
}

function InteractiveCards({
  backGroundImageLink,
  backGroundColour,
  nonHoverContent,
  hoverContent,
}: Props) {
  return (
    <div className={`${scssObj.baseClass}__container`}>
      <Card className={`${scssObj.baseClass}__main-card`}>
        <CardActionArea className={`${scssObj.baseClass}__action-card`}>
          <div
            className={`${scssObj.baseClass}__non-hover-variable`}
            style={{
              backgroundImage: `url('${backGroundImageLink}')`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            <div
              className={`${scssObj.baseClass}__faint-backgrounder`}
              style={{ backgroundColor: backGroundColour }}
            >
              {nonHoverContent}
            </div>
          </div>

          <div className={`${scssObj.baseClass}__hover-variable`}>
            {hoverContent}
          </div>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default InteractiveCards;
