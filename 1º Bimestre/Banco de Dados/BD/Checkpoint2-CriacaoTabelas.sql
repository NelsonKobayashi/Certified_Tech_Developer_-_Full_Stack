-- Criando o Banco de Dados Irango.

CREATE SCHEMA `bd_irango`;

-- Criando primeiro as tabelas que não possuem Chave Estrangeira.
-- Criando a tabela pratos.
CREATE TABLE `bd_irango`.`pratos` (
  `prato_id` MEDIUMINT NOT NULL AUTO_INCREMENT,
  `prato_nome` VARCHAR(70),
  `prato_foto` varchar(150),
  `prato_descricao` TEXT,
  `prato_preco` DECIMAL(5,2),
  `prato_categoria`VARCHAR (20),
  PRIMARY KEY (`prato_id`)
  );
  
-- Criando a tabela clientes. 
CREATE TABLE `bd_irango`.`clientes` (
	`cliente_id` MEDIUMINT NOT NULL AUTO_INCREMENT,
    `cliente_nome` VARCHAR (150),
    `cliente_cpf` BIGINT,
    `cliente_rua` VARCHAR (150),
    `cliente_numero` TINYINT,
    `cliente_bairro` VARCHAR (50),
    `cliente_cidade` VARCHAR (50),
    `cliente_estado` VARCHAR (2),
    `cliente_telefone` INT,
	`cliente_cnpj` BIGINT,
    PRIMARY KEY (`cliente_id`)
);

-- Criando a tabela restaurantes.
CREATE TABLE `bd_irango`.`restaurantes` (
	`restaurante_id` MEDIUMINT NOT NULL AUTO_INCREMENT,
    `restaurante_nome` VARCHAR (150),
    `restaurante_cnpj` BIGINT,
    `restaurante_endereco` VARCHAR (150),
    `restaurante_telefone` INT,
    `restaurante_classificacao` TINYINT,
    `restaurante_cardapio` TEXT,
    `restaurante_horario` TIME,
    `restaurante_fotos` VARCHAR (150),
    `restaurante_categoria` VARCHAR (150),
    PRIMARY KEY (`restaurante_id`)
);

-- criando a tabela pedidos.
CREATE TABLE `bd_irango`.`pedidos` (
	`pedido_id` BIGINT NOT NULL AUTO_INCREMENT,
    `cliente_id` MEDIUMINT,
    `restaurante_id` MEDIUMINT,
    `prato_id` MEDIUMINT,
    PRIMARY KEY (`pedido_id`),
    INDEX `cliente_idx` (`cliente_id` ASC) VISIBLE,
    INDEX `restaurante_idx` (`restaurante_id` ASC) VISIBLE,
    INDEX `prato_idx` (`prato_id` ASC) VISIBLE,
    CONSTRAINT `cliente_id` FOREIGN KEY (`cliente_id`) REFERENCES `bd_irango`.`clientes`(`cliente_id`),
	CONSTRAINT `restaurante_id` FOREIGN KEY (`restaurante_id`) REFERENCES `bd_irango`.`restaurantes`(`restaurante_id`),
    CONSTRAINT `prato_id` FOREIGN KEY (`prato_id`) REFERENCES `bd_irango`.`pratos`(`prato_id`)
);
