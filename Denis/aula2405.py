def menu():
    print("\nMenu de Opções:")
    print("1. Cadastrar pergunta e resposta")
    print("2. Listar perguntas e respostas")
    print("3. Jogar")
    print("4. Sair")

def cadastrar_pergunta(perguntas, respostas):
    if len(perguntas) < 10:
        pergunta = input("Digite a pergunta: ")
        resposta = input("Digite a resposta: ")
        perguntas.append(pergunta)
        respostas.append(resposta)
    else:
        print("O limite de 10 perguntas foi atingido.")

def listar_perguntas_respostas(perguntas, respostas):
    if perguntas:
        for i, (pergunta, resposta) in enumerate(zip(perguntas, respostas)):
            print(f"{i + 1}. Pergunta: {pergunta} - Resposta: {resposta}")
    else:
        print("Nenhuma pergunta cadastrada.")

def jogar(perguntas, respostas):
    if len(perguntas) < 3:
        print("Você precisa cadastrar pelo menos 3 perguntas para começar a jogar.")
        return

    score = 0
    for i, (pergunta, resposta) in enumerate(zip(perguntas, respostas)):
        print(f"Pergunta {i + 1}: {pergunta}")
        resposta_usuario = input("Sua resposta: ")
        if resposta_usuario.strip().lower() == resposta.strip().lower():
            print("Correto!")
            score += 1
        else:
            print(f"Incorreto! A resposta certa é: {resposta}")
    print(f"Sua pontuação final é: {score}/{len(perguntas)}")

def main():
    perguntas = []
    respostas = []
    
    while True:
        menu()
        opcao = input("Escolha uma opção: ")
        
        if opcao == "1":
            cadastrar_pergunta(perguntas, respostas)
        elif opcao == "2":
            listar_perguntas_respostas(perguntas, respostas)
        elif opcao == "3":
            jogar(perguntas, respostas)
        elif opcao == "4":
            print("Saindo...")
            break
        else:
            print("Opção inválida! Tente novamente.")

if __name__ == "__main__":
    main()