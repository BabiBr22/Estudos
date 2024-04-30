class Animal:
    def __init__(self, nome, especie):
        self.nome = nome
        self.especie = especie
        
    def emitir_som(self):
        return 'Este animal emite som'
    
class Catioro(Animal):
    def __init__(self, nome, raca):  
        super().__init__(nome, 'cachorro') 
        self.__raca = raca
        
    def emitir_som(self):
        return "Au au"
    
    def obter_raca(self):
        return self.__raca
    
class Gationeo(Animal):
    def __init__(self, nome, pelagem):  
        super().__init__(nome, 'gato')  
        self.__pelagem = pelagem
        
    def emitir_som(self):
        return 'miau miau'
    
    def obter_pelagem(self):
        return self.__pelagem
    
gato = Gationeo('Gato', 'Parda')
print(gato.obter_pelagem())
print(gato.emitir_som())

tobi = Catioro('Tobi', 'Lulu')
print(tobi.obter_raca())
print(tobi.emitir_som())
