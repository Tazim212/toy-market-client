/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const AllToyTable = ({ toy }) => {
    const { _id, sellerName, name, email, rating, category, price, quantity, description, photo } = toy

    const {user} = useContext(AuthContext)
    const [single, setSingle] = useState(null)

    const fetchSingleToy = () => {

            fetch(`https://toy-server-blue.vercel.app/singletoy/${_id}`)
                .then(res => res.json())
                .then(data => {                
                    setSingle(data)
                })
        }
    return (
        <tr>
            <th>{sellerName}</th>
            <td>{name}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><div>
                {
                    user ? <label onClick={fetchSingleToy} htmlFor={`my-modal-${_id}`} className="btn btn-outline">View Details</label>: <Link to='/login'><label onClick={fetchSingleToy} htmlFor={`my-modal-${_id}`} className="btn btn-outline">View Details</label></Link>
                }
                <input type="checkbox" id={`my-modal-${_id}`} className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box bg-amber-100">
                        <img className='w-72 h-52' src={photo ? photo: ''} alt="" />
                        <p className="py-1 font-bold">Toy Name: <span className='font-normal text-teal-700 italic'>{name}</span></p>
                        <h3 className="py-1 font-bold">Seller Name: <span className='font-normal text-teal-700 italic'>{sellerName}</span></h3>
                        <p className="py-1 font-bold">Seller Email: <span className='font-normal text-teal-700 italic'>{email}</span></p>
                        <p className="py-1 font-bold">Price: <span className='font-normal text-teal-700 italic'>{price}</span></p>
                        <p className="py-1 font-bold">Quantity: <span className='font-normal text-teal-700 italic'>{quantity}</span></p>
                        <p className="py-1 font-bold">Rating: <span className='font-normal text-teal-700 italic'>{rating}</span></p>
                        <p className='py-1 font-bold'>Description: <span className='font-normal text-teal-700 italic'>{description}</span></p>

                        <div className="modal-action">
                            <label htmlFor={`my-modal-${_id}`} className="btn btn-primary">Close</label>
                        </div>
                    </div>
                </div>
            </div>
            </td>
        </tr>

    );
};

export default AllToyTable;
