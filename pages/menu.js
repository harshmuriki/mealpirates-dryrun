import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css'
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import Overview from '../components/landing/Overview';
import Link from 'next/link';

export default function menu() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Menu</title>
          <link rel="icon" href="/logo.png" />
        </Head>
      </div>
      <Navbar />

      <div className='flex justify-center'>
        <Overview />
      </div>

      <div className='flex font-medium flex-col items-center justify-center text-gray-700 md:p-10'>
        <div className='text-2xl pb-5'>The prices you see is the prices you get.</div>

        <div className='bg-yellow-400 text-xl rounded-md shadow-sm hover:bg-black hover:text-white px-4 py-1 '>
          <Link
            href="/pricing"
          >
            Pricing
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
