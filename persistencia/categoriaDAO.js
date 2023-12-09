import Categoria from "../modelo/categoria.js";
import conectar from "./conexao.js";

export default class CategoriaDAO{
    async gravar(categoria){
        if(categoria instanceof Categoria){
            const sql = "INSERT INTO categoria(cat_nome,cat_descricao,cat_codigo,cat_cor,cat_tipo,cat_origem) VALUES(?,?,?,?,?,?)"; 
            const parametros = [categoria.nome, categoria.descricao, categoria.código,categoria.cor,categoria.tipo,categoria.origem];
            const conexao = await conectar(); //retorna uma conexão
            const retorno = await conexao.execute(sql,parametros); //prepara a sql e depois executa
            categoria.nome = retorno;
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async atualizar(categoria){
        if(categoria instanceof Categoria){
            const sql = "UPDATE categoria SET cat_descricao=?,cat_codigo=?,cat_cor=?,cat_tipo=?,cat_origem=? WHERE cat_nome=?"; 
            const parametros = [categoria.descricao, categoria.código,categoria.cor,categoria.tipo,categoria.origem,categoria.nome];
            const conexao = await conectar(); //retorna uma conexão
            const retorno = await conexao.execute(sql,parametros); //prepara a sql e depois executa
            categoria.nome = retorno;
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async excluir(categoria){
        if(categoria instanceof Categoria){
            const sql="DELETE FROM categoria WHERE cat_nome=?";
            const parametros = [categoria.nome];
            const conexao = await conectar();
            await conexao.execute(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async consultar(parametroConsulta){
        let sql='';
        let parametros=[];
            if (!parametroConsulta){
                parametroConsulta = '';
            }
            sql = "SELECT * FROM categoria WHERE cat_nome like ?";
            parametros = ['%'+parametroConsulta+'%'];
        const conexao = await conectar();
        const [registros, campos] = await conexao.execute(sql,parametros);
        let listaCategorias = [];
        for (const registro of registros){
            const categoria = new Categoria(registro.cat_nome,registro.cat_descricao,registro.cat_codigo,registro.cat_cor,registro.cat_tipo,registro.cat_origem);
            listaCategorias.push(categoria);
        }
        return listaCategorias;
    }
}