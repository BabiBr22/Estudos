class Veiculo:
    def __init__(self, nome, ano):
        self.nome = nome
        self.ano = ano


    def descrever(self):
        return f"Veículo: {self.nome}, Ano: {self.ano}"


class Carro(Veiculo):
    def __init__(self, nome, ano, modelo):
        super().__init__(nome, ano)
        self.__modelo = modelo


    def obter_modelo(self):
        return self.__modelo


    def descrever(self):
        return f"Carro: {self.nome}, Modelo: {self.obter_modelo()}, Ano: {self.ano}"


class Motocicleta(Veiculo):
    def __init__(self, nome, ano, cilindrada):
        super().__init__(nome, ano)
        self.__cilindrada = cilindrada


    def obter_cilindrada(self):
        return self.__cilindrada


    def descrever(self):
        return f"Motocicleta: {self.nome}, Cilindrada: {self.obter_cilindrada()}cc, Ano: {self.ano}"



carro = Carro("Fiat", 2022, "Uno")
print(carro.descrever())


moto = Motocicleta("Honda", 2021, 250)
print(moto.descrever())


#aaaa