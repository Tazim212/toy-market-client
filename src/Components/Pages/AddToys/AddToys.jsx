/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddToys = () => {

    const [inserting, setInserting] = useState([]);

    const handleInsert = event =>{
        event.preventDefault();

        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const sellerName = form.sellername.value;
        const email = form.selleremail.value;
        const category = form.category.value;
        const price = parseInt(form.price.value);
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.desc.value;

        const details = {photo,name, sellerName, email, category, price, rating,quantity,description}

        fetch('https://toy-server-blue.vercel.app/addtoys',{
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(details)
        })
        .then(res =>res.json())
        .then(data => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
            setInserting(data)
            form.reset()
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <form onSubmit={handleInsert} className="card flex-shrink-0 w-auto shadow-2xl bg-violet-900">

                    <h1 className="text-3xl text-center text-orange-200 font-bold pt-5">Add Toy</h1>
                    <div className="grid grid-cols-3 gap-8 py-4 px-12">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-50">Photo Url</span>
                            </label>
                            <input type="text" placeholder="Photo" name='photo'
                                className="input bg-emerald-100 input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-50">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='name'
                                className="input bg-emerald-100 input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-50">Seller Name</span>
                            </label>
                            <input type="text" placeholder="Seller Name" name='sellername'
                                className="input bg-emerald-100 input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-50">Seller Email</span>
                            </label>
                            <input type="email" placeholder="Seller Email" name='selleremail'
                                className="input bg-emerald-100 input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-50">Sub Category</span>
                            </label>
                            <select className="select bg-emerald-100 select-bordered w-full max-w-xs" name='category'>
                                <option disabled value="Categories">Categories</option>
                                <option>Beer</option>
                                <option>Deer</option>
                                <option>Tiger</option>
                                <option>Lion</option>
                                <option>Ziraffe</option>
                                <option>Zebra</option>
                                <option>Others</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-50">Price</span>
                            </label>
                            <input type="text" placeholder="Price" name='price'
                                className="input bg-emerald-100 input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-50">Rating</span>
                            </label>
                            <input type="text" placeholder="Rating" name='rating'
                                className="input bg-emerald-100 input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-50">Available quantity</span>
                            </label>
                            <input type='text' placeholder="Quantity" name='quantity'
                                className="input bg-emerald-100 input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-50">Description</span>
                            </label>
                            <textarea className="textarea textarea-accent bg-emerald-100" placeholder="Description" name='desc'></textarea>
                        </div>
                    </div>
                    <div className="form-control mt-6 mb-5">
                        <button className="btn-wide py-3 rounded-lg font-semibold bg-green-400 text-zinc-950 mx-auto hover:bg-cyan-100">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToys;