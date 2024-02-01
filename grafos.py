class Grafo:
    def __init__(self):
        self.graf = {}
    def añadirVertice(self, vertice):
        self.graf[vertice] = []
        return self.graf
    def añadirAdyacentes(self, vertice, adyacente):
        for i in self.graf[vertice]:
            self.graf[vertice].append(adyacente)
