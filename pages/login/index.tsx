import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

interface LoginProps {
    
}
 
const Login: React.FC<LoginProps> = () => {
  const[open,setopen] = useState(false)
  const[userName,setUserName] = useState("")
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const[confirmPassword,setConfirmPassword] = useState("")

  const[errorUserName,setErrorUserName] = useState("")
  const[errorEmail,setErrorEmail] = useState("")
  const[errorPassword,setErrorPassword] = useState("")
  const[errorConfirmPw,setErrorConfirmPw] = useState("")

    const validate = (e:any) => {
      e.preventDefault();
      userName.length > 8 ? setErrorUserName("") : setErrorUserName("username must be 8")
      email.includes ("@gmail.com") ? setErrorEmail("") : setErrorEmail("please type email")
      password.length >8 ? setErrorPassword("") : setErrorPassword("password must be 8")
      password !="" && password==confirmPassword? setErrorConfirmPw("") : setErrorConfirmPw("Password did not match")
    }
    return ( 
      
        <div className="flex fixed top-0 left-0 z-50 w-screen h-screen justify-center items-center bg-yellow-300">
          <div className="flex flex-col gap-5">
          <h1 className="font-bold">Login</h1>
            <Input type="text" placeholder="UserName" className="w-[300px]" onChange={(e)=>setUserName(e.target.value)}/>
            <p>{errorUserName}</p>
            <Input type="email" placeholder="Email" className="w-[300px]" onChange={(e)=>setEmail(e.target.value)}/>
            <p>{errorEmail}</p>
            <Input type="password" placeholder="Password" className="w-[300px]" onChange={(e)=>setPassword(e.target.value)}/>
            <p>{errorPassword}</p>
            <Input type="password" placeholder="Comfirm Password" className="w-[300px]" onChange={(e)=>setConfirmPassword(e.target.value)}/>
            <p>{errorConfirmPw}</p>
            <Button asChild onClick={validate} className="bg-red-500">
              <Link href="/login">Login</Link>
            </Button>
          </div>
           
        </div>
     );
}
 
export default Login;