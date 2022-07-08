import React, { useState } from 'react';
import Modal from '../Modal';

//Modal
import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'
import {CakeIcon} from '@heroicons/react/outline'
import Nutrition from '../Nutrition'


const TodayContent = ({ title, subtitle }) => {

  const [open, setOpen] = useState(true)

  const cancelButtonRef = useRef(null)

  const [showModal, setShowModal] = useState(false);

return(
  <div className="flex flex-col flex-wrap sm:flex-row">
    <div className="w-full sm:w-1/2 xl:w-1/3">
      <div className="mb-4">
        <div className="shadow-lg rounded-2xl p-4 bg-white w-full">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <span className="rounded-full relative p-2 bg-blue-100">
                <img
                  className="rounded-xl"
                  src="https://willys.com/wp-content/uploads/2020/11/logo.svg"
                  width="60"
                  height="60"
                  alt="Alex Shatov"
                />
              </span>
              <div className="flex flex-col">
                <span className="font-bold text-md text-black ml-2">
                  {title ? title : ' Google'}
                </span>
                <span className="text-sm text-black text-black ml-2">
                  {subtitle ? subtitle : ' Google'}
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <button onClick={() => setShowModal(true)} className="border p-1 text-xs m-1 font-bold bg-black text-white rounded-full">
                Nutrition
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center font-bold text-xl mb-4 space-x-12">
            <div>Quinoa Adobe Bowl</div>
          </div>

          <div className="flex items-center justify-center mb-10 space-x-12">
            <img
              className="rounded-xl"
              src="https://willys.com/wp-content/uploads/fly-images/305/img03@2x-322x322-c.jpg"
              width="250"
              height="250"
              alt="Burak Long"
            />
          </div>

          <div className="flex items-center justify-start my-4 space-x-4">
            <span className="px-2 py-1 flex items-center text-xs rounded-md font-semibold text-black bg-gray-200">
              Carbs: 84 g
            </span>
            <span className="px-2 py-1 flex items-center text-xs rounded-md text-black font-semibold bg-gray-200">
              Protein: 54 g
            </span>
            <span className="px-2 py-1 flex items-center text-xs rounded-md text-black font-semibold bg-gray-200">
              Protein: 22 g
            </span>
          </div>
          <span className="flex justify-center px-9 py-2 w-36 mt-4 items-center text-lg rounded-2xl font-semibold text-white bg-black">
            🔥 560
          </span>
        </div>
      </div>
    </div>

    <Transition.Root show={showModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-yellow-400 sm:mx-0 sm:h-10 sm:w-10">
                      <CakeIcon className="h-6 w-6 text-yellow-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                        
                      </Dialog.Title>
                      <div className="mt-2">
                        <Nutrition/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setShowModal(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>

  </div>
);

};

export default TodayContent;
