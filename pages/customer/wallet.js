import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import DashboardLayout from '../../components/dashboard/layout';
import DashboardProvider from '../../components/dashboard/provider/context';


export function Wallet() {

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <DashboardProvider>
        <DashboardLayout>
        <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-yellow-400 shadow-3x w-full mb-6 rounded-xl mt-16">
          <div className="px-6">
              <div className="text-center mt-2">
                  <h3 className="text-md text-black mt-10 py-5 font-semibold leading-normal mb-1 flex justify-start">Remaning Meal Credits</h3>
              </div>
              <div className="mt-6 py-4 text-center text-5xl flex font-sans justify-end">
                82
              </div>
          </div>
        </div>

        <div className='py-4 mt-16 text-2xl font-semibold'>Payment Methods</div>
        </DashboardLayout>
      </DashboardProvider>
    </>
  );
};

export default Wallet;
