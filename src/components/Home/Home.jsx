import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/menu')
    }

  return (
    <div className='w-full lg:w-[70vw] p-3 mx-auto flex justify-center items-center h-[60vh]' >
        <div className="w-full lg:w-[80%] text-center">
        <h6 className='font-light text-6xl text-gray-900 tracking-wide leading-tight'>Welcome to Food's</h6>
        <h6 className='font-light text-6xl text-gray-900 tracking-wide leading-tight'>Kitchen</h6>
        <button className='bg-[#3f51b5] px-4 py-2 text-white rounded mt-9 hover:opacity-[0.9]' onClick={handleSubmit}>GO TO MENU</button>
        </div>
        
    </div>
  )
}

export default Home