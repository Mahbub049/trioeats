import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "../Shared/Navbar/Navbar";
import { RiLockPasswordFill } from "react-icons/ri";
import { useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'

const Login = () => {
    const {login,googleLogin} = useContext(AuthContext);
    const {register, handleSubmit, formState: { errors }} = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        console.log(email, password)
        login(email, password)
        .then(()=>{
            Swal.fire({
                title: "Logged In!",
                text: "You have successfully Logged In",
                icon: "success"
              });
            navigate(location?.state ? location.state : '/')
        })
        .catch(error=>{
            toast.error("Your email or password didn't matched!");
        })
    }

    const googleUserLogin = () =>{
        googleLogin()
        .then(()=>{
            Swal.fire({
                title: "Logged In!",
                text: "You have successfully Logged In",
                icon: "success"
              });
            navigate(location?.state ? location.state : '/')
        })
        .catch(()=>{
            toast.error("Please Try Again!");
        })
    }
    return (
        <HelmetProvider>
            <Helmet>
                <title>TrioEats | Login</title>
            </Helmet>
            <div>
                <div className="container mx-auto min-h-screen">
                    <Navbar></Navbar>
                    <div>
                    <div className="hero poppins">
                        <ToastContainer></ToastContainer>
                        <div className="hero-content flex-col lg:flex-row gap-6">
                            <div className="text-center lg:text-left flex-1">
                                <img src="/src/assets/foodlogin.jpg" alt="" />
                            </div>
                            <div className="card shrink-0 w-full flex-1 shadow-2xl bg-base-100  p-4">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                <label className="input flex items-center gap-1 mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="text-[#A75D5D] w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                    <input {...register("email", { required: true })} type="email" placeholder="Enter Email Address" className="input w-full border-0 hover:border-0 focus:border-0" />
                                </label>
                                    {errors.email && <span className="text-red-500">This field is required</span>}
                                
                                </div>
                                <div className="form-control">
                                <label className="input flex items-center gap-1 mb-6">
                                    <RiLockPasswordFill className="text-[#A75D5D]"></RiLockPasswordFill>
                                    <input {...register("password", { required: true })} type="password" placeholder="Password" className="input border-0 w-full hover:border-0 focus:border-0"  />
                                </label>
                                    {errors.password && <span className="text-red-500">This field is required</span>}
                                </div>
                                <div className="form-control mt-6">
                                        <button className="btn text-white bg-[#F0997D]">Login</button>
                                </div>
                            </form>
                                <div className="my-6">
                                    <h2 className="text-center text-sm poppins">Login With</h2>
                                    <div className="flex justify-center">
                                        <button onClick={googleUserLogin} className="btn mt-2">
                                            <FcGoogle className="text-2xl"></FcGoogle>
                                        </button>
                                    </div>
                                    <div className='mt-4 text-center'>
                                        <p className="text-[14px]">Don&apos;t have an account? <Link className='text-[#F0997D]' to={'/register'}>Register Now</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default Login;