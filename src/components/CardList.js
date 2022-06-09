import React from 'react'
import Card from './Card'
import './CardList.css'

function CardList() {
  return (
    <div className='cards'>
      <h1>Women in Renaissance Paintings</h1>
      <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
                <Card
                src='images/ermine/painting.png'
                text='Lady with an Ermine'
                path='/ermine'
                />
                <Card
                src='images/love/sapl.jpg'
                text='Sacred and Profane Love'
                path='/sacred-profane'
                />
                <Card
                src='images/sibyl/ls.jpeg'
                text='Libyan Sibyl'
                path='/libyan-sibyl'
                />
            </ul>
          </div>
      </div>
    </div>
  )
}

export default CardList