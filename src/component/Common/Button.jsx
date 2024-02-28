import React from 'react'

const Button = ({name}) => {
  return (
    <button className='bg-blueShade py-3.5 font-medium min-w-[150px] max-w-[200px] px-2 rounded-full text-white'>
{name?name:'Explore'}
    </button>
  )
}

export default Button