import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from './../Shared/Navbar/Navbar';
import Footer from "../Shared/Footer/Footer";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaImage } from "react-icons/fa";
import Swal from "sweetalert2";
import GalleryCard from "./GalleryCard/GalleryCard";

const Gallery = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const loadedGallery = useLoaderData();
    const [gallery, setGallery] = useState(loadedGallery);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
    const onSubmit = (data, e) => {
      fetch('https://trioeats-server.vercel.app/gallery', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(data=>{
          //   Swal.fire({
              //       title: 'Success!',
              //       text: 'Successfully Added',
              //       icon: 'success',
              //       confirmButtonText: 'Okay'
              //     })
              setGallery([...gallery, data])
              e.target.reset();
              location.reload()
      })
    }
    return (
        <HelmetProvider>
            <Helmet>
                <title>TrioEats | Gallery</title>
            </Helmet>
            <div>
                <div className="container mx-auto">
                    <Navbar></Navbar>
                    <div>
                        <div className="bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url('/src/assets/Banner/banner1.jpg')] bg-center bg-cover py-20 text-center my-6 rounded-xl mx-3 lg:mx-0">
                        <p className="text-4xl  font-bold text-[#FFC3A1] mons">Gallery</p>
                        <div className="mt-4">
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        {
                            user ? 
                            <>
                            <button className="btn mt-2 bg-orange-600 text-white border-0" onClick={()=>document.getElementById('my_modal_3').showModal()}>Add</button>
                            <dialog id="my_modal_3" className="modal">
                            <div className="modal-box bg-[#faab7d]">
                                <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-2xl mons mb-4">Add Your Feedback!</h3>
                                <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
                                    <div>
                                        <div className="label">
                                            <span className="label-text font-semibold text-black">User Name</span>
                                        </div>
                                        <label className="input bg-orange-200 border-0 input-bordered border-[#A75D5D] flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="text-[#A75D5D] w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                            <input {...register("name", { required: true })} type="text" value={user.displayName} className="grow" placeholder="Username"/>
                                            {errors.name && <span className="text-red-500">This field is required</span>}
                                        </label>
                                    </div>
                                    <div>
                                        <div className="label">
                                            <span className="label-text font-semibold text-black">Image URL</span>
                                        </div>
                                        <label className="input bg-orange-200 border-0 input-bordered border-[#A75D5D] flex items-center gap-2">
                                            <FaImage className="text-[#A75D5D]"></FaImage>
                                            <input {...register("image", { required: true })} type="text" className="grow" placeholder="Image URL"/>
                                            {errors.image && <span className="text-red-500">This field is required</span>}
                                        </label>
                                    </div>
                                    <div>
                                        <div className="label">
                                            <span className="label-text font-semibold text-black">Feedback</span>
                                        </div>
                                            <textarea {...register("feedback", { required: true })} type="text" className="grow w-full rounded-lg bg-orange-200 border-0 p-2" placeholder="Provide Your Feedback Here"></textarea>
                                        {/* <label className="input bg-orange-200 border-0 input-bordered border-[#A75D5D] flex items-center gap-2">
                                            <FaImage className="text-[#A75D5D]"></FaImage>
                                            <input {...register("feedback", { required: true })} type="text" className="grow" placeholder="Provide Your Feedback Here"/>
                                        </label> */}
                                            {errors.feedback && <span className="text-red-500">This field is required</span>}
                                    </div>
                                    <button className="btn btn-wide w-full text-white font-semibold text-xl bg-orange-600 border-0 hover:bg-orange-400">Submit</button>
                                </form>
                            </div>
                        </dialog>
                            </>
                        :
                        <>
                        <button className="btn mt-2 bg-orange-400 text-white border-0" onClick={()=>navigate("/login", { state: location.pathname })}>Add</button>
                        <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Press ESC key or click on ✕ button to close</p>
                        </div>
                    </dialog>
                        </>
                        }
                        </div>
                        </div>
                        <div className="mx-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {
                            gallery.map(gallery=><GalleryCard key={gallery._id} gallery={gallery}></GalleryCard>)
                        }
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </HelmetProvider>
    );
};

export default Gallery;