import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        if (email === "" || password === ""){
            alert("Please enter all credentials!");
        }else{
            if (email === user.email && password === user.password) {
                navigate('/home')
            }else{
                alert("Wrong credentials!")
            }
        }
            
    }

    return (
        <div className='w-[80vw] p-3 mx-auto h-[70vh]'>
            <div className='flex flex-col justify-center items-center h-[100%] w-full'>
                <h2 className='text-4xl my-3'>Log In</h2>
                <form className='flex flex-col mt-5'>
                    <input type="email" placeholder='Email' className='border-2 py-1 px-2 mb-3 rounded bg-gray-50 outline-none' onChange={e=>setEmail(e.target.value)} />
                    <input type="password" placeholder='Password' className='border-2 py-1 px-2 mb-3 rounded bg-gray-50 outline-none' onChange={e=>setPassword(e.target.value)} />
                    <button className='bg-[#3f51b5] px-4 py-2 text-white rounded hover:opacity-[0.9]' onClick={handleSubmit}>Login
                    </button>
                    <Link to="/sign-up" className='text-center mt-3 text-blue-800'>Create a account.</Link>
                </form>
            </div>
        </div>
    )
}

export default Login