CREATE DATABASE sistema;

USE sistema;

CREATE TABLE categoria(
    cat_nome VARCHAR(30) NOT NULL,
    cat_descricao VARCHAR(100) NOT NULL,
    cat_codigo INT NOT NULL,
    cat_cor VARCHAR(6),
    cat_tipo VARCHAR(20),
    cat_origem VARCHAR(30),
    CONSTRAINT pk_categoria PRIMARY KEY(cat_nome)
);

CREATE TABLE cliente(
    cli_cpf VARCHAR(15) NOT NULL,
    cli_nome VARCHAR(50) NOT NULL,
    cli_endereco VARCHAR(100) NOT NULL,
    cli_numero VARCHAR(12) NOT NULL,
    cli_bairro VARCHAR(20) NOT NULL,
    cli_cidade VARCHAR(30) NOT NULL,
    cli_uf VARCHAR(3) NOT NULL,
    cli_cep VARCHAR(10) NOT NULL,
    CONSTRAINT pk_cliente PRIMARY KEY(cli_cpf)
);

CREATE TABLE fornecedor(
    forn_cpf VARCHAR(15) NOT NULL,
    forn_nome VARCHAR(50) NOT NULL,
    forn_endereco VARCHAR(100) NOT NULL,
    forn_cidade VARCHAR(30) NOT NULL,
    prod_nome VARCHAR(50) NOT NULL,
    forn_quant INT NOT NULL DEFAULT 0,
    forn_frequencia VARCHAR(50) NOT NULL,
    CONSTRAINT pk_fornecedor PRIMARY KEY(forn_cpf),
    CONSTRAINT fk_produto FOREIGN KEY(prod_nome) REFERENCES produto(prod_nome)
);

CREATE TABLE produto(
    prod_nome VARCHAR(50) NOT NULL,
    cat_nome VARCHAR(30) NOT NULL,
    prod_preco DECIMAL(10,2) NOT NULL DEFAULT 0,
    prod_desc VARCHAR(100) NOT NULL,
    CONSTRAINT pk_produto PRIMARY KEY(prod_nome),
    CONSTRAINT fk_categoria FOREIGN KEY(cat_nome) REFERENCES categoria(cat_nome)
)