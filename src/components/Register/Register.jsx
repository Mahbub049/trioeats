import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "../Shared/Navbar/Navbar";
import { RiLockPasswordFill } from "react-icons/ri";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import { FaImage, FaRegEye, FaRegEyeSlash, FaUser } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const [passwordState, setPasswordState] = useState(false);
    const {createUser, updateUserInfo, setUser} = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        const name = data.name;
        const photoURL = data.photoURL;
        createUser(email, password)
        .then(()=>{
            updateUserInfo(name, photoURL)
            .then(()=>{
                setUser({
                    displayName: name,
                    photoURL: photoURL,
                    email: email
                })
                // navigate(location?.state ? location.state : '/')
                toast.success("Successfully Registered!");
            })
            .catch(()=>{   
                toast.error("Something went wrong!");
            })
        })
        .catch(()=>{
            toast.error("This email already exists!");
        })
    };
    return (
        <HelmetProvider>
            <Helmet>
                <title>TrioEats | Register</title>
            </Helmet>
            <div>
                <div className="container mx-auto">
                    <Navbar></Navbar>
                    <div>
                        <ToastContainer></ToastContainer>
                    <div className="hero min-h-screen poppins">
                        <div className="hero-content flex-col lg:flex-row-reverse gap-6">
                            <div className="text-center lg:text-left flex-1">
                                <img src="/src/assets/foodregister.jpg" alt="" />
                            </div>
                            <div className="card shrink-0 w-full flex-1 shadow-2xl bg-base-100  p-4">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="input flex items-center gap-1 mb-6">
                                        <FaUser className="text-[#A75D5D]"></FaUser>
                                        <input {...register("name", { required: true })} type="text" placeholder="Enter Your Name" className="input border-0 hover:border-0 focus:border-0 w-full" />
                                    </label>
                                        {errors.name && <span className="text-red-500">This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="input flex items-center gap-1 mb-6">
                                        <FaImage className="text-[#A75D5D]"></FaImage>
                                        <input {...register("photoURL", { required: true })} type="text" placeholder="Enter Photo URL" className="input border-0 hover:border-0 focus:border-0 w-full"  />
                                    </label>
                                        {errors.photoURL && <span className="text-red-500">This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="input flex items-center gap-1 mb-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="text-[#A75D5D] w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                        <input {...register("email", { required: true })} type="email" placeholder="Enter Email Address" className="input border-0 w-full hover:border-0 focus:border-0" />
                                    </label>
                                        {errors.email && <span className="text-red-500">This field is required</span>}
                                </div>
                                <div className="form-controls ">
                                    <label className="input flex items-center gap-1 relative mb-6 ">
                                        <RiLockPasswordFill className="text-[#A75D5D]"></RiLockPasswordFill>
                                        <input type={passwordState ? 'text' : 'password'} placeholder="password" className="input border-0 hover:border-0 focus:border-0 w-full" {...register("password", { required: true })}/>
                                        <div onClick={()=>setPasswordState(!passwordState)} className="absolute right-5 top-3">
                                        {
                                            passwordState ? <FaRegEye className="text-xl"/> : <FaRegEyeSlash className="text-xl" />
                                        }
                                        </div>
                                    </label>
                                        {errors.password && <span className="text-red-500">This field is required</span>}
                                </div>
                                <div className="form-control mt-6">
                                        <button className="btn text-white bg-[#F0997D]">Register</button>
                                </div>
                                <div className="my-6">
                                    <div className='mt-4 text-center'>
                                        <p className="text-[14px]">Already have an account? <Link className='text-[#F0997D]' to={'/login'}>Login Now</Link></p>
                                    </div>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default Register;