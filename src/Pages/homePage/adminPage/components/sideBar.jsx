import { Routes, Route, NavLink } from "react-router-dom";

{/* icons */}
import { AiOutlineDashboard } from "react-icons/ai";
import { RiAlignItemLeftLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { MdOutlineReviews } from "react-icons/md";
import { MdBorderAll } from "react-icons/md";
import { TbMessage } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

export default function AdminSideBar() {
    const linkClasses = ({ isActive, isPending }) => {
        let base =
        "flex items-center gap-3 px-9 py-2  transition-all duration-150 rounded-md"; 

         let defaultStyle =
        "text-gray-700 hover:text-purple-700 hover:bg-purple-100"; 

        let activeStyle =
            "text-purple-700 bg-purple-200 shadow-sm"; 


        let pendingStyle = "text-gray-400 cursor-wait";

        if (isPending) return `${base} ${pendingStyle}`;
        return isActive ? `${base} ${activeStyle}` : `${base} ${defaultStyle}`;
    };


    
    return (
        
        
        <div>
            <aside className="w-[250px] h-full bg-[#ffffff] text-black flex flex-col  shadow-2xl">

            {/* Brand */}
            <div className="flex px-1 py-3 items-center ">
                <img 
                    src="/MClogo.svg" 
                    alt="logo" 
                    className="h-[50px] mr-0.4"
                />
                
            </div>

            <div>
                {/* Links */}
                <ul className="space-y-2 flex flex-col py-2">

                    {/* DashBoard */}
                    <span className="px-6 font-medium">Dashboard</span>
                    <li className="">
                        <NavLink to="/admin/dashboard" className={linkClasses}>
                            <AiOutlineDashboard className="text-lg"/>
                            <span>Dashboard</span>
                        </NavLink>
                        <hr className="my-4 mx-4 border-gray-200" />
                    </li>


                    {/* controllers */}
                    <span className="px-6 font-medium">Manage</span>
                    <li className="">
                        <NavLink to="/admin/products" className={linkClasses}>
                            <RiAlignItemLeftLine className="text-lg"/>
                            <span>Products</span>
                        </NavLink>
                    </li>

                    <li className="">
                        <NavLink to="/admin/users" className={linkClasses}>
                            <FiUsers className="text-lg"/>
                            <span>Users</span>
                        </NavLink>
                    </li>

                    <li className="">
                        <NavLink to="/admin/reviews" className={linkClasses}>
                            <MdOutlineReviews className="text-lg"/>
                            <span>Reviews</span>
                        </NavLink>
                    </li>


                    <li className="">
                        <NavLink to="/admin/orders" className={linkClasses}>
                            <MdBorderAll className="text-lg"/>
                            <span>Orders</span>
                        </NavLink>
                    </li>

                    <li className="">
                        <NavLink to="/admin/inquiries" className={linkClasses}>
                            <TbMessage className="text-lg"/>
                            <span>Inquiries</span>
                        </NavLink>
                    </li>

                    <hr className="my-4 mx-4 border-gray-200" />
                    <span className="px-6 font-medium">Settings</span>

                     <li className="">
                        <NavLink to="/admin/settings" className={linkClasses}>
                            <IoSettingsOutline className="text-lg"/>
                            <span>Settings</span>
                        </NavLink>
                    </li>

                </ul>
            </div>
            
                
            
        
            </aside>


        </div>
        
    )
}
