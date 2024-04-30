#5 Crie um programa que calcule a área de um
#círculo com base no raio fornecido pelo usuário
#(use a fórmula Area = π * raio2 ).

# Replace é usado para substituir trechos de uma string por uma ou mais vezes.
raio = float(input('Digite o raio do circulo que deseja ser calculado ').replace(',', '.'))


area = 3.14 * pow(raio, 2)


print(f'A área do circulo é: {area: .2f}')
