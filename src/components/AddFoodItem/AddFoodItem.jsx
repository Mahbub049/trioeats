import Swal from 'sweetalert2';
import Navbar from './../Shared/Navbar/Navbar';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { MdDriveFileRenameOutline, MdOutlineDescription } from 'react-icons/md';
import { IoMdGlobe } from 'react-icons/io';
import { FaImage, FaMapMarkerAlt } from 'react-icons/fa';
import { BiCategoryAlt } from "react-icons/bi";
import { SiCashapp } from 'react-icons/si';
import { FaSortAmountDown } from "react-icons/fa";

const AddFoodItem = () => {
    const {user} = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit = (data, e) => {
        data.quantity = parseInt(data.quantity);
        data.price = parseInt(data.price);
        fetch('http://localhost:5000/items', {
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
                text: 'Successfully Added',
                icon: 'success',
                confirmButtonText: 'Okay'
              })
              e.target.reset();
        })
      }
    return (
        <div>
            <div className='container mx-auto'>
                <Navbar></Navbar>
                <div className="bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url('/src/assets/bg-add-food.png')] bg-center bg-cover py-20 text-center my-6 rounded-xl mx-3 lg:mx-0">
                    <p className="lg:text-4xl text-2xl font-bold text-[#FFC3A1] mons">Add Food Item</p>
                </div>
                <div className="mt-8">
                    <form onSubmit={handleSubmit(onSubmit)} className="poppins mx-3 lg:mx-0">
                        <div className="flex flex-col md:flex-row lg:flex-row gap-2 lg:gap-4 mb-3">
                                <div className="flex-1">
                                <div className="label">
                                    <span className="label-text font-semibold text-[#D3756B]">User Name</span>
                                </div>
                                <label className="input input-bordered border-[#A75D5D] flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="text-[#A75D5D] w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                    <input {...register("name", { required: true })} type="text" defaultValue={user.displayName} className="grow" placeholder="Username"/>
                                    {errors.name && <span className="text-red-500">This field is required</span>}
                                </label>
                            </div>
                            <div className="flex-1">
                                <div className="label">
                                    <span className="label-text font-semibold text-[#D3756B]">User Email</span>
                                </div>
                                <label className="input input-bordered border-[#A75D5D] flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="text-[#A75D5D] w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                    <input {...register("email", { required: true })} type="email" defaultValue={user.email} className="grow" placeholder="User Email" />
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
                                <input {...register("foodname", { required: true })} type="text" className="grow" placeholder="Food Name" />
                                {errors.foodname && <span className="text-red-500">This field is required</span>}
                            </label>
                            </div>
                            <div className="flex-1">
                                <div className="label">
                                    <span className="label-text font-semibold text-[#D3756B]">Food Origin</span>
                                </div>
                                <label className="input input-bordered border-[#A75D5D] flex items-center gap-2">
                                    <IoMdGlobe className="text-[#A75D5D]"></IoMdGlobe>
                                    <input {...register("origin", { required: true })} type="text" className="grow" placeholder="Food Origin" />
                                    {errors.origin && <span className="text-red-500">This field is required</span>}
                                    {/* <input {...register("country", { required: true })} type="text" className="grow" placeholder="Country Name" /> */}
                                    {/* {errors.country && <span className="text-red-500">This field is required</span>} */}
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row lg:flex-row gap-2 lg:gap-4 mb-3">
                            <div className="flex-1">
                            <div className="label">
                                <span className="label-text font-semibold text-[#D3756B]">Food Category</span>
                            </div>
                            <label className="input input-bordered border-[#A75D5D] flex items-center gap-2">
                                <BiCategoryAlt className="text-[#A75D5D]" />
                                <input {...register("category", { required: true })} type="text" className="grow" placeholder="Food Category" />
                                {errors.category && <span className="text-red-500">This field is required</span>}
                            </label>
                        </div>
                        <div className="flex-1">
                            <div className="label">
                                <span className="label-text font-semibold text-[#D3756B]">Image URL</span>
                            </div>
                            <label className="input input-bordered border-[#A75D5D] flex items-center gap-2">
                                <FaImage className="text-[#A75D5D]"></FaImage>
                                <input {...register("image", { required: true })} type="text" className="grow" placeholder="Image URL" />
                                {errors.image && <span className="text-red-500">This field is required</span>}
                            </label>
                        </div>
                        </div>
                        <div className="flex flex-col md:flex-row lg:flex-row gap-2 lg:gap-4 mb-3">
                            <div className="flex-1">
                            <div className="label">
                                <span className="label-text font-semibold text-[#D3756B]">Price</span>
                            </div>
                            <label className="input input-bordered border-[#A75D5D] flex items-center gap-2">
                                <SiCashapp className="text-[#A75D5D]" />
                                <input {...register("price", { required: true })} type="number" className="grow" placeholder="Price" />
                                {errors.price && <span className="text-red-500">This field is required</span>}
                            </label>
                        </div>
                        <div className="flex-1">
                            <div className="label">
                                <span className="label-text font-semibold text-[#D3756B]">Quantity</span>
                            </div>
                            <label className="input input-bordered border-[#A75D5D] flex items-center gap-2">
                                <FaSortAmountDown className="text-[#A75D5D]"></FaSortAmountDown>
                                <input {...register("quantity", { required: true })} type="text" className="grow" placeholder="Quantity" />
                                {errors.quantity && <span className="text-red-500">This field is required</span>}
                            </label>
                        </div>
                        </div>
                        <div className="mb-8">
                            <div className="label">
                                <span className="label-text font-semibold text-[#D3756B]">Short Description</span>
                            </div>
                            <label className="input input-bordered border-[#A75D5D] flex items-center gap-2">
                                <MdOutlineDescription className="text-[#A75D5D]" />
                                <input {...register("description", { required: true })} type="text" className="grow" placeholder="Short Description" />
                                {errors.description && <span className="text-red-500">This field is required</span>}
                            </label>
                        </div>
                        <button className="btn btn-wide w-full text-white font-semibold text-xl bg-[#A75D5D]">Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddFoodItem;