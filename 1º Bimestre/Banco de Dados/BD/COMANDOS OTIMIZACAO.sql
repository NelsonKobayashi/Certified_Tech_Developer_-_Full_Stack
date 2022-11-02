SELECT HIGH_PRIORITY * FROM `cancoes`;

UPDATE LOW_PRIORITY `cancoes` 
SET `nome` = "Dogs Eat Dogs"
WHERE `nome` = "Dog Eat Dog";

SELECT BENCHMARK(10000000, (SELECT `compositor` 
							FROM `cancoes`
							WHERE `nome` = "Dogs Eat Dogs"
							LIMIT 1));
                     
SELECT BENCHMARK(10000000, (SELECT `compositor` 
							FROM `cancoes`
							WHERE `id` = 125
							LIMIT 1));
                     

