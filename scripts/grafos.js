class Grafo {
  constructor() {
    this.vertices = new Set();
    this.aristas = new Set();
    this.adyacencia = {};
  }

  agregarVertice(vertice) {
    this.vertices.add(vertice);
  }

  agregarArista(vertice1, vertice2) {
    this.aristas.add([vertice1, vertice2]);
    this.actualizarAdyacencia(vertice1, vertice2);
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

  obtenerMatriz() {
    const vertices = Array.from(this.vertices);
    const matriz = [];

    for (let i = 0; i < vertices.length; i++) {
      matriz[i] = [];
      for (let j = 0; j < vertices.length; j++) {
        if (this.adyacencia[vertices[i]] && this.adyacencia[vertices[i]].includes(vertices[j])) {
          matriz[i][j] = 1;
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

grafo.agregarArista("A", "B");
grafo.agregarArista("A", "C");
grafo.agregarArista("B", "C");

const matriz = grafo.obtenerMatriz();
console.log(matriz);
