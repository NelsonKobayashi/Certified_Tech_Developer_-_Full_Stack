-- GRUPO 3
-- Grupo (Guilherme Procópio, André Ribeiro, Jennifer Mayumi Koga, Douglas Araujo, Nelson Kobayashi)

-- 1) Boas práticas
SELECT distinct `a`.`nome` as `NomeArtista`, count(`b`.`id`) as `Qtd_Albuns` -- DISTINCT -> bom evitar
FROM `artistas`  `a` -- Faltou o comando AS
INNER JOIN `albuns` `b` -- Faltou o comando AS
on `a`.`id` = `b`.`id_artista` 
group by `a`.`nome` -- GROUP BY -> bom evitar
order by `Qtd_Albuns` desc -- ORDER BY -> bom evitar
LIMIT 10; -- LIMIT -> bom evitar
-- ** Comandos SQL todos em maiúscula, de preferência!


-- 1) Ordem de processamento da query acima:
-- 1 FROM `artistas` AS `a`
-- 2 ON `a`.`id` = `b`.`id_artista`
-- 3 INNER JOIN `albuns` AS `b`
-- 4 GROUP BY `a`.`nome`
-- 5 SELECT 
-- 6 DISTINCT `a`.`nome` AS `NomeArtista`, count(`b`.`id`) AS `Qtd_Albuns`
-- 7 ORDER BY `Qtd_Albuns`
-- 8 LIMIT 10;
