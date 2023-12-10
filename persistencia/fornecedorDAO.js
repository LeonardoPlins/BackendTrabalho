import Produto from '../modelo/produto.js';
import Fornecedor from '../modelo/fornecedor.js';
import conectar from './conexao.js';

export default class FornecedorDAO {
    async gravar(fornecedor) {
        if (fornecedor instanceof Fornecedor) {
            const sql = `INSERT INTO fornecedor(forn_cpf, forn_nome, forn_endereco,
                forn_cidade, prod_nome, forn_quant, forn_frequencia)
                VALUES(?,?,?,?,?,?,?)`;
            const parametros = [fornecedor.cpf, fornecedor.nome, fornecedor.endereco,
            fornecedor.cidade, fornecedor.produto.nome, fornecedor.quantidade, fornecedor.frequencia];

            const conexao = await conectar();
            await conexao.execute(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async atualizar(fornecedor) {
        if (fornecedor instanceof Fornecedor) {
            const sql = `UPDATE fornecedor SET forn_nome = ?, forn_endereco = ?,
                forn_cidade = ?, prod_nome = ?, forn_quant = ?, forn_frequencia = ?
                WHERE forn_cpf = ?`;
            const parametros = [fornecedor.nome, fornecedor.endereco, fornecedor.cidade,
            fornecedor.produto.nome, fornecedor.quantidade, fornecedor.frequencia, fornecedor.cpf];

            const conexao = await conectar();
            await conexao.execute(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async excluir(fornecedor) {
        if (fornecedor instanceof Fornecedor) {
            const sql = `DELETE FROM fornecedor WHERE forn_cpf = ?`;
            const parametros = [fornecedor.cpf];
            const conexao = await conectar();
            await conexao.execute(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async consultar(termo) {
        if (!termo){
            termo="";
        }
        const conexao = await conectar();
        let listaFornecedores = [];
        const sql = `SELECT * FROM fornecedor WHERE forn_cpf LIKE ?`;
        const parametros = ['%'+termo+'%'];
        const [registros, campos] = await conexao.execute(sql,parametros);
        for (const registro of registros){
            const produto = new Produto(registro.prod_nome,registro.cat_nome,registro.prod_preco,registro.prod_desc);
            const fornecedor = new Fornecedor(registro.forn_cpf, registro.forn_nome,
                registro.forn_endereco, registro.forn_cidade, produto,
                registro.forn_quant, registro.forn_frequencia);
            listaFornecedores.push(fornecedor);
        }
        return listaFornecedores;
    }
}
