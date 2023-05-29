import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'


const callsToAction = [
  { name: 'Update Profile', href: '#' },
  { name: 'Logout', href: '#'},
]

export default function Profilepage()
 {
  function handleLogout()
  {
    localStorage.removeItem("USERNAME");
    window.location.href = "/" ;
  }

  return (
    <Popover className="relative">
      {/* <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
      <legend style={{cursor:"pointer"}} className="text-lg font-semibold leading-6 text-gray-900 lg:justify-end pointer-cursor" >
            Profile  
          </legend>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button> */}
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
        <p>Profile</p>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
           <div className="" > <svg  xmlns="http://www.w3.org/2000/svg" width="100" height="50" fill="currentColor" className="bi bi-person-circle mx-auto" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg></div>
              <div>
                <p className='text-center font-bold my-8 ...>my-8'>Yashwantsingh</p>
                <p className='text-center font-semibold text-gray-900 my-8 ...>my-20' >Yashwant@infobell.com</p>
              </div>
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 " variant="contained">
              {callsToAction.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleLogout}
                  className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-blue-200"
                >
                 
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
