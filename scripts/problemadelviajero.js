//algoritmo1

class ColaPrioridad {
    constructor() {
        this.coleccion = [];
    }

    ponerEnCola(elemento) {
        if (this.estaVacia()) {
            this.coleccion.push(elemento);
        } else {
            let agregado = false;
            for (let i = 0; i < this.coleccion.length; i++) {
                if (elemento[1] < this.coleccion[i][1]) {
                    for (let j = this.coleccion.length - 1; j >= i; j--) {
                        this.coleccion[j + 1] = this.coleccion[j];
                    }
                    this.coleccion[i] = elemento;
                    agregado = true;
                    break;
                }
            }
            if (!agregado) {
                this.coleccion.push(elemento);
            }
        }
    }

    quitarDeLaCola() {
        const elementoRemovido = this.coleccion[0];
        for (let i = 0; i < this.coleccion.length - 1; i++) {
            this.coleccion[i] = this.coleccion[i + 1];
        }
        this.coleccion.length--;
        return elementoRemovido;
    }

    estaVacia() {
        return this.coleccion.length === 0;
    }
}

function dijkstra(grafo, inicio) {
    let distancias = {};
    for (let vertice in grafo) {
        distancias[vertice] = Infinity;
    }
    distancias[inicio] = 0;

    let colaprior = new ColaPrioridad();
    colaprior.ponerEnCola([inicio, 0]);

    while (!colaprior.estaVacia()) {
        let pasoMasCorto = colaprior.quitarDeLaCola();
        let nodoActual = pasoMasCorto[0];

        for (let vecino in grafo[nodoActual]) {
            let distanciaVecino = grafo[nodoActual][vecino];
            let distanciaTotal = distanciaVecino + pasoMasCorto[1];

            if (distanciaTotal < distancias[vecino]) {
                distancias[vecino] = distanciaTotal;
                colaprior.ponerEnCola([vecino, distanciaTotal]);
            }
        }
    }

    return distancias;
}

let grafo = {
    'A': { 'B': 1, 'C': 4 },
    'B': { 'A': 1, 'D': 2, 'E': 5 },
    'C': { 'A': 4, 'F': 1 },
    'D': { 'B': 2, 'E': 1 },
    'E': { 'B': 5, 'D': 1, 'F': 3 },
    'F': { 'C': 1, 'E': 3 }
};

console.log(dijkstra(grafo, prompt("ingresa que vertice quieres tener como inicial.")));