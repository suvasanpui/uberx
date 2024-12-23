// import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className=" bg-cover bg-center bg-[url(https://cdn.pixabay.com/photo/2019/08/10/11/41/traffic-lights-4396736_1280.jpg)] h-screen pt-8 flex justify-between flex-col w-full bg-green-400">
        <img className="w-16 ml-8" src="Uber_logo.png"/>
        <div className="bg-white py-5 pb-7 px-4">
          <h2 className="text-3xl font-bold">Get Started with UBERX</h2>
          <Link to='/login' className=" flex items-center justify-center  w-full bg-black text-white py-3 rounded-sm mt-5">Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home