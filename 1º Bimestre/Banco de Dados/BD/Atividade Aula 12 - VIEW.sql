
-- 1 - Quantos registros foram retornados em cada consulta?
-- A) Selecione os nomes dos artistas (tabela artistas) que tem albuns, e o nome de
-- seus albuns (tabelas albuns) ordenado por id do artista (Order by). [Inner]
-- RESPOSTA: 347 registros

CREATE VIEW `lista_artistas` AS
SELECT `artistas`.`nome` AS `nomes`,
	`albuns`.`titulo` AS `albuns`
FROM `artistas`
INNER JOIN `albuns` 
ON `artistas`.`id` = `albuns`.`id_artista`
ORDER BY `albuns`.`id_artista`;

SELECT * FROM `lista_artistas`;
-- --------------------------------------------------------------------------------------

-- B) Agora selecione os nomes dos artistas (tabela artistas) que tem, e que não
-- tem albuns, e o nome de seus albuns quando houver (tabelas albuns) ordenado por id
-- do artista (Order by). [left]
-- RESPOSTA 418

CREATE VIEW `artistas_albuns` AS
SELECT `artistas`.`nome` AS `nomes`,
	`albuns`.`titulo` AS `albuns`
FROM `artistas`
LEFT JOIN `albuns` 
ON `artistas`.`id` = `albuns`.`id_artista`
ORDER BY `albuns`.`id_artista`;

SELECT * FROM `artistas_albuns`;
-- --------------------------------------------------------------------------------------

-- 2 - Quantos registros foram retornados em cada consulta?
-- A) Selecione o id e o nome dos cliente (clientes) e o valor suas faturas (faturas) [inner].
-- RESPOSTA: 350 registros

CREATE VIEW `Faturas_Clientes` AS
SELECT `clientes`.`id`,
		`clientes`.`nome`,
        `faturas`.`valor_total`
FROM `clientes`
INNER JOIN `faturas`
ON `clientes`.`id` = `faturas`.`id_cliente`;

SELECT * FROM `Faturas_Clientes`;
-- -------------------------------------------------------------------------------------

-- B) Agora selecione o id e o nome dos cliente (clientes) e o valor suas faturas
-- (faturas). E selecione também as faturas que não tem clientes. [right].
-- RESPOSTA: 412 Registros

CREATE VIEW `Faturas_Right` AS
SELECT `clientes`.`id`,
		`clientes`.`nome`,
        `faturas`.`valor_total`
FROM `clientes`
RIGHT JOIN `faturas`
ON `clientes`.`id` = `faturas`.`id_cliente`;

SELECT * FROM `Faturas_Right`;
-- --------------------------------------------------------------------------------------------

-- 3 - Quantos registros foram retornados em cada consulta?

-- A) Selecione o nome da canção (cancoes) e o tipo e arquivo delas [inner].
-- RESPOSTA: 850 Registros 
CREATE VIEW `nome_cancao` AS
SELECT `cancoes`.`nome` AS `nome_musica`,
		`tipos_de_arquivo`.`nome` AS `tipo_arquivo`
FROM `cancoes`
INNER JOIN `tipos_de_arquivo`
ON `cancoes`.`id_tipo_de_arquivo` = `tipos_de_arquivo`.`id`;

SELECT * FROM `nome_cancao`;
-- ----------------------------------------------------------------------------------------------

-- B) Agora selecione o nome da canção (cancoes) e o tipo e arquivo delas. E
-- selecione também os tipos de arquivo que não tem musicas. [right].
-- RESPOSTA: 853 Registros

CREATE VIEW `nome_cancao_right` AS
SELECT `cancoes`.`nome` AS `nome_musica`,
		`tipos_de_arquivo`.`nome` AS `tipo_arquivo`
FROM `cancoes`
RIGHT JOIN `tipos_de_arquivo`
ON `cancoes`.`id_tipo_de_arquivo` = `tipos_de_arquivo`.`id`;

SELECT * FROM `nome_cancao_right`;
-- -----------------------------------------------------------------------------------------

-- C) Agora selecione o nome da canção (cancoes) e o tipo e arquivo delas. E
-- selecione também as musicas que não tem tipo de arquivo. [left].
-- RESPOSTA: 3503 Registros

CREATE VIEW `nome_cancao_left` AS
SELECT `cancoes`.`nome` AS `nome_musica`,
		`tipos_de_arquivo`.`nome` AS `tipo_arquivo`
FROM `cancoes`
LEFT JOIN `tipos_de_arquivo`
ON `cancoes`.`id_tipo_de_arquivo` = `tipos_de_arquivo`.`id`;

SELECT * FROM `nome_cancao_left`;
-- -----------------------------------------------------------------------------------------------

-- Crie Views para as seguintes consultas:

-- Consultar todas as canções;

CREATE VIEW `todas_cancoes` AS
SELECT `cancoes`.`nome` FROM `cancoes`;
		
SELECT * FROM `todas_cancoes`;
-- ------------------------------------------------------------------------------------------------

-- Consultar todas as faturas com valor maior que 5.
CREATE VIEW `faturas>5` AS
SELECT * FROM `faturas`
WHERE `valor_total` > 5;

SELECT * FROM `faturas>5`; 
-- -----------------------------------------------------------------------------------------------

-- Consultar todos artistas cujo o nome começa com a letra B.
CREATE VIEW `artistascomb` AS
SELECT * FROM `db_musimundos2`.`artistas`
WHERE `nome` LIKE 'B%';

SELECT * FROM `artistascomb`;

