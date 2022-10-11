import { useEffect, useState } from "react";
import FoodContext from "./FoodContext";

const FoodState = (props) =>{
    let uniqueArray;
    const [order, setOrder] = useState([])
    const [totalBurgur, setTotalBurgur] = useState(0);
    const [totalFries, setTotalFries] = useState(0);
    const [totalCoke, setTotalCoke] = useState(0);
    const [totalPepsi, setTotalPepsi] = useState(0);

    let state = [
        {
            name:"Hamburger",
            total:totalBurgur
        },
        {
            name:"Fries",
            total:totalFries
        },
        {
            name:"Coke",
            total:totalCoke
        },
        {
            name:"Pepsi",
            total:totalPepsi
        },
    ]

    
    return (
        <FoodContext.Provider value={{totalBurgur, setTotalBurgur, totalFries, setTotalCoke, totalCoke, setTotalFries, totalPepsi,setTotalPepsi, state, order, setOrder, uniqueArray}}>
            {props.children}
        </FoodContext.Provider>
    )
}

export default FoodState;