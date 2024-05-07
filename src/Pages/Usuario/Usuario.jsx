import React from "react";
import { Link } from "react-router-dom"; // Asumiendo que estás usando React Router
import styles from './Usuario.module.css'; // Importa tus estilos CSS correctamente
import adicionarUsuarioImg from '../../Assets/adicionar-usuario.png'; // Importa la imagen correctamente



function Usuario() {
    return (
        <div className={styles.sec}>
            <div className={styles.header}>
                <Link to="./cadastroUsuario.jsx" className={styles.logo}>
                    Usuários
                    <img src={adicionarUsuarioImg} alt="adicionar novo usuario" />
                </Link>
                <div className={styles["header-right"]}>
                    <input type="search" />
                    <button >Pesquisar</button>
                </div>
            </div>
            <div className={styles["container-usuarios"]}>
                <table className={styles["tabela-usuario"]}>
                    <thead>
                        <tr>
                            <th>Nome de Usuário</th>
                            <th>Email</th>
                            <th>Função</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Raquel Guimarães</td>
                            <td>raquel.guimaraes@example.com</td>
                            <td>Admin</td>
                            <td>Ativo</td>
                        </tr>
                        <tr>
                            <td>Arthur Ciliberti</td>
                            <td>arthur.ciliberti@example.com</td>
                            <td>Admin</td>
                            <td>Ativo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Usuario;
