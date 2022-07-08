import React from 'react';
import Link from 'next/link';
import chicken from '../../../public/images/chickenbiryani.jpg';

export default function Monday() {
  return (
    <div className="py-0 flex justify-center bg-white">
      <main className="w-fit overflow-y-auto">

        <div className='flex justify-center'>
          <div className="px-10 mt-9  py-5">
            <span className="font-bold text-2xl text-black">
              Bismillah Cafe
            </span>
          </div>

          <img
            src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/277803123_365476972256052_7537008726611317254_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=TG4zDav2PooAX_HPbQc&_nc_ht=scontent-atl3-2.xx&oh=00_AT8TKn780gDPwTh1f5P1z3CWKXeakMEJ2mdGo-UokVFMBA&oe=62CC04E3"
            className="h-14 w-14 mt-10 rounded-xl"
            alt=""
          />
        </div>

        <div className="w-full px-10 grid grid-cols-4 gap-10">
          <div className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center">
            <div className="bg-white rounded-lg mt-5">
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqy9qrHjxX-clRs5ofGLK5DcD36tgg3plBKQ&usqp=CAU'
                className="h-40 rounded-md"
                height={1600}
                width={300}
                alt=""
              />
            </div>
            <div className="bg-white shadow-lg rounded-lg -mt-4 w-64">
              <div className="py-5 text-center">
                <span className="font-bold text-gray-800 text-lg">
                  Chicken Shawarma Biryani
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9UYe9BY1GYlOva-89PgNwkqDzC70ZLRbHZg&usqp=CAU"
                className="h-40 rounded-md"
                height={1600}
                width={300}
                alt=""
              />
            </div>
            <div className="bg-white shadow-lg rounded-lg -mt-4 w-64">
              <div className="py-5 text-center">
                <span className="font-bold text-gray-800 text-lg">
                  Mix Biryani
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
                src="data:image/jpeg;base64,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"
                className="h-40 rounded-md"
                height={1600}
                width={300}
                alt=""
              />
            </div>
            <div className="bg-white shadow-lg rounded-lg -mt-4 w-64">
              <div className="py-5 text-center">
                <span className="font-bold text-gray-800 text-lg">
                  Vegetable Biryani
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
                src="https://mymozo.com/myrestaurant/Catalog/Images/indianmenu/ckbutter.jpg"
                className="h-40 rounded-md"
                height={1600}
                width={300}
                alt=""
              />
            </div>
            <div className="bg-white shadow-lg rounded-lg -mt-4 w-64">
              <div className="py-5 text-center">
                <span className="font-bold text-gray-800 text-lg">
                  Butter Chicken
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
