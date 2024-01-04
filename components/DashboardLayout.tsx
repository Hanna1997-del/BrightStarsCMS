import Link from "next/link";
import Navbar from "./Navbar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

interface DashboardLayoutProps {
  children: any;
}
const links = [
  { title: "Dashboard", url: "/" },
  { title: "Admin", url: "/admin" },
  { title: "Users", url: "/user" },
  { title: "Mark", url: "/mark" },
  { title: "Setting", url: "/setting" },
 
];
const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <main className="w-[1380px] overflow-y-scroll overflow-x-hidden h-screen flex  relative">
      <div className="w-[20%] h-full fixed border font-bold border-r-4  border-r-red-400 shadow-2xl mt-2 flex flex-col pl-3 gap-16 pt-20 text-xl  bg-yellow-300 ">
        {links.map((item)=>(
            <Link 
            className="flex w-full hover:bg-red-500 hover:text-white py-2   "
            href={item.url} key={item.title}>
                {item.title}
            </Link>
        ))}
       </div>
       <div className="w-[80%] h-[10%] justify-around flex flex-col ">
       <Navbar/>
       
       </div>
      
       {children}
    </main>
    
  );
};

export default DashboardLayout;
