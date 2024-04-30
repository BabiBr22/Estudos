#numero = int(input("Digite um número qualquer: "))

# resultado = numero % 2

# if resultado == 0 :
#     print("Seu número é par!")
# else:
#     print("Seu número é impar!")

numero = int(input("Digite um número qualquer: "))

def valida_paridade(num):
    return num % 2 == 0

if valida_paridade (numero):
    print("Seu número é par!")
else:
    print("Seu número é impar!")