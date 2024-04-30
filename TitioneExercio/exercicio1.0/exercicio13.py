# 13 Crie um programa que converta uma frase inserida 
# pelo usuário em seu acrônimo
# (exemplo: "World Health Organization" = "WHO").

frase = input("Digite uma frase qualquer: ").title()

lista_palavra = frase.split()

sigla = ''

for palavra in lista_palavra:
    sigla += palavra[0]

print(sigla)