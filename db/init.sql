DROP DATABASE IF EXISTS inovatec2022;
CREATE DATABASE inovatec2022;
USE inovatec2022;

CREATE TABLE users(
	id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
	email varchar(100) NOT NULL,
	password varchar(255) NOT NULL
);

-- SELECT * FROM users;