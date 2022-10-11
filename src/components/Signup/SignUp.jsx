import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPasword] = useState("")

    // Email Vailidation
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
      }

    const handleSubmit = () => {
        if(fullName==="" || email==="" || password==="" ){
            alert("Please enter all credentials!")
        }else if(password.length < 6){
            alert("Password length should not be less than 6.")
        }else if(!validateEmail(email)){
            alert("Please enter valid email")
        }
        else{
            let user = {
                fullName:fullName,
                email:email,
                password:password
            }
            localStorage.setItem('user',JSON.stringify(user));
            navigate('/')
        }
        
    }
    return (
        <div className='w-[80vw] p-3 mx-auto h-[70vh]'>
            <div className='flex flex-col justify-center items-center h-[100%] w-full'>
                <h2 className='text-4xl my-3'>Sign Up</h2>
                <form className='flex flex-col mt-5'>
                    <input type="text" placeholder='Full Name' className='border-2 py-1 px-2 mb-3 rounded bg-gray-50 outline-none' onChange={e=>setFullName(e.target.value)} />
                    <input type="email" placeholder='Email' className='border-2 py-1 px-2 mb-3 rounded bg-gray-50 outline-none' onChange={e=>setEmail(e.target.value)} />
                    <input type="password" placeholder='Password' className='border-2 py-1 px-2 mb-3 rounded bg-gray-50 outline-none' onChange={e=>setPasword(e.target.value)} />
                    <button
                        className='bg-[#3f51b5] px-4 py-2 text-white rounded hover:opacity-[0.9]'
                        onClick={handleSubmit}>
                        Create Account</button>
                    <Link to="/" className='text-center mt-3 text-blue-800'>I have an account.</Link>
                </form>
            </div>
        </div>
    )
}

export default SignUp