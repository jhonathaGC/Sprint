import React from "react";
import styles from './Usuario.module.css'; // Importe seus estilos CSS corretamente

function Usuario() {
    return (
        <div className={styles.sec}> {/* Use a classe de estilo correta */}
            <div className={styles["container-usuarios"]}> {/* Use a classe de estilo correta */}
                <table className={styles["tabela-usuario"]}> {/* Use a classe de estilo correta */}
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
