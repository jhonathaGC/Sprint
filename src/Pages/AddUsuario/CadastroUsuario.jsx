import React from 'react';
import styles from './CadastroUsuarios.module.css'
function CadastroUsuarios() {
    return (
        <div className="container">
            <div className="conteudo">
                <h1>Cadastro de Usuários</h1>
                <form className="form" id="usuario-form">
                    <div className="conteudos">
                        <div className="left">
                            <label htmlFor="usuario">Usuário:</label>
                            <input className="input" type="text" id="usuario" name="usuario" />
    
                            <label htmlFor="email">Email:</label>
                            <input className="input" type="email" id="email" name="email" />
                        </div>
    
                        <div className="right">
                            <label htmlFor="funcao">Função:</label>
                            <input className="input" type="text" id="funcao" name="funcao" />
    
                            <label htmlFor="status">Status:</label>
                            <input className="input" type="text" id="status" name="status" /><br />
                        </div>
                    </div>
                    <div className="bnts">
                        <button className="btnCadUsuario" type="button" onClick={() => window.history.back()}>Cancelar</button>
                        <input className="btnCadUsuario" type="submit" value="Cadastrar" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CadastroUsuarios;
