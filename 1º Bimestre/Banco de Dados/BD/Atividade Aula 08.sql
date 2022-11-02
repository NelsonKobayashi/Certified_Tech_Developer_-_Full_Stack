-- Atividade em Sala - Banco de Dados
-- Exercício Aula 08
-- Alunos: Paulo Ventura, Túlio Xavier, Felipe Rodrigues, Nelson Kobayashi

-- 1. Crie um Banco de Dados e importe a base SEDUC;
CREATE SCHEMA `bdseduc`;		

-- 2.  UtiLizando a tabela Estudantes, liste apenas 5 alunos;
SELECT * FROM `bdseduc`.`estudantes` LIMIT 5;

-- 3. Liste todos os estudantes a partir do id nr. 10;
SELECT * FROM `bdseduc`.`estudantes`
WHERE `estudante_id` > 10;

-- 4. Liste apenas a coluna Nome da tabela Estudantes;
SELECT `estudante_nome` FROM `bdseduc`.`estudantes`;

-- 5. liste todos os estudantes com idade = 18 anos;
SELECT * FROM `bdseduc`.`estudantes`
WHERE `estudante_idade` = 18;

-- 6. Liste todos os Estudantes com idade acima de 40 anos;
SELECT * FROM `bdseduc`.`estudantes`
WHERE `estudante_idade` > 40;

-- 7. Liste todos os Estudantes com idade >= 65 anos;
SELECT * FROM `bdseduc`.`estudantes`
WHERE `estudante_idade` >= 65;

-- 8. Liste todos os Estudantes com idade < 35 anos;
SELECT * FROM `bdseduc`.`estudantes`
WHERE `estudante_idade` < 35;

-- 9. Liste todos os Estudantes com idade <= 30 anos;
SELECT * FROM `bdseduc`.`estudantes`
WHERE `estudante_idade` <= 35;

-- 10. Liste todos os Estudantes com idade <> 40 anos;
SELECT * FROM `bdseduc`.`estudantes`
WHERE `estudante_idade` <> 40;

-- 11.Liste todos os campos cujo campo escola_id é "Nulo";
SELECT * FROM `bdseduc`.`estudantes`
WHERE `escola_id` IS NULL;

-- 12.Liste todos os Estudantes  com idade entre 32 e 45 anos;
SELECT * FROM `bdseduc`.`estudantes`
WHERE `estudante_idade` BETWEEN 32 AND 45;

-- 13. Liste todos os Estudantes que tenham as seguinte idades: 18, 35 e 52;
SELECT * FROM `bdseduc`.`estudantes`
WHERE `estudante_idade` LIKE 18 OR	
	  `estudante_idade` LIKE 35 OR
      `estudante_idade` LIKE 52;

-- 14. Liste todos os Estudantes cujo nome comece com "A";
SELECT * FROM `bdseduc`.`estudantes`
WHERE `estudante_nome` LIKE 'A%';
 
-- 15. Liste todos os Estudantes em ordem decrescente de idade;
SELECT * FROM `bdseduc`.`estudantes`
ORDER BY `estudante_idade` DESC;

-- 16. Liste todos os Estudantes em ordem crescente de idade;
SELECT * FROM `bdseduc`.`estudantes`
ORDER BY `estudante_idade` ASC;

-- 17 Liste 15 Estudantes a partir da 20ª posição.
SELECT * FROM `bdseduc`.`estudantes`
LIMIT 15 OFFSET 20;

-- 18. Exclua todos os Estudantes com idade = 18 anos
DELETE FROM `bdseduc`.`estudantes`
WHERE `estudante_idade` = 18;
