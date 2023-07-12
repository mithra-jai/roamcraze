 import Head from "next/head";
 import Link from "next/link";
 import { useState } from "react";


 export default function Navbar() {
   const [navbar, setNavbar] = useState(false);
   const [options,setOptions] = useState(true)
   return (
     <div>
       <Head>
         <title>Roam Craze</title>
         <meta
           name="description"
           content="Create Next JS Responsive Menu with Tailwind CSS"
         />
         <link rel="icon" href="/favicon.ico" />
       </Head>
       <nav className="w-full bg-black-800 shadow">
         <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
           <div>
             <div className="flex items-center justify-between py-3 md:py-5 md:block">
               <a href="#">
                 <h2 className="text-2xl text-white font-bold">ROAM CRAZE</h2>
               </a>
               <div className="md:hidden">
                 <button
                   className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                   onClick={() => setNavbar(!navbar)}
                 >
                   {navbar ? (
                     <svg
                       xmlns="http:www.w3.org/2000/svg"
                       className="w-6 h-6 text-white"
                       viewBox="0 0 20 20"
                       fill="currentColor"
                     >
                       <path
                         fillRule="evenodd"
                         d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                         clipRule="evenodd"
                       />
                     </svg>
                   ) : (
                     <svg
                       xmlns="http:www.w3.org/2000/svg"
                       className="w-6 h-6 text-white"
                       fill="none"
                       viewBox="0 0 24 24"
                       stroke="currentColor"
                       strokeWidth={2}
                     >
                       <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         d="M4 6h16M4 12h16M4 18h16"
                       />
                     </svg>
                   )}
                 </button>
               </div>
             </div>
           </div>
           <div>
             <div
               className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                 navbar ? "block" : "hidden"
               }`}
             >
               <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                 <li className="text-white">
                   <Link href="/">Home</Link>
                 </li>
                 <li className="text-white">
                   <Link href="/">About us</Link>
                 </li>
                 {/* <li className="text-white">
                   <div class="relative inline-block text-left">
                     <div>
                       <button
                         type="button"
                         class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                         id="menu-button"
                         aria-expanded="true"
                         aria-haspopup="true"
                         onClick={() => setOptions(options)}
                       >
                         Options
                         <svg
                           class="-mr-1 h-5 w-5 text-gray-400"
                           viewBox="0 0 20 20"
                           fill="currentColor"
                           aria-hidden="true"
                         >
                           <path
                             fill-rule="evenodd"
                             d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                             clip-rule="evenodd"
                           />
                         </svg>
                       </button>
                     </div>

                     <div
                       class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                       role="menu"
                       aria-orientation="vertical"
                       aria-labelledby="menu-button"
                       tabindex="-1"
                     >
                       <div class="py-1" role="none">
                         <a
                           href="#"
                           class="text-gray-700 block px-4 py-2 text-sm"
                           role="menuitem"
                           tabindex="-1"
                           id="menu-item-0"
                         >
                           Account settings
                         </a>
                         <a
                           href="#"
                           class="text-gray-700 block px-4 py-2 text-sm"
                           role="menuitem"
                           tabindex="-1"
                           id="menu-item-1"
                         >
                           Support
                         </a>
                         <a
                           href="#"
                           class="text-gray-700 block px-4 py-2 text-sm"
                           role="menuitem"
                           tabindex="-1"
                           id="menu-item-2"
                         >
                           License
                         </a>
                         <form method="POST" action="#" role="none">
                           <button
                             type="submit"
                             class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                             role="menuitem"
                             tabindex="-1"
                             id="menu-item-3"
                           >
                             Sign out
                           </button>
                         </form>
                       </div>
                     </div>
                   </div>
                 </li> */}
                 <li className="text-white">
                   <Link href="/">Contact</Link>
                 </li>
               </ul>
             </div>
           </div>
         </div>
       </nav>
       <div className="flex justify-center items-center mt-8"></div>
     </div>
   );
 }


//  import React, { Fragment } from 'react';
//  import { Menu, Transition } from '@headlessui/react';
//  import { ChevronDownIcon } from '@heroicons/react/solid';

//  function classNames(...classes) {
//    return classes.filter(Boolean).join(' ');
//  }

//  const Navbar = () => {
//   return (
//     <div className='w-full h-20 flex justify-between items-center px-8 text-white'>
//       <h1 className='text-2xl font-bold text-[#00df9a]'>REACT.</h1>
//       <ul className='flex items-center'>
//         <li className='p-4'>
//           <Menu as='div' className='relative inline-block text-left'>
//             <Menu.Button>Services</Menu.Button>
//             <Transition
//               as={Fragment}
//               enter='transition ease-out duration-100'
//               enterFrom='transform opacity-0 scale-95'
//               enterTo='transform opacity-100 scale-100'
//               leave='transition ease-in duration-100'
//               leaveFrom='transform opacity-100 scale-100'
//               leaveTo='transform opacity-0 scale-95'
//             >
//               <Menu.Items className='origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none'>
//                 <div className='py-1'>
//                   <Menu.Item>
//                     {({ active }) => (
//                       <a
//                         href='#'
//                         className={classNames(
//                           active
//                             ? 'bg-gray-100 text-gray-900'
//                             : 'text-gray-700',
//                           'block px-4 py-2 text-sm'
//                         )}
//                       >
//                         For Companies
//                       </a>
//                     )}
//                   </Menu.Item>
//                   <Menu.Item>
//                     {({ active }) => (
//                       <a
//                         href='#'
//                         className={classNames(
//                           active
//                             ? 'bg-gray-100 text-gray-900'
//                             : 'text-gray-700',
//                           'block px-4 py-2 text-sm'
//                         )}
//                       >
//                         For Investors
//                       </a>
//                     )}
//                   </Menu.Item>
//                 </div>
//               </Menu.Items>
//             </Transition>
//           </Menu>
//         </li>
//         <li className='p-4'>Banking</li>
//         <li className='p-4'>Company</li>
//         <li className='p-4'>Resources</li>
//         <li className='p-4'>
//           <Menu as='div' className='relative inline-block text-left'>
//             <div>
//               <Menu.Button className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'>
//                 Account
//                 <ChevronDownIcon
//                   className='-mr-1 ml-2 h-5 w-5'
//                   aria-hidden='true'
//                 />
//               </Menu.Button>
//             </div>

//             <Transition
//               as={Fragment}
//               enter='transition ease-out duration-100'
//               enterFrom='transform opacity-0 scale-95'
//               enterTo='transform opacity-100 scale-100'
//               leave='transition ease-in duration-75'
//               leaveFrom='transform opacity-100 scale-100'
//               leaveTo='transform opacity-0 scale-95'
//             >
//               <Menu.Items className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none'>
//                 <div className='py-1'>
//                   <Menu.Item>
//                     {({ active }) => (
//                       <a
//                         href='#'
//                         className={classNames(
//                           active
//                             ? 'bg-gray-100 text-gray-900'
//                             : 'text-gray-700',
//                           'block px-4 py-2 text-sm'
//                         )}
//                       >
//                         Edit
//                       </a>
//                     )}
//                   </Menu.Item>
//                   <Menu.Item>
//                     {({ active }) => (
//                       <a
//                         href='#'
//                         className={classNames(
//                           active
//                             ? 'bg-gray-100 text-gray-900'
//                             : 'text-gray-700',
//                           'block px-4 py-2 text-sm'
//                         )}
//                       >
//                         Duplicate
//                       </a>
//                     )}
//                   </Menu.Item>
//                 </div>
//                 <div className='py-1'>
//                   <Menu.Item>
//                     {({ active }) => (
//                       <a
//                         href='#'
//                         className={classNames(
//                           active
//                             ? 'bg-gray-100 text-gray-900'
//                             : 'text-gray-700',
//                           'block px-4 py-2 text-sm'
//                         )}
//                       >
//                         Archive
//                       </a>
//                     )}
//                   </Menu.Item>
//                   <Menu.Item>
//                     {({ active }) => (
//                       <a
//                         href='#'
//                         className={classNames(
//                           active
//                             ? 'bg-gray-100 text-gray-900'
//                             : 'text-gray-700',
//                           'block px-4 py-2 text-sm'
//                         )}
//                       >
//                         Move
//                       </a>
//                     )}
//                   </Menu.Item>
//                 </div>
//                 <div className='py-1'>
//                   <Menu.Item>
//                     {({ active }) => (
//                       <a
//                         href='#'
//                         className={classNames(
//                           active
//                             ? 'bg-gray-100 text-gray-900'
//                             : 'text-gray-700',
//                           'block px-4 py-2 text-sm'
//                         )}
//                       >
//                         Share
//                       </a>
//                     )}
//                   </Menu.Item>
//                   <Menu.Item>
//                     {({ active }) => (
//                       <a
//                         href='#'
//                         className={classNames(
//                           active
//                             ? 'bg-gray-100 text-gray-900'
//                             : 'text-gray-700',
//                           'block px-4 py-2 text-sm'
//                         )}
//                       >
//                         Add to favorites
//                       </a>
//                     )}
//                   </Menu.Item>
//                 </div>
//                 <div className='py-1'>
//                   <Menu.Item disabled>
//                     {({ active }) => (
//                       <a
//                         href='#'
//                         className={classNames(
//                           active
//                             ? 'bg-gray-100 text-gray-900'
//                             : 'text-gray-700',
//                           'block px-4 py-2 text-sm'
//                         )}
//                       >
//                         Delete
//                       </a>
//                     )}
//                   </Menu.Item>
//                 </div>
//               </Menu.Items>
//             </Transition>
//           </Menu>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;
