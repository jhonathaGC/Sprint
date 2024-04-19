import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./Pages/HomeCorpo/Home";
import Login from "./Pages/LoginCadastro/LoginCadastro";
import NotFound from './Pages/404';

function Router() {
  return (
    <BrowserRouter>                                        
      <Routes>       
				<Route path={"/"} element={<Home />} />             
				<Route path={"/login"} element={<Login />} />             
				<Route path={"/DashBoardGeral"} element={<Login />} />             
				<Route path={"*"} element={<NotFound />} />             
      </Routes>
    </BrowserRouter>
  );
}

export default Router;