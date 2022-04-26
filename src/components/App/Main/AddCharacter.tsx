import React from 'react'

import Plus from '../../../assets/images/Plus-brush.png';

const AddCharacter = () => {
  return (
    <section className='add-character'>
        <div className='add-character__Plus-container'>
            <img src={Plus} alt="+" className='add-character__Plus'/>
        </div>
    </section>
  )
}

export default AddCharacter
