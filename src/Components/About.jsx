import React from 'react'

function About() {
  return (
    <div className='h-[100vh] relative flex items-center bg-slate-100'>
    <div className='flex w-[60vw] ml-[20vw] px-[10vw] shadow-lg relative'>
    <div className="card h-[50vh] w-[80%]">
        <h1 className='text-[2.5vw] font-semibold mb-[2vw]'><span className='text-yellow-700 text-[2.8vw]'>Sanjh</span>Store</h1>
        <p className='text-[1.1vw] text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita consequatur magnam quos iusto voluptate doloremque ullam sunt ex, reprehenderit omnis.</p>
        <button className='py-[1vw] px-[1.3vw] bg-blue-800 hover:bg-blue-600 text-white font-semibold rounded-lg mt-[3vw]'>Shop Now</button>
      </div>
            <div className='h-[35vh] w-[50%] left-[6vw] bg-emerald-700 relative top-3'>
            <img className='h-[30vh] left-[-4vw] top-[1vw] absolute object-cover' src="https://imgs.search.brave.com/2BmINwlKn9xjMdbbHtWKpP5NGDcA25A0u36CoQqsHmo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9m/dW4tZHVyaW5nLXNo/b3BwaW5nXzEwOTgt/MTMzMDYuanBnP3Np/emU9NjI2JmV4dD1q/cGc" alt="" />
            </div>
    </div>
    </div>
  )
}

export default About
