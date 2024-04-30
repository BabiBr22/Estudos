# 15 Crie um programa que gere e imprima os primeiros "n" números da sequência de
# Fibonacci, onde "n" é fornecido pelo usuário.


numero = int(input('Quantos números da sequência de Fibonacci voce quer?: '))
a, b = 1, 2
print('Sequência de Fibonacci')
for i in range(numero):
    print(b, end=" ")
    a, b = b, a + b
print()