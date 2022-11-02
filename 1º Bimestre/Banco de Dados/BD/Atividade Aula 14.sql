-- Atividade em Aula - 13-07-21
-- Aula 14
-- 2) tabela cancoes:
SHOW INDEX FROM `cancoes`;

EXPLAIN SELECT `nome` FROM `cancoes` WHERE `nome` = "Hero";
-- RESUTADO = 3.503 rows.

CREATE INDEX `i_cancoes_nome` ON `cancoes` (`nome`);

EXPLAIN SELECT `nome` FROM `cancoes` WHERE `nome` = "Hero";
-- RESULTADO = 1 row.

DROP INDEX `i_cancoes_nome` ON `cancoes`;

-- 2)tabela albuns
SHOW INDEX FROM `albuns`;

EXPLAIN SELECT `titulo` FROM `albuns` WHERE `titulo` = "Na Pista";
-- RESUTADO = 3.503 rows.

CREATE INDEX `i_albuns_titulos` ON `cancoes` (`titulo`);

EXPLAIN SELECT `titulo` FROM `albuns` WHERE `titulo` = "Na Pista";
-- RESULTADO = 1 row.

DROP INDEX `i_albuns_titulos` ON `albuns`;
