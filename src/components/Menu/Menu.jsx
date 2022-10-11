import React from 'react'
import MenuItem from '../MenuItem/MenuItem'

const data = require('../../data/feeds.json');


const Menu = () => {
    return (
        <div className='w-[80vw] p-3 mx-auto mt-10 flex flex-wrap'>
            {
                data.map(item=>{
                    return <MenuItem key={item.id} item={item} />
                })
            }
            
        </div>
    )
}

export default Menu