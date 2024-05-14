import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { useEffect, useState } from "react";
import FoodCard from "./FoodCard/FoodCard";
import { Helmet, HelmetProvider } from "react-helmet-async";
import axios from "axios";

const AllFoods = () => {
    const loadedfoods = useLoaderData();
    const [foods, setFoods] = useState(loadedfoods);
    const [searchText, setSearchText] = useState('')

    // useEffect(() => {
    //     const getFoods = async () => {
    //       const { data } = await axios(
    //         `https://trioeats-server.vercel.app/items?search=${search}`
    //       )
    //       setFoods(data)
    //     }
    //     getFoods()
    //   }, [search])

    const handleSearch = e =>{
        e.preventDefault();
        const search = e.target.search.value;
        // setSearchText(search)
        
        fetch(`https://trioeats-server.vercel.app/search/${search}`)
        .then(res=>res.json())
        .then(data=>setFoods(data))
    }
    return (
       <HelmetProvider>
        <Helmet>
            <title>TrioEats | All Foods</title>
        </Helmet>
        <div>
            <div className="container mx-auto">
                <Navbar></Navbar>
                <div className="bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url('/src/assets/Banner/banner3.jpg')] bg-center bg-cover py-20 text-center my-6 rounded-xl mx-3 lg:mx-0">
                    <p className="text-4xl  font-bold text-[#FFC3A1] mons">All Foods</p>
                    <div className="mt-4">
                    <form onSubmit={handleSearch} className="join">
                        <input name="search" className="input input-bordered bg-transparent text-white join-item" placeholder="Search"/>
                        <button className="btn join-item bg-[#D3756B] border-0 text-white rounded-r-full">Search</button>
                    </form>
                    </div>
                </div>
                <div className="mx-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    foods.map(food=><FoodCard key={food._id} food={food}></FoodCard>)
                }
                </div>
            </div>
            <Footer></Footer>
        </div>
       </HelmetProvider>
    );
};

export default AllFoods;