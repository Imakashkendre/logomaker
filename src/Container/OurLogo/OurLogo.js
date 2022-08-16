import React from 'react'
import logo1 from "../../Assets/Images/joanna-kosinska-bF2vsubyHcQ-unsplash.jpg"
import Logo from '../../Components/Logo/Logo'

const OurLogo = () => {
    // const ourlogos = [
    //     {
    //         url: logo1,
    //     },
    //     {
    //         url: logo1,
    //     },
    // ]
    return (
        // <div className='div-for-our-logo'>
        //     <div  >
        //         {ourlogos.map((val, index) => (

        //             <Logo logo={val} />
        //         ))}

        //     </div>
        // </div>

        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <div className="lg:w-1/4 md:w-1/2 p-5 w-full">
                        <a className="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={{ logo1 }} />
                        </a>

                    </div>
                    <div className="lg:w-1/4 md:w-1/2 p-5 w-full">
                        <a className="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/421x261" />
                        </a>

                    </div>
                    <div className="lg:w-1/4 md:w-1/2 p-5 w-full">
                        <a className="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/422x262" />
                        </a>

                    </div>
                    <div className="lg:w-1/4 md:w-1/2 p-5 w-full">
                        <a className="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/423x263" />
                        </a>

                    </div>
                    <div className="lg:w-1/4 md:w-1/2 p-5 w-full">
                        <a className="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/424x264" />
                        </a>

                    </div>
                    <div className="lg:w-1/4 md:w-1/2 p-5 w-full">
                        <a className="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/425x265" />
                        </a>

                    </div>
                    <div className="lg:w-1/4 md:w-1/2 p-5 w-full">
                        <a className="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/427x267" />
                        </a>

                    </div>
                    <div className="lg:w-1/4 md:w-1/2 p-5 w-full">
                        <a className="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/428x268" />
                        </a>

                    </div>
                </div>
            </div>
        </section>




    )
}

export default OurLogo