import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const Reservations = () => {
    const {user} = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit = (data, e) => {
        fetch('http://localhost:5000/reservations', {
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
                text: 'Successfully Reserved!',
                icon: 'success',
                confirmButtonText: 'Okay'
              })
              e.target.reset();
        })
      }
    return (
        <div className="my-16">
            <div className="py-6 mons text-center my-6 rounded-xl mx-3 lg:mx-0">
                    <h3 className="text-4xl mb-4 font-bold text-[#a14c43] mons">Reservations</h3>
                    <p className="lg:w-1/2 mx-auto">Secure your table effortlessly with our reservation system. Enjoy hassle-free bookings, flexible scheduling, and personalized service. Reserve your spot for a memorable dining experience today!</p>
            </div>
            <div className="flex flex-col-reverse lg:flex-row items-center">
                <div className="flex-1">
                    <img src="https://i.ibb.co/Y8V1hZw/4034081.jpg" alt="" />
                </div>
                <div className="flex-1">
                    <form onSubmit={handleSubmit(onSubmit)} className="gap-2 mx-6 lg:mx-0 poppins">
                        <div className='flex flex-col gap-3 mb-8 text-lg'>
                            <p className="font-semibold text-[#a14c43]">Your Name</p>
                            <input {...register("name", { required: true })} className='py-2 px-3 w-full text-[#f58a3d]' type="text" placeholder='Your Name' />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className='flex flex-col gap-3 mb-8 text-lg'>
                            <p className="font-semibold text-[#a14c43]">Phone Number</p>
                            <input {...register("phone", { required: true })} className='py-2 px-3 text-[#f58a3d]' type="text" placeholder='Phone Number' />
                            {errors.phone && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className='flex flex-col gap-3 mb-8 text-lg'>
                            <p className="font-semibold text-[#a14c43]">Date</p>
                            <input {...register("date", { required: true })} className='py-2 px-3 text-[#f58a3d]' type="date" placeholder='Phone Number' />
                            {errors.date && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className='flex flex-col gap-3 mb-8 text-lg'>
                            <p className="font-semibold text-[#a14c43]">Time</p>
                            <input {...register("time", { required: true })} className='py-2 px-3 text-[#f58a3d]' type="time" placeholder='Phone Number' />
                            {errors.time && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className='flex flex-col gap-3 mb-8 text-lg'>
                            <p className="font-semibold text-[#a14c43]">Message</p>
                            <input {...register("message")} type="text" className='p-2 h-36 w-full text-[#f58a3d]' placeholder='Your Message Here'></input>
                            {errors.message && <span className="text-red-500">This field is required</span>}
                            <input type="submit" value="Reserve" className='bg-orange-500 btn w-full rounded-lg text-lg mons font-bold text-white hover:bg-orange-300 cursor-pointer' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Reservations;