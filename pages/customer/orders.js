import React from 'react';
import Head from 'next/head';
import DashboardLayout from '../../components/dashboard/layout';
import DashboardProvider from '../../components/dashboard/provider/context';

function Orders({ user, error, isLoading }) {

  return (
    <>

      <DashboardProvider>
        <DashboardLayout>
          <section className="antialiased bg-white text-gray-600 w-full">
            <div className="flex justify-center">
              <div className="w-screen max-w-screen mx-screen bg-white shadow-lg rounded-sm border border-gray-200">
                <header className="px-5 py-4 border-b border-white">
                  <h2 className="font-semibold text-gray-800">Orders</h2>
                </header>
                <div className="p-3">
                  <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                      <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                        <tr>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">From</div>
                          </th>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">Item</div>
                          </th>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Status
                            </div>
                          </th>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-center">
                              View Order
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-sm divide-y divide-gray-100">
                        <tr>
                          <td className="p-2 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                <img
                                  className="rounded-full"
                                  src="https://willys.com/wp-content/uploads/2020/11/logo.svg"
                                  width="40"
                                  height="40"
                                  alt="Alex Shatov"
                                />
                              </div>
                              <div className="font-medium text-gray-800">
                                Willys Mexicana Grill
                              </div>
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">
                              Buffalo Chicken Burrito
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left font-medium text-green-500">
                                Delivered
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                             <div className="text-md text-center fond-bold">View</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                <img
                                  className="rounded-full"
                                  src="https://willys.com/wp-content/uploads/2020/11/logo.svg"
                                  width="40"
                                  height="40"
                                  alt="Philip Harbach"
                                />
                              </div>
                              <div className="font-medium text-gray-800">
                                Willys Mexicana Grill
                              </div>
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">Baja Burrito</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left font-medium text-green-500">
                                Delivered
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-md text-center fond-bold">View</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                <img
                                  className="rounded-full"
                                  src="https://static.wixstatic.com/media/0ec3e4_9d6b1045e2b44a559ee338006bb76d8c~mv2.png"
                                  width="40"
                                  height="40"
                                  alt="Mirko Fisuk"
                                />
                              </div>
                              <div className="font-medium text-gray-800">
                                Ponko Chicken
                              </div>
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">PONKO Rice Bowl</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left font-medium text-green-500">
                                Delivered
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-md text-center fond-bold">View</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                <img
                                  className="rounded-full"
                                  src="https://willys.com/wp-content/uploads/2020/11/logo.svg"
                                  width="40"
                                  height="40"
                                  alt="Olga Semklo"
                                />
                              </div>
                              <div className="font-medium text-gray-800">
                                Willys Mexicana Grill
                              </div>
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">Quinoa Adobe Bowl</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left font-medium text-green-500">
                                Delivered
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-md text-center fond-bold">View</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                <img
                                  className="rounded-full"
                                  src="https://static.wixstatic.com/media/0ec3e4_9d6b1045e2b44a559ee338006bb76d8c~mv2.png"
                                  width="40"
                                  height="40"
                                  alt="Burak Long"
                                />
                              </div>
                              <div className="font-medium text-gray-800">
                                Ponko Chicken
                              </div>
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">PONKO Grit Bowl</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left font-medium text-green-500">
                              Delivered
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                             <div className="text-md text-center fond-bold">View</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </DashboardLayout>
      </DashboardProvider>
    </>
  );
}

export default Orders;
