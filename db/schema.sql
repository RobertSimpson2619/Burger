CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers{
	id int AUTO_INCREMENT,
	burger_name varchar(50) NOT NULL,
	devoured boolean NOT NULL,
	date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(ID)
};

INSERT INTO burgers(burger_name,devoured)
VALUES("Bacon Cheeseburger",false)


SELECT * from burgers;