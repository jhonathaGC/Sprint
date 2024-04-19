import React, { useEffect } from "react";
import './LoginCadastro.css'
import { BiLogoLinkedin } from "react-icons/bi";
import { CgFacebook } from "react-icons/cg";
import { AiOutlineGooglePlus } from "react-icons/ai";
import NavBar from "../../Componentes/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const LoginCadastro = () => {
    useEffect(() => {
        const cadastrarBtn = document.getElementById('cadastrar-se')
        const entrarBtn = document.getElementById('entrar')

        const handleCadastrarClick = () => {
            const container = document.getElementById('container')
            container.classList.add("active");
        }

        const handleEntrarClick = () => {
            const container = document.getElementById('container')
            container.classList.remove("active");
        }

        cadastrarBtn.addEventListener('click', handleCadastrarClick);
        entrarBtn.addEventListener('click', handleEntrarClick);

        return () => {
            cadastrarBtn.removeEventListener('click', handleCadastrarClick);
            entrarBtn.removeEventListener('click', handleEntrarClick);
        }
    }, []);

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
       const handleSave = () => {
        const objetoAdicionado = {
            email,
            senha,
            
        };
    }


    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value);
    }
    
    return (
        <>
            <NavBar/>
            <div className="container" id="container">
                <div className="form-container cadastrar-se">
                    <form>
                        <h1>Criar conta</h1>
                        <div className="social-icons">
                            <a href="./" className="icon">
                                <AiOutlineGooglePlus />
                            </a>
                            <a href="./" className="icon">
                                <CgFacebook />
                            </a>
                            <a href="./" className="icon">
                                <BiLogoLinkedin />
                            </a>
                        </div>
                        <div className="formulario">
                            <span>ou utilize seu email para se registrar</span>
                            <input type="text" placeholder="Nome Fantasia" />
                            <input type="number" placeholder="CNPJ" />
                            <input type="email" placeholder="E-mail Corporativo" />
                            <input type="email" placeholder="E-mail Pessoal" />
                            <input type="text" placeholder="Nome" />
                            <input type="text" placeholder="Sobrenome" />
                            <input type="password" placeholder="Senha" />
                            <input type="password" placeholder="Confirmar Senha" />
                        </div>
                        <button id="pagina">Cadastrar</button>
                    </form>
                </div>
                <div className="form-container entrar">
                    <form>
                        <h1>Entrar</h1>
                        <div className="social-icons">
                            <a href="./" className="icon">
                                <AiOutlineGooglePlus />
                            </a>
                            <a href="./" className="icon">
                                <CgFacebook />
                            </a>
                            <a href="./" className="icon">
                                <BiLogoLinkedin />
                            </a>
                        </div>
                        <span>ou utilize seu email e senha</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Senha" />
                        <a href="./">Esqueci minha senha!</a>
                        <button>Entrar</button>
                    </form>
                </div>
                <div className="alternar-container">
                    <div className="alternar">
                        <div className="alternar-painel alternar-esquerda">
                            <h1>Bem Vindo!</h1>
                            <p>Entre com seus dados pessoais para utilizar o site por completo</p>
                            <button className="esconder" id="entrar">Entrar</button>
                        </div>
                        <div className="alternar-painel alternar-direita">
                            <h1>Olá, Amigo!</h1>
                            <p>Cadastre-se com seus dados pessoais para utilizar o site por completo</p>
                            <button className="esconder" id="cadastrar-se">cadastrar-se</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container2">
                <div className="signup-section">
                    <header>Signup</header>

                    <div className="social-buttons">
                        <button><i className='bx bxl-google'></i> Use Google</button>
                        <button><i className='bx bxl-apple'></i> Use Apple</button>
                    </div>

                    <div className="separator">
                        <div className="line"></div>
                        <p>Or</p>
                        <div className="line"></div>
                    </div>

                    <form>
                       

                        <input value={email} type="email" placeholder="Email address" onChange={(e) => handleInputChange(e, setEmail)} required />

                        <input value={senha} type="password" placeholder="Password" onChange={(e) => handleInputChange(e, setSenha)} required />

                        <a href="./">Forget Password?</a>
                        <button type="submit" className="btn">Signup</button>
                    </form>

                </div>

                <div className="login-section">
                    <header>Login</header>

                    <div className="social-buttons">
                        <button><i className='bx bxl-google'></i> Use Google</button>
                        <button><i className='bx bxl-apple'></i> Use Apple</button>
                    </div>

                    <div className="separator">
                        <div className="line"></div>
                        <p>Or</p>
                        <div className="line"></div>
                    </div>

                    <form>
                        <input type="email" placeholder="Email address" required />
                        <input type="password" placeholder="Password" required />
                        <a href="./">Forget Password?</a>
                        <button type="submit" className="btn">Login</button>
                    </form>
                </div>
            </div>
        
        </>
    )
}

export default LoginCadastro;
