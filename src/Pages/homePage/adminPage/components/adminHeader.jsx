import { IoMenuSharp } from "react-icons/io5";
import SearchBar from "./searchBar";

export default function AdminHeader() {
  return (
    <header className="
        h-23 bg-white/90 backdrop-blur flex items-center   gap-3">
    <div className="w-[33px] h-[35px] bg-purple-50 items-center justify-center
        grid place-items-center rounded-lg
                text-slate-400 transition-all
                hover:bg-violet-200 hover:text-violet-600
                hover:shadow-[0_0_0_3px_rgba(139,92,246,.12)]
                group-focus-within:text-violet-600 active:scale-95
        relative
    
    ">
        <IoMenuSharp className="text-[20px] text-gray-500  "/>
    </div>

    <SearchBar />



    <div className="absolute right-10">
        
    </div>
    

    

    

    </header>
  );
}