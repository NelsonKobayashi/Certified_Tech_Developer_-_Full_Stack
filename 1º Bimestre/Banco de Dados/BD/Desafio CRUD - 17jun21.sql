CREATE SCHEMA `meusistema`;

CREATE TABLE `meusistema`.`usuarios` (
`usuario_id` INT NOT NULL AUTO_INCREMENT,
`usuario_nome` VARCHAR(150) NOT NULL,
`usuario_login` VARCHAR(20) NOT NULL,
`usuario_sesnha` VARCHAR(50) NOT NULL,
PRIMARY KEY (`usuario_id`)
);

INSERT INTO `meusistema`.`usuarios` (
`usuario_nome`,`usuario_login`,`usuario_sesnha`)
VALUES
('Guilherme Santos','guilherme','gui123'),
('Felipe Cabuto','fecabuto','cab456'),
('Marcos Spano','marcossp','marc654'),
('Nathalia Vieira','nath','nath987'),
('Regina Strota','regina','regi123');

SELECT * FROM `meusistema`.`usuarios`;

UPDATE `meusistema`.`usuarios` 
SET `usuario_nome` = 'Regina Regy Strota'
WHERE `usuario_nome` = 'Regina Strota';

DELETE FROM `meusistema`.`usuarios`
WHERE `usuario_nome` = 'Felipe Cabuto';







