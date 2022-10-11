import React, { useContext } from 'react'
import foodContext from '../../context/FoodContext'

const MenuItem = ({ item }) => {
    const foodStates = useContext(foodContext);

    const handlePlus = (name) => {
        if (name === "Hamburger") {
            foodStates.setTotalBurgur(foodStates.totalBurgur + 1);
           foodStates.setOrder(order=>[...order, name])
        } else if (name === "Fries") {
            foodStates.setTotalFries(foodStates.totalFries + 1);
            foodStates.setOrder(order=>[...order, name])
        } else if (name === "Coke") {
            foodStates.setTotalCoke(foodStates.totalCoke + 1);
            foodStates.setOrder(order=>[...order, name])
        } else if (name === "Pepsi") {
            foodStates.setTotalPepsi(foodStates.totalPepsi + 1);
            foodStates.setOrder(order=>[...order, name])
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

    return (
        <div>
            <div className="card w-[300px] bg-white rounded mx-4 my-4 ">
                <img src={'assets/' + item.image} className="w-full h-[150px]" alt="Img" />
                <div className='p-3'>
                    <h3 className='text-lg mb-2'>{item.name}</h3>
                    <p className='text-sm'>Price: {item.price}</p>
                    {(foodStates.totalBurgur > 0 && item.name === "Hamburger") ?
                        <>
                            <p className='text-sm'>Total: {foodStates.totalBurgur}</p>
                            <p className='text-sm'>Cost (INR): {item.price * foodStates.totalBurgur}</p>
                        </>
                        : ""
                    }
                    {(foodStates.totalFries > 0 && item.name === "Fries") ?
                        <>
                            <p className='text-sm'>Total: {foodStates.totalFries}</p>
                            <p className='text-sm'>Cost (INR): {item.price * foodStates.totalFries}</p>
                        </>
                        : ""
                    }
                    {(foodStates.totalCoke > 0 && item.name === "Coke") ?
                        <>
                            <p className='text-sm'>Total: {foodStates.totalCoke}</p>
                            <p className='text-sm'>Cost (INR): {item.price * foodStates.totalCoke}</p>
                        </>
                        : ""
                    }
                    {(foodStates.totalPepsi > 0 && item.name === "Pepsi") ?
                        <>
                            <p className='text-sm'>Total: {foodStates.totalPepsi}</p>
                            <p className='text-sm'>Cost (INR): {item.price * foodStates.totalPepsi}</p>
                        </>
                        : ""
                    }
                    <button className='bg-[#3f51b5] px-5 py-1 text-white rounded mt-3 mr-2 hover:opacity-[0.9]' onClick={() => handlePlus(item.name)}>
                        <i className="fa-solid fa-plus"></i></button>
                    <button className='bg-[#d7d7d7] px-5 py-1 text-gray-600 rounded mt-3 hover:opacity-[0.9]' onClick={() => handleMinus(item.name)}>
                        <i className="fa-solid fa-minus"></i></button>
                </div>

            </div>

            
        </div>
    )
}

export default MenuItem