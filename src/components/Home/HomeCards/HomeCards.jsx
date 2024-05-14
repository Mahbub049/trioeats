import { useEffect, useState } from "react";
import TopCard from "./TopCard/TopCard";
import { Link } from "react-router-dom";

const HomeCards = () => {
    const [topFoods, setTopFoods] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/topFoods')
        .then(res=>res.json())
        .then(data=>setTopFoods(data))
    },[])
    return (
        <div className="my-16">
                <div className="py-6 mons text-center my-6 rounded-xl mx-3 lg:mx-0">
                    <h3 className="text-4xl mb-4 font-bold text-[#a14c43] mons">Top Foods</h3>
                    <p className="lg:w-1/3 mx-auto">Discover culinary delights from around the globe. Indulge in diverse flavors, from spicy Indian curries to delicate Japanese sushi. Explore world cuisine today!</p>
                </div>
                <div className="mx-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    topFoods.slice(0,6).map(food=><TopCard key={food._id} food={food}></TopCard>)
                }
                </div>
                <div className="text-center mt-6 poppins">
                    <Link  className="btn btn-wide hover:bg-orange-300 bg-orange-500 text-white text-lg" to={'/allfoods'}>See All</Link>
                </div>
        </div>
    );
};

export default HomeCards;