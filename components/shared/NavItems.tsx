"use client"
import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems :any= () => {
  const path= usePathname();
  return (
    <ul className='md:flex-between md:flex-row flex flex-col gap-5 items-start w-full'>
      
        {headerLinks.map((link)=>{
          const isActive= link.route===path;
          return(
          
           <li
           key={link.route}
           className={`${isActive && 'text-primary-500'} flex-center p-medium-16 whitespace-nowrap`}>
            <Link href={link.route}>{link.label}</Link>
           </li>
        )})}
      

    </ul>
  )
}

export default NavItems
