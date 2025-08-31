import { IoIosSearch } from "react-icons/io";
import { LuSettings2 } from "react-icons/lu";

export default function SearchBar() {
    return (
        <div className="
        group relative flex h-[54px] w-[420px] items-center gap-3 rounded-lg
        border border-slate-300 bg-white/90 px-4
        transition-all duration-200 ease-out
        hover:border-slate-300 hover:bg-white hover:shadow-md
        focus-within:shadow-lg focus-within:ring-2 focus-within:ring-violet-500/40
        before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2
        before:h-7 before:w-[3px] before:rounded-full
        before:bg-gradient-to-b before:from-violet-500 before:to-fuchsia-500
        before:opacity-0 before:transition-opacity
        group-hover:before:opacity-100 group-focus-within:before:opacity-100
    ">

        


        <IoIosSearch
            className="
            text-xl text-slate-400 transition-colors
            group-hover:text-slate-600 group-focus-within:text-violet-600"
        />

        <input
            type="text"
            placeholder="Search..."
            className="
                flex-1 bg-transparent outline-none
                text-slate-700 placeholder:text-slate-400
                transition-colors
                group-hover:placeholder:text-slate-500
                focus:placeholder:text-slate-300 "/>

        <button
            type="button"
            className="
                grid place-items-center w-8 h-8 rounded-lg
                text-slate-400 transition-all
                hover:bg-violet-100 hover:text-violet-600
                hover:shadow-[0_0_0_3px_rgba(139,92,246,.12)]
                group-focus-within:text-violet-600 active:scale-95"
            aria-label="Search settings">

            <LuSettings2 className="text-xl transition-transform duration-200 group-hover:rotate-12" />
        </button>
    </div>
    );
}