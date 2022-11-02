<!-- Crie uma nova página HTML e adicione via JavaScript os seguintes elementos:
1. Crie um formulário
2. Selecione o formulário e salve-o numa variável com querySelector.
Itens a seguir serão inseridos dentro do formulário:
3. Um título com o texto: “Login”.
4. Um campo de input text com um placeholder: “Email”.
5. Um campo de input password com um placeholder: “Senha”.
6. Um botão submit com o texto “Enviar”.
7. Um botão reset com o texto “Cancelar”.
8. Insira a propriedade disabled no campo de Email.
9. Insira um estilo da sua escolha, a sugestão seria o display flex com flex-direction
column.
10. Remova o atributo placeholder do email. -->

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aula 07 - Desafio</title>
</head>

<body>
    <form action="" id="form">
    </form>

    <script>
        var form = document.getElementById("form");
        form.setAttribute("method", "post");
        form.setAttribute("action", "submit.html");

        // 3. Um título com o texto: “Login”.
        let title = document.createElement("h3");
        title.textContent = "Login";

        // 4. Um campo de input text com um placeholder: “Email”.
        let inputEmail = document.createElement("input");
        inputEmail.setAttribute("type", "email");
        inputEmail.setAttribute("placeholder", "Email");
        inputEmail.style.marginBottom = "10px";

        // 5. Um campo de input password com um placeholder: “Senha”.
        let inputPass = document.createElement("input");
        inputPass.setAttribute("type", "password");
        inputPass.setAttribute("placeholder", "Senha");
        inputPass.style.marginBottom = "10px";

        // 6. Um botão submit com o texto “Enviar”.
        let btnSubmit = document.createElement("button");
        btnSubmit.setAttribute("type", "submit");
        btnSubmit.setAttribute("value", "submit");
        btnSubmit.textContent = "Enviar";
        btnSubmit.style.backgroundColor = "#00f";
        btnSubmit.style.color = "#fff";
        btnSubmit.style.borderRadius = "10px";
        btnSubmit.style.borderColor = "#000";
        btnSubmit.style.fontWeight = "bold";
        btnSubmit.style.cursor = "pointer";
        btnSubmit.style.marginBottom = "10px";

        // 7. Um botão reset com o texto “Cancelar”.
        let btnCancel = document.createElement("button");
        btnCancel.setAttribute("type", "reset");
        btnCancel.setAttribute("value", "reset");
        btnCancel.textContent = "Cancelar";
        btnCancel.style.backgroundColor = "#f00";
        btnCancel.style.color = "#fff";
        btnCancel.style.borderRadius = "10px";
        btnCancel.style.borderColor = "#000";
        btnCancel.style.fontWeight = "bold";
        btnCancel.style.cursor = "pointer";

        // 8. Insira a propriedade disabled no campo de Email.
        inputEmail.setAttribute("disabled", "disabled");
        
        // 9. Insira um estilo da sua escolha, a sugestão seria o display flex com flex - direction column
        form.style.display = "flex";
        form.style.flexDirection = "column";

        // 10. Remova o atributo placeholder do email.
        inputEmail.removeAttribute("placeholder");

        form.append(inputEmail, inputPass, btnSubmit, btnCancel);
        form.style.width = "300px";
    </script>
</body>

</html>