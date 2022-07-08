import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'

export default function Banner() {
  return (
    <div className="bg-yellow-400">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-yellow-500">
              <SpeakerphoneIcon className="h-6 w-6 text-yellow-100" aria-hidden="true" />
            </span>
            <p className="ml-3 font-medium text-black truncate">
              <span className="md:hidden">We are launching soon! 🎉</span>
              <span className="hidden md:inline">Big news! We are excited to start our dry run from 7/11/2022 🎉</span>
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:text-black hover:bg-yellow-500">
            <Link
              href="https://forms.gle/ghZHsJKTsZMKKBxe9"
            >
              Subscribe
            </Link>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="-mr-1 flex p-2 rounded-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-6 w-6 text-black hover:text-black" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}