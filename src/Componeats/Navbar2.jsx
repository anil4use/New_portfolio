import React from 'react'
import { Link } from 'react-router-dom'

function Navbar2() {
    return (
        <div className='nav'>
            <nav className=" bg-transparent dark:bg-gray-900 fixed w-full z-20 top-0 left-0">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to={"/"} className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-4xl font-bold md:p-0  whitespace-nowrap text-white dark:text-white">Anil <span className=' text-pink-600'>Anuagee</span></span>
                    </Link>
                    <div className="flex md:order-2">
                        {/* <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button> */}
                        <button className="  md:hidden text-red-50" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
                        <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                        
                    </div>
                    <div className="hidden w-full md:block md:w-auto" id="">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link to={"/"} className="block py-0  pl-56 navHover   pr-4 text-gray-100  font-semibold  text-xl rounded hover:transition-all hover:text-pink-600" >Home</Link>
                            </li>
                            <li>
                                <Link to={"/about"} className="block py-0 pl-3 navHover  pr-4 text-gray-100  font-semibold  text-xl rounded hover:text-pink-600">About</Link>
                            </li>
                            <li>
                                <Link to={"/project"} className="block py-0 pl-3 navHover  pr-4 text-gray-100  font-semibold  text-xl rounded hover:text-pink-600">Projects</Link>
                            </li>
                            <li>
                                <Link  to={"/certificate"} className="block py-0 pl-3 navHover  pr-4 text-gray-100  font-semibold  text-xl rounded hover:text-pink-600">Certificate</Link>
                            </li>
                           
                            <li>
                                <Link  to={"/contact"} className="block py-0 pl-3 navHover  pr-4 text-gray-100  font-semibold  text-xl rounded hover:text-pink-600">Contact</Link>
                            </li>
                        </ul>
                    </div>



                </div>
            </nav>
            <div id="drawer-navigation" className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-64 dark:bg-gray-800" tabIndex="-1" aria-labelledby="drawer-navigation-label">
                <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
                <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>
                <div className="py-4 overflow-y-auto">
                    <ul className="space-y-10 font-medium">

                        <li>
                            <a href="#" className="block py-0 pl-3 navHover   pr-4   font-semibold  text-xl rounded hover:transition-all hover:text-pink-600" >Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-0 pl-3 navHover  pr-4   font-semibold  text-xl rounded hover:text-pink-600">About</a>
                        </li>
                        <li>
                            <a href="#" className="block py-0 pl-3 navHover  pr-4   font-semibold  text-xl rounded hover:text-pink-600">Certificate</a>
                        </li>
                        <li>
                            <a href="#" className="block py-0 pl-3 navHover  pr-4   font-semibold  text-xl rounded hover:text-pink-600">Projects</a>
                        </li>
                        <li>
                            <a href="#" className="block py-0 pl-3 navHover  pr-4   font-semibold  text-xl rounded hover:text-pink-600">Contact</a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar2