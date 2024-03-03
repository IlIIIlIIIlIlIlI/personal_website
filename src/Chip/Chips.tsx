import React from 'react';
import Chip from '@mui/material/Chip';

interface Props {
  label: string;
}

function Chips({ label }: Props) {
  return (
    <span style={{ marginLeft: '10px' }}>
      <Chip
        label={label}
        variant='outlined'
        sx={{
          bgcolor: '#a4e8de',
          fontSize: '14px',
          mb: '10px',
          fontWeight: 700,
        }}
      />
    </span>
  );
}

export default Chips;
