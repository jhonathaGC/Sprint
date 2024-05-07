import React from 'react'
import { Container, Content } from './styles'

import { 
  FaTimes, 
  FaHome, 
  FaUserAlt, 
  FaChartBar
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem'
import { Link } from 'react-router-dom'


const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
       <Link to={'/'}> <SidebarItem Icon={FaHome} Text="Usuarios" /></Link>
        <Link to={'/Home'}><SidebarItem Icon={FaChartBar} Text="Statistics" /></Link>
        <Link><SidebarItem Icon={FaUserAlt} Text="Users" /></Link>
        
      </Content>
    </Container>
  )
}

export default Sidebar