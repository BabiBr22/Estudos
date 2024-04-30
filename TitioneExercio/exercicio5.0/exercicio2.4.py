tamanho_metros = float(input("Digite o tamanho em metros quadrados para ser calculado: "))

#área em metros quadrados

qtd_litros = tamanho_metros / 3
qtd_latas = qtd_litros / 18

valor = qtd_latas * 80
print(f'A quantidade de latas a ser usuda é: {round(qtd_latas)}, e o valor é de: {valor: .2f}')

#cobertura 1 litro para cada 3 metros quadrados
#lata de 18 litros = 80 reais

