
CREATE VIEW `Discos Queen` AS
SELECT `albuns`.`titulo`,
		`artistas`.`nome`
FROM `albuns`
INNER JOIN `artistas`
ON `albuns`.`id_artista` = `artistas`.`id`
HAVING `artistas`.`nome` = 'queen';

SELECT * FROM `Discos Queen`; 
 -- -----------------------------------------------------------

CREATE VIEW `Discos SR` AS
SELECT `albuns`.`titulo`,
		`artistas`.`nome`
FROM `albuns`
INNER JOIN `artistas`
ON `albuns`.`id_artista` = `artistas`.`id`
HAVING `artistas`.`nome` = 'Simply Red';

SELECT * FROM `Discos SR`;
 -- ----------------------------------------------------------

CREATE VIEW `musicas Overdose` AS
SELECT `itens_da_faturas`.`id_fatura`,
       `cancoes`.`nome`
FROM `itens_da_faturas`
INNER JOIN `cancoes` 
ON `itens_da_faturas`.`id_cancao` = `cancoes`.`id`
HAVING `cancoes`.`nome` = 'Overdose';

SELECT * FROM `musicas Overdose`;
-- ---------------------------------------------------------
 
CREATE VIEW `FATURAS_NACIONAIS` AS
SELECT  `faturas`.`id` AS `id_Ftaura`, 
		`faturas`.`data_fatura`, 
        `clientes`.`id` AS `id_Cliente`, 
        `clientes`.`nome`, 
        `clientes`.`sobrenome`, 
        `faturas`.`valor_total`
FROM `faturas`
INNER JOIN `clientes` 
ON `faturas`.`id_cliente` = `clientes`.`id`
WHERE `faturas`.`pais_cobranca` = 'Argentina';

SELECT * FROM `FATURAS_NACIONAIS`;
-- ---------------------------------------------------------
-- Crie uma view chamada LATINOS com informações sobre os artistas com seus álbuns e músicas. 
-- A view deve ter as seguintes colunas: nome do artista, título do álbum, nome da música e 
-- deve incluir apenas as músicas do gênero 'latino'. Faça uma seleção na visualização LATINOS 
-- ordenada por nome de artista e música. Qual é o nome da segunda música que aparece no resultado?

CREATE VIEW `LATINOS` AS
SELECT `artistas`.`nome` AS `Artista`,
	   `albuns`.`titulo` AS `Album`,
       `cancoes`.`nome` AS `Música`
FROM `artistas` INNER JOIN `albuns` ON `artistas`.`id` = `albuns`.`id_artista`
				INNER JOIN `cancoes` ON `albuns`.`id` = `cancoes`.`id_album`
				INNER JOIN `generos` ON `cancoes`.`id_genero` = `generos`.`id`       
WHERE `generos`.`nome` = 'latin'
ORDER BY `artistas`.`nome`, `cancoes`.`nome`; 

SELECT * FROM `LATINOS`;
