class Transporte:
    def __init__(self, tipo):
        self.tipo = tipo


    def mover(self):
        return f"{self.tipo} em movimento."


class Carro(Transporte):
    def __init__(self, tipo, placa):
        super().__init__(tipo)
        self.__placa = placa


    def obter_placa(self):
        return self.__placa


    def mover(self):
        return f"Carro {self.tipo} em movimento. Placa: {self.obter_placa()}"


class Aviao(Transporte):
    def __init__(self, tipo, numero):
        super().__init__(tipo)
        self.__numero = numero


    def obter_numero(self):
        return self.__numero


    def mover(self):
        return f"Avião {self.tipo} em voo. Número de registro: {self.obter_numero()}"


# Execução dos métodos das classes
carro = Carro("terrestre", "ABC-1234")
print(carro.mover())


aviao = Aviao("aéreo", "XY123")
print(aviao.mover())
