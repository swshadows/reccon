DROP DATABASE IF EXISTS reccon;
CREATE DATABASE reccon;
USE reccon;

CREATE TABLE addresses(
	id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name varchar(50) NOT NULL
);

INSERT INTO addresses
	(name)
VALUES
	("Armando Mendes"),
	("Alvorada"),
	("Centro"),
	("Cidade de Deus"),
	("Colonia Antonio Aleixo"),
	("Compensa"),
	("Coroado"),
	("Educandos"),
	("Flores"),
	("Japiim"),
	("Jorge Teixeira"),
	("Lago Azul"),
	("Nova Cidade"),
	("Novo Aleixo"),
	("Novo Israel"),
	("Planalto"),
	("Ponta Negra"),
	("São Jorge"),
	("Santa Etelvina"),
	("Santa Luzia"),
	("São Francisco"),
	("Valparaiso"),
	("Zumbi");