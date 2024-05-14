import { BiSolidCategory } from "react-icons/bi";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const TopCard = ({food}) => {
    const {_id, foodname, category, image, price} = food;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
            <figure className="flex-1"><img src={image} className="rounded-xl h-[323px] w-full" alt="Album"/></figure>
            <div className="card-body px-2">
                <h2 className="card-title font-extrabold italic text-2xl text-orange-600 mons">{foodname}</h2>
                <div className="flex items-center gap-3 mt-2">
                    <div className="flex gap-2 items-center">
                        <BiSolidCategory className="text-xl"></BiSolidCategory>
                        <h4 className="text-md"><span className="font-semibold">Category: </span>{category}</h4>
                    </div>
                </div>
                <div className="flex gap-2 items-center mt-2">
                        <RiMoneyDollarBoxFill className="text-xl"></RiMoneyDollarBoxFill>
                        <p className="font-semibold">Price:</p>
                    </div>
                        <p className="text-2xl font-extrabold text-orange-600">${price}</p>
                <div className="card-actions justify-end mt-2">
                        <Link to={`/fooddetails/${_id}`} className="btn w-full text-white bg-orange-400">Details</Link>
                </div>

            </div>
            </div>
        </div>
    );
};

export default TopCard;