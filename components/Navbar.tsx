import Link from "next/link";
import { Button } from "./ui/button";

interface NavbarProps {
    
}
 
const Navbar:React.FC<NavbarProps> = () => {
    return ( 
       
        <div className=" shadow-lg w-full fixed z-20 flex  h-12 justify-around items-center py-10  gap-5 mt-0 bg-red-500  ">
       <div className="ml-24">
        <h1 className="font-bold text-white text-2xl">BrightStars Admin Board</h1>
       </div>
       
       <Button asChild  className="bg-yellow-400 font-bold text-white shadow-lg rounded-lg px-3 py-1 mx-4">
        <Link href="/login">Logout</Link>
       </Button>
        </div>
     );
}
 
export default Navbar;