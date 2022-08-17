import React from 'react'
import "./ProfessionalLogo.css"

import proflogo from "../../Assets/Images/createlogo.jpg"
import uniquebrand from "../../Assets/Images/uniquebrand.jpg"


const ProfessionalLogo = () => {
    return (
        <>
            {/* first section  professional logo */}
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-36 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2  lg:w-1/4 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-4xl mb-4 font-medium text-gray-900">Create professional logos

                        </h1>
                        <p className='font-medium text-xl mb-4'>High-resolution logos in just a few clicks

                        </p>
                        <p className="mb-8 leading-relaxed font-sm text-2xl ">Hatchful is a logo maker built for entrepreneurs on the go. No design experience is required to create your own logo from scratch.</p>

                    </div>
                    <div className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6">
                        <img className=" object-center rounded image" alt="hero" src={proflogo} />
                        {/* <img src={{ proflogo }} alt="HERO" className='image' /> */}


                    </div>
                </div>
            </section>
            {/* second section build brand  */}
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-36 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-3/4 lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className=" object-center rounded image" alt="hero" src={uniquebrand} />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Build a unique brand

                        </h1>
                        <p className='font-medium text-xl mb-4'>Endless design possibilities</p>
                        <p className="mb-8 leading-relaxed">Customize your free logo using hundreds of templates, icons, fonts, and color combinations in our design studio.</p>

                    </div>
                </div>
            </section>
        </>
    )
}

export default ProfessionalLogo;