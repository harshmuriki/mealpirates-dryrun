import React, { useState } from 'react';
import Link from 'next/link';

import Monday from './Overview/Monday';
import Tuesday from './Overview/Tuesday';
import Wednesday from './Overview/Wednesday';
import Thursday from './Overview/Thursday';
import Friday from './Overview/Friday';


const Overview = (props) => {
  const [active, setActive] = useState(1);

  const handleActive = (item) => {
    console.log(item);
    setActive(item);
  };

  const Tab = (props) => {
    return (
      <div
        className={
          active == props.num
            ? 'bg-yellow-500 text-black text-w mx-2 px-4 rounded-md p-2 text-sm font-bold'
            : 'text-sm cursor-pointer transition ease-out mx-2 px-4 rounded-md p-2 hover:bg-yellow-500 hover:text-black'
        }
        onClick={() => {
          setActive(props.num);
        }}
      >
        {props.name}{' '}
      </div>
    );
  };

  const Feature = (props) => {
    return (
      <div className={active == props.num ? '' : 'hidden'}>{props.name}</div>
    );
  };

  return (
    <>
      <div>
        <div className="w-full px-20">
          <div className="text-left w-full bg-gray-100 text-white px-4 py-2 rounded-t-md mt-10 font-bold text-xl">
            {props.title}
          </div>
          <div className="flex justify-center w-full bg-gray-200 text-black px-1 py-2 rounded-b-md">
            <Tab num={1} name="Monday" />
            <Tab num={2} name="Tuesday" />
            <Tab num={3} name="Wednesday" />
            <Tab num={4} name="Thursday" />
            <Tab num={5} name="Friday" />
          </div>
        </div>
        <div className="w-screen h-96">
          {active == 1 ? <Monday /> : null}

          {active == 2 ? <Tuesday /> : null}

          {active == 3 ? <Wednesday /> : null}

          {active == 4 ? <Thursday /> : null}

          {active == 5 ? <Friday /> : null}
        </div>
      </div>
    </>

  );
};

export default Overview;
