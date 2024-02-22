/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import {useLocation, useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../../Provider/AuthProvider';

const LogIn = () => {

    const { LoggedIn, Googleprovider} = useContext(AuthContext)

    const [logged, setLogged] = useState([])
    const [err, setErr] = useState('')

    const location = useLocation();
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || "/"

    const handleLogged = event =>{
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        LoggedIn(email,password)
        .then(result =>{
            const loggedUser = result.user;
            setLogged(loggedUser)
            form.reset()
            navigate(from, {replace: true})
        })
        .catch(error =>{
            setErr(error.message)
        })
    }

    const GoogleLogged = () =>{
        Googleprovider()
        .then(result =>{
            const googled = result.user;
            setLogged(googled)
        })
        .catch(error =>{
            setErr(error.message)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <form onSubmit={handleLogged} className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-blue-900">
                    <div className="card-body">
                    <h1 className="text-xl text-center text-slate-200 font-bold">Login now!</h1>             
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-slate-100">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-slate-100">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <div className='flex justify-between'>
                            <label className="hover:underline">
                                <Link to='/register' className="label text-sm text-slate-100">Forgot password?</Link>
                            </label>
                            <label className="hover:underline">
                                <Link to='/register' className="label text-sm text-slate-100">Don't Have an Account?</Link>
                            </label>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn hover:bg-amber-900 bg-lime-900 text-slate-200 rounded-lg">Login</button>
                        </div>
                    <button className='bg-amber-600 py-3 rounded-md px-3 flex gap-2 justify-center font-semibold' onClick={GoogleLogged}><span className='pt-1 text-slate-100'><FaGoogle></FaGoogle></span> Google LogIn</button>
                    </div>
                    <p className='text-center text-red-600 text-lg'>{err}</p>
                    
                </form>
            </div>
        </div>
    );
};

export default LogIn;