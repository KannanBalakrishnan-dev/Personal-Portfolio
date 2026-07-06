import React from 'react'

const DesignPageText = ({ subHead, head, text }) => {
  return (
    <div className='flex flex-col gap-6'>
      {/* small top heading */}
      <h4 className='text-[#FDA632] font-[subhead] text-lg font-semibold tracking-[0.75rem]'>{subHead}</h4>
      {/* big heading */}
      <h2 className='text-5xl font-[maintext]'>{head}</h2>

      {/* text */}
      <p className='text-lg'>{text}</p>
    </div>
  )
}

export default DesignPageText