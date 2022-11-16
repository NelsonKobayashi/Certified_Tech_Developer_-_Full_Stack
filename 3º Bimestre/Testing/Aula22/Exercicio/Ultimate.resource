***Variables***
${SITE}         https://ultimateqa.com/simple-html-elements-for-automation/
${NAVEGADOR}    chrome    
${BOTAO1}       id=idExample
${BOTAO2}       class=buttonClass
${BOTAO3}       name=button1
${BOTAO4}       Click me using this link text!
${GENERO}       gender   
${OUTROS}       other
${CHECKBOX}     Bike
${DROPDOWN}     css=#post-909 > div > div.et-l.et-l--post > div > div.et_pb_section.et_pb_section_2.et_section_regular > div > div.et_pb_column.et_pb_column_1_3.et_pb_column_4.et_pb_css_mix_blend_mode_passthrough > div.et_pb_module.et_pb_blurb.et_pb_blurb_8.et_pb_text_align_left.et_pb_blurb_position_top.et_pb_bg_layout_light > div > div > div > select
${CARROS}       audi

***Keywords***
Abrir o site ultimateqa
    Open Browser   ${SITE}   ${NAVEGADOR}
    Maximize Browser Window

Clicar no usando "ID"
    Click Element   ${BOTAO1}

Clicar no botão usando "ClassName"
    Click Element   ${BOTAO2}

Clicar no botão usando "Name"
    Click Element   ${BOTAO3}

Clicar no botão usando "LinkText"
    Click Link   ${BOTAO4}

Selecionar o Radio Button "Other"
    Execute Javascript   window.scrollTo(0,800)
    Select Radio Button   ${GENERO}   ${OUTROS}  

Clicar no CheckBox "I have a bike"
    Select CheckBox   ${CHECKBOX}

Escolher opcao "Audi" no Dropdown
    Select From List By Value   ${DROPDOWN}   ${CARRO}