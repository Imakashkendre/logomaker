import React from 'react'
import Nav from '../../Components/Nav/Nav'
import "./Banner.css"
import banner from "../../Assets/Images/joanna-kosinska-bF2vsubyHcQ-unsplash.jpg"

const Banner = () => {
    return (
        <>
            <Nav />
            <section className="text-white bg-white-900 bg-img">
                <div className="max-w-screen-xl px-4 py-32 mx-auto  lg:items-center lg:flex">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className=' w-full h-32'><img src={{ banner }} alt=""
                        /></div>
                        <h3 className="text-large font-extrabold text-black sm:text-5xl ba  ">
                            Free Logo Maker.

                            <span className="sm:block text-4xl mt-8">
                                Create professional logos in seconds
                            </span>
                            <span className="sm:block text-xl mt-5">
                                Introducing Hatchful - the custom logo maker.
                            </span>
                        </h3>


                        <div className="flex flex-wrap justify-center gap-4 mt-8">
                            <a className="block w-full px-12 py-3 text-xl font-medium text-white bg-blue-600 border border-blue-400 rounded sm:w-auto active:text-opacity-75 hover:bg-blue-800  hover:text-white focus:outline-none focus:ring" href="/get-started">
                                Get Started
                            </a>


                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Banner