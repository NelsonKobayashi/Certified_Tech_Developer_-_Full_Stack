***Settings***
Library         SeleniumLibrary
Test Setup      Abrir o site da loja
Test Teardown   Close Browser

***Variables***
${URL}                  http://saucedemo.com/
${NAVEGADOR}            chrome    
${LOGIN}                id=user-name
${SENHA}                id=password
${BOTAOLOGIN}           id=login-button
${BOLT}                 css=#item_1_title_link > div
${ADICIONARBOLT}        id=add-to-cart-sauce-labs-bolt-t-shirt
${CARRINHO}             css=#shopping_cart_container > a
${CHECKOUT}             id=checkout
${FIRSTNAME}            id=first-name
${LASTNAME}             id=last-name
${POSTALCODE}           id=postal-code
${CONTINUE}             id=continue
${VALORFINAL}           css=#checkout_summary_container > div > div.summary_info > div.summary_total_label
${FINISH}               id=finish
${THAKYOU}              css=#checkout_complete_container > h2

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
    


# Comandos: 
# Open Browser
# Close Browser
# Wait Until Element is Visible
# Sleep
# Click Element
# Input Text
# Element Should Contain


 