import React from 'react'
import { Link } from 'react-router-dom'

function Card(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
            <img
              className='cards__item__img'
              alt='Painting'
              src={props.src}
            />
            
        </Link>
        <h5 className='cards__item__text'>{props.text}</h5>
      </li>
    </>
  )
}

export default Card