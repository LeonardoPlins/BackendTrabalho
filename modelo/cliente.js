import ClienteDAO from "../persistencia/clienteDAO";

export default class Cliente {
    #cpf;
    #nome;
    #endereco;
    #numero;
    #bairro;
    #cidade;
    #uf;
    #cep;

    constructor(cpf = '', nome = '', endereco = '', numero = '', bairro = '', cidade = '', uf = '', cep = '') {
        this.#cpf = cpf;
        this.#nome = nome;
        this.#endereco = endereco;
        this.#numero = numero;
        this.#bairro = bairro;
        this.#cidade = cidade;
        this.#uf = uf;
        this.#cep = cep;
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

    get numero() {
        return this.#numero;
    }

    set numero(novoNumero) {
        this.#numero = novoNumero;
    }

    get bairro() {
        return this.#bairro;
    }

    set bairro(novoBairro) {
        this.#bairro = novoBairro;
    }

    get cidade() {
        return this.#cidade;
    }

    set cidade(novaCidade) {
        this.#cidade = novaCidade;
    }

    get uf() {
        return this.#uf;
    }

    set uf(novoUf) {
        this.#uf = novoUf;
    }

    get cep() {
        return this.#cep;
    }

    set cep(novoCep) {
        this.#cep = novoCep;
    }

    toJSON() {
        return {
            cpf: this.#cpf,
            nome: this.#nome,
            endereco: this.#endereco,
            numero: this.#numero,
            bairro: this.#bairro,
            cidade: this.#cidade,
            uf: this.#uf,
            cep: this.#cep
        };
    }

    async gravar(){
        const cliDAO = new ClienteDAO();
        await cliDAO.gravar(this);
    }

    async excluir(){
        const cliDAO = new ClienteDAO();
        await cliDAO.excluir(this);
    }

    async atualizar(){
        const cliDAO = new ClienteDAO();
        await cliDAO.atualizar(this);
    }

    async consultar(parametro){
        const cliDAO = new ClienteDAO();
        await cliDAO.consultar(parametro);
    }
}
