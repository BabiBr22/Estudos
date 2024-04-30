#Desenvolva um programa que armazene quatro notas em uma lista e que
#apresente a média final. Caso a média seja igual ou superior a 7, apresentar
#a mensagem "APROVADO", caso contrário, armazenar a nota da prova final
#e recalcular a média. Caso a nova média seja igual superior a 5, apresentar a
#mensagem "APROVADO", caso contrário, apresentar a mensagem
#"REPROVADO"

lista = [9, 5, 7, 8]

soma = sum(lista)
media = soma / 4

if media >= 7:
    print("APROVADO")
else:
    lista.append(input("Digite a nota da prova final")) 
     
if media >= 5:
    soma_nova = sum(lista)
    media_nova = soma_nova / 5
    print("APROVADO")
else: 
    print("REPROVADO")
