import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { Tooltip } from "react-tooltip";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
    // const user = {
    //     displayName: "Mahbub Sarwar",
    //     email: "mahbubsarwar5@gmail.com"
    // }
    const user = null;
    const links = 
    <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/allfoods'}>All Foods</NavLink></li>
        <li><NavLink to={'/gallery'}>Gallery</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl h-20"><img src="/src/assets/trioeats-logo.png" alt="" className="w-56" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                {user ? <>
                    <div className="dropdown dropdown-end">
                        <Tooltip className="z-10" id="my-tooltip" />
                        <div className="tooltip" data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} data-tooltip-place="left">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                <div>
                                    <img referrerpolicy="no-referrer" alt="User" src={user.photoURL? user.photoURL : <FaRegUserCircle />} />
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                        <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                        </li>
                                        <li><a>Settings</a></li>
                                        <li><a>Logout</a></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button  className="btn text-white lg:ml-4 bg-[#F0997D]">Log Out</button>
                </> :
                <div className="flex">
                    <Link to={'/login'} className="btn btn-outline text-[#F0997D] ml-4 border-[#F0997D] hover:bg-[#A75D5D] hover:border-white">Log In</Link>
                    <div className="hidden lg:flex">
                        <Link to={'/register'} className="btn btn-outline text-[#A75D5D] ml-4 border-[#A75D5D] hover:bg-[#F0997D] hover:border-white">Register</Link>
                    </div>
                </div>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;