***Variables***
${SITE}           https://www.hurb.com/br
${NAVEGADOR}      chrome
${COOKIE}         id=CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll
${PACOTE}         css=#__next > div.Header_Header__1jiZz > div.hrc-2LOsj > div > div > div.h-91nvuq > div > button.hrc-Grvo8.hrc-3hPPe.hrc-3Px4y.hrc-46qds.hrc-3pyBg.hrc-3zK7t.hrc-173nT > span
${PESQUISAR}      css=#__next > div.Header_Header__1jiZz > div.hrc-2LOsj > div > div > div.hrc-2_yd0.hrc-3T0_Y > button
${FLORENCA}       css=body > div:nth-child(4) > section > div.box-offer-top.box-nopadding.col-sm-6.col-md-6 > div > section.box-offer-main.pull-left > div:nth-child(5) > div.pull-left.first-box > button
${ESCOLHA}        css=#downshift-73737-input
${COMPRAR}        css=#offer-options > div.offer-options--items > div:nth-child(9) > div > div.col-xs-12.col-sm-4.col-md-4.offer-options--box-right.main-package > div > div.col-xs-12.col-sm-7.col-md-7.offer-options--box.offer-options--box-price.flex > div:nth-child(2) > div:nth-child(4) > a
${CONFIG}         css=body > div.container > div > div.col-md-4.col-sm-4.hidden-xs > div.summary > div:nth-child(7) > div > div > div:nth-child(2) > div.col-xs-8.col-sm-8.col-md-8.text-right
${PERIODO1}       css=body > div.container > div > div.col-md-4.col-sm-4.hidden-xs > div.summary > div:nth-child(9) > div > div > div:nth-child(2) > div.col-xs-7.col-sm-7.col-md-7.text-right.booking-info__date-formatted.summary-highlight       
${PERIODO2}       css=body > div.container > div > div.col-md-4.col-sm-4.hidden-xs > div.summary > div:nth-child(9) > div > div > div:nth-child(3) > div.col-xs-7.col-sm-7.col-md-7.text-right.booking-info__date-formatted.summary-highlight
${BOLETO}         css=#ui-id-1
${NOME}           css=#paymentMethods__bill > section > div:nth-child(2) > div:nth-child(1) > div > input
${CPF}            css=#paymentMethods__bill > section > div:nth-child(2) > div:nth-child(2) > div > input
${CELULAR}        css=#paymentMethods__bill > section > div:nth-child(2) > div:nth-child(3) > div > input
${CHECKBOX}       css=#cancellation-policy
${CANCELAMENTO}   css=#popover722358 > div.tooltip-inner.tooltip__inner > div

***Keywords***
Processo de reserva de pacote de viagens
    Open Browser    ${SITE}   ${NAVEGADOR}
    Maximize Browser Window

Clicar em "Permitir todos os cookies"
    Set Selenium Speed         0.25 
    Click Element   ${COOKIE}

Selecionar a op????o "Pacotes"
    Click Element   ${PACOTE}

Buscar por alguma cidade tur??stica (Ex: Buenos Aires, Floren??a, Orlando) e clicar em "Pesquisar"
    Input Text      ${PESQUISAR}    Floren??a
    Click Element   ${ESCOLHA}

Selecionar um pacote de viagem
    Click Element   ${FLORENCA}  

Clicar em "ESCOLHER OP????O"
    Switch Window    NEW
    Click Element   ${OPCAO}

Escolher uma op????o de viagem e clicar em "COMPRAR"
    Click Element   ${COMPRAR}

Validar as informa????es da "Configura????o" da viagem
    Element Should Contain    ${CONFIG}   12 noites

Validar as informa????es do per??odo da viagem
    Element Should Contain    ${PERIODO1}
    Element Should Contain    ${PERIODO2}  
    
Selecionar a op????o "Boleto parcelado"
    Click Element     ${BOLETO}

Preencher os dados de pagamento
    Input Text    ${NOME}   Nelson Saitama
    Input Text    ${CPF}    255.628.498-60
    Input Text    ${CELULAR}    11981143214

Marcar o checkbox "Li e aceito as condi????es de termos de uso e pol??tica de privacidade"
    Select CheckBox   ${CHECKBOX}

Validar a informa????o sobre cancelamento gr??tis
    Click Element   ${CANCELAMENTO}   
