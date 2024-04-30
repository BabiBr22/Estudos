
frase = input("Digite uma frase: ")


#dividir a frase em palavras
palavras = frase.split()

#inverte a ordem das palavras e junta elas novamente 
frase_invertida = " " .join(palavras[::-1])

print("Frase com as palavras em ordem reversa:", frase_invertida)



