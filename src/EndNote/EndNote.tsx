import React from 'react';
import scssObj from './_EndNote.scss';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function EndNote() {
  return (
    <div className={`${scssObj.baseClass}__container`}>
      <div className={`${scssObj.baseClass}__connect`}>
        <div className={`${scssObj.baseClass}__connect-message`}>
          <div>
            Excited about collaborating? Let's schedule a time to connect.
          </div>
          <div>I'll treat you to coffee.</div>
        </div>

        <div className={`${scssObj.baseClass}__connect-button-div`}>
          <Button
            className={`${scssObj.baseClass}__connect-button`}
            endIcon={
              <WhatsAppIcon className={`${scssObj.baseClass}__whatsapp-icon`} />
            }
          >
            Let's Connect
          </Button>
        </div>
      </div>
      <div>suraj</div>
      <div>suraj</div>
      <div>suraj</div>
      <div>suraj</div>
      <div>suraj</div>
      <div>suraj</div>
    </div>
  );
}

export default EndNote;
