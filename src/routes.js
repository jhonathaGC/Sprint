import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./Pages/HomeCorpo/Home";
import Login from "./Pages/LoginCadastro/LoginCadastro";
import Header from './Componentes/NavBarLateral/Header/index';
import NotFound from './Pages/404';

function Router() {
  return (

    <BrowserRouter>                                      
      <Routes>    

        {"Navegação da pagina Home"}
				<Route path={"/"} element={<Home />} />             
				<Route path={"/login"} element={<Login />} />             
				<Route path={"/DashBoardGeral"} element={<Login />} />    

        {"Navegação de tela após realizar o cadastro"}
				<Route path={"/pagina-geral"} element={<Header />} /> 

        {"Pagina de Not Found, para caso o cliente acesse alguma URL errada"}            
				<Route path={"*"} element={<NotFound />} />   

      </Routes>
    </BrowserRouter>
  );
}

export default Router;