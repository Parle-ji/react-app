import React from 'react'

const Spinner = () => {
  return (
    <div className=' flex flex-col items-center justify-center'>
      <div className='loader'/>
      <h1 className='text-xl'>Loading...</h1>
    </div>
  )
}

export default Spinner
