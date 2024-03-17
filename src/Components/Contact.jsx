import React from 'react'

function Contact() {
  return (
    <div className='h-[100vh]  relative flex items-center bg-slate-100'>
      <div className='sm:w-[40vw] h-[60vh] sm:ml-[30vw] ml-[15vw] px-[10vw] shadow-lg rounded-lg bg-gray-300 relative flex flex-col items-center justify-center gap-4 '>
        <input type="text" placeholder='Name' className='px-[3vw] py-[1vw] rounded-lg'/>
        <input type="email" placeholder='Email' className='px-[3vw] py-[1vw] rounded-lg' />
        <textarea cols="35" rows="5"></textarea>
        <button className='sm:py-[1vw] py-[2vw] sm:px-[6vw] px-[11vw] bg-yellow-700 hover:bg-yellow-500 text-white font-semibold rounded-xl'>Contact US</button>
      </div>
    </div>
  )
}

export default Contact
