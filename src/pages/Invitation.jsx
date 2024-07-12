
import InfoCard from '../components/InfoCard';
import { useState } from 'react';
import ItemsCarousel from '../components/ItemCaraousel';
import { Link } from 'react-router-dom';

const saleItems = [
    { icon: '👕', name: 'Clothes', image: 'https://images.pexels.com/photos/9218397/pexels-photo-9218397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { icon: '🏮', name: 'Home Goods', image: 'https://images.pexels.com/photos/241821/pexels-photo-241821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { icon: '👟', name: 'Shoes', image: 'https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { icon: '📚', name: 'Books', image: 'https://images.pexels.com/photos/10297673/pexels-photo-10297673.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { icon: '🎨', name: 'Art', image: 'https://images.pexels.com/photos/3777933/pexels-photo-3777933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { icon: '🧸', name: 'Toys', image: 'https://images.pexels.com/photos/191360/pexels-photo-191360.jpeg?auto=compress&cs=tinysrgb&w=600' }
]

const Invitation = () => {
    const [copied, setCopied] = useState(false);
    const handleShare = () => {
        const currentUrl = window.location.href;
        navigator.clipboard.writeText(currentUrl).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
        }).catch(err => {
            console.error('Failed to copy URL: ', err);
        });
    };
    return (
        <div className="min-h-screen flex flex-col">
            {/* Gradient header */}
            <div className="h-20 bg-gradient-to-br from-purple-600 to-pink-500 relative">
                <div className="absolute bottom-2 left-2">
                    <div className="bg-white rounded-full p-2 shadow-md">
                        <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>


                    </div>
                </div>
            </div>
            <div className="p-4">
                <Link
                    to="/"
                    className="inline-flex items-center px-6 py-2 bg-gray-200 text-gray-800 font-semibold rounded-full hover:bg-gray-300 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house mr-2" viewBox="0 0 16 16">
                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                    </svg>
                    Home
                </Link>
            </div>


            {/* Main content */}
            <div className="flex-grow p-4 md:p-8">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">

                    {/* Image section */}
                    <div className="md:w-1/2 h-[600px] flex flex-col justify-center items-center">
                        <div className="text-3xl font-bold text-gray-800 p-5">
                            Welcome to Brooklyn Stoop Sale ✋
                        </div>
                        <ItemsCarousel items={saleItems} />

                        {/* Share button */}
                        <button
                            onClick={handleShare}
                            className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 flex items-center justify-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                            {copied ? 'Copied!' : 'Share Event'}
                        </button>
                    </div>




                    {/* Content section */}
                    <div className="md:w-1/2 flex flex-col gap-6">

                        {/* <p className="text-xl text-gray-600">20 July, 2 to 6 PM</p>
                        <p className="text-gray-600">Things to sell: clothes, home goods, shoes, tchotchkes</p> */}
                        <div className="product-info">
                            <div className="flex flex-col gap-2 ">
                                <p className="text-[24px] text-secondary font-bold flex items-center gap-4">
                                    We are inviting all to come to our Biggest Garage Sale in the Area 2nd Pl & Court St
                                </p>

                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
                            <InfoCard

                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                    </svg>
                                }
                                value="LILY AND CHELSEA"
                            />
                            <InfoCard

                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-calendar-event" viewBox="0 0 16 16">
                                        <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                                    </svg>
                                }
                                value="20 July, 2 to 6 PM"
                            />



                        </div>

                        <div className="mt-6">
                            <h2 className="text-2xl font-semibold mb-4">Items for Sale:</h2>
                            <div className="grid grid-cols-3 gap-4">
                                {saleItems.map((item, index) => (
                                    <div key={index} className="flex flex-col items-center bg-gray-100 rounded-lg p-4 transition-all hover:shadow-md hover:scale-105">
                                        <span className="text-3xl mb-2">{item.icon}</span>
                                        <span className="text-sm font-medium">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>


                        {/* Map */}
                        <div className="flex-grow">
                            <h2 className="text-xl font-semibold mb-2">Location:</h2>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.7485453819154!2d-74.00215172018858!3d40.67950909765138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a585c181957%3A0x50e694b8c1ef75b2!2s2nd%20Pl%20%26%20Court%20St%2C%20Brooklyn%2C%20NY%2011231%2C%20USA!5e0!3m2!1sen!2sin!4v1720775638236!5m2!1sen!2sin"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-lg shadow-md"
                            ></iframe>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
}

export default Invitation;