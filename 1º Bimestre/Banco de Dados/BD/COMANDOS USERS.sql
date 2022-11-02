SELECT * FROM `mysql`.`user`;

CREATE USER "kakaroto"@"localhost" IDENTIFIED BY "genkidama";

SHOW GRANTS FOR "kakaroto"@"localhost";

-- exemplo: Dando Permissões
GRANT INSERT ON (nomeBanco.tabela ou nomeBanco.* ou *.*) TO "kakaroto"@"localhost";
-- na prática
GRANT INSERT ON *.* TO "kakaroto"@"localhost";

-- Dando todos os privilégios apenas na tabela cancoes.
GRANT ALL PRIVILEGES ON `db_musimundos2`.`cancoes` TO "kakaroto"@"localhost";

-- Retirando Permissões
REVOKE INSERT ON *.* FROM "kakaroto"@"localhost";

DROP USER "kakaroto@"@"localhost";

