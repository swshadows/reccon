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
	("Zumbi"),
	("Nova Cidade"),
	("Jorge Teixeira"),
	("Centro"),
	("Japiim"),
	("Cidade de Deus"),
	("Valparaiso"),
	("Flores"),
	("Colonia Antonio Aleixo");