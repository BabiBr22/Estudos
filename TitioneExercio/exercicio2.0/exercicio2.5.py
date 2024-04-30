
# lista = [9, 5, 7, 8]

# soma = sum(lista)
# media = soma / 4

# if media >= 7:
#     print("APROVADO")
# else:
#     lista.append(input("Digite a nota da prova final")) 
     
# if media >= 5:
#     soma_nova = sum(lista)
#     media_nova = soma_nova / 5
#     print("APROVADO")
# else: 
#     print("REPROVADO")


# Definindo a função para calcular a média
def calcula_media(lista_notas):
    return sum(lista_notas) / len(lista_notas)

# Definindo a função para validar se o aluno foi aprovado
def valida_aprovado(notas, media_aprovacao):
    if calcula_media(notas) >= media_aprovacao:
        print(f'A sua média é {calcula_media(notas)}')
        print('O aluno foi aprovado!')
    else:
        print(f'A sua média foi {calcula_media(notas)}')
        print('O aluno está em recuperação!')
        notas.append(float(input('Digite a nota de recuperação: ')))
        if calcula_media(notas) >= media_aprovacao:
            print(f'A sua média é {calcula_media(notas)}')
            print('O aluno foi aprovado!')
        else:
            print(f'A sua média é {calcula_media(notas)}')
            print('O aluno foi reprovado!')

# Solicitando as notas ao usuário
notas = []
for i in range(4):
    notas.append(float(input(f'Digite a nota {i + 1}: ')))

# Chamando a função para validar a aprovação
media_aprovacao = 7  # Média de aprovação
valida_aprovado(notas, media_aprovacao)