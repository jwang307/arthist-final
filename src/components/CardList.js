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
                src='images/soa.jpg'
                text='The School of Athens'
                path='/test-art'
                />
                <Card
                src='images/vou.jpg'
                text='Venus of Urbino'
                path='/test-art-2'
                />
            </ul>
          </div>
      </div>
    </div>
  )
}

export default CardList