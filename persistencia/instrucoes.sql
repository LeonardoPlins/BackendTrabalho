CREATE DATABASE sistema;

USE sistema;

CREATE TABLE categoria(
    cat_nome VARCHAR(30) NOT NULL,
    cat_descricao VARCHAR(100) NOT NULL,
    cat_codigo INT NOT NULL,
    cat_cor VARCHAR(6),
    cat_tipo VARCHAR(20) NOT NULL,
    cat_origem VARCHAR(30)
    CONSTRAINT pk_categoria PRIMARY KEY(cat_nome)
);