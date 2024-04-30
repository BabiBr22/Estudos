# 2. Invasão de Espaço
# - Remova todos os espaços extras de uma frase fornecida pelo usuário


frase = input("Digite uma frase qualquer: ")
frase_espacos = "".join(frase.split())
print(f'Esta é a frase sem espaços: {frase_espacos}')