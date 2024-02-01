class Grafo {
  constructor() {
    this.vertices = new Set();
    this.aristas = new Map();
  }

  agregarVertice(vertice) {
    this.vertices.add(vertice);
  }

  agregarArista(vertice1, vertice2, peso) {
    if (!this.aristas.has(vertice1)) {
      this.aristas.set(vertice1, []);
    }
    if (!this.aristas.has(vertice2)) {
      this.aristas.set(vertice2, []);
    }
    this.aristas.get(vertice1).push({ vertice: vertice2, peso });
    this.aristas.get(vertice2).push({ vertice: vertice1, peso });
  }

  obtenerMatriz() {
    const vertices = Array.from(this.vertices);
    return vertices.map((v1, i) =>
      vertices.map((v2, j) =>
        this.aristas.get(v1)?.find(a => a.vertice === v2)?.peso || 0
      )
    );
  }
}

const grafo = new Grafo();
const cantidadVertices = prompt("Ingrese la cantidad de vértices:");

for (let i = 0; i < cantidadVertices; i++) {
  const vertice = prompt(`Ingrese el vértice ${i + 1}:`);
  grafo.agregarVertice(vertice);
}

const cantidadAristas = prompt("Ingrese la cantidad de aristas:");

for (let i = 0; i < cantidadAristas; i++) {
  const vertice1 = prompt(`Ingrese el vértice 1 de la arista ${i + 1}:`);
  const vertice2 = prompt(`Ingrese el vértice 2 de la arista ${i + 1}:`);
  const peso = prompt(`Ingrese el peso de la arista ${i + 1}:`);
  grafo.agregarArista(vertice1, vertice2, peso);
}

console.log(grafo.obtenerMatriz());