// Sidebar.js
import React from 'react';
import styles from './Sidebar.css';
import { Link } from 'react-router-dom';

// Importante imagens da SideBar
import Hamburguer from '../../Assets/menu-hamburguer.png'
import Usuario from '../../Assets/usuario.png'
import EstoquePronto from '../../Assets/estoque-pronto.png'
import Compras from '../../Assets/compras.png'
import Relatorio from '../../Assets/relatorio.png'
import AddUsuario from '../../Assets/adicionar-usuario.png'


const Sidebar = ({ isOpen, toggle }) => {
  return (
    <nav className={isOpen ? 'sidebar open' : 'sidebar'}>

      <span className='hamburger' onClick={toggle}>
        <img src={Hamburguer} alt='ola' />
      </span>

      <div class="usuario">

        <h4 id="Empresa">Empresa ABC</h4>
        <img src={Usuario} alt="" />
        <p id="Usuario">Raquel Guimarães</p>

      </div>
      <ul className='ul_sidebar'>
        <li class="item-menu">
          <Link to='/pagina-geral'>
            <span class="icone"></span>
            <span class="texto">Estoque <img src={EstoquePronto} alt="" /></span>
          </Link>
        </li>

        <li class="item-menu">

          <Link>
            <span class="icone"></span>
            <span class="texto">Compras <img src={Compras} alt="" /></span>
          </Link>

        </li>

        <li class="item-menu">

          <Link>
            <span class="icone"></span>
            <span class="texto">Realtorio <img src={Relatorio} alt="" /></span>
          </Link>

        </li>
        
        <li class="item-menu">

          <Link>
            <span class="icone"></span>
            <span class="texto">Usuario <img src={AddUsuario} alt="" /></span>
          </Link>

        </li>

        <li class="item-menu">

          <Link>
            <span class="icone"></span>
            <span class="texto">Sair </span>
          </Link>

        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
