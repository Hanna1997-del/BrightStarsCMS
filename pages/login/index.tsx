import { AuthContext } from "@/Provider/AuthProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

interface LoginProps {
    
}
 
const Login: React.FC<LoginProps> = () => {
 
  const[userName,setUserName] = useState("")
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const[confirmPassword,setConfirmPassword] = useState("")

  const[errorUserName,setErrorUserName] = useState("")
  const[errorEmail,setErrorEmail] = useState("")
  const[errorPassword,setErrorPassword] = useState("")
  const[errorConfirmPw,setErrorConfirmPw] = useState("")

  const{close,setClose} = useContext(AuthContext)

    const validate = (e:any) => {
      e.preventDefault();
      userName.length > 8 ? setErrorUserName("")   : setErrorUserName("username must be 8")
      userName.length > 8 ? setClose(true) : setClose(false)
      email.includes ("@gmail.com") ? setErrorEmail("") : setErrorEmail("please type email")
      email.includes ("@gmail.com") ? setClose(true) : setClose(false)
      password.length >8 ? setErrorPassword("") : setErrorPassword("password must be 8")
      password.length >8 ? setClose(true) : setClose(false)
      password !="" && password==confirmPassword? setErrorConfirmPw("") : setErrorConfirmPw("Password did not match")
      password !="" && password==confirmPassword? setClose(true) : setClose(false)
    }
    
    useEffect(()=>{
      
    },[])
   
    return ( 
      
        <div className={cn(
          close?"flex fixed top-[-600px] left-0 z-10 w-screen h-screen justify-center items-center bg-red-500":
          "flex fixed top-0 left-0 z-50 w-screen h-screen justify-center items-center bg-red-500"
        )}>
        
          <div className="flex flex-col gap-5">
          <h1 className="font-bold text-2xl text-white text-center">BrightStars board</h1>
            <Input type="text" placeholder="UserName" className="w-[300px]" onChange={(e)=>setUserName(e.target.value)}/>
            <p>{errorUserName}</p>
            <Input type="email" placeholder="Email" className="w-[300px]" onChange={(e)=>setEmail(e.target.value)}/>
            <p>{errorEmail}</p>
            <Input type="password" placeholder="Password" className="w-[300px]" onChange={(e)=>setPassword(e.target.value)}/>
            <p>{errorPassword}</p>
            <Input type="password" placeholder="Comfirm Password" className="w-[300px]" onChange={(e)=>setConfirmPassword(e.target.value)}/>
            <p>{errorConfirmPw}</p>
            <Button asChild 
            className={cn("bg-yellow-400 font-bold text-lg",
             
            )} onClick={validate}>
              <Link href="/login">Login</Link>
            </Button>
          </div>
           
        </div>
     );
}
 
export default Login;