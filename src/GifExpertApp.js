import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {

    console.log('GifExpertApp');

    const [categories, setCategories] = useState(['One Punch']);
    const [cont, setCont] = useState(1);

    /* const handleAdd = () => {
        setCont(cont + 1);
        setCategories([...categories, `Hunter X Hunter ${cont}`]);
        //setCategories(cats => [...cats, `Hunter X Hunter ${cont}`]);
    } */

    return (
        <div>
            <h2>Search Gif</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            {/* <button onClick={handleAdd}>Cargar Gif</button> */}
            {
                categories.map((category) =>
                (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                )
                )
            }
        </div >
    )
}

export default GifExpertApp