import React, { useEffect, useState } from 'react'
import { useFetchGits } from '../hooks/useFetchGits'
import { GifGridItem } from "../components/GifGridItem";

export const GifGrid = ({ category }) => {


    const { data, loading } = useFetchGits(category);
    console.log(data, loading);

    return (
        <>
            <h3 className='animate__animated animate__bounce'>{category}</h3>
            {loading && <p className='animate__animated animate__flash'>Loading...</p>}
            <div className='card-grid'>
                {
                    data.map((img) => (
                        <GifGridItem key={img.id} {...img} />
                    ))
                }
            </div>
        </>

    )
}
