import React from 'react'
import Card from './Card'
import AddNames from './AddNames'


const Contact = () => {
  return (
    <div className='flex justify-center'>
      <div>
        <Card/>
      </div>
      <div>
        <AddNames/>
      </div>
    </div>
  )
}

export default Contact
