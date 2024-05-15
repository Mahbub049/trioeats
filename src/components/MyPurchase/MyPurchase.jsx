import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import PurchaseItem from "./PurchaseItem/PurchaseItem";

const MyPurchase = () => {
    const {user} = useContext(AuthContext);
    const [item, setItem] = useState([]);
    useEffect(()=>{
        fetch(`https://trioeats-server.vercel.app/purchases/${user?.email}`, {credentials: 'include'})
        .then(res=>res.json())
        .then(data=>{
            setItem(data);
        })
    },[user])
    return (
        <HelmetProvider>
        <Helmet>
            <title>TrioEats | My Purchase</title>
        </Helmet>
        <div>
            <div className="container mx-auto">
                <Navbar></Navbar>
                <div>
                    <div className="bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url('/src/assets/Banner/banner2.jpg')] bg-center bg-cover py-20 text-center my-6 rounded-xl mx-3 lg:mx-0">
                        <p className="text-4xl  font-bold text-[#FFC3A1] mons">My Purchases</p>
                    </div>
                    <div className="overflow-x-auto mt-8">
                        <table className="table poppins">
                            {/* head */}
                            <thead>
                            <tr className="text-lg text-[#D3756B">
                                <th>Food Name, Image</th>
                                <th className="text-center">Added Time</th>
                                <th className="text-center">Quantity</th>
                                <th className="text-center">Price</th>
                                <th className="text-center">Total Price</th>
                                <th className="text-center">Owner Info</th>
                                <th className="text-center">Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                item.map(i=><PurchaseItem key={i._id} items={item} setItem={setItem} item={i}></PurchaseItem>)
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    </HelmetProvider>
    );
};

export default MyPurchase;