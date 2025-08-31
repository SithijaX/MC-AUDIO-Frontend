import { NavLink } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { RiAlignItemLeftLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { MdOutlineReviews, MdBorderAll } from "react-icons/md";
import { TbMessage } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

export default function AdminSideBar() {
  const linkClasses = ({ isActive, isPending }) => {
    const base = "flex items-center gap-3 px-9 py-2 transition-all duration-150 rounded-lg";
    const defaultStyle = "text-gray-700 hover:text-purple-700 hover:bg-purple-100";
    const activeStyle = "text-purple-700 bg-purple-200 shadow-sm";
    const pendingStyle = "text-gray-400 cursor-wait";
    if (isPending) return `${base} ${pendingStyle}`;
    return isActive ? `${base} ${activeStyle}` : `${base} ${defaultStyle}`;
  };

  return (
    <aside className="
      sticky top-0 w-[245px] h-screen
      bg-white
      flex flex-col
    ">
      {/* Brand */}
      <div className="flex px-4 py-4 items-center">
        <img src="/MClogo.svg" alt="logo" className="h-[44px]" />
      </div>

      {/* Links */}
      <ul className="space-y-2 flex flex-col py-2">
        <span className="px-6 font-medium text-gray-600">Dashboard</span>
        <li>
          <NavLink to="/admin/dashboard" className={linkClasses}>
            <AiOutlineDashboard className="text-lg" />
            <span>Dashboard</span>
          </NavLink>
          <hr className="my-4 mx-4 border-gray-200" />
        </li>

        <span className="px-6 font-medium text-gray-600">Manage</span>
        <li>
          <NavLink to="/admin/products" className={linkClasses}>
            <RiAlignItemLeftLine className="text-lg" />
            <span>Products</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/users" className={linkClasses}>
            <FiUsers className="text-lg" />
            <span>Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/reviews" className={linkClasses}>
            <MdOutlineReviews className="text-lg" />
            <span>Reviews</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/orders" className={linkClasses}>
            <MdBorderAll className="text-lg" />
            <span>Orders</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/inquiries" className={linkClasses}>
            <TbMessage className="text-lg" />
            <span>Inquiries</span>
          </NavLink>
        </li>

        <hr className="my-4 mx-4 border-gray-200" />
        <span className="px-6 font-medium text-gray-600">Settings</span>
        <li>
          <NavLink to="/admin/settings" className={linkClasses}>
            <IoSettingsOutline className="text-lg" />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}