n1 = int(input("Digite um número: "))
n2 = int(input("Digite um outro número: "))
n3 = int(input("Digite um outro número: "))


def maior():
    if n1 > n2 and n1 > n3:
        print("O primeiro número é o maior número")
    if n2 > n1 and n2 > n3:
        print("O segundo número é o maior número")
    if n3 > n1 and n3 > n2:
        print("O terceiro número é o maior número")

maior()