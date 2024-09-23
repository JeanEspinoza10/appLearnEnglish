import React from 'react';
import './button.css'


export const Button = ({ name, executeFunction }) => {
  return (
    <>
      <button className='componentButton' name={name} type="button" onClick={executeFunction}>
        {name}
      </button>
    </>
  );
};
