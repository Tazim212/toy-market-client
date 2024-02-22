/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import 'react-tabs/style/react-tabs.css';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const Categories = ({ toy }) => {
    const { _id, name, photo, price, rating } = toy;
    const {user} = useContext(AuthContext)

    const details = () =>{
        Swal.fire({
            title: 'You have to log in first to view details',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }
    return (
        <div className='ms-6'>
            <div className="card w-96 bg-gray-400 shadow-xl">
                <figure><img className='h-72 w-full' src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <p className='text-lg font-semibold'>Price: {price}</p>
                    <strong>Rating: {rating}</strong>
                    <div className="card-actions justify-end">
                        {
                            user ? <button onClick={details} className="btn btn-secondary">View Details</button>: <Link to='/login'> <button onClick={details} className="btn btn-secondary">View Details</button></Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;