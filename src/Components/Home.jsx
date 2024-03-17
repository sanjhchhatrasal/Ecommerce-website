import React from 'react'

function Home() {
  return (
    <div className='h-[100vh] relative flex items-center bg-slate-100'>
    <div className='flex w-[60vw] ml-[20vw] px-[10vw] shadow-lg relative'>
    <div className="card h-[50vh] w-[80%]">
        <h1 className='text-[2.5vw] font-semibold mb-[2vw]'><span className='text-yellow-700 text-[2.8vw]'>Sanjh</span>Ecommerce</h1>
        <p className='text-[1.1vw] text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita consequatur magnam quos iusto voluptate doloremque ullam sunt ex, reprehenderit omnis.</p>
        <button className='py-[1vw] px-[1.3vw] bg-blue-600 hover:bg-blue-400 text-white font-semibold rounded-lg mt-[3vw]'>Shop Now</button>
      </div>
            <div className='h-[35vh] w-[50%] left-[6vw] bg-pink-500 relative top-3'>
            <img className='h-[30vh] left-[-4vw] top-[1vw] absolute object-cover' src="https://imgs.search.brave.com/0h4LrepoVrOaH_VPnzSFkw6_E6D-wsXA3zW68VepuLM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/aG9wcGluZy1kYXkt/aW50ZXJuYXRpb25h/bC1naXJsZnJpZW5k/cy13b21lbi1tYWxs/XzExNTctNDY4MDMu/anBnP3NpemU9NjI2/JmV4dD1qcGc" alt="" />
            </div>
    </div>
    </div>
  )
}

export default Home
