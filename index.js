import express from 'express';
import rotaCategoria from './rotas/rotaCategoria.js';
import rotaCliente from './rotas/rotaCliente.js';
import cors from 'cors';
import rotaFornecedor from './rotas/rotaFornecedor.js';
import rotaProduto from './rotas/rotaProduto.js';

const host = "0.0.0.0";
const porta = 4000;
//aplicação HTTP pronta, bastando parametrizá-la
const app = express();
app.use(cors({origin:"*"}));
//preparar a app para entender o formato JSON
app.use(cors({origin:'*'}));
app.use(express.json());
app.use('/categoria',rotaCategoria);
app.use('/cliente',rotaCliente);
app.use('/fornecedor',rotaFornecedor);
app.use('/produto',rotaProduto);

app.listen(porta,host, ()=>{
    console.log(`API do sistema em execução: ${host}:${porta}`);
});