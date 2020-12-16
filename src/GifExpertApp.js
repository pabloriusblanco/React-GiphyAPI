import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    return (
        <>
            <div className='background_Header'></div>
            <h1>React-GiphyAPI</h1>
            <div className='Subheader_Cointainer'>
            <AddCategory setCategories={setCategories} />
            </div>
            <div className='horizontalLine'></div>


            
                {
                    categories.map(category =>
                        <GifGrid
                            category={category}
                            key={category} />
                    )
                }
            

        </>);
};
