import React from 'react'
import Card from './Card'
import './CardList.css'

function CardList() {
  return (
    <div className='cards'>
      <h1>Works by Women Artists in the Renaissance</h1>
      <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
                <Card
                src='images/judith/painting.png'
                text='Judith Slaying Holofernes'
                path='/judith'
                />
                <Card
                src='images/anguissola/painting.png'
                text='Bernardino Campi Painting Sofonisba Anguissola'
                path='/anguissola'
                />
                <Card
                src='images/selfportrait/painting.png'
                text='Self Portrait Making Music'
                path='/self-portrait'
                />
            </ul>
          </div>
      </div>
    </div>
  )
}

export default CardList