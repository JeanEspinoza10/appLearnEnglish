import React from 'react';
import './button.css'


export const Button = ({ name, executeFunciton }) => {
  return (
    <>
      
      <button className='componentButton' name={name} type="button" onClick={executeFunciton}>
        {name}
      </button>
    </>
  );
};
