-- criando uma procedure
DELIMITER $$
CREATE PROCEDURE `NomeCompositorCancoes`()
BEGIN 
SELECT `nome`,`compositor` FROM `cancoes`;
END $$
DELIMITER ;

-- utilizando a procedure criada
CALL `NomeCompositorCancoes`();

-- apagando a procedure
DROP PROCEDURE IF EXISTS `NomeCompositorCancoes`;


-- criando uma procedure com parãmetros
DELIMITER $$
CREATE PROCEDURE `NomeCompositorCancao`(IN `id_cancao` INT)
BEGIN
SELECT `nome`, `compositor` 
FROM `cancoes` 
WHERE `id` = `id_cancao`;
END $$
DELIMITER ; 

-- execuntado a procedure com o id_cancao entre parenteses
CALL `NomeCompositorCancao`(37);


