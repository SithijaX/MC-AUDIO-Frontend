import AdminHeader from "./components/adminHeader";
import AdminSideBar from "./components/sideBar";

export default function AdminPage() {
    return (
        <>
        <div className="w-screen h-screen flex bg-gray-100">

            <AdminSideBar />


            <div className="flex-1 flex flex-col bg-white  shadow">
                <AdminHeader />
                <main className="flex-1 p-6 rounded-tl-lg bg-[#eef2f6]">
                    <h1 className="text-xl font-semibold">Welcome Admin 🚀</h1>
                </main>
            </div>
            




        </div>
            
        
        
        </>
    )
}