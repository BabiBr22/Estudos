class Produto:
    def __init__(self, nome, preco):
        self.nome = nome
        self.preco = preco


    def exibir_info(self):
        return f"Produto: {self.nome}, Preço: R${self.preco:.2f}"


class Eletronico(Produto):
    def __init__(self, nome, preco, garantia):
        super().__init__(nome, preco)
        self.__garantia = garantia


    def obter_garantia(self):
        return self.__garantia


    def exibir_info(self):
        return f"Eletrônico: {self.nome}, Preço: R${self.preco:.2f}, Garantia: {self.obter_garantia()} meses"


class Vestuario(Produto):
    def __init__(self, nome, preco, tamanho):
        super().__init__(nome, preco)
        self.__tamanho = tamanho


    def obter_tamanho(self):
        return self.__tamanho


    def exibir_info(self):
        return f"Vestuário: {self.nome}, Preço: R${self.preco:.2f}, Tamanho: {self.obter_tamanho()}"


# Execução dos métodos das classes
eletronico = Eletronico("Smartphone", 1500.00, 12)
print(eletronico.exibir_info())


vestuario = Vestuario("Camiseta", 29.90, "M")
print(vestuario.exibir_info())
