import React, { useState } from 'react'

import Navbar from './components/nav/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Admin from './components/home/admin/Admin'

import './App.css'


const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const openSidebar = () => {
    setSidebarOpen(true)
  }
  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  return (
    <div className='container'>
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Admin />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  )
}

export default App