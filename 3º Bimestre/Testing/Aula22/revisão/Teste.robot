***Settings***
Library         SeleniumLibrary
Test Setup      Abrir o site da loja
Test Teardown   Close Browser
Resource        ./Keywords.robot

***Test Cases***
[TESTE00 - Finalisando a compra com usuário comum]
    Fazer login no site da loja
    Abrir os detalhes do "Sauce Labs Bolt T-Shirt"
    Adcionar o produto "Sauce Labs Bolt T-Shirt" ao carrinho 
    Abrir o carrinho de compras
    Clicar em "CHECKOUT"
    Preencher as informações do cliente e clicar em continue
    Confirmar se o valor final da compra é de $17.27 e clicar no botão Finish
    Verificar se a frase "THANK YOU FOR YOUR ORDER" está sendo exibidas


    


# Comandos: 
# Open Browser
# Close Browser
# Wait Until Element is Visible
# Sleep
# Click Element
# Input Text
# Element Should Contain


 