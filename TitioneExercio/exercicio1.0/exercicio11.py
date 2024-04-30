
#Resolução simples 
frase = input("Digite uma frase: ")
vogais = 'aeiouAEIOU'
contador = 0

#percorrer cada letra na frase
for letra in frase:
    if letra in vogais:
        contador += 1

print("O número de vogais na frase é:", contador)

