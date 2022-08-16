import React from 'react'
import "./Nav.css"

const Nav = () => {
    return (
        <>
            <header className="text-gray-600 body-font border-2">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
                    <nav className="flex lg:w-3/5 flex-wrap items-center text-base md:ml-auto">
                        <p className='text-3xl  text-align cursor-pointer'>hatchful</p>
                        <a className="mr-6 ml-6 hover:text-gray-900  hover:border-blue-800 text-black nav-content cursor-pointer">OUR LOGOS</a>
                        <a className="mr-6 hover:text-gray-900 text-black  hover:border-blue-800 nav-content cursor-pointer">BENIFETS</a>
                        <a className="mr-6 hover:text-gray-900 text-black  hover:border-blue-800 nav-content cursor-pointer">FEATURES</a>
                        <a className="mr-6 hover:text-gray-900 text-black r hover:border-blue-800 nav-content cursor-pointer">TESTIMONIALS</a>
                    </nav>

                    <div className="lg:w-2/5 inline-flex lg:justify-end s:ml-5 lg:ml-0 s:ml-0">
                        <button className="inline-flex items-center bg-gray-000 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0 mr-3 nav-content">LOGIN

                        </button>
                        <button className="inline-flex items-center text-blue-600 bg-gray-000 border-2 border-blue-800 py-1 px-3 focus:outline-blue hover:bg-blue-800 rounded hover:text-white mt-4 md:mt-0">SIGNUP

                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Nav