-- DROP DATABASE IF EXISTS burgers_db;

-- CREATE DATABASE burgers_db;

-- USE burgers_db;

-- CREATE TABLE burgers (
-- id INT NOT NULL AUTO_INCREMENT,
-- burger_name VARCHAR(255) NULL,
-- devoured boolean DEFAULT NULL,
-- PRIMARY KEY (id)
-- );

USE `handl6cwj9q0mzir`;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(255) NULL,
devoured boolean DEFAULT NULL,
PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured) 
VALUES ("Mexi", true);

INSERT INTO burgers (burger_name, devoured) 
VALUES ("BBQ", true);

INSERT INTO burgers (burger_name, devoured) 
VALUES ("Apple Bacon", false);

SELECT * FROM burgers;