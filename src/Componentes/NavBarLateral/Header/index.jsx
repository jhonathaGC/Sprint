import React, { useState } from 'react'
import { Container } from './styles'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar'
import styles from './index.module.css'
import Usuario from '../../../Pages/Usuario/Usuario'

const Header = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <>
      <div className={styles["header-right"]}>
        <input type="search"/>
          <button className={styles["pesquisar"]}>Pesquisar</button>
       </div>

      <Container>
        <FaBars onClick={showSiderbar} />
        {sidebar && <Sidebar active={setSidebar} />}
        <Usuario />
      </Container>
    </>
  )
}

export default Header