function aEstrella(grafico, inicio, objetivo) {
    const nodosEvaluados = {};
    const nodosPorEvaluar = {};
    nodosPorEvaluar[inicio] = true;
    const padres = {};
    const costoHastaAhora = {};
    costoHastaAhora[inicio] = 0;

    while (true) {
        let nodoActual = null;
        let costoEstimado = Infinity;
        for (let nodo in nodosPorEvaluar) {
            if (costoHastaAhora[nodo] + calcularDistancia(nodo, objetivo) < costoEstimado) {
                nodoActual = nodo;
                costoEstimado = costoHastaAhora[nodo] + calcularDistancia(nodo, objetivo);
            }
        }

        if (nodoActual === null) {
            return []; // No hay camino
        }

        if (nodoActual === objetivo) {
            const caminoInverso = [];
            while (nodoActual) {
                caminoInverso.push(nodoActual);
                nodoActual = padres[nodoActual];
            }
            const camino = [];
            const longitud = caminoInverso.length;
            for (let i = longitud - 1; i >= 0; i--) {
                camino.push(caminoInverso[i]);
            }
            return camino;
        }

        delete nodosPorEvaluar[nodoActual];
        nodosEvaluados[nodoActual] = true;

        for (let vecino in grafico[nodoActual]) {
            if (!nodosEvaluados[vecino]) {
                const nuevoCosto = costoHastaAhora[nodoActual] + grafico[nodoActual][vecino];
                if (!costoHastaAhora[vecino] || nuevoCosto < costoHastaAhora[vecino]) {
                    costoHastaAhora[vecino] = nuevoCosto;
                    padres[vecino] = nodoActual;
                    nodosPorEvaluar[vecino] = true;
                }
            }
        }
    }
}

const grafo = {
    'A': {'B': 5, 'C': 3},
    'B': {'A': 5, 'D': 4},
    'C': {'A': 3, 'D': 8},
    'D': {'B': 4, 'C': 8}
};

const camino = aEstrella(grafo, 'A', 'D');
console.log('Camino encontrado:', camino);
