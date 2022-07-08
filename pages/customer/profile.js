import React from 'react'
import Image from 'next/image';
import profile from '../../public/images/profile.png'
import DashboardLayout from '../../components/dashboard/layout';
import DashboardProvider from '../../components/dashboard/provider/context';
import { useState, useEffect } from "react";

//User
import { useToggle } from '../../components/dashboard/provider/context';
import { auth } from "../../firebase/firebase-config";
import { onAuthStateChanged } from "firebase/auth";

export default function Profile() {

  const { toggle } = useToggle();
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  })

  return (
    <><DashboardProvider>
      <DashboardLayout>
        <div className="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
          <div className="px-6">
              <div className="flex flex-wrap justify-center">
                  <div className="w-full flex justify-center">
                    <div className='relative mt-10'>
                      <Image
                        className='rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]'
                        src={profile}
                        width={200}
                        height={200}
                        alt=""
                      />
                    </div>
                  </div>
              </div>
              <div className="text-center mt-2">
                  <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">Captain Jack Sparrow</h3>
                  <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                      <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>{user?.email}
                  </div>
              </div>
              <div className="mt-6 py-6 border-t border-slate-200 text-center">
                  <div className="flex flex-wrap justify-center">
                      <div className="w-full px-4">
                        <div className="font-bold">Address:</div>
                          <p className="font-light leading-relaxed text-slate-600 mb-4">120 North Avenue NW, Atlanta, GA 30313</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </DashboardLayout>
    </DashboardProvider></>
  )
}
