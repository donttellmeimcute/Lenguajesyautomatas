#programacion orientada a objetos
class animal:
    def __init__(self,raza,nombre):
        self.raza = raza
        self.nombre = nombre
    def comer(self):
        print(f"estoy comiendo, soy de la raza {self.raza} y me llamo {self.nombre}")

animal1 = animal("zorro", "foxy")
animal1.comer()