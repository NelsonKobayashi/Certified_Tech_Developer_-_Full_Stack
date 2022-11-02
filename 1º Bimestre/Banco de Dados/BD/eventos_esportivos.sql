CREATE SCHEMA `eventos_esportivos`;

CREATE TABLE `eventos_esportivos`.`eventos`(
	`evento_id` INT NOT NULL AUTO_INCREMENT,
    `evento_nome` VARCHAR(150) NOT NULL,
    PRIMARY KEY (`evento_id`)
);
    
CREATE TABLE `eventos_esportivos`.`competidores`(
	`competidor_id` INT NOT NULL AUTO_INCREMENT,
    `competidor_nome` VARCHAR(150) NOT NULL,
    PRIMARY KEY (`competidor_id`)
);
    
CREATE TABLE `eventos_esportivos`.`evento_competidores`(
	`evento_competidor_id` INT NOT NULL AUTO_INCREMENT,
    `evento_id` INT NOT NULL,
    `competidor_id` INT NOT NULL,
    PRIMARY KEY (`evento_competidor_id`),
    CONSTRAINT `FK_evento_id`
		FOREIGN KEY (`evento_id`)
        REFERENCES `eventos_esportivos`.`eventos` (`evento_id`),
	CONSTRAINT `FK_competidor_id`
		FOREIGN KEY (`competidor_id`)
        REFERENCES `eventos_esportivos`.`competidores` (`competidor_id`)
);
    


