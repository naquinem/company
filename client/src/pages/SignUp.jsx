import React, { useState } from 'react'
import axiosClient from '../axios/axiosclient';
import { Link, useNavigate } from 'react-router-dom';


const SignUp = () => {
    const navigate = useNavigate();
    const [fnameError, setFnameError] = useState('');
    const [lnameError, setLnameError] = useState('');
    const [bdateError, setBdateError] = useState('');
    const [addressError, setAddressError] = useState('');
    const [contactError, setContactError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const {fname, lname, bdate, address, contact, email, password, cpassword} = e.target.elements;
            const data = {
                first_name: fname.value,
                last_name: lname.value,
                birth_date: bdate.value,
                address: address.value,
                contact_number: contact.value,
                email: email.value,
                password: password.value,
                password_confirmation: cpassword.value,
            }
            const response = await axiosClient.post('/register', data);
            if(response.status === 200){
                navigate('/');
            }
        }
        catch(error) {
            if(error.response.status === 422){
                if(error.response.data.errors.first_name){
                    setFnameError(error.response.data.errors.first_name);
                } else {
                    setFnameError('');
                }
                if(error.response.data.errors.last_name){
                    setLnameError(error.response.data.errors.last_name);
                } else {
                    setLnameError('');
                }
                if(error.response.data.errors.birth_date){
                    setBdateError(error.response.data.errors.birth_date);
                } else {
                    setBdateError('');
                }
                if(error.response.data.errors.address){
                    setAddressError(error.response.data.errors.address);
                } else {
                    setAddressError('');
                }
                if(error.response.data.errors.contact_number){
                    setContactError(error.response.data.errors.contact_number);
                } else {
                    setContactError('');
                }
                if(error.response.data.errors.email){
                    setEmailError(error.response.data.errors.email);
                } else {
                    setEmailError('');
                }
                if(error.response.data.errors.password){
                    setPasswordError(error.response.data.errors.password);
                } else {
                    setPasswordError('');
                }
            }
        }
    }


    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto mb-8 sm:w-full sm:max-w-sm">
                <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign-Up to your account
                </h2>
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className='grid grid-cols-2 gap-1'>
                        <div className="mt-2">
                            <input
                                id="fname"
                                name="fname"
                                type="text"
                                autoComplete="fname"
                                className="block w-full h-8 p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="First Name"
                            />
                            {fnameError && (
                                <p className="text-sm text-red-600">{fnameError}</p>
                            )}
                        </div>
                        <div className="mt-2">
                            <input
                                id="lname"
                                name="lname"
                                type="text"
                                autoComplete="lname"
                                className="block w-full h-8 p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Last Name"
                            />
                            {lnameError && (
                                <p className="text-sm text-red-600">{lnameError}</p>
                            )}
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-1'>
                        <div className="mt-0">
                            <input
                                id="bdate"
                                name="bdate"
                                type="date"
                                autoComplete="bdate"
                                className="block w-full h-8 p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            {bdateError && (
                                <p className="text-sm text-red-600">{bdateError}</p>
                            )}
                        </div>
                        <div className="mt-0">
                            <input
                                id="contact"
                                name="contact"
                                type="text"
                                autoComplete="contact"
                                className="block w-full h-8 p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Contact Number"
                            />
                            {contactError && (
                                <p className="text-sm text-red-600">{contactError}</p>
                            )}
                        </div>
                    </div>
                    <div>
                        <div className="mt-2">
                            <input
                                id="address"
                                name="address"
                                type="text"
                                autoComplete="address"
                                className="block w-full h-8 p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Address"
                            />
                            {addressError && (
                                <p className="text-sm text-red-600">{addressError}</p>
                            )}
                        </div>
                    </div>
                    <div>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full h-8 p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Email Address"
                            />
                            {emailError && (
                                <p className="text-sm text-red-600">{emailError}</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                className="block w-full h-8 p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Password"
                            />
                            {passwordError && (
                                <p className="text-sm text-red-600">{passwordError}</p>
                            )}
                        </div>
                    </div>
                    <div>
                        <div className="mt-2">
                            <input
                                id="cpassword"
                                name="cpassword"
                                type="password"
                                autoComplete="current-password"
                                className="block w-full h-8 p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Confirm Password"
                            />
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
                        Sign-Up
                        </button>
                    </div>
                </form>

                <p className="mt-3 text-center text-sm text-gray-800">
                    Already have an account?{' '}
                <Link to="/" className="font-semibold leading-6 text-red-500 hover:text-indigo-300">
                    Sign In
                </Link>
                </p>
            </div>
        </div>
      </>
    )
  }
export default SignUp;
