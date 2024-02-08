class Grafo {
    constructor(vertices,aristas,adyacentes,pesos) {
      this.vertice = vertice;
      this.arista = arista;
      this.adyacente = adyacente;
      this.peso = peso;
      this.vertices = {}
      this.aristas = {}
      this.adyacentes = {}
      this.pesos = {}
  
    }
    añadirVertices(vertice)
    {
      this.vertice = vertice
      vertices[vertice]=0
      return vertices;
    }
    añadirAristas(arista)
    {
      this.arista = arista;
      aristas[arista]=[]
      return this.aristas
    }
    añadirAdyacentes(adyacente)
    {
      this.adyacente = adyacente
      adyacentes[adyacente]=[]
      return this.adyacentes
  
    }
    añadirPesos(peso)
    {
      this.peso = peso
      pesos[peso]=[]
      return this.pesos;
    }
    retornarAdyacentes(vertice) {
        return this.adyacentes[vertice] || [];
    }
  }
  
class Paroimpar {
    constructor(grafo) {
        this.grafo = grafo;
    }

    obtenerParesImpares() {
        const adyacentes = this.grafo.retornarAdyacentes(this.grafo.vertice);
        const cantidadAdyacentes = adyacentes.length;
        if(cantidadAdyacentes % 2 === 0)
        {
            return console.log("par")
        }
        else{
            return console.log("impar")
        }
    }
}