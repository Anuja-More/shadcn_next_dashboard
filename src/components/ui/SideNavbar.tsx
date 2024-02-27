"use client";

import React, { useState } from 'react'
import { Nav } from './nav'
import {LayoutDashboard, UserRound, ShoppingCart, Settings,ChevronRight } from "lucide-react"
import { Button } from './button';
import {
  useWindowWidth,
} from '@react-hook/window-size'

type Props = {}

export const SideNavbar = (props: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
   const onlyWidth = useWindowWidth()
   const mobileWidth = onlyWidth < 768 ;
  function toggleSideBar(){
    setIsCollapsed(!isCollapsed)
  }
  return (
    <div className='relative min-w-[100px] border-r pl-2 pr-7 pb-10 pt-24'>
      {!mobileWidth && (
     <div className='absolute right-[-20px] top-7'>
      <Button onClick={toggleSideBar} 
      className='rounded-full p-2' variant='secondary'><ChevronRight /></Button></div>
      )}
       <Nav
            isCollapsed={mobileWidth ? true : isCollapsed}
            links={[
              {
                title: "Announcements",
                icon: LayoutDashboard,
                variant: "ghost",
                href:"/"
              },
              {
                title: "Programs",
                icon: UserRound,
                variant: "ghost",
                href:"/users"
              },
              {
                title: "List of trainer",
                icon: ShoppingCart,
                variant: "ghost",
                href:"/orders"
              },
              {
                title: "Meditation location",
                icon: Settings,
                variant: "ghost",
                href: "/settings"
              },
            ]}
          /></div>
  )
}