/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const AnimalCard = ({ item }) => {
    const { img } = item
    return (
        <div >
            <div className="py-5 ps-9 pr-8 md:pr-0 rounded-md">
                <img className='w-52 h-36' src={img} />
            </div>
        </div>
    );
};

export default AnimalCard;