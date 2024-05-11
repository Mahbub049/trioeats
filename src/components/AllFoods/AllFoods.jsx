import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { useState } from "react";
import FoodCard from "./FoodCard/FoodCard";

const AllFoods = () => {
    const loadedFoods = useLoaderData();
    const [foods, setFoods] = useState(loadedFoods);
    return (
        <div>
            <div className="container mx-auto">
                <Navbar></Navbar>
                <div className="bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url('/src/assets/Banner/banner3.jpg')] bg-center bg-cover py-20 text-center my-6 rounded-xl mx-3 lg:mx-0">
                    <p className="text-4xl  font-bold text-[#FFC3A1] mons">All Foods</p>
                    <div className="mt-4">
                        {/* Search */}
                    </div>
                </div>
                <div className="mx-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {
                    loadedFoods.map(food=><FoodCard key={foods._id} food={food}></FoodCard>)
                }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllFoods;