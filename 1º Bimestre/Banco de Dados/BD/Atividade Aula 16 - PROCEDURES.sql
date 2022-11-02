-- Utilizando a base de dados musimundos_v2, na tabela faturas crie as procedures:

-- 1) Crie uma procedure que selecione o valor da fatura com o valor mais baixo.

DELIMITER $$
CREATE PROCEDURE `ValorFaturaMenor`(IN `id_fatura` INT)
BEGIN
SELECT MIN (`valor_total`) 
FROM `faturas`;
END $$
DELIMITER ; 

-- 2) Crie uma procedure que retorna a quantidade de faturas que tem o país de cobrança como “Canada”.

DELIMITER $$
CREATE PROCEDURE `QtdeCanada`()
BEGIN
SELECT COUNT (`id`) 
FROM `faturas` 
WHERE `pais_cobranca` = "Canadá";
END $$
DELIMITER ; 

-- 3) Uma procedure que retorna o valor somado de todas as faturas.

DELIMITER $$
CREATE PROCEDURE `FaturasSomadas`()
BEGIN
SELECT SUM(`valor_total`) 
FROM `faturas`;
END $$
DELIMITER ; 

-- 4) Uma procedure que retorna o valor médio de todas as faturas.

DELIMITER $$
CREATE PROCEDURE `ValorFaturaMedia`()
BEGIN
SELECT AVG(`valor_total`) 
FROM `faturas`;
END $$
DELIMITER ; 

-- ===========================================================================================

-- Utilizando a base de dados musimundos_v2, na tabela cancoes crie as procedures:

-- 1) Crie uma procedure que retorna o tamanho em bytes e a duração de uma canção pelo seu id.

DELIMITER $$
CREATE PROCEDURE `TamanhoByte`(IN `id_cancao` SMALLINT)
BEGIN
SELECT `bytes`, `duracao_milisegundos` 
FROM `cancoes` 
WHERE `id` = `id_cancao`;
END $$
DELIMITER ; 

CALL `TamanhoByte`(37);

-- 2) Crie uma procedure que retorna o preço unitário uma canção pelo seu id.
DELIMITER $$
CREATE PROCEDURE `ValorCancao`(IN `id_cancao` SMALLINT)
BEGIN
SELECT `preco_unitario` 
FROM `cancoes` 
WHERE `id` = `id_cancao`;
END $$
DELIMITER ; 

CALL `ValorCancao` (37);

-- 3) Crie uma procedure que retorna o id da canção, o nome da canção e o tipo de arquivo(table tipos_de_arquivo) desta canção 
--    á partir de um id da canção informado.
DELIMITER $$
CREATE PROCEDURE `IdNomeTipo`(IN `id_cancao` SMALLINT)
BEGIN
SELECT `cancoes`.`id`, `cancoes`.`nome` AS `NomeCancao`, `tipos_de_arquivo`.`nome` AS `TipoArquivo` 
FROM `cancoes`
INNER JOIN `tipos_de_arquivo`
ON `cancoes`.`id_tipo_de_arquivo` = `tipos_de_arquivo`.`id`
WHERE `cancoes`.`id` = `id_cancao`;
END $$
DELIMITER ; 

CALL `IdNomeTipo` (37);

-- ============================================================================================================================
-- Utilizando a base de dados musimundos_v2, na tabela clientes crie as procedures:

-- 1) Crie uma procedure que retorna o nome e sobrenome concatenados e também o email de todos os clientes.
DELIMITER $$
CREATE PROCEDURE `NomeSobrenomeEmail`()
BEGIN
SELECT CONCAT(`clientes`.`nome`,' ', `clientes`.`sobrenome`), `clientes`.`email` 
FROM `clientes`;
END $$
DELIMITER ;

CALL `NomeSobrenomeEmail`;

-- 2) Crie uma procedure que retorna o nome completo (nome e sobrenome concatenados)  e também o endereço completo (endereço, 
-- cidade, estado e país) de um cliente pelo id informado.
DELIMITER $$
CREATE PROCEDURE `NomeEndereco`(IN `id_cliente` SMALLINT)
BEGIN
SELECT CONCAT(`clientes`.`nome`,' ', `clientes`.`sobrenome`) AS `Cliente`, CONCAT(`clientes`.`endereco`, ' ', `clientes`.`cidade`, ' ', `clientes`.`estado`, ' ', `clientes`.`pais`) AS `Endereço`
FROM `clientes`
WHERE `clientes`.`id` = `id_cliente`;
END $$
DELIMITER ;

CALL `NomeEndereco`(37);

-- 3) Crie uma procedure que retorna o nome do cliente e o valor total de cada uma das suas faturas pelo id do cliente informado.
DELIMITER $$
CREATE PROCEDURE `ClienteValorFatura`(IN `id_fatura` SMALLINT)
BEGIN
SELECT `clientes`.`nome`, `faturas`.`valor_total` 
FROM `clientes`
INNER JOIN `faturas`
ON `clientes`.`id` = `faturas`.`id_cliente` 
WHERE `clientes`.`id` = `id_fatura`;
END $$
DELIMITER ; 

CALL `ClienteValorFatura` (37);

