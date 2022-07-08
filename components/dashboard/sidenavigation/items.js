import Link from 'next/link';
import { useRouter } from 'next/router';

import data from './data';

const style = {
  title: `font-bold mx-3 text-sm`,
  active: `bg-gradient-to-r border-r-4 border-r-4 border-black from-white to-yellow-200 text-black`,
  link: `duration-100 flex font-thin items-center justify-start my-2 p-4 transition-colors text-black w-full lg:hover:text-yellow-400`,
};

export default function SidenavItems() {
  const { asPath } = useRouter();
  return (
    <ul>
      <li>
        {data.map((item) => (
          <Link href={item.link} key={item.title}>
            <a
              className={`${style.link} 
              ${item.link === asPath && style.active}`}
            >
              <span>{item.icon}</span>
              <span className={style.title}>{item.title}</span>
            </a>
          </Link>
        ))}
      </li>
    </ul>
  );
}
