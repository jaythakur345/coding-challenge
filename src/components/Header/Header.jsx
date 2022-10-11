import { Grid, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import foodContext from '../../context/FoodContext'
import './header.css'

const Header = () => {
    const location = window.location.href.split('/')[3];
    const navigate = useNavigate();
    const foodStates = useContext(foodContext);
    const [open, setOpen] = useState(false);
    const uniqueArray =  Array.from(new Set(foodStates.order));

    const handlePlus = (name) => {
        if (name === "Hamburger") {
            foodStates.setTotalBurgur(foodStates.totalBurgur + 1);
        } else if (name === "Fries") {
            foodStates.setTotalFries(foodStates.totalFries + 1);
        } else if (name === "Coke") {
            foodStates.setTotalCoke(foodStates.totalCoke + 1);
        } else if (name === "Pepsi") {
            foodStates.setTotalPepsi(foodStates.totalPepsi + 1);
        }
    }

    const handleMinus = (name) => {
        if (name === "Hamburger") {
            foodStates.setTotalBurgur(foodStates.totalBurgur - 1);
        } else if (name === "Fries") {
            foodStates.setTotalFries(foodStates.totalFries - 1);
        } else if (name === "Coke") {
            foodStates.setTotalCoke(foodStates.totalCoke - 1);
        } else if (name === "Pepsi") {
            foodStates.setTotalPepsi(foodStates.totalPepsi - 1);
        } else {
            alert("Something went wrong!")
        }
    }


    const handleOpen = () => {
        setOpen(true)
    }

    const saveHandle = () =>{
        navigate('/checkout')
        setOpen(false)
    }
    console.log(location);
    return (
        <div className='navbar w-full h-[60px] bg-[#3f51b5] flex items-center justify-between p-2 text-white font-semibold'>
            <div className="left p-3">
               <Link to="/home"> <h6 className='text-2xl'><i className="fa-solid fa-utensils"></i> <span className='mx-2'>Food's Restaurant</span></h6></Link>
            </div>
            {
                location === "menu" && <div className="right p-3">
                <div className="badge relative">
                    <h6 className='text-2xl text-white cursor-pointer' onClick={handleOpen}><i class="fa-solid fa-cart-shopping"></i></h6>
                    <span className='absolute top-[0] right-[-7px] bg-gray-500 w-[20px] h-[20px] rounded-full flex justify-center items-center border-2 text-sm'>{uniqueArray.length}</span>
                </div>
            </div>
            }
            

            <Modal className="flex justify-center items-center"
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="w-[40vw] bg-white p-4 ">
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Order Summary
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                        <Box flex={4}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                {
                                    foodStates.state.map(items => {
                                        return (
                                            <>
                                                {
                                                    items.total !== 0 && <> <Grid item xs={6}>
                                                        <p className='text-sm'>{items.name}:</p>
                                                    </Grid>
                                                        <Grid item xs={6}>
                                                            <p className='text-sm'>{items.total}</p>
                                                        </Grid></>
                                                }
                                            </>
                                        )
                                    })
                                }
                            </Grid>
                        </Box>
                        <Box flex={1}>
                            <Grid container rowSpacing={1} >
                                {
                                    foodStates.state.map(items => {
                                        return (
                                            <>
                                                {
                                                    items.total !== 0 && <> <Grid item xs={6}>
                                                        <button className='bg-[#3f51b5] px-5 py-1 text-white rounded hover:opacity-[0.9]' onClick={() => handlePlus(items.name)}>
                                                            <i className="fa-solid fa-plus"></i></button>
                                                    </Grid>
                                                        <Grid item xs={6}>
                                                            <button className='bg-[#f50057] px-5 py-1 text-white rounded hover:opacity-[0.9]' onClick={() => handleMinus(items.name)}><i className="fa-solid fa-minus"></i></button>
                                                        </Grid></>
                                                }
                                            </>
                                        )
                                    })
                                }
                            </Grid>
                        </Box>
                    </Box>
                    <h6>Total(INR): {foodStates.totalBurgur*200 + foodStates.totalFries*100 + foodStates.totalCoke*50 + foodStates.totalPepsi*50}</h6>
                    <div className='flex justify-end mt-2'>
                        <button className='bg-[#3f51b5] px-5 py-1 text-white rounded hover:opacity-[0.9] mt-4' onClick={saveHandle}>
                            SAVE AND CHECKOUT</button>
                        <button className='bg-white px-5 py-1 text-[#3f51b5] rounded hover:opacity-[0.9] mt-4' onClick={e=>setOpen(false)}>
                            CANCEL</button>
                    </div>

                </Box>
            </Modal>
        </div >
    )
}

export default Header