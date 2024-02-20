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
//4.- Definir la funcion
function caminocorto(grafo, inicio) {
    let distancias = {};
    let previos = {}; 
    //5.-definir distancias de los vertices
    for (let vertice in grafo) {
        distancias[vertice] = Infinity;
        previos[vertice] = null;
    }
    distancias[inicio] = 0;

    let colaprior = new ColaPrioridad();
    colaprior.ponerEnCola([inicio, 0]);

    while (!colaprior.estaVacia()) {
        let pasoMasCorto = colaprior.quitarDeLaCola();
        let nodoActual = pasoMasCorto[0];
//6.-checar los vecinos (nodo padre(de donde viene) , distancia )
        for (let vecino in grafo[nodoActual]) {
            let distanciaVecino = grafo[nodoActual][vecino];
            let distanciaTotal = distanciaVecino + pasoMasCorto[1];
//7.-comparacion distancias vecinos
            if (distanciaTotal < distancias[vecino]) {
                distancias[vecino] = distanciaTotal;
                previos[vecino] = nodoActual; 
                colaprior.ponerEnCola([vecino, distanciaTotal]);
            }
        }
    }
//8.-regresa la lista de distancia, padre
    return {distancias, previos}; 
}
//se hace hasta llegar al final

//imprimir camino
function reconstruirCamino(previos, inicio, fin) {
    let camino = [];
    let actual = fin;
    while (actual !== null) {
        camino.push(actual);
        actual = previos[actual];
    }
    return camino;
}
//1-definir grafo
let grafo = {
    'A': { 'E':1, 'B': 4, 'C':3 },
    'B': { 'A': 4, 'C': 7, 'D': 1 },
    'C': { 'A': 3, 'B': 7,'E':2,'D': 2},
    'D': { 'B': 1, 'C': 2, 'F':2 },
    'E': { 'A': 1, 'C': 2, 'F': 5 },
    'F': { 'D': 2, 'E':5 }
};
//2.definir inicio / final
let inicio = prompt("Ingresa qué vértice quieres tener como inicial.");
let fin = prompt("Ingresa qué vértice quieres tener como final.");
//3.-llamar funciones y mandar los parametros anteriores
let { distancias, previos } = caminocorto(grafo, inicio);
let camino = reconstruirCamino(previos, inicio, fin);
//imprimir las distancias y el camino
console.log("Distancias:", distancias);
console.log("Camino más corto:", camino);
