
SELECT 
	`cancoes`.`nome` AS `CancaoNome`,
    `tipos_de_arquivo`.`nome` AS `TipoArquivo`
FROM `cancoes` INNER JOIN `tipos_de_arquivo`
ON `cancoes`.`id_tipo_de_arquivo` = 
`tipos_de_arquivo`.`id`;
-- ------------------------------------------------------------------------------------------------

SELECT `generos`.`nome` AS `Genero`,
		`cancoes`.`nome` AS `Cancao`,
        `tipos_de_arquivo`.`nome` AS `Tipo`
FROM `generos`
INNER JOIN `cancoes`.`id_genero` ON `generos`.`id` 
INNER JOIN `tipos_de_arquivo`.`id` ON `cancoes`.`id_tipo_de_arquivo`
