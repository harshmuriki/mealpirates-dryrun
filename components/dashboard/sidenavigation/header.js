import Image from 'next/image';
import logo from '../../../public/logo.png';


export default function SidenavHeader() {
  return (
    <div className="bg-white flex items-center justify-center pt-6 sticky top-0 pb-6 z-10">
      <div className="flex justify-center lg:w-0 lg:flex-1">
        <Image className="h-8 w-auto sm:h-10" src={logo} width={100} height={100} alt="" />
      </div>
    </div>
  );
}
