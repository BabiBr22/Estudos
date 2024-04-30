# 14 Escreva um programa que conte o número de vezes que uma determinada letra aparece
# em uma frase inserida pelo usuário.

frase = input("Digite uma frase qualquer: ")

quantidade = frase.count("a")
print(f'A letra "a" aparece {quantidade}, vezes no texto.')