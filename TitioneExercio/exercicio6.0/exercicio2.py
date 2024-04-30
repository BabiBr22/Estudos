
class Pessoa:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade


    def identificar(self):
        return f"Pessoa: {self.nome}, Idade: {self.idade}"


class Professor(Pessoa):
    def __init__(self, nome, idade, disciplina):
        super().__init__(nome, idade)
        self.__disciplina = disciplina


    def obter_disciplina(self):
        return self.__disciplina


    def identificar(self):
        return f"Professor: {self.nome}, Idade: {self.idade}, Disciplina: {self.obter_disciplina()}"


class Aluno(Pessoa):
    def __init__(self, nome, idade, matricula):
        super().__init__(nome, idade)
        self.__matricula = matricula


    def obter_matricula(self):
        return self.__matricula


    def identificar(self):
        return f"Aluno: {self.nome}, Idade: {self.idade}, Matrícula: {self.obter_matricula()}"


professor = Professor("João", 35, "Matemática")
print(professor.identificar())


aluno = Aluno("Maria", 20, 12345)
print(aluno.identificar())


