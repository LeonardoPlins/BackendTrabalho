import { Router } from "express";
import ProdutoCtrl from "../controle/produtoCtrl.js";

//rotas é o mapeamento das requisições da web para um determinado
//endpoint da aplicação

const prodCtrl = new ProdutoCtrl();
const rotaProduto = new Router();

rotaProduto
.get('/',prodCtrl.consultar)
.get('/:termo', prodCtrl.consultar)
.post('/',prodCtrl.gravar)
.patch('/',prodCtrl.atualizar)
.put('/',prodCtrl.atualizar)
.delete('/',prodCtrl.excluir);

export default rotaProduto;