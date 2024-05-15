import { BiSolidCategory } from "react-icons/bi";
import { FaSortAmountUpAlt } from "react-icons/fa";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const FoodCard = ({food}) => {
    const {_id, foodname, category, image, price, quantity} = food;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
            <figure className="flex-1"><img src={image} className="rounded-xl h-[323px] w-full object-cover" alt="Album"/></figure>
            <div className="card-body px-2">
                <h2 className="card-title font-bold text-2xl text-[#D3756B]">{foodname}</h2>
                <div className="flex items-center gap-3 mt-2">
                    <div className="flex gap-2 items-center">
                        <BiSolidCategory className="text-xl"></BiSolidCategory>
                        <h4 className="text-md"><span className="font-semibold">Category: </span>{category}</h4>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FaSortAmountUpAlt className="text-xl"></FaSortAmountUpAlt>
                        <p><span className="font-semibold">Quantity: </span>{quantity}</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center mt-4">
                        <RiMoneyDollarBoxFill className="text-xl"></RiMoneyDollarBoxFill>
                        <p className="font-semibold">Price:</p>
                    </div>
                        <p className="text-2xl font-extrabold text-[#A75D5D]">${price}</p>
                <div className="card-actions justify-end mt-2">
                        <Link to={`/fooddetails/${_id}`} className="btn w-full text-white bg-[#A75D5D]">Details</Link>
                </div>

            </div>
            </div>

            {/* <div className="card lg:card-side bg-base-100 h-[312px] shadow-xl px-4 py-0 border-2 border-[#a75d5d29] poppins">
                <figure className="flex-1"><img src={image} className="rounded-xl w-full" alt="Album"/></figure>
                <div className="card-body flex-1">
                    <h2 className="card-title font-bold text-2xl text-[#D3756B]">{foodname}</h2>
                    <div className="flex items-center gap-3 mt-2">
                        <div className="flex gap-2 items-center">
                            <BiSolidCategory className="text-xl"></BiSolidCategory>
                            <h4 className="text-md"><span className="font-semibold">Category: </span>{category}</h4>
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaSortAmountUpAlt className="text-xl"></FaSortAmountUpAlt>
                            <p><span className="font-semibold">Quantity: </span>{quantity}</p>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center mt-4">
                        <RiMoneyDollarBoxFill className="text-xl"></RiMoneyDollarBoxFill>
                        <p className="font-semibold">Price:</p>
                    </div>
                        <p className="text-2xl font-extrabold text-[#A75D5D]">${price}</p>
                    <div className="card-actions justify-end mt-2">
                        <Link to={`/fooddetails/${_id}`} className="btn w-full text-white bg-[#A75D5D]">Details</Link>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default FoodCard;