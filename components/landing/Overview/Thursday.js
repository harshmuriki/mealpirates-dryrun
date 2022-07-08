import React from 'react';
import Link from 'next/link';

export default function Monday() {
  return (
    <div className="py-0 flex justify-center bg-white">
      <main className="w-fit overflow-y-auto">

        <div className='flex justify-center'>
          <div className="px-10 mt-9  py-5">
            <span className="font-bold text-2xl text-black">
              Howling Willys: Fried Chicken
            </span>
          </div>

          <img
            src="data:image/jpeg;base64,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"
            className="h-14 w-14 mt-10 rounded-xl"
            alt=""
          />
        </div>

        <div className="w-full px-10 grid grid-cols-3 gap-10">
          <div className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center">
            <div className="bg-white rounded-lg mt-5">
              <img
                src="https://willys.com/wp-content/uploads/fly-images/1510/176535979_104037838499582_3109829063363020991_n-322x322-c.jpeg"
                className="h-40 rounded-md"
                height={1600}
                width={300}
                alt=""
              />
            </div>
            <div className="bg-white shadow-lg rounded-lg -mt-4 w-64">
              <div className="py-5 px-5 text-center">
                <span className="font-bold text-gray-800 text-lg">
                  Tenders Plate
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
                src="https://willys.com/wp-content/uploads/fly-images/1759/8wings-01-scaled-322x322-c.jpg"
                className="h-40 rounded-md"
                height={1600}
                width={300}
                alt=""
              />
            </div>
            <div className="bg-white shadow-lg rounded-lg -mt-4 w-64">
              <div className="py-5 px-20">
                <span className="font-bold text-gray-800 text-lg">
                  Quesadilla
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
                src="https://willys.com/wp-content/uploads/fly-images/1306/menu-chickentender-salad-e1623431939384-322x322-c.jpg"
                className="h-40 rounded-md"
                height={1600}
                width={300}
                alt=""
              />
            </div>
            <div className="bg-white shadow-lg rounded-lg -mt-4 w-64">
              <div className="py-5 px-20">
                <span className="font-bold text-gray-800 text-lg">
                  Goal Bowl
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
