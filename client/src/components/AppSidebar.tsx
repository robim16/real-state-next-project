import { usePathname } from 'next/navigation'
import React from 'react'

const AppSidebar = ({ userType }: AppSidebarProps) => {
    const pathname = usePathname()
  return (
    <div>AppSidebar</div>
  )
}

export default AppSidebar