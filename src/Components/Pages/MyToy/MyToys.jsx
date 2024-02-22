/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import ToyTable from '../ToyTable/ToyTable';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Provider/AuthProvider';

const MyToys = () => {

    const { user } = useContext(AuthContext);

    const [toys, setToys] = useState([])
    const [order, setOrder] = useState('asc')

    useEffect(() => {
        fetch(`https://toy-server-blue.vercel.app/addtoys?email=${user.email}&sort=${order}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [order])

    const handleSort = event =>{
        setOrder(event.target.value)
    }

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-server-blue.vercel.app/addtoys/${_id}`,{
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {

                            const remaining = toys.filter(toy => toy._id !== _id)
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            setToys(remaining)
                        }
                    })
            }
        })
    }
    return (
        <div>
            <div className="overflow-x-auto my-10 mx-5">
                <div className='my-4'>
                    <label htmlFor="sortSelect" className='font-semibold ms-2'>Sort By Price: </label>
                    <select className='py-2' id="sortSelect" value={order} onChange={handleSort}>
                        <option value="asc">Price Ascending</option>
                        <option value="desc">Price Descending</option>
                    </select>
                </div>
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Id No.</th>
                            <th>Name</th>
                            <th>Seller Name</th>
                            <th>Seller Email</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Quantity</th>
                            <th>Description</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <ToyTable key={toy._id} toy={toy} handleDelete={handleDelete}></ToyTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;