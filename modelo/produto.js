import ProdutoDAO from "../persistencia/produtoDAO.js";

export default class Produto {
    #nome;
    #categoria;
    #preco;
    #descricao;

    constructor(nome = '', categoria = {}, preco = 0, descricao = '') {
        this.#nome = nome;
        this.#categoria = categoria;
        this.#preco = preco;
        this.#descricao = descricao;
    }

    get nome() {
        return this.#nome;
    }
    set nome(novoNome) {
        this.#nome = novoNome;
    }

    get categoria() {
        return this.#categoria;
    }
    set categoria(novaCategoria) {
        this.#categoria = novaCategoria;
    }

    get preco() {
        return this.#preco;
    }
    set preco(novoPreco) {
        this.#preco = novoPreco;
    }

    get descricao() {
        return this.#descricao;
    }
    set descricao(novaDescricao) {
        this.#descricao = novaDescricao;
    }

    toJSON() {
        return {
            nome: this.#nome,
            categoria: this.#categoria.toJSON(),
            preco: this.#preco,
            descricao: this.#descricao,
        };
    }

    async gravar() {
        const prodDAO = new ProdutoDAO();
        await prodDAO.gravar(this);
    }

    async excluir() {
        const prodDAO = new ProdutoDAO();
        await prodDAO.excluir(this);
    }

    async alterar() {
        const prodDAO = new ProdutoDAO();
        await prodDAO.atualizar(this);
    }

    async consultar(termo) {
        const prodDAO = new ProdutoDAO();
        return await prodDAO.consultar(termo);
    }
}
