import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
    const position = [23.821060, 90.394636];
    return (
        <div>
            <div id="contact" className="my-16">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#a14c43] mons">Contact Us</h2>
                    <p className="px-4 lg:px-96 leading-7 mt-4">Connect with us through our Contact Us section. Share your inquiries or feedback via our mail, and explore our location on the map. We look forward to hearing from you!</p>
                </div>
                <div className="flex flex-col-reverse items-center lg:flex-row gap-12 lg:gap-4">
                <div className="mx-3 lg:flex hidden">
                    <MapContainer className="w-full lg:w-[800px] h-[550px]" center={position} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                        <Popup>
                            TrioEats
                        </Popup>
                        </Marker>
                    </MapContainer>
                    </div>
                <div className="flex-1">
                    <div className="w-full flex justify-center mb-12">
                        <img className="w-11/12 lg:w-auto" src="https://i.ibb.co/hBzt89k/trioeats-logo.png" alt="" />
                    </div>
                    <div className="space-y-12 flex mx-6 lg:mx-auto lg:w-1/2 flex-col">
                        <div className="flex gap-4 items-center">
                            <div className="border-2 p-4 rounded-full w-fit border-orange-500">
                                <IoMdMail className="text-5xl text-orange-500"></IoMdMail>
                            </div>
                            <div className="space-y-2">
                                <h3 className="mons font-bold text-2xl text-[#a14c43]">Email Us</h3>
                                <h5 className="poppins">trioeats@restaurent.bd</h5>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div className="border-2 p-4 rounded-full w-fit border-orange-500">
                                <FaLocationDot className="text-5xl text-orange-500"></FaLocationDot>
                            </div>
                            <div className="space-y-2">
                                <h3 className="mons font-bold text-2xl text-[#a14c43]">Location</h3>
                                <h5 className="poppins">144/11, Matikata, Dhaka-1206</h5>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div className="border-2 p-4 rounded-full w-fit border-orange-500">
                                <FaPhoneAlt className="text-5xl text-orange-500"></FaPhoneAlt>
                            </div>
                            <div className="space-y-2">
                                <h3 className="mons font-bold text-2xl text-[#a14c43]">Call Us</h3>
                                <h5 className="poppins">+88013543543645</h5>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;