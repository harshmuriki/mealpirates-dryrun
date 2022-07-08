import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.png'
import Head from 'next/head';
import styles from '../styles/Home.module.css'

import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase-config';
import { Router } from 'next/router';

export default function Signin() {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");


  const login = async (e) => {
    

    try {
      const user = await signInWithEmailAndPassword(
        auth, 
        loginEmail,
        loginPassword
      )

    } catch (error) {
      console.log(error.message);
    }
    e.preventDefault()
  };


  return (
    <>

      <div className={styles.container}>
        <Head>
          <title>Signin</title>
          <link rel="icon" href="/logo.png" />
        </Head>
      </div>

    <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
      <div className="w-full sm:max-w-md p-5 mx-auto">
        <div className='flex justify-center mb-12'>
          <Image className=" sm:h-10" src={logo} width={100} height={100} href="#" />
        </div>
        
        <form>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="email">Email Address</label>
            <input
                onChange={(event) => {
                  setLoginEmail(event.target.value);
                }} 
                id="email" 
                type="text" 
                name="email" 
                placeholder='email' 
                className="py-2 px-3 border border-gray-300 focus:outline-none rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="password">Password</label>
            <input 
                onChange={(event) => {
                  setLoginPassword(event.target.value);
                }} 
                id="password" 
                type="password" 
                name="password" 
                className="py-2 px-3 border border-gray-300  focus:outline-none rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember_me" type="checkbox" className="border border-gray-300 text-red-600 shadow-sm" />
              <label htmlFor="remember_me" className="ml-2 block text-sm leading-5 text-gray-900"> Remember me </label>
            </div>
            <Link href="#" className="text-sm"> Forgot your password? </Link>
          </div>
          <div className="mt-6">
            <Link href="/customer/dashboard">
              <button onClick={login} className="w-full inline-flex items-center justify-center px-4 py-2 bg-yellow-500 border border-transparent rounded-md font-semibold capitalize text-black hover:bg-black hover:text-white active:bg-yellow-500 focus:outline-none disabled:opacity-25 transition">Sign In</button>
            </Link>
          </div>
          <div className="mt-6 text-center">
            <Link href="/signup" className="underline">Sign up for an account</Link>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}
