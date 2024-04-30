# #10  Solicitar ao usuário os limites do intervalo


# inicio = int(input("Digite o valor inicial do intervalo: "))
# fim = int(input("Digite o valor final do intervalo: "))


# #percorrer cada número 
# print("Números primos no intervalo de", inicio, "a", fim, "são:")
# for num in range(inicio, fim + 1):
   
#     if num > 1:
        
#         for i in range(2, num):
#             if (num % i) == 0:
#                 break
#         else:
#             print(num)

inicio = input('Insira o  número inteiro inicial: ')
fim = input('Insira o número inteiro final: ')

def eh_primo(numero):
    if numero < 2:
        return False
    for i in range(2, int(numero ** 0.5) +1):
        if numero % i == 0:
            return False
    return True

print(f'Números primos entre {inicio} e {fim}')

for num in range(inicio, fim + 1):
    if eh_primo(num):
        print(f'O número {num} é primo')