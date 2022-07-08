import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import customer from '../../public/images/customer.png';
import restaurant from '../../public/images/restaurant.png';
import driver from '../../public/images/driver.png';
import wallet from '../../public/images/wallet.png'
import meal from '../../public/images/meal.png'
import track from '../../public/images/track.png'
import logo from '../../public/logo.png'

export default function Hero() {
  return (
    <section className=" pt-24 bg-white">
      <div className="px-12 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">

          <div className='flex justify-center'>
              <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                <div className="text-black">
                  <Typewriter
                    options={{
                      strings: [
                        'No delivery fees',
                        'No tips',
                        'No hidden fees',
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 100,
                    }}
                  />
                </div>
              </h1>

          </div>
          
          <div>
            <p className="flex justify-center text-center px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
                  Treat your taste buds to quality restaurant meals on a student’s
                  budget.
            </p> 
          </div>

          <div className='flex justify-center'>
            <div className='px-4 py-2 font-medium rounded-lg inline-flex text-black bg-yellow-400 hover:bg-black hover:text-white'>
              <Link
              href="/menu"
              >
              Menu for this week
              </Link>
            </div>
          </div>

          


          <section className="pt-20 lg:pt-[90px] pb-10 lg:pb-0 bg-white">
            <div className=" p-8 sm:p-9 md:p-7 flex justify-center text-3xl font-extrabold leading-none tracking-normal black md:text-5xl md:tracking-tight lg:pb-10">
              How it works
            </div>
            <div className="container">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                  <div className="bg-white rounded-lg overflow-hidden mb-10">
                    <div className='flex justify-center'>
                    <Image src={wallet} width={130} height={130} alt="image" className="w-fit h-fit" />
                    </div>
                    
                    <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                      <h3>
                        <a
                          href="javascript:void(0)"
                          className="
                                  font-semibold
                                  text-dark text-xl
                                  sm:text-[22px]
                                  md:text-lg
                                  lg:text-[22px]
                                  xl:text-lg
                                  2xl:text-lg
                                  mb-4
                                  block
                                  hover:text-primary
                                  "
                        >
                          Load your digital wallet
                        </a>
                      </h3>
                      <p className="text-base text-body-color leading-relaxed mb-7">
                        Subscribe to one of our monthly plans and load your
                        digital wallet
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                  <div className="bg-white rounded-lg overflow-hidden mb-10">
                    <div className='flex justify-center'>
                    <Image src={meal} width={130} height={130} alt="image" className="w-fit h-fit" />
                    </div>
                    <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                      <h3>
                        <a
                          href="javascript:void(0)"
                          className="
                                  font-semibold
                                  text-dark text-xl
                                  sm:text-[22px]
                                  md:text-lg
                                  lg:text-[22px]
                                  xl:text-lg
                                  2xl:text-lg
                                  mb-4
                                  block
                                  hover:text-primary
                                  "
                        >
                          Choose meals
                        </a>
                      </h3>
                      <p className="text-base text-body-color leading-relaxed mb-7">
                        Choose your prefered meals from a variety of restaurants
                        for the coming week.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                  <div className="bg-white rounded-lg overflow-hidden mb-10">
                    <div className='flex justify-center'>
                    <Image src={track} width={130} height={130} alt="image" className="w-fit h-fit" />
                    </div>
                    <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                      <h3>
                        <a
                          href="javascript:void(0)"
                          className="
                                  font-semibold
                                  text-dark text-xl
                                  sm:text-[22px]
                                  md:text-lg
                                  lg:text-[22px]
                                  xl:text-lg
                                  2xl:text-lg
                                  mb-4
                                  block
                                  hover:text-primary
                                  "
                        >
                          Pay and track
                        </a>
                      </h3>
                      <p className="text-bßase text-body-color leading-relaxed mb-7">
                        Pay for the chosen meals and choose a drop-off location.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-5 lg:pt-[0px] pb-10 lg:pb-0 bg-white">

            <div className="">
              <div className="font-extrabold leading-none tracking-normal text-3xl text-black md:text-5xl md:tracking-tight lg:pb-10 flex justify-center">
                <h1 className="flex justify-center">
                  How we help everyone!
                </h1>
              </div>

              <div className="flex flex-col space-y-10 lg:pb-10">
                <p className="p-8 sm:p-9 md:p-7 text-md text-body-color text-center leading-relaxed mb-15 flex flex-col space-y-15">
                  We help restaurants prepare catering orders and pool those orders for delivery to bring you the best price.
                </p>
              </div>

              <div className="p-8 sm:p-9 md:p-7 flex justify-center text-2xl font-bold leading-none tracking-normal text-black md:text-3xl md:tracking-tight lg:pb-10">
              What does this mean?
            </div>
            </div>

            <div className="container">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                  <div className="bg-white rounded-lg overflow-hidden mb-10">
                    <Image src={customer} alt="image" className="w-full" />
                    <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                      <h3>
                        <a
                          href="javascript:void(0)"
                          className="
                                  font-semibold
                                  text-dark text-xl
                                  sm:text-[22px]
                                  md:text-lg
                                  lg:text-[22px]
                                  xl:text-lg
                                  2xl:text-lg
                                  mb-4
                                  block
                                  hover:text-primary
                                  "
                        >
                          Customers
                        </a>
                      </h3>
                      <p className="text-base text-body-color leading-relaxed mb-7">
                        You get restaurant meals delivered hot and fresh at the lowest possible price
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                  <div className="bg-white rounded-lg overflow-hidden mb-10">
                    <Image src={restaurant} alt="image" className="w-full" />
                    <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                      <h3>
                        <a
                          href="javascript:void(0)"
                          className="
                                  font-semibold
                                  text-dark text-xl
                                  sm:text-[22px]
                                  md:text-lg
                                  lg:text-[22px]
                                  xl:text-lg
                                  2xl:text-lg
                                  mb-4
                                  block
                                  hover:text-primary
                                  "
                        >
                          Restaurants
                        </a>
                      </h3>
                      <p className="text-base text-body-color leading-relaxed mb-7">
                        Restaurants love us for our reliable catering orders
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                  <div className="bg-white rounded-lg overflow-hidden mb-10">
                    <Image src={driver} alt="image" className="w-full" />
                    <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                      <h3>
                        <a
                          href="javascript:void(0)"
                          className="
                                  font-semibold
                                  text-dark text-xl
                                  sm:text-[22px]
                                  md:text-lg
                                  lg:text-[22px]
                                  xl:text-lg
                                  2xl:text-lg
                                  mb-4
                                  block
                                  hover:text-primary
                                  "
                        >
                          Drivers
                        </a>
                      </h3>
                      <p className="text-base text-body-color leading-relaxed mb-7">
                        Our drivers get a consistent, high wage without depending on tips
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-5 lg:pt-[0px] pb-10 lg:pb-20 bg-white">
            <div className="flex flex-col justify-center h-full">
              <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-balck">
                <header className="px-5 py-4 border-b border-gray-100">
                  <h2 className="font-semibold text-gray-800">
                    Key Differences
                  </h2>
                </header>
                <div className="p-3">
                  <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                      <thead className="text-xs font-semibold uppercase text-black-400 bg-yellow-200">
                        <tr>
                          <th className="p-2 whitespace-nowrap flex justify-center">
                            <div className="font-semibold text-left">
                              Bill
                            </div>
                          </th>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">
                              MealPirates
                            </div>
                          </th>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Other Food Delivery Apps
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-sm divide-y divide-gray-100">
                        <tr>
                          <td>
                            <div className="flex items-center">
                              <div className="w-5 h-10 flex-shrink-0 mr-2 sm:mr-3"></div>
                              <div className="font-medium text-gray-800">
                                Order Subtotal
                              </div>
                            </div>
                          </td>
                          <td className="p-2 items-center">
                            <div className="text-left text-gray-600">
                              $13.05
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left text-gray-600">
                              $13.05
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="flex items-center">
                              <div className="w-5 h-10 flex-shrink-0 mr-2 sm:mr-3"></div>
                              <div className="font-medium text-gray-800">
                                Delivery Fee
                              </div>
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left text-gray-600">
                              $0.00
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left text-gray-600">
                              $3.99
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="flex items-center">
                              <div className="w-5 h-10 flex-shrink-0 mr-2 sm:mr-3"></div>
                              <div className="font-medium text-gray-800">
                                Service
                              </div>
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left text-gray-600">
                              $0.00
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left text-gray-600">
                              $2.50
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="flex items-center">
                              <div className="w-5 h-10 flex-shrink-0 mr-2 sm:mr-3"></div>
                              <div className="font-medium text-gray-600">
                                Misc. Fees
                              </div>
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left text-gray-600">
                              $0.00
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left text-gray-600">
                              $1.78
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="flex items-center">
                              <div className="w-5 h-10 flex-shrink-0 mr-2 sm:mr-3"></div>
                              <div className="font-medium text-gray-800">
                                Tips
                              </div>
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left text-gray-600">
                              $0.00
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left text-gray-600">
                              $3.00
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="flex items-center">
                              <div className="w-5 h-10 flex-shrink-0 mr-2 sm:mr-3"></div>
                              <div className="font-medium text-gray-800">
                                Order Total
                              </div>
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="font-extrabold text-left text-red-600">
                              $13.05
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="font-extrabold text-left text-red-600">
                              $24.32
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section >
  );
}