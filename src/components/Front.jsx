import React from 'react';
import Arrow from "../images/Arrow.svg"
import Caraousel from './Caraousel';
import { Link } from 'react-router-dom';

const Front = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <section className="px-6 md:px-20 py-24 border-red-500">
                    <div className="flex max-xl:flex-col gap-16">
                        <div className="flex flex-col justify-center">
                            <p className="small-text">
                                Are You Ready For Stoop Sales/Garage Sales?
                            </p>
                            <h1 className="head-text">
                                <span className="text-primary">Stoop Sale</span> Happening Near You
                            </h1>
                            
                            <p className='text-2xl flex mt-8 mb-4 gap-2 items-center text-green-500'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                    </svg>
                                </span>
                                Lil & Chelsea
                            </p>
                      
                            <p className="text-2xl flex mt-8 mb-8 gap-2 items-center text-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                </svg>
                                <a className='underline cursor-pointer' href="https://maps.app.goo.gl/TFPhYAfnGc9R334N8"> 2nd Pl. and Court St , Brooklyn, NEW YORK</a>
                            </p>

                            <Link to="/lily&chelsea/invitation">
                                <button className='bg-black text-white font-semibold w-[20rem] h-[5rem] rounded-xl' id="GoToButton">See More Info</button>
                            </Link>
                        </div>

                        <Caraousel />
                    </div>
                </section>

                {/* Stoop Sale Description */}
                <section className="px-6 md:px-20 py-12 bg-gray-100">
                    <h2 className="text-2xl font-bold mb-4">What is a Stoop Sale?</h2>
                    <p className="text-lg">
                        A stoop sale, also known as a sidewalk sale or yard sale in some areas, is a casual event where residents sell personal belongings directly from their home's front steps or sidewalk. It's a popular way to declutter, find unique bargains, and connect with neighbors. Stoop sales often feature a variety of items including clothes, books, furniture, and household goods at discounted prices.
                    </p>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-6">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-lg font-semibold">Stoop Sale Finder</h3>
                            <p>Connecting neighbors through community sales</p>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/sahil-pradhan-46a0a31b7/" className='text-blue-400'>Made With 💖 by Sahil Pradhan</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Front;