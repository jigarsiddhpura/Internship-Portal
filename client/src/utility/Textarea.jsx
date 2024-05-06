import React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';

function Textarea(props) {
  return (
    <TextareaAutosize
      style={{
        width: '24.5rem',
        height: '4.27rem',
        marginLeft: '0.4rem',
        marginTop: '0.7rem',
        border: '0.067rem solid #A1A2AC',
        borderRadius: '0.33rem',
        boxSizing: 'border-box',
        color: '#74757E',
        paddingLeft:'0.7rem',
        paddingTop:'0.5rem'


      }}
      {...props}
    />
  );
}

export default Textarea;
