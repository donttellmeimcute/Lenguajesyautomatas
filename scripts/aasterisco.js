function calcularDistancia(nodoA, nodoB) {
    const dx = nodoA[0] - nodoB[0];
    const dy = nodoA[1] - nodoB[1];
    return Math.sqrt(dx * dx + dy * dy);
}

function aEstrella(grafico, inicio, objetivo) {
    const nodosEvaluados = new Set();
    const nodosPorEvaluar = new Set([inicio]);
    const padres = {};
    const costoHastaAhora = {};
    costoHastaAhora[inicio] = 0;

    while (nodosPorEvaluar.size > 0) {
        let nodoActual = null;
        let costoEstimado = Infinity;
        nodosPorEvaluar.forEach(nodo => {
            if (costoHastaAhora[nodo] + calcularDistancia(nodo, objetivo) < costoEstimado) {
                nodoActual = nodo;
                costoEstimado = costoHastaAhora[nodo] + calcularDistancia(nodo, objetivo);
            }
        });

        if (nodoActual === objetivo) {
            const camino = [objetivo];
            while (padres[camino[0]]) {
                camino.unshift(padres[camino[0]]);
            }
            return camino;
        }

        nodosPorEvaluar.delete(nodoActual);
        nodosEvaluados.add(nodoActual);

        for (let vecino in grafico[nodoActual]) {
            if (!nodosEvaluados.has(vecino)) {
                const nuevoCosto = costoHastaAhora[nodoActual] + grafico[nodoActual][vecino];
                if (!costoHastaAhora[vecino] || nuevoCosto < costoHastaAhora[vecino]) {
                    costoHastaAhora[vecino] = nuevoCosto;
                    padres[vecino] = nodoActual;
                    nodosPorEvaluar.add(vecino);
                }
            }
        }
    }

    return [];
}

const grafo = {
    'A': {'B': 5, 'C': 3},
    'B': {'A': 5, 'D': 4},
    'C': {'A': 3, 'D': 8},
    'D': {'B': 4, 'C': 8}
};

const camino = aEstrella(grafo, 'A', 'D');
console.log('Camino encontrado:', camino);
