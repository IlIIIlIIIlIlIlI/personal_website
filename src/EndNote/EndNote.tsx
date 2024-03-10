import React from 'react';
import scssObj from './_EndNote.scss';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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

      <div className={`${scssObj.baseClass}__connections`}>
        <Button
          className={`${scssObj.baseClass}__contact`}
          onClick={() => {
            window.open('tel:8805517049');
          }}
        >
          <PhoneIcon className={`${scssObj.baseClass}__icons`} />
        </Button>

        <Button
          className={`${scssObj.baseClass}__contact`}
          onClick={() => {
            window.open(
              'mailto:dev.suraj.jaiswal@gmail.com',
              //   ?cc=srj1431998@gmail.com',
              '_blank'
            );
          }}
        >
          <EmailIcon className={`${scssObj.baseClass}__icons`} />
        </Button>

        <Button
          className={`${scssObj.baseClass}__contact`}
          onClick={() => {
            window.open('https://github.com/IlIIIlIIIlIlIlI', '_blank');
          }}
        >
          <GitHubIcon className={`${scssObj.baseClass}__icons`} />
        </Button>

        <Button
          className={`${scssObj.baseClass}__contact`}
          onClick={() => {
            window.open(
              'https://www.linkedin.com/in/suraj-jaiswal-6a84011b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
              '_blank'
            );
          }}
        >
          <LinkedInIcon className={`${scssObj.baseClass}__icons`} />
        </Button>
      </div>
    </div>
  );
}

export default EndNote;
