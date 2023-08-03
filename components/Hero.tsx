"use client"

import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {

    return (
        <div className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src="/automation.jpg" />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Streamline your business with our custom built AI Solutions</h1>
                    <p className="mb-8 leading-relaxed">We offer a multitude of AI services. Send us your email and we'll respond with a free AI audit of your business</p>
                    <div className="flex w-full md:justify-start justify-center items-end">
                        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
                            <label for="hero-field" className="leading-7 text-sm text-gray-600">Yes! I want to save time on my business</label>
                            <input type="text" id="hero-field" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Schedule a Call</button>
                    </div>
                </div>
            </div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">1000+</h2>
                            <p className="leading-relaxed">Hours Saved</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">200</h2>
                            <p className="leading-relaxed">Happy Customers</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">5</h2>
                            <p className="leading-relaxed">⭐⭐⭐⭐⭐</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">5</h2>
                            <p className="leading-relaxed">Personalized SAAS Built</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero