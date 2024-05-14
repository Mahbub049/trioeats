import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { IoBedOutline, IoLocationSharp } from "react-icons/io5";
import { FiSquare } from "react-icons/fi";
import { IoIosArrowRoundBack, IoMdGlobe } from "react-icons/io";
import { TbCurrencyTaka } from "react-icons/tb";
import { MdCardTravel } from "react-icons/md";
import { LuBath } from "react-icons/lu";
import { TiWeatherCloudy } from "react-icons/ti";
import { FaRegEye } from "react-icons/fa";
import { BiDollar, BiSolidCategory, BiSolidPurchaseTag } from "react-icons/bi";

const FoodDetails = () => {
    const food = useLoaderData();
    const {_id, name, email, foodname, origin, category, image, price, description} = food;
    return (
        <HelmetProvider>
            <Helmet>
                <title>TrioEats | Food Details</title>
            </Helmet>
            <div>
                <div className="container mx-auto">
                    <Navbar></Navbar>
                    <div className="mt-8 gap-10">
                    <div className=" mx-3 lg:mx-0 relative mb-12">
                        <img className="w-full h-[500px] object-cover flex-1 rounded-lg" src={image} alt="" />
                    </div>
                    <div className="flex lg:flex-row flex-col justify-between gap-3 lg:gap-32 mx-3">
                        <div className="flex-1">
                            <h2 className="text-3xl lg:text-4xl font-bold mons italic text-[#FF6500]">{foodname}</h2>
                            <div className="flex gap-3">
                                <div className=" flex gap-2 items-center my-4 text-[#C40C0C] rounded-lg poppins">
                                    <BiSolidCategory className="text-xl" />
                                    <p className="font-semibold">Category: {category}</p>
                                </div>
                                <div className=" flex gap-2 items-center my-4 text-[#C40C0C] rounded-lg poppins">
                                    <IoMdGlobe className="text-xl text-[#C40C0C]"></IoMdGlobe>
                                    <p className="font-semibold">Origin: {origin}</p>
                                </div>
                            </div>
                           <div>
                            <h2 className="my-2 font-bold text-[#C40C0C]">Price: </h2>
                                <div className="poppins flex text-2xl lg:text-3xl font-bold text-[#FF6500]">
                                    <BiDollar className="text-4xl font-extrabold"></BiDollar>
                                    <h2 >{price}</h2>
                                </div>
                           </div>
                            <hr className="my-4" />
                            <p className="font-bold mb-3 text-[#C40C0C]">User Information:</p>
                            <div className="border-2 poppins border-[#FF8A08] rounded-xl pb-6 px-8">
                                <div className="flex gap-2 items-center text-[#FF8A08] rounded-lg poppins mt-6 mb-4 font-semibold">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="text-[#FF8A08] text-xl w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                    <p className="text-[#FF8A08]">User Name: {name}</p>
                                </div>
                                <div className="flex gap-2 items-center text-[#FF8A08] rounded-lg poppins mb-2 font-semibold">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="text-[#FF8A08] text-xl w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                    <p className="text-[#FF8A08]">User Email: {email}</p>
                                </div>
                                
                            </div>
                        </div>
                        <div className="flex-1">
                            <p className="text-gray-500 poppins"><span className="font-semibold text-black">Description: </span>{description}</p>
                            <hr className="my-4" />
                                <Link className="btn w-full bg-[#A75D5D] text-white" to={`/purchase/${_id}`}>
                                        <BiSolidPurchaseTag  className="text-xl font-extrabold"></BiSolidPurchaseTag >
                                        Purchase
                                </Link>
                        </div>
                    </div>
                </div>
                </div>
                <Footer></Footer>
            </div>
        </HelmetProvider>
    );
};

export default FoodDetails;