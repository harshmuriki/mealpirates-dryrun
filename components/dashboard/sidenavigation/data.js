import { CashIcon, HomeIcon, MenuIcon, TableIcon } from '@heroicons/react/solid';

const data = [
  {
    title: 'Dashboard',
    icon: <HomeIcon className="h-5 w-5 text-black"/>,
    link: '/customer/dashboard',
  },
  {
    title: 'Future Meals',
    icon: <MenuIcon className="h-5 w-5 text-black"/>,
    link: '/customer/future',
  },
  {
    title: 'Wallet',
    icon: <CashIcon className="h-5 w-5 text-black"/>,
    link: '/customer/wallet',
  },
  {
    title: 'Past Orders',
    icon: <TableIcon className="h-5 w-5 text-black"/>,
    link: '/customer/orders',
  },
];

export default data;
