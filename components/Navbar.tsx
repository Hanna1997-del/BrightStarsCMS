interface NavbarProps {
    
}
 
const Navbar:React.FC<NavbarProps> = () => {
    return ( 
       
        <div className=" shadow-lg w-full fixed z-20 flex  h-12 justify-around items-center py-10  gap-5 mt-0 bg-yellow-300  ">
       <div>
        <h1 className="font-bold">Dashboard</h1>
       </div>
       <div>
       <button className="bg-red-500 text-white border border-black rounded-lg px-3 py-1 mx-4">Login</button>
        <button className="bg-red-500 text-white border border-black rounded-lg px-3 py-1">Signup</button>
       </div>
        </div>
     );
}
 
export default Navbar;