import { useState } from "react"
export default function Navbar(){
    const [is_openmenu, set_is_openmenu] = useState(false)
    return(
        <>
            <nav className="flex items-center justify-between bg-white shadow-lg p-3 sticky top-0 z-10">
                <div className="logo w-[30%] ">
                    <img src="https://cdn.dribbble.com/users/1299339/screenshots/16683906/media/9ea68698c3e30c3b65a33d9b144aab07.gif" alt="logo" width={"80px"}/>
                </div>
                {/*  search */}
                <div className="search w-[20%] hidden xl:flex justify-center "> 
                    <div className="relative flex">
                        
                        <div className="search_icon w-[40px] bg-gray-100 flex
                        items-center rounded-l-xl">
                            <i className="bx bx-search absolute left-0 text-2xl ml-2"></i>
                        </div>
                        <input type="text" placeholder="search" className="text-2xl
                        outline-none border-none p-2 rounded-r-xl pl-2 bg-gray-100  "/>
                        
                    </div>
                </div>
                <div className="w-[40%] hidden xl:flex justify-end">
                    <ul className="items-center gap-12 xl:flex">
                        <li><a href="" className="cursor-pointer text-2xl text-black">Home</a></li>
                        <li><a href="" className="cursor-pointer text-2xl text-black">About</a></li>
                        <li><a href="" className="cursor-pointer text-2xl text-black">Contact</a></li>
                        <li><a href="" className="cursor-pointer text-2xl text-black">Account</a></li>
                    </ul>
                </div>
                
                {/* toggle the menu */}
                <div className="">
                    {!is_openmenu &&(
                    <i className="bx bx-menu xl:hidden text-5xl cursor-pointer"
                        onClick={()=>set_is_openmenu(true)}
                    ></i>
                )}
                {/* show close icon menu  */}
                {is_openmenu &&(
                    <i className="bx text-5xl cursor-pointer bx bx-x"
                    onClick={()=>set_is_openmenu(false)}>
                        
                    </i>
                )}
                </div>
                    {/* menu for small device                 */}
                <div className={`absolute xl:hidden top-20 pt-6 left-0 bg-white z-10
                    w-full flex flex-col items-center gap-6 duration-500 ease-in-out
                     ${is_openmenu ? "opacity-100 translate-y-0":"opacity-0 translate-y-10" }`}>
                    
                    {/* Menu items with delay */}
                    <li className={`text-2xl list-none cursor-pointer transition-all pb-2 ${is_openmenu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${is_openmenu ? "delay-75" : ""}`}>Home</li>
                    <li className={`text-2xl list-none cursor-pointer transition-all pb-2 ${is_openmenu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${is_openmenu ? "delay-100" : ""}`}>About</li>
                    <li className={`text-2xl list-none cursor-pointer transition-all pb-2 ${is_openmenu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${is_openmenu ? "delay-150" : ""}`}>Contact</li>
                    <li className={`text-2xl list-none cursor-pointer transition-all pb-2 ${is_openmenu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${is_openmenu ? "delay-200" : ""}`}>Account</li>
                </div>
            </nav>
            
        </>
    )
}