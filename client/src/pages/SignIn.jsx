import React, { useState } from 'react';
import axiosClient from '../axios/axiosclient';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate();
    const [serverEmailError, setServerEmailError] = useState('');
    const [serverPasswordError, setServerPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const {email, password} = e.target.elements;
            const data = {
                email: email.value,
                password: password.value,
            }
            const response = await axiosClient.post('/login', data);
            if(response.status === 200){
                sessionStorage.setItem('token', response.data.token);
                sessionStorage.setItem('user', JSON.stringify(response.data.user.first_name));
                navigate('/home');
            }
        }
        catch(error) {
            if(error.response.status === 422){
                if(error.response.data.email){
                    setEmailError(error.response.data.email);
                } else {
                    setEmailError('');
                }
                if(error.response.data.password){
                    setPasswordError(error.response.data.password);
                } else {
                    setPasswordError('');
                }
                if(error.response.data.errors.email){
                    setServerEmailError(error.response.data.errors.email);
                } else {
                    setServerEmailError('');
                }
                if(error.response.data.errors.password){
                    setServerPasswordError(error.response.data.errors.password);
                } else {
                    setServerPasswordError('');
                }
            }
        }
    }


    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign-In to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-md font-medium leading-6 text-gray-800">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full h-8 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            {serverEmailError && (
                                <p className="text-sm text-red-600">{serverEmailError}</p>
                            )}
                            {emailError && (
                                <p className="text-sm text-red-600">{emailError}</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-md font-medium leading-6 text-gray-800">
                                Password
                            </label>
                            </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                className="block w-full h-8 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            {serverPasswordError && (
                                <p className="text-sm text-red-600">{serverPasswordError}</p>
                            )}
                            {passwordError && (
                                <p className="text-sm text-red-600">{passwordError}</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Sign in
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-800">
                Not a member?{' '}
                <Link to="/register" className="font-semibold leading-6 text-red-500 hover:text-indigo-300">
                    Sign-Up
                </Link>
                </p>
            </div>
        </div>
      </>
    )
  }
export default SignIn;
