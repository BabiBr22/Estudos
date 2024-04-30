class Produto:
    def __init__(self, nomeProduto, preco, qtdEs):
        self.nomeProduto = nomeProduto
        self.preco = preco
        self.qtdEs = qtdEs


    def descrever(self):
        return f"Veículo: {self.nome}, Ano: {self.ano}"