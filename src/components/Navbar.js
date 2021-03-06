import logo from './logo.png';

export default function Navbar() {
  return (
    <nav className='bg-slate-800 p-2 flex w-full items-center '>
      <img className='h-12 w-12' src={logo} alt='this is a logo' />
      <ul className=' text-center grid  grid-cols-3 pb-2 font-sans text-sm md:text-lg mx-auto space-x-8  md:space-x-60 text-white cursor-pointer'>
        <li className=' hover:text-green-200 active:text-gray-900'>Home</li>
        <li className='hover:text-green-200 active:text-gray-900'>About</li>
        <li className='hover:text-green-200 active:text-gray-900'>Tours</li>
      </ul>
    </nav>
  );
}
