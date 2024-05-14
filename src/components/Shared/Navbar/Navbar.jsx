import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { Tooltip } from "react-tooltip";
import { FaRegUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    const links = 
    <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/allfoods'}>All Foods</NavLink></li>
        <li><NavLink to={'/gallery'}>Gallery</NavLink></li>
    </>

    const userLists = 
    <>
        <li><NavLink to={'/itemsadded'}>My Added Items</NavLink></li>
        <li><NavLink to={'/additems'}>Add Items</NavLink></li>
        <li><NavLink to={'/orders'}>Ordered Items</NavLink></li>
    </>
    const signOutUser = () => {
        logOut()
        .then(()=>{})
        .catch(()=>{})
    }
    return (
        <div>
            <div className="navbar bg-base-100 mt-3">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost text-xl px-0 h-20"><img src="/src/assets/trioeats-logo.png" alt="" className="w-44 lg:w-56" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                {user ? <>
                    <div className="dropdown dropdown-end z-10">
                        <Tooltip className="z-10" id="my-tooltip" />
                        <div className="tooltip" data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} data-tooltip-place="left">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                <div className="z-10">
                                    <img referrerpolicy="no-referrer" alt="User" src={user.photoURL? user.photoURL : <FaRegUserCircle />} />
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow active:z-10 bg-base-100 rounded-box w-52">
                                        {userLists}
                                    </ul>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={signOutUser} className="btn text-white lg:ml-4 bg-[#F0997D]">Log Out</button>
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