# # 1. Contador de Galinhas
# ovos_por_galinha_por_dia = 2
# galinhas = 20
# dias_na_semana = 6  # Não contando domingo
# ovos_por_semana = ovos_por_galinha_por_dia * galinhas * dias_na_semana
# print("1. Ao final da semana, você terá", ovos_por_semana, "ovos.")

# # 2. Invasão de Espaço
# frase = input("2. Insira uma frase: ")
# frase_sem_espacos_extra = " ".join(frase.split())
# print("Frase sem espaços extras:", frase_sem_espacos_extra)

# # 3. Calculadora de Pizza
# numero_amigos = int(input("3. Quantos amigos vão comer pizza? "))
# total_fatias = 8
# fatias_por_amigo = total_fatias // numero_amigos
# fatias_sobrando = total_fatias % numero_amigos
# print("Cada amigo receberá", fatias_por_amigo, "fatias e sobrarão", fatias_sobrando, "fatias.")

# # 4. Detetive de Vogais
# frase = input("4. Insira uma frase: ")
# vogais = "aeiouAEIOU"
# contagem_vogais = {vogal: frase.count(vogal) for vogal in vogais}
# print("Número de vogais na frase:")
# for vogal, quantidade in contagem_vogais.items():
#     print(f"{vogal}: {quantidade}")

# # 5. Simulador de Luta de Monstros
# vida_goblin = 50
# vida_esqueleto = 45
# while vida_goblin > 0 and vida_esqueleto > 0:
#     dano_goblin = random.randint(0, 5)
#     dano_esqueleto = random.randint(0, 5)
#     vida_goblin -= dano_esqueleto
#     vida_esqueleto -= dano_goblin
# print("5. O Goblin ficou com", vida_goblin, "pontos de vida e o Esqueleto ficou com", vida_esqueleto, "pontos de vida.")

# # 6. Mestre dos Palíndromos
# palavra = input("6. Insira uma palavra: ")
# palavra = palavra.lower().replace(" ", "")
# if palavra == palavra[::-1]:
#     print("É um palíndromo.")
# else:
#     print("Não é um palíndromo.")

# # 7. Adivinha o Número
# numero_aleatorio = random.randint(1, 100)
# tentativas = 0
# while True:
#     tentativa = int(input("7. Tente adivinhar o número (entre 1 e 100): "))
#     tentativas += 1
#     if tentativa < numero_aleatorio:
#         print("Muito baixo! Tente novamente.")
#     elif tentativa > numero_aleatorio:
#         print("Muito alto! Tente novamente.")
#     else:
#         print("Parabéns! Você acertou em", tentativas, "tentativas.")
#         break

# # 8. Contagem de Dinossauros
# animais = input("8. Insira uma lista de animais separados por vírgula: ")
# lista_animais = animais.split(",")
# contagem_dinossauros = lista_animais.count("dinossauro")
# print("A palavra 'dinossauro' aparece", contagem_dinossauros, "vezes na lista.")

# # 9. O Mago dos Números
# numero1 = float(input("9. Insira o primeiro número: "))
# numero2 = float(input("Insira o segundo número: "))
# numero3 = float(input("Insira o terceiro número: "))
# maior = max(numero1, numero2, numero3)
# menor = min(numero1, numero2, numero3)
# media = (numero1 + numero2 + numero3) / 3
# print("O maior número é:", maior)
# print("O menor número é:", menor)
# print("A média dos números é:", media)

# # 10. Biscoito da Sorte Virtual
# frases_motivacionais = [
#     "Nunca é tarde demais para começar.",
#     "Você é mais forte do que pensa.",
#     "Acredite em si mesmo e tudo será possível.",
#     "O sucesso vem para aqueles que persistem.",
#     "Você está no caminho certo!"
# ]
# print("10. Biscoito da Sorte Virtual:", random.choice(frases_motivacionais))

# # 11. Caça ao Tesouro no Texto
# texto = input("11. Insira um texto: ")
# palavra_alvo = input("Insira a palavra que deseja encontrar: ")
# palavras = texto.split()
# frequencia_palavra = palavras.count(palavra_alvo)
# posicoes = [i for i, palavra in enumerate(palavras, 1) if palavra == palavra_alvo]
# print("A palavra", palavra_alvo, "aparece", frequencia_palavra, "vezes.")
# print("Posições da palavra no texto:", posicoes)

# # 12. Simulador de Dado
# numero_aleatorio = random.randint(1, 6)
# tentativa = int(input("12. Tente adivinhar o número do dado (entre 1 e 6): "))
# if tentativa == numero_aleatorio:
#     print("Você acertou! O número é", numero_aleatorio)
# else:
#     print("Você errou! O número correto era", numero_aleatorio)

# # 13. Analisador de Links
# import re
# texto = input("13. Insira um texto com URLs: ")
# urls = re.findall('https?://(?:[-\w.]|(?:%[\da-fA-F]{2}))+', texto)
# print("URLs encontrados:")
# for url in urls:
#     print(url)

# # 14. Calculadora de IMC
# peso = float(input("14. Insira seu peso em kg: "))
# altura = float(input("Insira sua altura em metros: "))
# imc = peso / altura**2
# categoria = ""
# if imc < 18.5:
#     categoria = "Abaixo do peso"
# elif 18.5 <= imc < 25:
#     categoria = "Peso normal"
# elif 25 <= imc < 30:
#     categoria = "Sobrepeso"
# else:
#     categoria = "Obesidade"
# print("Seu IMC é:", imc)
# print("Categoria:", categoria)

# # 15. Conversor de Temperatura
# temperatura = float(input("15. Insira a temperatura: "))
# escala = input("Insira a escala (C para Celsius, F para Fahrenheit): ").upper()
# if escala == "C":
#     celsius_para_fahrenheit = (temperatura * 9/5) + 32
#     print("Temper")