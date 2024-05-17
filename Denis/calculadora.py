while True:
    print("Escolha a operação:")
    print("1: Adição (+)")
    print("2: Subtração (-)")
    print("3: Multiplicação (*)")
    print("4: Divisão (/)")
    print("5: Sair")
    escolha = input("Digite o número da operação desejada: ")

    if escolha == '5':
        print("Saindo...")
        break

    if escolha in ['1', '2', '3', '4']:
        num1 = float(input("Digite o primeiro número: "))
        num2 = float(input("Digite o segundo número: "))

        if escolha == '1':
            resultado = num1 + num2
            print("Resultado:", resultado)
        elif escolha == '2':
            resultado = num1 - num2
            print("Resultado:", resultado)
        elif escolha == '3':
            resultado = num1 * num2
            print("Resultado:", resultado)
        elif escolha == '4':
            if num2 != 0:
                resultado = num1 / num2
                print("Resultado:", resultado)
            else:
                print("Erro! Divisão por zero.")
    else:
        print("Operação inválida. Tente novamente.")
