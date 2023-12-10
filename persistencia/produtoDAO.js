import conectar from './conexao.js';
import Produto from '../modelo/produto.js';
import Categoria from '../modelo/categoria.js';

export default class ProdutoDAO {
    async gravar(produto) {
        if (produto instanceof Produto) {
            const sql = `INSERT INTO produto(prod_nome, cat_nome, prod_preco, prod_desc)
                VALUES(?,?,?,?)`;
            const parametros = [produto.nome, produto.categoria.nome, produto.preco, produto.descricao];

            const conexao = await conectar();
            await conexao.execute(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async atualizar(produto) {
        if (produto instanceof Produto) {
            const sql = `UPDATE produto SET cat_nome = ?, prod_preco = ?,
                prod_desc = ? WHERE prod_nome = ?`;
            const parametros = [produto.categoria.nome, produto.preco, produto.descricao, produto.nome];

            const conexao = await conectar();
            await conexao.execute(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async excluir(produto) {
        if (produto instanceof Produto) {
            const sql = `DELETE FROM produto WHERE prod_nome = ?`;
            const parametros = [produto.nome];
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
        let listaProdutos = [];
        const sql = `SELECT * FROM produto WHERE prod_nome LIKE ?`;
        const parametros = ['%'+termo+'%'];
        const [registros, campos] = await conexao.execute(sql,parametros);
        for (const registro of registros){
            const categoria = new Categoria(registro.cat_nome,registro.cat_descricao,registro.cat_codigo,registro.cat_cor,registro.cat_tipo,registro.cat_origem);
            const produto = new Produto(registro.prod_nome, categoria,
                registro.prod_preco, registro.prod_desc);
            listaProdutos.push(produto);
        }
        return listaProdutos;
    }
}
