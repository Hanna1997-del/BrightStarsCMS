import Image from 'next/image'
import { Inter } from 'next/font/google'
import DashboardLayout from '@/components/DashboardLayout'
import { TableDash } from '@/components/TableDash'
import Login from './login'
import { useState } from 'react'



const inter = Inter({ subsets: ['latin'] })
const tableDB = [
  {id:0, name:'Hnin Thet', grade:'10', phone:'09775975632',mark:100},
  {id:1, name:'Thin Myat', grade:'10', phone:'09775975632',mark:100},
  {id:2, name:'Eaint Hnin', grade:'10', phone:'09775975632',mark:100},
  {id:3, name:'Bro Ye', grade:'10', phone:'09775975632',mark:100},
  {id:4, name:'Thet Hmue', grade:'10', phone:'09775975632',mark:100},
  {id:5, name:'Myat Khine', grade:'10', phone:'09775975632',mark:100},
  {id:6, name:'Eaint Thet', grade:'10', phone:'09775975632',mark:100},
]
export default function Home() {
  
  return (
   <div className='relative'>
    <Login/>
      <DashboardLayout >
    <div className='absolute top-[200px] w-[800px] h-full left-[350px]'>
    <div className=''>
       
  <TableDash/>
        </div>
    </div>
   </DashboardLayout>
   </div>
  
  )
}
