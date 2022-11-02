-- Inserção de dados em uma das tabelas.

INSERT INTO `bd_irango`.`clientes` 
(`cliente_nome`,`cliente_cpf`,`cliente_rua`,`cliente_numero`,`cliente_bairro`,`cliente_cidade`,`cliente_estado`,`cliente_telefone`)
VALUES  ("Nelson Kobayashi",23145678954,"Rua da Dobre a Esquerda", 37, "Vire a Direita", "São Paulo", "SP", 11945678),
		("Allan Pereira", 12345678987, "Rua 5", 56, "Centro", "Rio de Janeiro", "RJ",11932144),
        ("André Cardoso", 32165498712, "Rua Qwerty", 123, "Cepaco", "Goiás", "GO", 14978945),
        ("Ivan Santos", 12365478956, "Rua Central", 15, "Centro", "Salador", "BA", 15912547),
        ("Janete Ferreira", 65498732178, "Rua Barão de Itapetininga", 54, "Gaivotas", "Pássaros", "CE", 15932164),
        ("Jennifer Mayumi", 12932165489, "Rua João de Santo Cristo", 65, "Legião Rural", "Brasilia", "PR", 15932145),
        ("Luiz Neves Kahoot", 65965473214, "Praça Tom Jobin", 32, "Mulher Brasileira", "Belo Horizonte", "MG", 1591234),
        ("Sérgio Henrique Silva", 32165498458, "Rua do Treme Perna", 10, "Abaixo de Zero", "Santa Catarina", "SC", 18965478);

-- Verificando os registro inseridos na tabela Clientes.
SELECT * FROM `bd_irango`.`clientes`;

-- Atualização de dados na tabela Cliente.
UPDATE `bd_irango`.`clientes` SET
	`cliente_nome` = "Nelson Yoshiaki Kobayashi"
    WHERE `cliente_id` = 1;

-- Exclusão de dados em uma das tabelas.
DELETE FROM `bd_irango`.`clientes`
	WHERE `cliente_id` = 2;    

-- Seleção de dados de uma das tabelas.
SELECT `cliente_nome` FROM `bd_irango`.`clientes`;
SELECT `cliente_cidade` FROM `bd_irango`.`clientes`;
SELECT `cliente_bairro` FROM `bd_irango`.`clientes`;