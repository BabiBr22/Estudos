
# 4. Detetive de Vogais
# - Conte e relate o número de cada vogal em uma frase inserida pelo usuário

frase = input("Digite uma frase qualquer: ")
vogais = "aeiouAEIOU"

contagem_vogais = {i: frase.count(i) for i in vogais}

print("Número de vogais na frase:")

for i, quantidade in contagem_vogais.items():
    print(f"{i}: {quantidade}")
    
    
    
contagem_vogais = {i: frase.count(i) for i in vogais}

print("Número de vogais na frase:")