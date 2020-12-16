import React from 'react'

export const GifGridItem = ({ title, url }) => {

    return (
        <div className='card animate__fadeIn'>
            <img src={url} alt={title} />
            <p>{(title).substring(0,16).trim()}</p>
        </div>
    )
}
