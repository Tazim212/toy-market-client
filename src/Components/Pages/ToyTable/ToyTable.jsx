/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ToyTable = ({ toy, handleDelete }) => {
    const { _id, name, sellerName, email, category, price, rating, quantity, description } = toy;

    const [update, setUpdate] = useState([])

    const handleUpdate = event => {
        event.preventDefault()

        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updateData = {
            price: price,
            quantity: quantity,
            description: description
        }

            fetch(`https://toy-server-blue.vercel.app/updatetoys/${_id}`,{
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateData)
            })
                .then(res => res.json())
                .then(data => {
                    if(data.modifiedCount > 0){
                        const remaining = update.filter(upt => upt._id !== _id);
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Your update has been saved',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        setUpdate(remaining)
                    }
                })
    }
    return (

        <tr>
            <th>{_id}</th>
            <td>{name}</td>
            <td>{sellerName}</td>
            <td>{email}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{rating}</td>
            <td>{quantity}</td>
            <td>{description}</td>
            <td className='flex gap-2'><div>
                <label htmlFor={`my-modal-${_id}`} className="btn btn-outline">Edit</label>
                <input type="checkbox" id={`my-modal-${_id}`} className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box bg-amber-100">
                        <form onSubmit={handleUpdate} className="card flex-shrink-0 w-96 shadow-2xl bg-violet-900 ms-7">
                            <div className="py-4 px-12">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-50">Price</span>
                                    </label>
                                    <input type="text" defaultValue={price} placeholder="Price" name='price'
                                        className="input bg-emerald-100 input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-50">Available quantity</span>
                                    </label>
                                    <input type='text' defaultValue={quantity} placeholder="Quantity" name='quantity'
                                        className="input bg-emerald-100 input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-gray-50">Description</span>
                                    </label>
                                    <textarea className="textarea textarea-accent bg-emerald-100" placeholder="Description" defaultValue={description} name='description'></textarea>
                                </div>
                            </div>
                            <div className="form-control mt-6 mb-5">
                                <button className="btn-wide py-3 rounded-lg font-semibold bg-green-400 text-zinc-950 mx-auto hover:bg-cyan-100">Update Now</button>
                            </div>
                        </form>
                        <div className="modal-action">
                            <label htmlFor={`my-modal-${_id}`} className="btn btn-primary">Close</label>
                        </div>
                    </div>
                </div>
            </div>
                <button onClick={() => handleDelete(_id)} className='bg-red-400 text-slate-50 py-1 px-3 rounded-md font-semibold'>Delete</button></td>
        </tr>
    );
};

export default ToyTable;
