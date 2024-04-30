class Equipamento:
    def __init__(self, marca):
        self.marca = marca


    def ligar(self):
        return "Equipamento ligado."


class Computador(Equipamento):
    def __init__(self, marca, processador):
        super().__init__(marca)
        self.__processador = processador


    def obter_processador(self):
        return self.__processador


    def ligar(self):
        return f"Computador {self.marca} ligado. Processador: {self.obter_processador()}"


class Telefone(Equipamento):
    def __init__(self, marca, numero):
        super().__init__(marca)
        self.__numero = numero


    def obter_numero(self):
        return self.__numero


    def ligar(self):
        return f"Telefone {self.marca} ligado. Número: {self.obter_numero()}"


computador = Computador("Dell", "Intel Core i7")
print(computador.ligar())


telefone = Telefone("Samsung", "123-456-7890")
print(telefone.ligar())

