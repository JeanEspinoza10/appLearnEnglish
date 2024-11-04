import React from 'react'
import './buttonaside.css'

export const ButtonAside = ({
    funcitonExecute,
    logo,
    name
    }) => {

  return (
    <button
              className="button-aside"
              onClick={funcitonExecute}
            >
              <img className='button-aside-img' src={logo} alt="img-button-aside" />
              <h4 className='button-aside-h4'>{name}</h4>
    </button>
  )
}
