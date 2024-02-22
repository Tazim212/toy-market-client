/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import AllToyTable from '../allToyTable/AllToyTable';

const AllToys = () => {

    const [alltoy, setAlltoy] = useState([])
    const [searchtoy, setSearchtoy] = useState('')

    useEffect(() => {
        fetch(`https://toy-server-blue.vercel.app/alltoys?search=${searchtoy}`)
            .then(res => res.json())
            .then(data => {
                setAlltoy(data)
            })
    }, [searchtoy])

    return (
        <div>
            <div className='my-4'>
            <input className='border-2 border-spacing-3 border-zinc-950 px-5 py-2 mx-auto block' type="search" name="" value={searchtoy} onChange={(e) => setSearchtoy(e.target.value)} placeholder='Search'/>
            </div>

            <div className="overflow-x-auto mx-12 my-5">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>ToyName</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            alltoy.filter(item => item.name.toLowerCase().includes(searchtoy.toLowerCase())).map(toy => <AllToyTable key={toy._id} toy={toy}></AllToyTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;