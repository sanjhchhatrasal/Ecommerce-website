import React from 'react'

function About() {
  return (
    <div className='sm:h-[100vh] h-[80vh] relative flex items-center bg-slate-100 sm:top-0 top-[5vw]'>
    <div className='flex sm:w-[60vw] w-[80vw] sm:flex-row flex-col sm:ml-[20vw] ml-[5vw] px-[10vw] shadow-lg relative'>
    <div className="card sm:h-[50vh] h-[30vh] sm:w-[80%]">
        <h1 className='sm:text-[2.5vw] text-[5vw] font-semibold mb-[2vw]'><span className='text-yellow-700 sm:text-[2.8vw] text-[5.5vw]'>Sanjh</span>Store</h1>
        <p className='sm:text-[1.1vw] text-[2.5vw] text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita consequatur magnam quos iusto voluptate doloremque ullam sunt ex, reprehenderit omnis.</p>
        <button className='sm:py-[1vw] py-[1.5vw] sm:px-[1.3vw] px-[2vw] bg-emerald-800 hover:bg-emerald-600 text-white font-semibold rounded-lg sm:mt-[3vw] mt-[5vw]'>Shop Now</button>
      </div>
            <div className='sm:h-[35vh] h-[25vh] sm:w-[50%] left-[6vw] bg-emerald-800 relative sm:top-3'>
            <img className='sm:h-[30vh] h-[22vh] left-[-4vw] top-[1vw] absolute object-cover hover:scale-[1.1] transition-all' src="https://imgs.search.brave.com/2BmINwlKn9xjMdbbHtWKpP5NGDcA25A0u36CoQqsHmo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9m/dW4tZHVyaW5nLXNo/b3BwaW5nXzEwOTgt/MTMzMDYuanBnP3Np/emU9NjI2JmV4dD1q/cGc" alt="" />
            </div>
    </div>
    </div>
  )
}

export default About
