#6 Escreva um programa que verifique se uma palavra inserida pelo
#usuário é um palíndromo (exemplo: "ovo", "radar").


palavra = input('Digite uma palavra normal ou palindromo: ')

palavra_inverse = palavra[:: -1].upper()


if palavra.upper() == palavra_inverse.upper():
    print(f'Está palavra é um palindromo ')
else:
    print(f'Está é uma palavra qualquer ')