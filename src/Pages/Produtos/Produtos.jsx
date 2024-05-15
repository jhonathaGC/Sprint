import React, { useEffect } from 'react';
import styles from './Produtos.module.css';

import IconPark from '../../Assets/icon-park-outline--add.svg';
import OioArrow from '../../Assets/oui--arrow-up.svg';
import Tabler from '../../Assets/tabler--file-export (1).svg';


function Produtos() {
  useEffect(() => {
    fillTable();
  }, []);

  function fillTable() {
    var products = [];

    var urlParams = new URLSearchParams(window.location.search);
    if (
      urlParams.has('id') &&
      urlParams.has('produto') &&
      urlParams.has('quantidade') &&
      urlParams.has('preco') &&
      urlParams.has('status')
    ) {
      var newProduct = {
        id: urlParams.get('id'),
        produto: urlParams.get('produto'),
        quantidade: urlParams.get('quantidade'),
        preco: urlParams.get('preco'),
        status: urlParams.get('status'),
      };

      products.push(newProduct);
    }

    var tableBody = document.getElementById('products-table');
    tableBody.innerHTML = '';

    products.forEach(function (product) {
      var row = (
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.produto}</td>
          <td>{product.quantidade}</td>
          <td>{product.preco}</td>
          <td>{product.status}</td>
          <td>
            <a href='../pages/alterarProduto.html'>
              <img
                src='../img/editar.png'
                alt='Editar'
                style={{ width: '20px', height: '20px' }}
              />
            </a>
          </td>
        </tr>
      );
      tableBody.appendChild(row);
    });
  }

  return (

    <>
      <div className={styles['header']}>
        <a href='#' className={styles.logo}>
          Produtos
          <img
            src={IconPark}
            alt='adicionar novo usuario'
          />
        </a>
        <div className={styles['header-right']}>
          <input type='search' />
          <button className={styles.pesquisar}>Pesquisar</button>
        </div>

        <div className={styles['container-usuarios']}>
          <h1>Todos seus produtos</h1>
          <br />
          <div id='quadrado' className={styles.quadrado}>
            <div className={styles.cabecalho} id='cabecalho'>
              <img
                src={OioArrow}
                alt=''
                className={styles.rotate}
              />
              <h3>Aperte aqui para configurar os status de estoque</h3>
            </div>
            <div id='campos' className={styles.campos}>
              <div className={styles['inputs-informations']}>
                <div>
                  <label htmlFor='alto'>
                    Quantidade de estoque considerado alto:
                  </label>
                  <input
                    type='text'
                    id='alto'
                    placeholder='Coloque um valor'
                    onClick={(event) => event.stopPropagation()}
                  />
                </div>
                <div>
                  <label htmlFor='medio'>
                    Quantidade de estoque considerado médio:
                  </label>
                  <input
                    type='text'
                    id='medio'
                    placeholder='Coloque um valor'
                    onClick={(event) => event.stopPropagation()}
                  />
                </div>
                <div>
                  <label htmlFor='falta'>
                    Quantidade de estoque considerado baixo:
                  </label>
                  <input
                    type='text'
                    id='falta'
                    placeholder='Coloque um valor'
                    onClick={(event) => event.stopPropagation()}
                  />
                </div>
              </div>
              <div className={styles.botaoCadStatus}>
                <button
                  className={styles.btnCadStatus}
                  onClick={(event) => event.stopPropagation()}
                >
                  Salvar
                </button>
              </div>
            </div>
          </div>
          <br />
          <br />

          <h4>Filtros de Status do seu Estoque</h4>
          <div className={styles.filtroStatus}>
            <div>
              <input type='radio' name='prioridade' /> Alto
            </div>
            <div>
              <input type='radio' name='prioridade' /> Médio
            </div>
            <div>
              <input type='radio' name='prioridade' /> Baixo
            </div>
          </div>

          <table className={styles['tabela-usuario']}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Preço Unitário</th>
                <th>Status Estoque</th>
                <th>Editar</th>
              </tr>
            </thead>
            <tbody id='products-table'>
              {/* Os dados da tabela serão preenchidos dinamicamente via JavaScript */}
            </tbody>
          </table>
          <br />
          <br />

          <button className={styles.exportarRelatorio}>
            <img src={Tabler} alt='' />
            Exportar Relatório
          </button>
        </div>
      </div>
    </>
  );
}

export default Produtos;
