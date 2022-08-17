import React from 'react'
import "./Logo.css"


const Logo = (props) => {
    return (
        <>
            {/* <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className=" relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={props.logo.url} />
                            </a>

                        </div>

                    </div>
                </div>
            </section> */}
            <div className='all-logo-respo'>
                <div className='logo-div border-2'>
                    <img src={props.logo.url} alt="" className=' img-style align-center flex' />
                </div>
            </div>
        </>
    )
}

export default Logo