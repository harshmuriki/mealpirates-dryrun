import Link from 'next/link';
import { useToggle } from '../provider/context';
import { useState, useEffect } from "react";

import { auth } from "../../../firebase/firebase-config";
import { onAuthStateChanged } from "firebase/auth";

import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { async } from '@firebase/util';
import Router from 'next/router';

import UserDropdown from '../../dropdown/UserDropdown.js';

export default function TopNavigation() {
  const { toggle } = useToggle();

  const [user, setUser] = useState({});

  useEffect(() => {
    if (user) {
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
    } else if (!auth.user) {
      Router.push('/signin');
    }
  })

  const logout = async () => {
    await signOut(auth);
  }
  
  return (
    <header className="bg-white h-16 items-center relative shadow w-full z-10 md:h-20 lg:rounded-2xl">
      <div className="flex flex-center flex-col h-full justify-center mx-auto px-3 relative">
        <div className="flex items-center pl-1 relative w-full sm:pr-2 sm:ml-0 lg:max-w-68">
          <div className="flex h-full left-0 relative w-full">
            <div className="group flex items-center h-full relative w-12">
              <button
                type="button"
                aria-expanded="false"
                aria-label="Toggle sidenav"
                className="text-4xl text-gray-500 focus:outline-none"
                onClick={toggle}
              >
                &#8801;
              </button>
            </div>
          </div>
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex justify-end">
            <UserDropdown />
          </ul>
        </div>
      </div>
    </header>
  );
}
