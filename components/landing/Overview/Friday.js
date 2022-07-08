import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

export default function Monday() {
  return (
    <div className="py-0 flex justify-center bg-white">
      <main className="w-fit overflow-y-auto">

        <div className='flex justify-center'>
          <div className="px-10 mt-9  py-5">
            <span className="font-bold text-2xl text-black">
              Mukja Korean Fried Chicken
            </span>
          </div>

          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4-8oFuHZ7xRcdCj5qlNHqie5u95_RUensow&usqp=CAU'
            className="h-14 w-14 mt-10 rounded-xl"
            alt=""
          />
        </div>

        <div className="w-full px-10 grid grid-cols-4 gap-10">
          <div className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center">
            <div className="bg-white rounded-lg mt-5">
              <img
                src='https://popmenucloud.com/cdn-cgi/image/width%3D1920%2Cheight%3D1920%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/ahmuvboj/db424da3-47ef-4518-88a3-627b04736799.jpg'
                className="h-40 rounded-md"
                height={1600}
                width={300}
                alt=""
              />
            </div>
            <div className="bg-white shadow-lg rounded-lg -mt-4 w-64">
              <div className="py-5 px-5 text-center">
                <span className="font-bold text-gray-800 text-lg">
                  Chicken Wings
                </span>
                <div className="flex items-center justify-center">
                  <div className="text-xl text-red-600 font-light">
                    $ 8.00
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center">
            <div className="bg-white rounded-lg mt-5">
              <img
                src='https://popmenucloud.com/cdn-cgi/image/width%3D1920%2Cheight%3D1920%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/ahmuvboj/531a08a2-803d-487e-93d4-aca83bd400d5.jpg'
                className="h-40 rounded-md"
                height={1600}
                width={300}
                alt=""
              />
            </div>
            <div className="bg-white shadow-lg rounded-lg -mt-4 w-64">
              <div className="py-5 text-center">
                <span className="font-bold text-gray-800 text-lg">
                  Quarter Bird
                </span>
                <div className="flex items-center justify-center">
                  <div className="text-xl text-red-600 font-light">
                    $ 8.00
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center">
            <div className="bg-white rounded-lg mt-5">
              <img
                src='https://popmenucloud.com/cdn-cgi/image/width%3D1920%2Cheight%3D1920%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/ahmuvboj/2e2094d7-c854-4430-a151-92d29876c89e.jpg'
                className="h-40 rounded-md"
                height={1600}
                width={300}
                alt=""
              />
            </div>
            <div className="bg-white shadow-lg rounded-lg -mt-4 w-64">
              <div className="py-5 text-center">
                <span className="font-bold text-gray-800 text-lg">
                  Mukja Bowl
                </span>
                <div className="flex items-center justify-center">
                  <div className="text-xl text-red-600 font-light">
                    $ 8.00
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center">
            <div className="bg-white rounded-lg mt-5">
              <img
                src='https://popmenucloud.com/cdn-cgi/image/width%3D1920%2Cheight%3D1920%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/ahmuvboj/d9c64135-543c-40c3-adab-fc43de0c9ef4.jpg'
                className="h-40 rounded-md"
                height={1600}
                width={300}
                alt=""
              />
            </div>
            <div className="bg-white shadow-lg rounded-lg -mt-4 w-64">
              <div className="py-5 text-center">
                <span className="font-bold text-gray-800 text-lg">
                  Bird on a Bun
                </span>
                <div className="flex items-center justify-center">
                  <div className="text-xl text-red-600 font-light">
                    $ 8.00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
