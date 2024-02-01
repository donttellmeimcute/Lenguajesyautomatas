class Grafo {
  constructor() {
    this.vertices = new Set();
    this.aristas = new Set();
    this.pesos = {};
  }

  aV(vertice) {
    this.vertices.add(vertice);
  }

  aA(vertice1, vertice2, peso) {
    this.aristas.add([vertice1, vertice2]);
    this.pesos[[vertice1, vertice2]] = peso;
  }

  obtenerVertices() {
    return Array.from(this.vertices);
  }

  obtenerAristas() {
    return Array.from(this.aristas);
  }

  obtenerPesos() {
    return this.pesos;
  }
}

const grafo = new Grafo();

grafo.aV("A");
grafo.aV("B");
grafo.aV("C");
grafo.aV("D");
grafo.aV("E");

grafo.aA("A", "B", 3);
grafo.aA("A", "C", 2);
grafo.aA("B", "C", 1);

document.write("Vértices:", grafo.obtenerVertices());
document.write("<br>")
document.write("Aristas:", grafo.obtenerAristas());
document.write("<br>")
console.log("Pesos:", grafo.obtenerPesos());
