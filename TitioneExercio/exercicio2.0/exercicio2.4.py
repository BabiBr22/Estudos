tamanho_metros = float(input("Digite o tamanho em metros quadrados para ser calculado: "))

#área em metros quadrados

qtd_litros = tamanho_metros / 3
qtd_latas = qtd_litros / 18

valor = qtd_latas * 80
print(f'A quantidade de latas a ser usada é: {round(qtd_latas)}, e o valor é de: {valor: .2f}')



# area_pintada = float(input('Insira a quantidade de metros quadrados: '))
# latas_necessarias = area_pintada / 54

# if area_pintada % 18 != 0:
#      latas_necessarias += 1

# print(f'Você deve comprar {int(latas_necessarias)} latas de tinta por R${latas_necessarias * 80}')