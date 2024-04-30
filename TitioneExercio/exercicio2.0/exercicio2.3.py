# altura = float(input("Digite sua altura: "))

# calculo = (72.7*altura) - 58 

# print(f'Seu peso ideal é: {calculo: .2f}')

altura = float(input('Insira sua altura: '))

def calcula_peso_ideal(alt):
    peso_ideal = (alt *72) - 58
    return peso_ideal
print(f'Seu peso ideal é {calcula_peso_ideal(altura): .2f}')