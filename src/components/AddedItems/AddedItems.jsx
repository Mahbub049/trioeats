import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import ItemsRow from "./ItemsRow/ItemsRow";

const AddedItems = () => {
    const {user} = useContext(AuthContext);
    const [item, setItem] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/foods/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setItem(data);
        })
    },[user])
    return (
        <HelmetProvider>
            <Helmet>
                <title>TrioEats | My Added Items</title>
            </Helmet>
            <div>
                <div className="container mx-auto">
                    <Navbar></Navbar>
                    <div>
                        <div className="bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url('/src/assets/Banner/banner2.jpg')] bg-center bg-cover py-20 text-center my-6 rounded-xl mx-3 lg:mx-0">
                            <p className="text-4xl  font-bold text-[#FFC3A1] mons">My List</p>
                        </div>
                        <div className="overflow-x-auto mt-8">
                            <table className="table poppins">
                                {/* head */}
                                <thead>
                                <tr className="text-lg text-[#D3756B]">
                                    <th>Food Name, Image</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                    <th>Update</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    item.map(i=><ItemsRow key={i._id} items={item} setItem={setItem} item={i}></ItemsRow>)
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

export default AddedItems;