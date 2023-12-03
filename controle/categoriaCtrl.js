import Categoria from "../modelo/categoria.js";

export default class CategoriaCtrl{

    gravar(requisicao, resposta) {
        resposta.type('application/json');
        if (requisicao.method === 'POST' && requisicao.is('application/json')) {
            const dados = requisicao.body;
            const nome=requisicao.nome;
            const descrição = dados.descrição;
            const código = dados.código;
            const cor = dados.cor;
            const tipo = dados.tipo;
            const origem = dados.origem;

            if (descrição && código && cor && tipo && origem) {
                const categoria = new Categoria(nome, descrição,código,cor,tipo,origem);
                categoria.gravar().then(() => {
                    resposta.status(200).json({
                        "status": true,
                        "nomeGerado": categoria.nome,
                        "mensagem": "Categoria incluída com sucesso!"
                    });
                })
                    .catch((erro) => {
                        resposta.status(500).json({
                            "status": false,
                            "mensagem": "Erro ao registrar a categoria:" + erro.message
                        });
                    });
            }
            else {
                resposta.status(400).json({
                    "status": false,
                    "mensagem": "Por favor, informe a descrição da categoria!"
                });
            }
        }
        else {
            resposta.status(400).json({
                "status": false,
                "mensagem": "Por favor, utilize o método POST para cadastrar uma categoria!"
            });
        }
    }

    atualizar(requisicao, resposta) {
        resposta.type('application/json');
        if ((requisicao.method === 'PUT' || requisicao.method === 'PATCH') && requisicao.is('application/json')) {
            const dados = requisicao.body;
            const nome=requisicao.nome;
            const descrição = dados.descrição;
            const código = dados.código;
            const cor = dados.cor;
            const tipo = dados.tipo;
            const origem = dados.origem;
            if (nome && descrição && código && cor && tipo && origem) {
                const categoria = new Categoria(nome, descrição,código,cor,tipo,origem);
                //resolver a promise
                categoria.atualizar().then(() => {
                    resposta.status(200).json({
                        "status": true,
                        "mensagem": "Categoria atualizada com sucesso!"
                    });
                })
                    .catch((erro) => {
                        resposta.status(500).json({
                            "status": false,
                            "mensagem": "Erro ao atualizar a categoria:" + erro.message
                        });
                    });
            }
            else {
                resposta.status(400).json({
                    "status": false,
                    "mensagem": "Por favor, informe o código e a descrição da categoria!"
                });
            }
        }
        else {
            resposta.status(400).json({
                "status": false,
                "mensagem": "Por favor, utilize os métodos PUT ou PATCH para atualizar uma categoria!"
            });
        }
    }

    excluir(requisicao, resposta) {
        resposta.type('application/json');
        if (requisicao.method === 'DELETE' && requisicao.is('application/json')) {
            const dados = requisicao.body;
            const nome = dados.nome;
            if (nome) {
                const categoria = new Categoria(nome);
                //resolver a promise
                categoria.excluir().then(() => {
                    resposta.status(200).json({
                        "status": true,
                        "mensagem": "Categoria excluída com sucesso!"
                    });
                })
                    .catch((erro) => {
                        resposta.status(500).json({
                            "status": false,
                            "mensagem": "Erro ao excluir a categoria:" + erro.message
                        });
                    });
            }
            else {
                resposta.status(400).json({
                    "status": false,
                    "mensagem": "Por favor, informe o código da categoria!"
                });
            }
        }
        else {
            resposta.status(400).json({
                "status": false,
                "mensagem": "Por favor, utilize o método DELETE para excluir uma categoria!"
            });
        }
    }

    consultar(requisicao, resposta) {
        resposta.type('application/json');
        //express, por meio do controle de rotas, será
        //preparado para esperar um termo de busca
        let termo = requisicao.params.termo;
        if (!termo){
            termo = "";
        }
        if (requisicao.method === "GET"){
            const categoria = new Categoria();
            categoria.consultar(termo).then((listaCategorias)=>{
                resposta.json(
                    {
                        status:true,
                        listaCategorias
                    });
            })
            .catch((erro)=>{
                resposta.json(
                    {
                        status:false,
                        mensagem:"Não foi possível obter as categorias: " + erro.message
                    }
                );
            });
        }
        else 
        {
            resposta.status(400).json({
                "status": false,
                "mensagem": "Por favor, utilize o método GET para consultar categorias!"
            });
        }
    }
}