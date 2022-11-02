CREATE SCHEMA `loja`;

CREATE TABLE `loja`.`clientes`(
	`cliente_id` INT NOT NULL AUTO_INCREMENT,	
    `cliente_nome` VARCHAR (150),
    PRIMARY KEY (`cliente_id`)clientes
);

CREATE TABLE `loja`.`cartoes`(
	`cartao_id` INT NOT NULL AUTO_INCREMENT,
    `cartao_numero` CHAR(16) NOT NULL,
    `cartao_vencimento` DATE NOT NULL,
    `cartao_codigo` CHAR(3) NOT NULL,
    `cliente_id` INT NOT NULL,
    PRIMARY KEY (`cartao_id`),
    CONSTRAINT `fk_cliente`
		FOREIGN KEY (`cliente_id`)
        REFERENCES `loja`.`clientes` (`cliente_id`)
    );
    
    