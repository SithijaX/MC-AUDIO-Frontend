import { IoIosSearch } from "react-icons/io";


export default function AdminHeader() {
  return (
    <header
      className="
        h-23
        bg-white/90
        backdrop-blur
        flex items-center
        px-6
        
      "
    >
      <div className="w-[400px] h-[50px] border-1 border-gray-400 rounded-lg flex items-center px-3">
        <IoIosSearch className="text-xl text-gray-400"/>

        <input 
        />
      </div>




    </header>
  );
}