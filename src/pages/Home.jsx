import React from 'react'
// import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import HighlightText from '../components/core/HomePage/HighlightText';
import CTAButton from "../components/core/HomePage/Button"
import Banner from "../assets/Images/banner.mp4"
// import Stock from "../assets/Images/Stock1080p.mp4";
import Bull from "../assets/Images/bu.png";
import Marquee from './Marquee';


function Home() {
  return (
    <div className='bg-black'>

         {/* video  */}
                {/* <div className='fixed z-[-1] w-[100%] h-[100%] object-cover background top-0'>
                    <video muted autoPlay loop>
                        <source src={Stock} type="video/mp4" />
                    </video>
                </div> */}


        {/* section1 */}
            <div className="relative mx-auto flex flex-col w-11/12 items-center text-white justify-between max-w-maxContent mt-[150px]">

                {/* <Link to={"/signup"}>
                    <div className='group mx-auto rounded-full bg-richblack-800 text-richblack-200 font-bold transition-all duration-200 hover:scale-95 mt-16 p-1'>
                        <div className='group-hover:bg-richblack-900 flex flex-row  items-center gap-2 rounded-full p-10 py-[5px]'>

                            <p>Become an In</p>
                            <FaArrowRightLong />
                        </div>
                    </div>
                </Link> */}

                <div className='flex flex-row gap-4 items-center'>
                    <div>
                        <div className="text-4xl font-bold mt-10 w-[90%]">
                            Empower your Future with 
                            <HighlightText text={" TRADEVISION"} /> 
                        </div>

                        <div className="text-white w-[90%] text-left font-bold mt-4 text-[20px]">
                        Unlock the power of data-driven decisions with our stock market prediction and visualization platform. Dive into real-time insights and accurately forecast market trends with the help of clear, interactive visuals and predictive analytics. Whether you’re a seasoned investor or a newcomer, our tools empower you to navigate the market confidently, helping you make smarter, more informed investment choices.
                        </div>

                        <div className="flex flex-row gap-7 mt-8">
                                <CTAButton active={true} linkto={"/signup"}>
                                    Learn More
                                </CTAButton>

                                <CTAButton active={false} linkto={"/login"} >
                                    Free Trial
                                </CTAButton>
                        </div>
                    </div>

                    <div>
                        <img src={Bull} alt="Stock" className="w-[2500px]"/>
                    </div>
                </div>

                {/* video  */}
                {/* <div className='mx-3 my-16 shadow-blue-200 '>
                    <video muted autoPlay loop>
                        <source src={Banner} type="video/mp4" />
                    </video>
                </div> */}


                <Marquee/>


                {/* code section 1 */}
                <div className='flex flex-row gap-4 items-center mt-[100px]'>
                    <div className='flex flex-col w-[50%]'>
                            <h1 className='font-bold text-[40px] font-inter'>Unlock Your <span className='trade'>Trading Potential</span> with our online course</h1>
                            <p className='font-inter '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore eos rem maiores autem architecto, repudiandae quis doloremque quos magnam. Et ducimus distinctio exercitationem, sed architecto eveniet quo perspiciatis! Quis, iusto!</p>
                    </div>

                    <div className='mx-3 my-16 w-[50%]'>
                        <video muted autoPlay loop>
                            <source src={Banner} type="video/mp4" />
                        </video>
                    </div>
                </div>
                    

                {/* code section 2 */}
                {/* Features Section */}
                <section id="features" className="py-16 bg-transparent text-gray-800">
                    <h3 className="text-4xl font-bold text-center mb-10">Features</h3>
                    <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
                        <div className="w-72 p-6 rounded-lg shadow-lg border-[0.5px] border-white shadow-white">
                            <h4 className="text-2xl font-semibold mb-4">Real-time Data</h4>
                            <p>Stay updated with live stock data and market trends, ensuring you never miss an opportunity.</p>
                        </div>
                        <div className="w-72 p-6 rounded-lg shadow-lg border-[0.5px] border-white shadow-white">
                            <h4 className="text-2xl font-semibold mb-4">Predictive Algorithms</h4>
                            <p>Utilize advanced machine learning algorithms to predict stock movements with precision.</p>
                        </div>
                        <div className="w-72 p-6 rounded-lg shadow-lg border-[0.5px] border-white shadow-white">
                            <h4 className="text-2xl font-semibold mb-4">Interactive Charts</h4>
                            <p>Visualize data with customizable, interactive charts for a deeper analysis.</p>
                        </div>
                    </div>
                </section>

                
                        
                {/* Prediction Section */}
                <section id="predictions" className="py-20 bg-gray-900 text-white">
                    <h3 className="text-4xl font-bold text-center mb-10">Our Predictions in Action</h3>
                    <div className="flex flex-wrap justify-center gap-10 max-w-4xl mx-auto">
                        <div className="w-80 bg-gray-100 rounded-lg p-8 shadow-lg text-center border-[0.5px] border-white shadow-white">
                        <h4 className="text-2xl font-semibold mb-4">Dynamic Visualization</h4>
                        <p>Get detailed visualization of predictions versus actual market performance, updated daily.</p>
                        </div>
                        <div className="w-80 bg-gray-100 rounded-lg p-8 shadow-lg text-center border-[0.5px] border-white shadow-white">
                        <h4 className="text-2xl font-semibold mb-4">Prediction Accuracy</h4>
                        <p>Our model has an impressive accuracy rate of over 80% based on historical data and backtesting.</p>
                        </div>
                    </div>

                </section>





            {/* Technology Section */}
            <section id="tech" className="py-20 bg-gray-900 text-white">
                <h3 className="text-4xl font-bold text-center mb-10">Our Cutting-Edge Technology</h3>
                <div className="flex flex-wrap justify-center gap-8">
                <div className="bg-gray-800 rounded-lg p-8 w-full max-w-md border-[0.5px] border-white shadow-lg  shadow-white">
                    <h4 className="text-2xl font-semibold mb-4">AI-Powered Predictions</h4>
                    <p>Our artificial intelligence models continuously learn from market data, identifying patterns and providing insights tailored to current conditions.</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-8 w-full max-w-md border-[0.5px] border-white shadow-white shadow-lg ">
                    <h4 className="text-2xl font-semibold mb-4">Machine Learning Models</h4>
                    <p>Using advanced ML algorithms, we achieve a high prediction accuracy, helping you anticipate market trends and minimize risks.</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-8 w-full max-w-md border-[0.5px] border-white shadow-white shadow-lg">
                    <h4 className="text-2xl font-semibold mb-4">Advanced Visualization</h4>
                    <p>Get insights with highly visualized data charts, heatmaps, and real-time trend lines, all customizable to your preferences.</p>
                </div>
                </div>
            </section>




            {/* Community Section */}
            <section id="community" className="py-16 bg-transparent text-gray-800">
                <h3 className="text-4xl font-bold text-center mb-10">Join a Community of Savvy Investors</h3>
                <div className="flex flex-wrap justify-center gap-10 max-w-4xl mx-auto">
                    <div className="w-80 bg-gray-100 rounded-lg p-8 shadow-lg text-center border-[0.5px] border-white shadow-white">
                        <h4 className="text-2xl font-bold mb-4">Investor Forums</h4>
                        <p className="text-lg mb-6">Connect with like-minded traders, share tips, and discuss strategies on our dedicated forums.</p>
                    </div>
                    <div className="w-80 bg-gray-100 rounded-lg p-8 shadow-lg text-center border-[0.5px] border-white shadow-white">
                        <h4 className="text-2xl font-bold mb-4">Weekly Webinars</h4>
                        <p className="text-lg mb-6">Attend exclusive webinars featuring top investors, market experts, and data scientists.</p>
                    </div>
                    <div className="w-80 bg-gray-100 rounded-lg p-8 shadow-lg text-center border-[0.5px] border-white shadow-white shadow-lg">
                        <h4 className="text-2xl font-bold mb-4">Market Challenges</h4>
                        <p className="text-lg mb-6">Participate in monthly market challenges, test your strategies, and win exciting rewards.</p>
                    </div>
                </div>
                {/* Join Community Button */}
                <Link to={"/signup"}>
                    <div className="text-center mt-10">
                        <button className="text-white py-3 px-6 rounded-md hover:bg-caribbeangreen-800 hover:scale-95 transition-colors duration-200 btn">
                        Join Our Community
                        </button>
                    </div>
                </Link>
            </section>    




                {/* Pricing Section */}
                {/* <section id="pricing" className="py-16 bg-transparent text-white">
                    <h3 className="text-4xl font-bold text-center mb-10">Choose Your Plan</h3>
                    <div className="flex flex-wrap justify-center gap-10 max-w-4xl mx-auto">
                    <div className="w-80 bg-gray-100 rounded-lg p-8 shadow-lg text-center border-[0.5px] border-white shadow-white">
                        <h4 className="text-2xl font-bold mb-4">Basic</h4>
                        <p className="text-lg mb-6">$9.99/month</p>
                        <p className="mb-6">Access to daily stock data and basic prediction tools.</p>
                        <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Choose Plan</button>
                    </div>
                    <div className="w-80 bg-gray-100 rounded-lg p-8 shadow-lg text-center border-[0.5px] border-white shadow-white">
                        <h4 className="text-2xl font-bold mb-4">Pro</h4>
                        <p className="text-lg mb-6">$19.99/month</p>
                        <p className="mb-6">Advanced predictions and real-time alerts.</p>
                        <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Choose Plan</button>
                    </div>
                    </div>
                </section> */}


            </div> 


            {/* secton2  */}
    </div>
  )
}

export default Home