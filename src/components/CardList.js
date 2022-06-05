import React from 'react'
import Card from './Card'
import './CardList.css'

function CardList() {
  return (
    <div className='cards'>
      <h1>Paintings</h1>
      <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
                <Card
                src='images/ls.jpeg'
                text='Libyan Sibyl'
                path='/libyan-sibyl'
                />
                <Card
                src='images/vou.jpg'
                text='Venus of Urbino'
                path='/venus-urbino'
                />
            </ul>
          </div>
      </div>
    </div>
  )
}

export default CardList