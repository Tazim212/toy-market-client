/* eslint-disable no-unused-vars */
import React from 'react';
import person1 from "../../../../assets/Person/person1.jpg";
import person2 from "../../../../assets/Person/person3.jpg";
import person3 from "../../../../assets/Person/person2.jpg"


const Reviews = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 my-5 ms-20 gap-5'>
            <div className="card card-compact w-60 bg-lime-700 shadow-xl">
                <figure><img className='w-40 h-36 py-3 rounded-full' src={person1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-center text-xl font-semibold text-orange-200">Stuart Broad</h2>
                    <div className="rating mx-auto">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-5 w-4" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-5 w-4" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-5 w-4" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-5 w-4" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-5 w-4" />
                    </div>
                </div>
            </div>

            <div className="card card-compact w-60 bg-lime-700 shadow-xl">
                <figure><img className='w-40 h-36 py-3 rounded-full' src={person2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-center text-xl font-semibold text-orange-200">Jenny Jain</h2>
                    <div className="rating mx-auto">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-5 w-4" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-5 w-4" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-5 w-4" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-5 w-4" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-5 w-4" />
                    </div>
                </div>
            </div>

            <div className="card card-compact w-60 bg-lime-700 shadow-xl">
                <figure><img className='w-40 h-36 py-3 rounded-full' src={person3} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-center text-xl font-semibold text-orange-200">Michael Vohn</h2>
                    <div className="rating mx-auto">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-5 w-4" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-5 w-4" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-5 w-4" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-5 w-4" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-5 w-4" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;