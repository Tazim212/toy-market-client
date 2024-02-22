/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo2.avif'
import { AuthContext } from '../../../Provider/AuthProvider';


const Header = () => {

    const { user, LogOut } = useContext(AuthContext)

    const [removeUser, setRemoveUser] = useState(null)

    const handleLogOut = () => {
        LogOut()
            .then()
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="navbar bg-gradient-to-r from-sky-800 from-10% via-zinc-800 via-30% to-emerald-600 to-80% text-yellow-300 font-semibold">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gradient-to-r from-sky-800 from-10% via-zinc-800 via-30% to-emerald-600 to-80% rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li tabIndex={0}>
                            <Link to='/alltoys' className="justify-between">
                                All Toy
                            </Link>
                        </li>
                        {
                            user?.email ? <li><Link to='/mytoys'>My Toys</Link></li> : ''
                        }
                        {
                            user?.email ? <li><Link to='/addtoys'>Add A Toy</Link></li> : ''
                        }
                        <li><Link to='/blogs'>Blog</Link></li>
                        {/* {
                            user ? <li className='pt-3'>{user.email}</li> : ''
                        } */}

                    </ul>
                </div>
                <div className='flex flex-row lg:flex-col items-center ms-7'>
                    <img className='w-16 h-12 rounded-[50%]' src={logo} alt="" />
                    <h1 className='italic text-yellow-300 font-semibold'>Tazim's Toy Collection</h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li tabIndex={0}>
                        <Link to='/alltoys' className="justify-between">
                            All Toy
                        </Link>
                    </li>
                    {
                        user?.email ? <li><Link to='/mytoys'>My Toys</Link></li> : ''
                    }
                    {
                        user?.email ? <li className='pt-1 pb-1'><Link to='/addtoys'>Add A Toy</Link></li> : ''
                    }
                    <li><Link to='/blogs'>Blog</Link></li>

                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <h3 className='pt-1.5 pr-3'>{user.email}</h3> : ''
                }
                {
                    user ? <button onClick={handleLogOut} className='btn bg-violet-600 text-amber-100 mr-20'>Log Out</button> : <Link to='/login'><button className='btn bg-violet-600 text-amber-100 mr-20'>Log In</button></Link>
                }
            </div>
        </div>
    );
};

export default Header;