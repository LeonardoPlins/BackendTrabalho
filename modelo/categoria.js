import CategoriaDAO from "../persistencia/categoriaDAO.js";

export default class Categoria{
    #nome;
    #descrição;
    #código;
    #cor;
    #tipo;
    #origem;

    constructor(nome='',descrição='',código=0,cor='',tipo='',origem=''){
        this.#nome=nome;
        this.#descrição=descrição;
        this.#código=código;
        this.#cor=cor
        this.#tipo=tipo
        this.#origem=origem;
    }

    get nome(){
        return this.#nome;
    }

    set nome(novoNome){
        this.#nome=novoNome;
    }

    get descrição(){
        return this.#descrição;
    }
    
    set descrição(novaDescrição){
        this.#descrição=novaDescrição;
    }
    
    get código(){
        return this.#código;
    }

    set código(novoCódigo){
        this.#código=novoCódigo;
    }
    
    get cor(){
        return this.#cor;
    }

    set cor(novaCor){
        this.#cor=novaCor;
    }

    get tipo(){
        return this.#tipo;
    }

    set tipo(novoTipo){
        this.#tipo=novoTipo;
    }

    get origem(){
        return this.#origem;
    }

    set origem(novaOrigem){
        this.#origem=novaOrigem;
    }

    toJSON(){
        return{
            nome:this.#nome,
            descrição:this.#descrição,
            código:this.#código,
            cor:this.#cor,
            tipo:this.#tipo,
            origem:this.#origem
        }
    }

    async gravar(){
        const catDAO = new CategoriaDAO();
        await catDAO.gravar(this);
    }

    async excluir(){
        const catDAO = new CategoriaDAO();
        await catDAO.excluir(this);
    }

    async atualizar(){
        const catDAO = new CategoriaDAO();
        await catDAO.atualizar(this);
    }

    async consultar(parametro){
        const catDAO = new CategoriaDAO();
        return await catDAO.consultar(parametro);
    }
}