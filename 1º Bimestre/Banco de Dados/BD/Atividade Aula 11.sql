-- Atividade Aula 11

-- 1) Liste a quantidade de canções existem para cada gênero musical, 
--  agrupando a consulta por gênero e ordenando da maior quantidade para a menor.

SELECT `g`.`nome`, COUNT(`c`.`nome`) AS `quantidade`
FROM `generos` AS `g`
INNER JOIN `cancoes` AS `c`
ON `g`.`id` = `c`.`id_genero`
GROUP BY `g`.`nome`
ORDER BY `quantidade` DESC;

-- 2) Liste a quantidade de canções existentes para gênero musical, agrupando por gênero. 
-- 	Exiba apenas os genêros que tem mais de 10 canções.

SELECT `g`.`nome`, COUNT(`c`.`nome`) AS `quantidade`
FROM `generos` AS `g`
INNER JOIN `cancoes` AS `c`
ON `g`.`id` = `c`.`id_genero`
GROUP BY `g`.`nome`
HAVING `quantidade` >= 10;

-- 3) Utilizando as tabelas clientes e faturas, liste os países, a quantidade de clientes e 
-- 	a soma das faturas por país,ordenando do maior para o menor, limitando a consulta a 7 registros.

SELECT `c`.`pais`,
		COUNT(`c`.`pais`) AS `qtde_clientes`,
		SUM(`f`.`valor_total`) AS `total_fatura`
FROM `clientes` AS `c`
INNER JOIN `faturas` AS `f`
ON `c`.`id` = `f`.`id_cliente`
GROUP BY `c`.`pais`
ORDER BY `total_fatura` DESC
LIMIT 7;