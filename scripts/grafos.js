class Grafo {
  constructor() {
    this.vertices = new Set();
    this.aristas = new Set();
    this.adyacencia = {};
    this.pesos = {};
  }

  agregarVertice(vertice) {
    this.vertices.add(vertice);
  }

  agregarArista(vertice1, vertice2, peso) {
    this.aristas.add([vertice1, vertice2]);
    this.actualizarAdyacencia(vertice1, vertice2);
    this.actualizarPesos(vertice1, vertice2, peso);
  }

  actualizarAdyacencia(vertice1, vertice2) {
    if (!this.adyacencia[vertice1]) {
      this.adyacencia[vertice1] = [];
    }
    if (!this.adyacencia[vertice2]) {
      this.adyacencia[vertice2] = [];
    }
    this.adyacencia[vertice1].push(vertice2);
    this.adyacencia[vertice2].push(vertice1);
  }

  actualizarPesos(vertice1, vertice2, peso) {
    const arista = [vertice1, vertice2].sort().join("-");
    this.pesos[arista] = peso;
  }

  obtenerMatriz() {
    const vertices = Array.from(this.vertices);
    const matriz = [];

    for (let i = 0; i < vertices.length; i++) {
      matriz[i] = [];
      for (let j = 0; j < vertices.length; j++) {
        if (this.adyacencia[vertices[i]] && this.adyacencia[vertices[i]].includes(vertices[j])) {
          const arista = [vertices[i], vertices[j]].sort().join("-");
          matriz[i][j] = this.pesos[arista] || 1;
        } else {
          matriz[i][j] = 0;
        }
      }
    }

    return matriz;
  }
}

const grafo = new Grafo();

grafo.agregarVertice("A");
grafo.agregarVertice("B");
grafo.agregarVertice("C");
grafo.agregarVertice("D");
grafo.agregarVertice("E");

grafo.agregarArista("A", "B", 2);
grafo.agregarArista("A", "C", 3);
grafo.agregarArista("B", "C", 1);

const matriz = grafo.obtenerMatriz();
console.log(matriz);
