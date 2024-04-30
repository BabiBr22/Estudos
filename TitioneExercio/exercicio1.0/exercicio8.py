#8 Solicite ao usuário que insira uma lista de números
#separados por vírgula e retorne a soma desses números.


numeros = input('Insira os numeros separado por virgula: ')
lista_numeros = numeros.split(',')
total = 0


for i in lista_numeros:
    total += int(i)


print(total)
