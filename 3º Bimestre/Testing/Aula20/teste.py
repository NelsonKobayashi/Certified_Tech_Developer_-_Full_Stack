from selenium import webdriver

driver = webdriver.Chrome()
driver.get('https://mercadolivre.com.br')
driver.maximize_window()

CAMPO_BUSCA = driver.find_element_by_css_selector("body > header > div > form > input").send_keys("baralho uno")
LUPA = driver.find_element_by_css_selector("body > header > div > form > button").click()
PRIMEIRORESULTADO = driver.find_element_by_css_selector("#root-app > div > div > section > ol > li:nth-child(1) > div > div > div.ui-search-result__content-wrapper > div.ui-search-item__group.ui-search-item__group--title > a > h2").click()

print("PASS!!!")
""" driver.quit() """