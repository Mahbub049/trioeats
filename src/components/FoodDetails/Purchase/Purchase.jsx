import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { SiCashapp } from "react-icons/si";
import { FaSortAmountDown } from "react-icons/fa";
import { BsCalendarDateFill } from "react-icons/bs";

const Purchase = () => {
    const {user} = useContext(AuthContext);
     const loadedFood = useLoaderData();
     const {_id, name, email, foodname, price, quantity, image} = loadedFood;
     
     let d = new Date(Date.now());
     let month = d.toLocaleString('en-US', { month: 'short' });
     let formattedDate = `${month} ${d.getDate()} ${d.getFullYear()}`;
    
     const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (data, e) => {
        data.name = user.displayName;
        data.email = user.email;
        data.quantity = parseInt(data.quantity);
        data.price = parseFloat(data.price)*(data.quantity);
        data.image = image,
        data.foodId = _id,
        data.owner = {
            name: name,
            email: email
        }
        console.log(data);
        
        if(data.quantity>quantity){
            Swal.fire({
                title: 'Error!',
                text: "You can't order more than quantity!",
                icon: 'error',
                confirmButtonText: 'Okay'
              })
        }
        else if(data.email === email){
            Swal.fire({
                title: 'Error!',
                text: "You can't order your own product!",
                icon: 'error',
                confirmButtonText: 'Okay'
              })
        }
        else{
            console.log("okay")
            fetch('http://localhost:5000/purchase', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res=>res.json())
            .then(data=>{
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully Puchased!',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                  })
                  e.target.reset();
            })
        }
      }
    return (
        <HelmetProvider>
            <Helmet>
                <title>TrioEats | Purchase Food</title>
            </Helmet>
            <div>
                <div className="container mx-auto">
                    <Navbar></Navbar>
                    <div className="bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url('/src/assets/Banner/banner3.jpg')] bg-center bg-cover py-20 text-center my-6 rounded-xl mx-3 lg:mx-0">
                        <p className="lg:text-4xl text-2xl font-bold text-[#FFC3A1] mons">Purchase Food: <span className="text-orange-500">{foodname}</span></p>
                    </div>
                    {
                        quantity === 0 && 
                        <div>
                            <h4 className="mons text-center italic text-red-500 font-bold text-3xl">Item is not available!</h4>
                        </div>
                    }
                    <div className="mt-8">
                        <form onSubmit={handleSubmit(onSubmit)} className="poppins mx-3 lg:mx-0">
                            <div className="flex flex-col md:flex-row lg:flex-row gap-2 lg:gap-4 mb-3">
                                    <div className="flex-1">
                                    <div className="label">
                                        <span className="label-text font-semibold text-[#D3756B]">Buyer Name</span>
                                    </div>
                                    <label className="input input-bordered border-[#A75D5D] flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="text-[#A75D5D] w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                        <input {...register("name")} type="text" value={user.displayName} className="grow" placeholder="Buyer Name"/>
                                        {errors.name && <span className="text-red-500">This field is required</span>}
                                    </label>
                                </div>
                                <div className="flex-1">
                                    <div className="label">
                                        <span className="label-text font-semibold text-[#D3756B]">Buyer Email</span>
                                    </div>
                                    <label className="input input-bordered border-[#A75D5D] flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="text-[#A75D5D] w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                        <input {...register("email")} type="email" value={user.email} className="grow" placeholder="Buyer Email" />
                                        {errors.email && <span className="text-red-500">This field is required</span>}
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row lg:flex-row gap-2 lg:gap-4 mb-3">
                                <div className="flex-1">
                                <div className="label">
                                    <span className="label-text font-semibold text-[#D3756B]">Food Name</span>
                                </div>
                                <label className="input input-bordered border-[#A75D5D] flex items-center gap-2">
                                    <MdDriveFileRenameOutline className="text-[#A75D5D]" />
                                    <input {...register("foodname", { required: true })} type="text" className="grow" defaultValue={foodname} placeholder="Food Name" />
                                    {errors.foodname && <span className="text-red-500">This field is required</span>}
                                </label>
                                </div>
                                <div className="flex-1">
                                    <div className="label">
                                        <span className="label-text font-semibold text-[#D3756B]">Price</span>
                                    </div>
                                    <label className="input input-bordered border-[#A75D5D] flex items-center gap-2">
                                        <SiCashapp className="text-[#A75D5D]" />
                                        <input {...register("price", { required: true })} type="text" className="grow" defaultValue={price} placeholder="Price" />
                                        {errors.price && <span className="text-red-500">This field is required</span>}
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row lg:flex-row gap-2 lg:gap-4 mb-3">
                                
                            <div className="flex-1 mb-8">
                                <div className="label">
                                    <span className="label-text font-semibold text-[#D3756B]">Quantity</span>
                                </div>
                                <label className="input input-bordered border-[#A75D5D] flex items-center gap-2">
                                    <FaSortAmountDown className="text-[#A75D5D]"></FaSortAmountDown>
                                    <input {...register("quantity", { required: true })} type="text" className="grow" defaultValue={quantity} placeholder="Quantity" />
                                    {errors.quantity && <span className="text-red-500">This field is required</span>}
                                </label>
                            </div>

                            <div className="flex-1">
                                <div className="label">
                                    <span className="label-text font-semibold text-[#D3756B]">Buying Date</span>
                                </div>
                                <label className="input input-bordered border-[#A75D5D] flex items-center gap-2">
                                    <BsCalendarDateFill className="text-[#A75D5D]" />
                                    <input {...register("date", { required: true })} type="text" className="grow" defaultValue={formattedDate} placeholder="Buying Date" />
                                    {errors.date && <span className="text-red-500">This field is required</span>}
                                </label>
                            </div>
                            </div>
                            
                            {
                                quantity === 0 ? <button disabled className="btn btn-wide w-full text-white font-semibold text-xl bg-orange-700 hover:bg-orange-300">Purchase</button> : <button className="btn btn-wide w-full text-white font-semibold text-xl bg-orange-700 hover:bg-orange-300">Purchase</button>
                            }
                        </form>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </HelmetProvider>
    );
};

export default Purchase;