import React from 'react';
import Link from 'next/link';

export default function Monday() {
  return (
    <div className="py-0 flex justify-center bg-white">
      <main className="w-fit overflow-y-auto">

        <div className='flex justify-center'>
          <div className="px-10 mt-9  py-5">
            <span className="font-bold text-2xl text-black">
              Willys Mexicana Grill
            </span>
          </div>

          <img
            src="https://willys.com/wp-content/uploads/2020/11/logo.svg"
            className="h-14 w-14 mt-10 rounded-xl"
            alt=""
          />
        </div>

        <div className="w-full px-10 grid grid-cols-4 gap-10">
          <div className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center">
            <div className="bg-white rounded-lg mt-5">
              <img
                src="https://willys.com/wp-content/uploads/2022/01/Willys-Frito-Burrito.jpeg"
                className="h-40 rounded-md"
                height={1600}
                width={300}
                alt=""
              />
            </div>
            <div className="bg-white shadow-lg rounded-lg -mt-4 w-64">
              <div className="py-5 px-5 text-center">
                <span className="font-bold text-gray-800 text-lg">
                  Fritos Burrito (Adobe Chicken)
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
                src="https://images.unsplash.com/photo-1618040996337-56904b7850b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cXVlc2FkaWxsYXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                className="h-40 rounded-md"
                height={1600}
                width={300}
                alt=""
              />
            </div>
            <div className="bg-white shadow-lg rounded-lg -mt-4 w-64">
              <div className="py-5 text-center">
                <span className="font-bold text-gray-800 text-lg">
                  Willy Philly (Angus Prime Steak)
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
                src="https://olo-images-live.imgix.net/dc/dcac9ed237fe4ee2867ed0b29963bbd1.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=c9faaeb8be9d766c0d811c7235a67873"
                className="h-40 rounded-md"
                height={1600}
                width={300}
                alt=""
              />
            </div>
            <div className="bg-white shadow-lg rounded-lg -mt-4 w-64">
              <div className="py-5 pb-15 text-center">
                <span className="font-bold text-gray-800 text-lg">
                  Buffalo Chicken Burrito (Chicken)
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
                src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-40 rounded-md"
                height={1600}
                width={300}
                alt=""
              />
            </div>
            <div className="bg-white shadow-lg rounded-lg -mt-4 w-64">
              <div className="py-5 text-center">
                <span className="font-bold text-gray-800 text-lg">
                  Goat Bowl (Adobe Chicken Salad)
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
