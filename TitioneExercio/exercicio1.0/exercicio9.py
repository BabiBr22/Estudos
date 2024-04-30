#9 Solicitar ao usuário que insira uma lista de números
#separados por espaços


numeros = input("Insira uma lista de números separados por espaço: ").split()


#converter em uma lista de inteiros
numeros = [int(numero) for numero in numeros]


#pegar o maior elemento na lista com função max()
maior = max(numeros)

print("O maior elemento na lista é:", maior)
