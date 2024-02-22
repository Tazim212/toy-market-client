/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Register = () => {

    const {SignedIn} = useContext(AuthContext);

    const [signed, setSigned] = useState([])
    const [err, setErr] = useState('')

    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"
    
    const handleSigned = event =>{
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        SignedIn(email, password)
        .then(result =>{
            const signedUser = result.user;
            setSigned(signedUser)
            form.reset()
            navigate(from, {replace: true})
        })
        .catch(error =>{
            setErr(error.message)
            form.reset()
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <form onSubmit={handleSigned} className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-blue-900">
                    <div className="card-body">
                    <h1 className="text-xl text-slate-100 text-center font-bold">Register now!</h1>             
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-slate-100">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-slate-100">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-slate-100">PhotoUrl</span>
                            </label>
                            <input type="text" name='photo' placeholder="photo" className="input input-bordered" />
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
                                <Link to='/register' className="label text-sm text-slate-100">Already Have an Account?</Link>
                            </label>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn hover:bg-amber-900 bg-lime-900 text-slate-200">Register</button>
                        </div>
                    </div>
                    <p className='text-center text-red-600 text-lg'>{err}</p>
                </form>
            </div>
        </div>
    );
};

export default Register;