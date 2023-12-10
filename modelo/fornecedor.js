import FornecedorDAO from "../persistencia/fornecedorDAO.js";

export default class Fornecedor {
    #cpf;
    #nome;
    #endereco;
    #cidade;
    #produto;
    #quantidade;
    #frequencia;

    constructor(cpf = '', nome = '', endereco = '', cidade = '', produto = {}, quantidade = 0, frequencia = '') {
        this.#cpf = cpf;
        this.#nome = nome;
        this.#endereco = endereco;
        this.#cidade = cidade;
        this.#produto = produto;
        this.#quantidade = quantidade;
        this.#frequencia = frequencia;
    }

    get cpf() {
        return this.#cpf;
    }

    set cpf(novoCpf) {
        this.#cpf = novoCpf;
    }

    get nome() {
        return this.#nome;
    }

    set nome(novoNome) {
        this.#nome = novoNome;
    }

    get endereco() {
        return this.#endereco;
    }

    set endereco(novoEndereco) {
        this.#endereco = novoEndereco;
    }

    get cidade() {
        return this.#cidade;
    }

    set cidade(novaCidade) {
        this.#cidade = novaCidade;
    }

    get produto() {
        return this.#produto;
    }

    set produto(novoProduto) {
        this.#produto = novoProduto;
    }

    get quantidade() {
        return this.#quantidade;
    }

    set quantidade(novaQuantidade) {
        this.#quantidade = novaQuantidade;
    }

    get frequencia() {
        return this.#frequencia;
    }

    set frequencia(novaFrequencia) {
        this.#frequencia = novaFrequencia;
    }

    toJSON() {
        return {
            cpf: this.#cpf,
            nome: this.#nome,
            endereco: this.#endereco,
            cidade: this.#cidade,
            produto: this.#produto.toJSON(),
            quantidade: this.#quantidade,
            frequencia: this.#frequencia
        };
    }

    async gravar(){
        const fornDAO = new FornecedorDAO();
        await fornDAO.gravar(this);
    }

    async excluir(){
        const fornDAO = new FornecedorDAO();
        await fornDAO.excluir(this);
    }

    async atualizar(){
        const fornDAO = new FornecedorDAO();
        await fornDAO.atualizar(this);
    }

    async consultar(termo){
        const fornDAO = new FornecedorDAO();
        await fornDAO.consultar(termo);
    }
}
