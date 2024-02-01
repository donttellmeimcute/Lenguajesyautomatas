class Grafo:
    def __init__(self):
        self.graf = {}
    def agregarVertice(self, vertice):
        self.graf[vertice] = []
        return self.graf
    def agregarAdyacentes(self, vertice, adyacente):
        for i in self.graf[vertice]:
            self.graf[vertice].append(adyacente)
            return self.graf

grafo1 = Grafo()

#añadir vertice
grafo1.agregarVertice("A")
grafo1.agregarVertice("B")
grafo1.agregarVertice("C")
grafo1.agregarVertice("D")

#añadir adyacentes
grafo1.agregarAdyacentes("A", "B")
grafo1.agregarAdyacentes("A", "C")
grafo1.agregarAdyacentes("B", "D")
grafo1.agregarAdyacentes("C", "D")

#imprimir grafo
print(grafo1.graf)
