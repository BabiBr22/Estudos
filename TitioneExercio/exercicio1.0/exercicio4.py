
#4 Escreva um programa que verifique se um número inserido
#pelo usuário é par ou ímpar.


numero = int(input('Digite um número: '))


resultado = numero % 2


if resultado == 0:
    print(f'Seu número é par')
else :
    print(f'Seu númeor é impar')
