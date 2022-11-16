*** Settings ***
Resource        ./Variables.robot

***Keywords***
Abrir o site da loja
    Open Browser    ${URL}   ${NAVEGADOR}
    Maximize Browser Window

Fazer login no site da loja
    Wait Until Element is Visible   ${LOGIN}   10 
    Input Text   ${LOGIN}   standard_user
    Input Text   ${SENHA}   secret_sauce 
    Click Element   ${BOTAOLOGIN}   
    
Abrir os detalhes do "Sauce Labs Bolt T-Shirt"
    Wait Until Element is Visible   ${BOLT}   10
    Click Element  ${BOLT}

Adcionar o produto "Sauce Labs Bolt T-Shirt" ao carrinho 
    Click Element   ${ADICIONARBOLT}

Abrir o carrinho de compras
    Click Element    ${CARRINHO}

Clicar em "CHECKOUT"
    Click Element   ${CHECKOUT} 

Preencher as informações do cliente e clicar em continue
    Input Text   ${FIRSTNAME}        Nelson
    Input Text   ${LASTNAME}         Kobayashi
    Input Text   ${POSTALCODE}       00000
    Click Element   ${CONTINUE} 

Confirmar se o valor final da compra é de $17.27 e clicar no botão Finish
    Element Should Contain   ${VALORFINAL}   $17.27
    Click Element   ${FINISH}

Verificar se a frase "THANK YOU FOR YOUR ORDER" está sendo exibidas
    Element Should Contain   ${THAKYOU}   THANK YOU FOR YOUR ORDER
    Capture Page Screenshot